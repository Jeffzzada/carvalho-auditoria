import { createLazyRoute } from "@tanstack/react-router";
import { ServicesDetails, DifferentialsSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/servicos")({
  component: Page,
});

function Page() {
  return (
    <>
      <ServicesDetails />
      <DifferentialsSection />
      <CtaBand />
    </>
  );
}
