import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () =>
    pageHead(
      "Perguntas Frequentes | Carvalho Soluções em Auditoria",
      "Tire dúvidas sobre auditoria de ativo imobilizado, levantamento físico e conciliação físico-contábil.",
    ),
});
