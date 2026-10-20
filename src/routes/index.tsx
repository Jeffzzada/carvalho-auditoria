import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Carvalho Soluções em Auditoria | Auditoria de Ativo Imobilizado",
      "Conheça os serviços da Carvalho Soluções em Auditoria relacionados à auditoria de ativo imobilizado, levantamento físico patrimonial e conciliação físico-contábil.",
    ),
});
