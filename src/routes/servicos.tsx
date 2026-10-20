import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () =>
    pageHead(
      "Serviços de Auditoria Patrimonial | Carvalho Soluções em Auditoria",
      "Levantamento físico patrimonial, conciliação físico-contábil, análise cadastral e apoio ao controle patrimonial do ativo imobilizado.",
    ),
});
