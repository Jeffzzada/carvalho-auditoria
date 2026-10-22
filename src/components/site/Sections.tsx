import { memo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, ChevronDown, Target, Eye, Info } from "lucide-react";
import {
  services,
  differentials,
  steps,
  faqs,
  mission,
  vision,
  coreValues,
  segments,
  type Service,
} from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import privateImg from "@/assets/segment-private.webp";
import publicImg from "@/assets/segment-public.webp";

export function SectionHeader({
  eyebrow,
  title,
  text,
  as,
  center,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  as?: "h1" | "h2" | undefined;
  center?: boolean;
}) {
  const H = as ?? "h2";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <H className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </H>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function AboutSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="animate-rise">
          <SectionHeader
            as={as}
            eyebrow="Sobre a empresa"
            title="Conhecimento técnico a serviço da transparência e dos bons controles."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Carvalho Soluções em Auditoria atua na prestação de serviços de auditoria e
              avaliação de controles, com foco na análise das informações, na identificação de
              riscos e fragilidades e no aprimoramento dos processos organizacionais, conforme o
              escopo contratado.
            </p>
            <p>
              Nosso trabalho busca contribuir para a organização, o aprimoramento dos controles
              internos e a confiabilidade das informações utilizadas na gestão das organizações
              públicas e privadas.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-8 sm:p-10">
          <h3 className="font-display text-lg font-semibold text-foreground">Áreas de atuação</h3>
          <div className="gold-rule mt-3" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.id} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-medium text-foreground">{s.shortTitle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  const cards = [
    { icon: Target, title: mission.title, text: mission.text },
    { icon: Eye, title: vision.title, text: vision.text },
  ];
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Missão e visão"
          title="O que nos move e aonde queremos chegar."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="animate-rise rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/15 text-primary">
                <c.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                {c.title}
              </h3>
              <div className="gold-rule mt-3" />
              <p className="mt-4 leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesGridSection() {
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeader eyebrow="Valores" title="Os princípios que orientam cada trabalho." center />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v) => (
            <li key={v.title} className="card-service animate-rise">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const HighlightCard = memo(function HighlightCard({ s }: { s: Service }) {
  return (
    <article className="card-service group">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{s.title}</h3>
      <p className="mt-3 flex-1 text-muted-foreground">{s.objective}</p>
      <div className="mt-6 flex flex-col gap-2">
        <Link
          to="/servicos"
          hash={s.id}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Ver frentes de atuação <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
});

/** Destaque dos 4 serviços (Início). */
export function ServicesHighlight() {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeader
          eyebrow="Serviços"
          title="Quatro soluções para fortalecer controles e processos."
          text="Procedimentos voltados à avaliação de riscos, controles e informações, conforme as necessidades e o escopo de cada contratação."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <HighlightCard key={s.id} s={s} />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/servicos" className="btn btn-primary">
            Conheça nossas soluções <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/atendimento" className="btn btn-outline">
            Solicite um atendimento
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Página Serviços: cada serviço em sua própria seção, com CTA que leva ao Atendimento já pré-selecionado. */
export function ServicesDetails() {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeader
          as="h1"
          eyebrow="Serviços"
          title="Soluções em auditoria e avaliação de controles."
          text="Os serviços são definidos individualmente conforme a necessidade e o escopo acordado em cada contratação."
        />
        <nav aria-label="Serviços" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-lilac hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <s.icon className="h-4 w-4 text-primary" aria-hidden /> {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-12 space-y-8">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/15 text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-muted-foreground">{s.objective}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Frentes de atuação
                  </h3>
                  <div className="gold-rule mt-2" />
                  <ul className="mt-4 space-y-2.5">
                    {s.fronts.map((f) => (
                      <li key={f} className="flex gap-3 text-muted-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Benefícios potenciais
                  </h3>
                  <div className="gold-rule mt-2" />
                  <ul className="mt-4 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-muted-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {s.profiles && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-foreground">Perfis atendidos</h3>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {s.profiles.map((p) => (
                          <li
                            key={p}
                            className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Respeitamos as particularidades de cada regime.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {s.notice && (
                <p className="mt-8 flex gap-3 rounded-lg bg-surface p-4 text-sm text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{s.notice}</span>
                </p>
              )}

              <div className="mt-8">
                <Link to="/atendimento" search={{ servico: s.id }} className="btn btn-primary">
                  {s.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Todos os serviços são prestados conforme o escopo contratado.
        </p>
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  return (
    <section className="section bg-deep text-primary-foreground">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <p className="eyebrow text-gold">Diferenciais</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Uma abordagem técnica para decisões mais bem fundamentadas.
          </h2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/10 sm:grid-cols-2">
          {differentials.map((d, i) => (
            <li key={d} className="bg-deep p-6">
              <span className="font-display text-sm font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-primary-foreground/90">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SegmentsSection({ as }: { as?: "h1" | "h2" | undefined }) {
  const items = [
    { ...segments[0]!, img: privateImg, alt: "Fachada de edifício corporativo moderno" },
    { ...segments[1]!, img: publicImg, alt: "Fachada de edifício institucional com colunas" },
  ];
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeader
          as={as}
          eyebrow="Segmentos atendidos"
          title="Atendimento para organizações públicas e privadas."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground">{it.title}</h3>
                <p className="mt-3 text-muted-foreground">{it.text}</p>
                <Link to="/atendimento" className="btn btn-outline mt-6">
                  Solicitar atendimento
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeader
          as={as}
          eyebrow="Como funciona"
          title="Do primeiro contato à entrega dos resultados."
        />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-primary/20 md:block"
          />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground ring-8 ring-surface">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/atendimento" className="btn btn-primary">
            Solicite um atendimento
          </Link>
          <WhatsAppButton label="Falar pelo WhatsApp" variant="outline" />
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left font-display text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {q}
          <ChevronDown
            aria-hidden
            className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p
            className={`pb-5 text-muted-foreground transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeader
          as={as}
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns sobre os nossos serviços."
        />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} id={`faq-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section-sm">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-brand p-8 text-primary-foreground sm:p-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Vamos conversar sobre a necessidade da sua organização?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Responda a algumas perguntas rápidas ou fale diretamente pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/atendimento" className="btn btn-light">
              Solicite um atendimento <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <WhatsAppButton
              variant="light"
              label="Falar pelo WhatsApp"
              className="!bg-transparent !text-primary-foreground border-primary-foreground/35 hover:!bg-primary-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
