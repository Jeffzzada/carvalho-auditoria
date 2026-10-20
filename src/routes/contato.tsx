import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageHead(
      "Contato | Carvalho Soluções em Auditoria",
      "Fale com a Carvalho Soluções em Auditoria pelo WhatsApp e apresente a necessidade patrimonial da sua organização.",
    ),
});
