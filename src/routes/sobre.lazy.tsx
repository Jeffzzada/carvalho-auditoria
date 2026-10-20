import { createLazyRoute } from "@tanstack/react-router";
import { AboutSection, MissionVisionSection, ValuesGridSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/sobre")({
  component: Page,
});

function Page() {
  return (
    <>
      <AboutSection as="h1" />
      <MissionVisionSection />
      <ValuesGridSection />
      <CtaBand />
    </>
  );
}
