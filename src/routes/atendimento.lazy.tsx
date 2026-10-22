import { createLazyRoute } from "@tanstack/react-router";
import { Wizard } from "@/components/atendimento/Wizard";

export const Route = createLazyRoute("/atendimento")({
  component: Page,
});

function Page() {
  const { servico } = Route.useSearch();
  return (
    <section className="section">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Atendimento</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solicite um atendimento
          </h1>
          <div className="gold-rule mt-5" />
          <Wizard initialService={servico} />
        </div>
      </div>
    </section>
  );
}
