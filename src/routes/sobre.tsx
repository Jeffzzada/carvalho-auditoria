import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead(
      "Sobre nós | Carvalho Soluções em Auditoria",
      "Conheça a Carvalho Soluções em Auditoria: missão, visão e valores de uma empresa voltada à transparência, aos bons controles e à melhoria dos processos organizacionais.",
    ),
});
