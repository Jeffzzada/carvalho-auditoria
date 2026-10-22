import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Carvalho Soluções em Auditoria | Auditoria e avaliação de controles",
      "Soluções de auditoria em sistemas e TI, financeira e contábil, fiscal e tributária e ambiental, conforme o escopo contratado.",
    ),
});
