import { getService, type ServiceId } from "@/lib/content";
import { ORIGEM_OUTRO, SUBOPCOES, TIPO_FIELDS } from "@/lib/atendimento/options";
import { buildTeamSummary, suggestArea } from "@/lib/atendimento/summary";
import { hasErrors, isIndicacao, isPublico, validateAll } from "@/lib/atendimento/validation";
import { emptyAnswers, type Answers } from "@/lib/atendimento/types";

/**
 * Recebimento das solicitações de Atendimento (somente servidor).
 *
 * Variáveis de ambiente necessárias (nunca prefixe com VITE_):
 *   SUPABASE_URL                 URL do projeto Supabase
 *   SUPABASE_SERVICE_ROLE_KEY    chave service_role (apenas no servidor)
 *   RESEND_API_KEY               chave da API do Resend (envio do e-mail de notificação)
 *   NOTIFY_EMAIL_TO              e-mail que recebe os avisos (separe vários por vírgula)
 *   NOTIFY_EMAIL_FROM            remetente verificado no Resend, ex.: "Site <avisos@seudominio.com.br>"
 */

export type SubmitResult =
  | { status: 200; body: { ok: true; notified: boolean } }
  | { status: 400 | 403 | 413 | 429 | 500 | 502 | 503; body: { ok: false; error: string } };

const MAX_BODY_BYTES = 40_000;
const MAX_STRING_LEN = 2000;
const MAX_ARRAY_ITEM_LEN = 200;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

const ipBuckets = new Map<string, number[]>();

export function resetAtendimentoRateLimit() {
  ipBuckets.clear();
}

function checkRateLimit(request: Request): boolean {
  const forwarded =
    request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  if (!ip) return true;
  const now = Date.now();
  const recent = (ipBuckets.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipBuckets.set(ip, recent);
    return false;
  }
  recent.push(now);
  ipBuckets.set(ip, recent);
  return true;
}

function isSameOriginRequest(request: Request): boolean {
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (secFetchSite && secFetchSite === "cross-site") return false;
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originUrl = new URL(origin);
      const requestUrl = new URL(request.url);
      if (originUrl.host !== requestUrl.host) return false;
    } catch {
      return false;
    }
  }
  return true;
}

async function readBoundedText(request: Request, maxBytes: number): Promise<string | null> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > maxBytes) return null;

  if (!request.body) {
    const text = await request.text();
    return new TextEncoder().encode(text).byteLength > maxBytes ? null : text;
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        totalBytes += value.byteLength;
        if (totalBytes > maxBytes) {
          await reader.cancel().catch(() => undefined);
          return null;
        }
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }

  const merged = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

const env = (key: string) =>
  (typeof process !== "undefined" ? process.env[key] : undefined)?.trim() || undefined;

function pick<T extends object>(input: unknown, base: T): T {
  const output = { ...base } as Record<string, unknown>;
  if (!input || typeof input !== "object") return base;
  const source = input as Record<string, unknown>;
  for (const key of Object.keys(base)) {
    const rawValue = source[key];
    const defaultValue = (base as Record<string, unknown>)[key];
    if (typeof defaultValue === "string" && typeof rawValue === "string") {
      output[key] = rawValue.slice(0, MAX_STRING_LEN);
    } else if (typeof defaultValue === "boolean" && typeof rawValue === "boolean") {
      output[key] = rawValue;
    } else if (Array.isArray(defaultValue) && Array.isArray(rawValue)) {
      output[key] = rawValue
        .filter((item): item is string => typeof item === "string")
        .slice(0, 20)
        .map((item) => item.slice(0, MAX_ARRAY_ITEM_LEN));
    } else if (
      defaultValue &&
      typeof defaultValue === "object" &&
      !Array.isArray(defaultValue) &&
      rawValue &&
      typeof rawValue === "object"
    ) {
      const sanitizedRecord: Record<string, unknown> = {};
      for (const [entryKey, entryValue] of Object.entries(
        rawValue as Record<string, unknown>,
      ).slice(0, 20)) {
        const safeKey = entryKey.slice(0, 40);
        if (typeof entryValue === "string") {
          sanitizedRecord[safeKey] = entryValue.slice(0, MAX_STRING_LEN);
        } else if (Array.isArray(entryValue)) {
          sanitizedRecord[safeKey] = entryValue
            .filter((item): item is string => typeof item === "string")
            .slice(0, 20)
            .map((item) => item.slice(0, MAX_ARRAY_ITEM_LEN));
        }
      }
      output[key] = sanitizedRecord;
    }
  }
  return output as T;
}

function sanitize(raw: unknown): Answers {
  const sanitized = pick(raw, emptyAnswers);
  sanitized.servicos = sanitized.servicos.filter((id): id is ServiceId => Boolean(getService(id)));
  if (sanitized.servicoIndefinido) {
    sanitized.servicos = [];
  }

  const validSubopcoes: Partial<Record<ServiceId, string[]>> = {};
  const validSubopcaoOutra: Partial<Record<ServiceId, string>> = {};
  for (const serviceId of sanitized.servicos) {
    const allowedOptions = SUBOPCOES[serviceId] ?? [];
    const selectedOptions = (sanitized.subopcoes[serviceId] ?? []).filter((opt) =>
      allowedOptions.includes(opt),
    );
    if (selectedOptions.length > 0) {
      validSubopcoes[serviceId] = selectedOptions;
    }
    if (selectedOptions.includes("Outra") && sanitized.subopcaoOutra[serviceId]) {
      validSubopcaoOutra[serviceId] = sanitized.subopcaoOutra[serviceId]!.slice(0, 200);
    }
  }
  sanitized.subopcoes = validSubopcoes;
  sanitized.subopcaoOutra = validSubopcaoOutra;

  if (sanitized.servicos.length <= 1) {
    sanitized.necessidadeIntegrada = "";
  }

  const allowedTipoKeys = new Set((TIPO_FIELDS[sanitized.tipo] ?? []).map((field) => field.key));
  const validTipoDetalhes: Record<string, string> = {};
  for (const [key, val] of Object.entries(sanitized.tipoDetalhes)) {
    if (allowedTipoKeys.has(key) && typeof val === "string") {
      validTipoDetalhes[key] = val;
    }
  }
  sanitized.tipoDetalhes = validTipoDetalhes;

  if (isPublico(sanitized.porte)) {
    sanitized.regime = "";
  } else {
    sanitized.naturezaEntidade = "";
    sanitized.necessidadeSetorPublico = "";
  }

  if (sanitized.origem !== ORIGEM_OUTRO) {
    sanitized.origemDetalhe = "";
  }
  if (!isIndicacao(sanitized.origem)) {
    sanitized.indicadoPor = "";
  }

  return sanitized;
}

const stripCrLf = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

async function notify(summary: string, answers: Answers, area: string): Promise<boolean> {
  const key = env("RESEND_API_KEY");
  const to = env("NOTIFY_EMAIL_TO");
  const from = env("NOTIFY_EMAIL_FROM");
  if (!key || !to || !from) return false;
  const safeOrg = stripCrLf(answers.organizacao).slice(0, 120);
  const safeArea = stripCrLf(area).slice(0, 120);
  const safeReplyTo = stripCrLf(answers.email);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to
          .split(",")
          .map((recipient) => recipient.trim())
          .filter(Boolean),
        reply_to: safeReplyTo,
        subject: `Nova solicitação de atendimento: ${safeOrg} (${safeArea})`,
        text: summary,
      }),
    });
    if (!res.ok)
      console.error("Falha ao enviar e-mail de notificação", res.status, await res.text());
    return res.ok;
  } catch (error) {
    console.error("Erro ao enviar e-mail de notificação", error);
    return false;
  }
}

export async function handleAtendimentoSubmission(request: Request): Promise<SubmitResult> {
  if (!isSameOriginRequest(request)) {
    return { status: 403, body: { ok: false, error: "origem_invalida" } };
  }

  if (!checkRateLimit(request)) {
    return { status: 429, body: { ok: false, error: "muitas_tentativas" } };
  }

  const supabaseUrl = env("SUPABASE_URL");
  const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) {
    console.error("Atendimento: SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY não configuradas.");
    return { status: 503, body: { ok: false, error: "nao_configurado" } };
  }

  const text = await readBoundedText(request, MAX_BODY_BYTES);
  if (text === null) {
    return { status: 413, body: { ok: false, error: "muito_grande" } };
  }

  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return { status: 400, body: { ok: false, error: "json_invalido" } };
  }
  const body = (json ?? {}) as {
    clientSubmissionId?: unknown;
    answers?: unknown;
    website?: unknown;
  };

  // Honeypot: robôs preenchem; resposta neutra, sem gravar nada.
  if (typeof body.website === "string" && body.website.trim())
    return { status: 400, body: { ok: false, error: "rejeitado" } };

  const submissionId = typeof body.clientSubmissionId === "string" ? body.clientSubmissionId : "";
  if (!/^[0-9a-f-]{16,64}$/i.test(submissionId))
    return { status: 400, body: { ok: false, error: "id_invalido" } };

  const answers = sanitize(body.answers);
  if (hasErrors(validateAll(answers)))
    return { status: 400, body: { ok: false, error: "dados_invalidos" } };

  const area = suggestArea(answers);
  const summary = buildTeamSummary(answers);
  const areaLabel = area.areas.length ? area.areas.join(", ") : "a definir";

  try {
    const res = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/solicitacoes_atendimento`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        client_submission_id: submissionId,
        nome: answers.nome.trim(),
        organizacao: answers.organizacao.trim(),
        email: answers.email.trim(),
        telefone: answers.telefone.trim(),
        origem_contato: answers.origem || null,
        servicos_interesse: answers.servicos,
        tipo_atendimento: answers.tipo || null,
        area_sugerida: areaLabel,
        consentimento_privacidade: answers.consentimentoPrivacidade,
        consentimento_marketing: answers.consentimentoMarketing,
        resumo: summary,
        respostas: answers,
      }),
    });

    // 409 = mesmo envio repetido (duplicado): já está registrado.
    if (res.status === 409) return { status: 200, body: { ok: true, notified: true } };
    if (!res.ok) {
      console.error("Atendimento: falha ao gravar no Supabase", res.status, await res.text());
      return { status: 502, body: { ok: false, error: "falha_ao_registrar" } };
    }
  } catch (error) {
    console.error("Atendimento: erro de rede ao gravar no Supabase", error);
    return { status: 502, body: { ok: false, error: "falha_ao_registrar" } };
  }

  const notified = await notify(summary, answers, areaLabel);
  if (!notified)
    console.error(
      "Atendimento: solicitação registrada, mas a equipe NÃO foi notificada por e-mail (verifique RESEND_*/NOTIFY_*).",
    );
  return { status: 200, body: { ok: true, notified } };
}
