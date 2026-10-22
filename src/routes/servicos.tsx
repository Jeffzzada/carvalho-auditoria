import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () =>
    pageHead(
      "Serviços | Carvalho Soluções em Auditoria",
      "Auditoria de Sistemas e TI, Financeira e Contábil, Fiscal e Tributária e Ambiental: frentes de atuação e benefícios potenciais, conforme o escopo contratado.",
    ),
});
