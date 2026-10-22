import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () =>
    pageHead(
      "Aviso de Privacidade | Carvalho Soluções em Auditoria",
      "Como a Carvalho Soluções em Auditoria trata os dados pessoais informados no assistente de Atendimento e nos canais de contato.",
    ),
});
