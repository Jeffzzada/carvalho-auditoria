import { createLazyRoute } from "@tanstack/react-router";
import { SegmentsSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/segmentos")({
  component: Page,
});

function Page() {
  return (
    <>
      <SegmentsSection as="h1" />
      <CtaBand />
    </>
  );
}
