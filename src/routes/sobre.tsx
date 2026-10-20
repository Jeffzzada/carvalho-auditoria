import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead(
      "Sobre | Carvalho Soluções em Auditoria",
      "Conheça a Carvalho Soluções em Auditoria: missão, visão e valores, e conhecimento técnico aplicado à gestão patrimonial e ao controle do ativo imobilizado.",
    ),
});
