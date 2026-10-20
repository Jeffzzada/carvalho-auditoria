import { createLazyRoute } from "@tanstack/react-router";
import { StepsSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/como-funciona")({
  component: Page,
});

function Page() {
  return (
    <>
      <StepsSection as="h1" />
      <CtaBand />
    </>
  );
}
