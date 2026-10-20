import { createLazyRoute } from "@tanstack/react-router";
import { FaqSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/perguntas-frequentes")({
  component: Page,
});

function Page() {
  return (
    <>
      <FaqSection as="h1" />
      <CtaBand />
    </>
  );
}
