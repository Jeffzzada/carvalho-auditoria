import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos")({
  head: () =>
    pageHead(
      "Segmentos Atendidos | Carvalho Soluções em Auditoria",
      "Soluções de auditoria e avaliação de controles para empresas privadas e organizações públicas, conforme o escopo contratado.",
    ),
});
