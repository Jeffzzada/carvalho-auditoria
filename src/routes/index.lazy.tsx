import { createLazyRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.webp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { AboutSection, ServicesSection, DifferentialsSection, SegmentsSection, StepsSection, FaqSection, CtaBand } from "@/components/site/Sections";

export const Route = createLazyRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div className="animate-rise">
            <p className="eyebrow">Auditoria de ativo imobilizado</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Mais controle patrimonial. <span className="text-primary">Mais confiabilidade</span> para sua empresa.
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Carvalho Soluções em Auditoria oferece serviços especializados em auditoria de ativo imobilizado, contribuindo para a verificação dos bens, a conciliação das informações patrimoniais e o aprimoramento dos controles internos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/servicos" className="btn btn-primary">
                Conheça nossos serviços <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppButton variant="outline" />
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Para empresas privadas, indústrias, instituições e órgãos públicos.</p>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent" aria-hidden />
            <img src={heroImg} alt="Instalação industrial com equipamentos identificados por etiquetas patrimoniais" width={1200} height={1408} className="aspect-[4/5] max-h-[560px] w-full rounded-2xl object-cover shadow-elegant" fetchPriority="high" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-background/95 p-5 shadow-soft sm:left-auto sm:w-72" aria-hidden>
              <p className="eyebrow text-[10px]">Conciliação físico-contábil</p>
              <ul className="mt-3 space-y-2 text-sm">
                {["Verificação física", "Registros contábeis", "Apontamentos"].map((t, i) => (
                  <li key={t} className="flex items-center justify-between">
                    <span className="text-foreground">{t}</span>
                    <span className="h-1.5 rounded-full bg-primary" style={{ width: `${70 - i * 18}px`, opacity: 1 - i * 0.25 }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <SegmentsSection />
      <StepsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
