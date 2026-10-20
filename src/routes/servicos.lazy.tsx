import { createLazyRoute } from "@tanstack/react-router";
import { ServicesSection, DifferentialsSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/servicos")({
  component: Page,
});

function Page() {
  return (
    <>
      <ServicesSection as="h1" />
      <DifferentialsSection />
      <CtaBand />
    </>
  );
}
