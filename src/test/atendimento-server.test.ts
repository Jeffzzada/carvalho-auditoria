import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  handleAtendimentoSubmission,
  resetAtendimentoRateLimit,
} from "@/lib/server/atendimento.server";
import { emptyAnswers } from "@/lib/atendimento/types";

const answers = {
  ...emptyAnswers,
  nome: "Maria Silva",
  organizacao: "Empresa Teste",
  telefone: "(71) 98450-1050",
  email: "maria@empresa.com.br",
  cidade: "Salvador",
  estado: "BA",
  servicos: ["fiscal"],
  tipo: "Diagnóstico inicial",
  descricao: "Quero avaliar riscos tributários.",
  consentimentoPrivacidade: true,
};

const req = (body: unknown, headers?: HeadersInit) =>
  new Request("http://x/api/atendimento", {
    method: "POST",
    body: JSON.stringify(body),
    ...(headers ? { headers } : {}),
  });
const ok = { clientSubmissionId: "123e4567-e89b-12d3-a456-426614174000", answers, website: "" };

describe("Recebimento de solicitações (servidor)", () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    resetAtendimentoRateLimit();
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("sem configuração do banco, falha com 503 e não finge sucesso", async () => {
    vi.stubEnv("SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
    const r = await handleAtendimentoSubmission(req(ok));
    expect(r.status).toBe(503);
    expect(r.body.ok).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  describe("configurado", () => {
    beforeEach(() => {
      vi.stubEnv("SUPABASE_URL", "https://proj.supabase.co");
      vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "service-key");
      vi.stubEnv("RESEND_API_KEY", "");
      vi.stubEnv("NOTIFY_EMAIL_TO", "");
      vi.stubEnv("NOTIFY_EMAIL_FROM", "");
    });

    it("grava no Supabase e só então confirma", async () => {
      fetchMock.mockResolvedValueOnce(new Response(null, { status: 201 }));
      const r = await handleAtendimentoSubmission(req(ok));
      expect(r.status).toBe(200);
      expect(r.body).toEqual({ ok: true, notified: false });
      const [url, init] = fetchMock.mock.calls[0]!;
      expect(url).toBe("https://proj.supabase.co/rest/v1/solicitacoes_atendimento");
      expect(JSON.parse((init as RequestInit).body as string).client_submission_id).toBe(
        ok.clientSubmissionId,
      );
    });

    it("envia e-mail de notificação quando Resend está configurado e limpa CRLF no assunto", async () => {
      vi.stubEnv("RESEND_API_KEY", "re_key");
      vi.stubEnv("NOTIFY_EMAIL_TO", "equipe@exemplo.com");
      vi.stubEnv("NOTIFY_EMAIL_FROM", "Site <avisos@exemplo.com>");
      fetchMock
        .mockResolvedValueOnce(new Response(null, { status: 201 }))
        .mockResolvedValueOnce(new Response("{}", { status: 200 }));
      const r = await handleAtendimentoSubmission(
        req({
          ...ok,
          answers: { ...answers, organizacao: "Empresa\r\nBcc: hacker@evil.com" },
        }),
      );
      expect(r.body).toEqual({ ok: true, notified: true });
      expect(fetchMock.mock.calls[1]![0]).toBe("https://api.resend.com/emails");
      const emailPayload = JSON.parse((fetchMock.mock.calls[1]![1] as RequestInit).body as string);
      expect(emailPayload.subject).not.toMatch(/[\r\n]/);
    });

    it("falha de gravação retorna erro (502)", async () => {
      fetchMock.mockResolvedValueOnce(new Response("erro", { status: 500 }));
      const r = await handleAtendimentoSubmission(req(ok));
      expect(r.status).toBe(502);
      expect(r.body.ok).toBe(false);
    });

    it("envio repetido (409) não duplica e é tratado como já registrado", async () => {
      fetchMock.mockResolvedValueOnce(new Response("duplicate", { status: 409 }));
      const r = await handleAtendimentoSubmission(req(ok));
      expect(r.status).toBe(200);
    });

    it("rejeita honeypot preenchido, dados inválidos e corpo gigante sem gravar", async () => {
      expect((await handleAtendimentoSubmission(req({ ...ok, website: "spam" }))).status).toBe(400);
      expect(
        (await handleAtendimentoSubmission(req({ ...ok, answers: { ...answers, email: "x" } })))
          .status,
      ).toBe(400);
      expect(
        (
          await handleAtendimentoSubmission(
            req({ ...ok, answers: { ...answers, consentimentoPrivacidade: false } }),
          )
        ).status,
      ).toBe(400);
      expect(
        (
          await handleAtendimentoSubmission(
            req({ ...ok, answers: { ...answers, descricao: "x".repeat(50_000) } }),
          )
        ).status,
      ).toBe(413);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it("rejeita requisições cross-origin (CSRF) e aplica rate limit por IP", async () => {
      expect(
        (await handleAtendimentoSubmission(req(ok, { origin: "https://evil.example.com" }))).status,
      ).toBe(403);
      expect(
        (await handleAtendimentoSubmission(req(ok, { "sec-fetch-site": "cross-site" }))).status,
      ).toBe(403);

      for (let i = 0; i < 10; i++) {
        fetchMock.mockResolvedValueOnce(new Response(null, { status: 201 }));
        const res = await handleAtendimentoSubmission(
          req(ok, { "x-forwarded-for": "203.0.113.10" }),
        );
        expect(res.status).toBe(200);
      }
      const blocked = await handleAtendimentoSubmission(
        req(ok, { "x-forwarded-for": "203.0.113.10" }),
      );
      expect(blocked.status).toBe(429);
    });
  });
});
