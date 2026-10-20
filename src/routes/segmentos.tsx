import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos")({
  head: () =>
    pageHead(
      "Segmentos Atendidos | Carvalho Soluções em Auditoria",
      "Serviços de verificação de bens e controle patrimonial para empresas privadas e organizações públicas.",
    ),
});
