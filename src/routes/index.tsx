import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Teste de atualização",
      "Soluções de auditoria em sistemas e TI, financeira e contábil, fiscal e tributária e ambiental, conforme o escopo contratado.",
      
    ),
});
