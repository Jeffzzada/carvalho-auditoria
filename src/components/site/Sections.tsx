import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, ChevronDown, Target, Eye } from "lucide-react";
import { services, values, differentials, steps, faqs, mission, vision, coreValues } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { PRIVATE_SECTOR_MESSAGE, PUBLIC_SECTOR_MESSAGE } from "@/lib/whatsapp";
import privateImg from "@/assets/segment-private.webp";
import publicImg from "@/assets/segment-public.webp";

export function SectionHeader({ eyebrow, title, text, as, center }: { eyebrow: string; title: string; text?: string; as?: "h1" | "h2" | undefined; center?: boolean }) {
  const H = as ?? "h2";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <H className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</H>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function AboutSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="animate-rise">
          <SectionHeader as={as} eyebrow="Sobre a empresa" title="Conhecimento técnico aplicado à gestão patrimonial." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Carvalho Soluções em Auditoria atua na prestação de serviços relacionados à auditoria de ativo imobilizado, com foco na análise das informações patrimoniais, na verificação dos bens e na identificação de possíveis divergências entre os registros e a realidade física identificada.
            </p>
            <p>
              Nosso trabalho busca contribuir para a organização patrimonial, o aprimoramento dos controles internos e a confiabilidade das informações utilizadas na gestão empresarial.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-8 sm:p-10">
          <h3 className="font-display text-lg font-semibold text-foreground">Nossos valores</h3>
          <div className="gold-rule mt-3" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium text-foreground">{v}</span>
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
        <SectionHeader eyebrow="Missão e visão" title="O que nos move e aonde queremos chegar." center />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className="animate-rise rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/15 text-primary">
                <c.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{c.title}</h3>
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
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => (
            <li key={v.title} className="card-service animate-rise">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" strokeWidth={1.75} />
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

export function ServicesSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <SectionHeader
          as={as}
          eyebrow="Serviços"
          title="Soluções em auditoria de ativo imobilizado."
          text="Procedimentos voltados à verificação, organização e análise das informações patrimoniais, conforme as necessidades e o escopo de cada contratação."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card-service group">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{s.text}</p>
              <WhatsAppButton message={s.message} label="Solicitar atendimento" variant="outline" className="mt-6 self-start" />
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Os serviços são definidos individualmente conforme a necessidade e o escopo acordado em cada contratação.
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
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Uma abordagem técnica para decisões mais confiáveis.</h2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/10 sm:grid-cols-2">
          {differentials.map((d, i) => (
            <li key={d} className="bg-deep p-6">
              <span className="font-display text-sm font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
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
    {
      img: privateImg,
      alt: "Fachada de edifício corporativo moderno",
      title: "Empresas privadas",
      text: "Serviços direcionados às necessidades patrimoniais de empresas de diferentes portes e segmentos, conforme as características de seus bens, registros e controles internos.",
      message: PRIVATE_SECTOR_MESSAGE,
    },
    {
      img: publicImg,
      alt: "Fachada de edifício institucional com colunas",
      title: "Organizações públicas",
      text: "Serviços relacionados à verificação e organização patrimonial de órgãos e entidades públicas, respeitando os requisitos aplicáveis, o escopo contratado e os procedimentos pertinentes a cada instituição.",
      message: PUBLIC_SECTOR_MESSAGE,
    },
  ];
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeader as={as} eyebrow="Segmentos atendidos" title="Atendimento para organizações públicas e privadas." />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={it.img} alt={it.alt} loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full object-cover" />
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground">{it.title}</h3>
                <p className="mt-3 text-muted-foreground">{it.text}</p>
                <WhatsAppButton message={it.message} label="Solicitar informações" variant="outline" className="mt-6" />
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
        <SectionHeader as={as} eyebrow="Como funciona" title="Do primeiro contato à entrega dos resultados." />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-primary/20 md:block" />
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
        <div className="mt-12">
          <WhatsAppButton label="Quero conversar com a equipe" />
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
          <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
        </button>
      </h3>
      <div id={id} className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className={`pb-5 text-muted-foreground transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ as }: { as?: "h1" | "h2" | undefined }) {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeader as={as} eyebrow="Perguntas frequentes" title="Dúvidas comuns sobre auditoria patrimonial." />
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
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Vamos conversar sobre a necessidade da sua organização?</h2>
            <p className="mt-3 text-primary-foreground/80">Atendimento direto pelo WhatsApp, sem cadastro.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="light" />
            <Link to="/contato" className="btn btn-ghost-light">
              Outras formas de contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
