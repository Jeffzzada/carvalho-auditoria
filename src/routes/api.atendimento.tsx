import { createFileRoute } from "@tanstack/react-router";

/** Recebe as solicitações do assistente de Atendimento. A lógica fica em src/lib/server (somente servidor). */
export const Route = createFileRoute("/api/atendimento")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const { handleAtendimentoSubmission } = await import("@/lib/server/atendimento.server");
        const result = await handleAtendimentoSubmission(request);
        return Response.json(result.body, {
          status: result.status,
          headers: { "Cache-Control": "no-store" },
        });
      },
    },
  },
});
