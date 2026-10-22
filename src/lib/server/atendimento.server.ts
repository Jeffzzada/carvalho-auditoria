import { getService } from "@/lib/content";
import { buildTeamSummary, suggestArea } from "@/lib/atendimento/summary";
import { hasErrors, validateAll } from "@/lib/atendimento/validation";
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
  | { status: 400 | 413 | 500 | 502 | 503; body: { ok: false; error: string } };

const MAX_BODY_BYTES = 40_000;
const env = (k: string) =>
  (typeof process !== "undefined" ? process.env[k] : undefined)?.trim() || undefined;

function pick<T extends object>(input: unknown, base: T): T {
  const out = { ...base } as Record<string, unknown>;
  if (!input || typeof input !== "object") return base;
  const src = input as Record<string, unknown>;
  for (const key of Object.keys(base)) {
    const v = src[key];
    const b = (base as Record<string, unknown>)[key];
    if (typeof b === "string" && typeof v === "string") out[key] = v.slice(0, 2000);
    else if (typeof b === "boolean" && typeof v === "boolean") out[key] = v;
    else if (Array.isArray(b) && Array.isArray(v))
      out[key] = v.filter((x) => typeof x === "string").slice(0, 20);
    else if (b && typeof b === "object" && !Array.isArray(b) && v && typeof v === "object") {
      const rec: Record<string, unknown> = {};
      for (const [k2, v2] of Object.entries(v as Record<string, unknown>).slice(0, 20)) {
        if (typeof v2 === "string") rec[k2.slice(0, 40)] = v2.slice(0, 2000);
        else if (Array.isArray(v2))
          rec[k2.slice(0, 40)] = v2.filter((x) => typeof x === "string").slice(0, 20);
      }
      out[key] = rec;
    }
  }
  return out as T;
}

function sanitize(raw: unknown): Answers {
  const a = pick(raw, emptyAnswers);
  a.servicos = a.servicos.filter((id) => getService(id));
  return a;
}

async function notify(summary: string, a: Answers, area: string): Promise<boolean> {
  const key = env("RESEND_API_KEY");
  const to = env("NOTIFY_EMAIL_TO");
  const from = env("NOTIFY_EMAIL_FROM");
  if (!key || !to || !from) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        reply_to: a.email,
        subject: `Nova solicitação de atendimento: ${a.organizacao.trim()} (${area})`,
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
  const supabaseUrl = env("SUPABASE_URL");
  const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) {
    console.error("Atendimento: SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY não configuradas.");
    return { status: 503, body: { ok: false, error: "nao_configurado" } };
  }

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES)
    return { status: 413, body: { ok: false, error: "muito_grande" } };

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
