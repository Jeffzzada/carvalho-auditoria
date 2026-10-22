import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { getService, type ServiceId } from "@/lib/content";

export const Route = createFileRoute("/atendimento")({
  validateSearch: (search: Record<string, unknown>): { servico?: ServiceId } => {
    const id = typeof search["servico"] === "string" ? getService(search["servico"]) : undefined;
    return id ? { servico: id.id } : {};
  },
  head: () =>
    pageHead(
      "Atendimento | Carvalho Soluções em Auditoria",
      "Responda a algumas perguntas rápidas para direcionarmos sua solicitação à solução mais adequada: sistemas e TI, financeira e contábil, fiscal e tributária ou ambiental.",
    ),
});
