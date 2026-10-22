import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/como-funciona")({
  head: () =>
    pageHead(
      "Como Funciona | Carvalho Soluções em Auditoria",
      "Do primeiro contato à entrega dos resultados: entenda as etapas do atendimento da Carvalho Soluções em Auditoria.",
    ),
});
