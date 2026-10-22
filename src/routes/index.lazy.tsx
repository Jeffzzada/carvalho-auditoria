import { createLazyRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.webp";
import { services } from "@/lib/content";
import {
  ServicesHighlight,
  DifferentialsSection,
  SegmentsSection,
  FaqSection,
  CtaBand,
} from "@/components/site/Sections";

export const Route = createLazyRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div className="animate-rise">
            <p className="eyebrow">Auditoria e avaliação de controles</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Mais transparência nos processos. <span className="text-primary">Mais clareza</span>{" "}
              para decidir.
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Carvalho Soluções em Auditoria oferece soluções de auditoria e avaliação de
              controles que contribuem para a transparência, a conformidade e a melhoria dos
              processos organizacionais, conforme o escopo contratado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/servicos" className="btn btn-primary">
                Conheça nossas soluções <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/atendimento" className="btn btn-outline">
                Solicite um atendimento
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Para empresas privadas, indústrias, instituições e órgãos públicos.
            </p>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent" aria-hidden />
            <img
              src={heroImg}
              alt="Instalação industrial com equipamentos identificados"
              width={1200}
              height={1408}
              className="aspect-[4/5] max-h-[560px] w-full rounded-2xl object-cover shadow-elegant"
              fetchPriority="high"
              decoding="async"
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-background/95 p-5 shadow-soft sm:left-auto sm:w-72"
              aria-hidden
            >
              <p className="eyebrow text-[10px]">Áreas de atuação</p>
              <ul className="mt-3 space-y-2 text-sm">
                {services.map((s, i) => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span className="text-foreground">{s.shortTitle}</span>
                    <span
                      className="h-1.5 w-16 origin-right rounded-full bg-primary"
                      style={{ transform: `scaleX(${1 - i * 0.18})`, opacity: 1 - i * 0.15 }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ServicesHighlight />
      <DifferentialsSection />
      <SegmentsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
