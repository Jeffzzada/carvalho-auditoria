import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { getService, services, type ServiceId } from "@/lib/content";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  AREAS_DUVIDA,
  ESTADOS,
  FATURAMENTOS,
  MODALIDADES,
  NATUREZAS_PUBLICAS,
  NECESSIDADES_PUBLICAS,
  ORIGENS,
  PORTES,
  PRAZOS,
  SIM_NAO,
  SUBOPCAO_OUTRA,
  SUBOPCOES,
  TIPOS,
  regimesParaPorte,
} from "@/lib/atendimento/options";
import {
  SCREEN_ORDER,
  emptyAnswers,
  type Answers,
  type FieldErrors,
  type ScreenId,
} from "@/lib/atendimento/types";
import {
  buildWhatsAppSummary,
  servicosResumo,
  suggestArea,
  tipoDetalhesResumo,
  type AtendimentoPayload,
} from "@/lib/atendimento/summary";
import {
  hasErrors,
  isIndicacao,
  isPublico,
  validateAll,
  validateField,
  validateScreen,
} from "@/lib/atendimento/validation";

const WELCOME =
  "Olá! Seja bem-vindo(a) à Carvalho Soluções em Auditoria. Para direcionarmos você à solução mais adequada, vamos fazer algumas perguntas rápidas. As informações serão usadas apenas para organizar seu atendimento e permitir o retorno da nossa equipe.";

const SUCCESS =
  "Obrigado por entrar em contato com a Carvalho Soluções em Auditoria! Sua solicitação foi registrada. Nossa equipe poderá analisar as informações e avaliar o encaminhamento adequado. Caso seja necessário, entraremos em contato pelos canais informados.";

const TITLES: Record<ScreenId, string> = {
  "boas-vindas": "Boas-vindas",
  responsavel: "Quem é o responsável pelo contato?",
  porte: "Qual o porte da organização?",
  faturamento: "Qual a faixa de faturamento bruto anual?",
  regime: "Qual o regime tributário?",
  localizacao: "Onde a organização está localizada?",
  modalidade: "Qual a modalidade de atendimento preferida?",
  origem: "Como você conheceu a Carvalho Soluções em Auditoria?",
  servicos: "Qual serviço você procura?",
  tipo: "Qual o tipo de atendimento?",
  "tipo-detalhes": "Conte-nos um pouco mais",
  detalhamento: "Detalhe sua necessidade",
  revisao: "Revise e envie sua solicitação",
};

type Status = "idle" | "sending" | "error" | "success";

type TipoField = {
  key: string;
  label: string;
  kind: "textarea" | "text" | "choice";
  options?: readonly string[];
};

const TIPO_FIELDS: Record<string, TipoField[]> = {
  "Consultoria ou orientação técnica": [
    {
      key: "duvida",
      label: "Qual dúvida, problema ou decisão precisa de apoio?",
      kind: "textarea",
    },
  ],
  "Contratação de serviço": [
    { key: "objetivo", label: "Qual o objetivo da contratação?", kind: "textarea" },
    { key: "escopo", label: "Qual o escopo pretendido?", kind: "textarea" },
    {
      key: "docPrevia",
      label: "Há documentação ou definição prévia?",
      kind: "choice",
      options: SIM_NAO,
    },
  ],
  "Diagnóstico inicial": [
    {
      key: "riscos",
      label: "Quais os principais riscos, dificuldades ou processos a avaliar?",
      kind: "textarea",
    },
  ],
  "Esclarecimento de dúvidas": [
    { key: "duvida", label: "Descreva a sua dúvida", kind: "textarea" },
    { key: "area", label: "Qual área está relacionada?", kind: "choice", options: AREAS_DUVIDA },
  ],
  "Solicitação de proposta comercial": [
    {
      key: "escopoDefinido",
      label: "O escopo já está definido?",
      kind: "choice",
      options: SIM_NAO,
    },
    { key: "prazoDesejado", label: "Qual o prazo desejado?", kind: "text" },
    { key: "condicoes", label: "Há condições relevantes a considerar?", kind: "textarea" },
  ],
  Outro: [
    {
      key: "outroDescricao",
      label: "Descreva o tipo de atendimento que você procura",
      kind: "textarea",
    },
  ],
};

/* ---------- Componentes de formulário ---------- */

function Choice({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "flex min-h-12 items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-[0.95rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "border-primary bg-accent text-primary"
          : "border-input bg-background text-foreground hover:border-lilac hover:bg-surface",
        className,
      )}
    >
      <span>{children}</span>
      {selected && <Check className="h-4 w-4 shrink-0" aria-hidden />}
    </button>
  );
}

function ChoiceGrid({
  label,
  options,
  value,
  onChange,
  columns = 2,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}
    >
      {options.map((o) => (
        <Choice key={o} selected={value === o} onClick={() => onChange(value === o ? "" : o)}>
          {o}
        </Choice>
      ))}
    </div>
  );
}

function FieldWrap({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean | undefined;
  error?: string | undefined;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {optional && <span className="font-normal text-muted-foreground">(opcional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type TextProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string | undefined;
  optional?: boolean;
  hint?: string;
  type?: "text" | "email" | "tel";
  textarea?: boolean;
  autoComplete?: string;
  maxLength?: number;
  inputMode?: "text" | "email" | "tel" | "numeric";
};

function TextField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  optional,
  hint,
  type = "text",
  textarea,
  autoComplete,
  maxLength,
  inputMode,
}: TextProps) {
  const common = {
    id,
    name: id,
    value,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-err` : undefined,
    className: error ? "field field-invalid" : "field",
    onBlur,
    maxLength: maxLength ?? (textarea ? 1500 : 160),
    autoComplete,
  };
  return (
    <FieldWrap id={id} label={label} optional={optional} error={error} {...(hint ? { hint } : {})}>
      {textarea ? (
        <textarea {...common} rows={5} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          {...common}
          type={type}
          {...(inputMode ? { inputMode } : {})}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </FieldWrap>
  );
}

/* ---------- Componente principal ---------- */

export function Wizard({ initialService }: { initialService?: ServiceId | undefined }) {
  const [answers, setAnswers] = useState<Answers>(() => ({
    ...emptyAnswers,
    servicos: initialService ? [initialService] : [],
  }));
  const [screen, setScreen] = useState<ScreenId>("boas-vindas");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fromReview, setFromReview] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [sendError, setSendError] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sendingRef = useRef(false);
  const submissionId = useRef<string>("");
  const honeypot = useRef("");

  // Move o foco para o título a cada nova tela (teclado e leitores de tela).
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: false });
  }, [screen, status]);

  // Se o usuário chegou por um CTA de serviço diferente, atualiza a pré-seleção.
  useEffect(() => {
    if (initialService) {
      setAnswers((a) =>
        a.servicos.includes(initialService)
          ? a
          : { ...a, servicos: [initialService], servicoIndefinido: false },
      );
    }
  }, [initialService]);

  const set = useCallback(<K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
  }, []);

  const answersRef = useRef(answers);
  answersRef.current = answers;
  const blur = useCallback(
    (name: string) => () => {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, answersRef.current) }));
    },
    [],
  );

  // Limpa o erro assim que o campo passa a ser válido.
  const clearIfValid = (name: string, next: Answers) => {
    if (errors[name] && !validateField(name, next))
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const text = (name: keyof Answers & string) => (v: string) => {
    const next = { ...answers, [name]: v } as Answers;
    setAnswers(next);
    clearIfValid(name, next);
  };

  const index = SCREEN_ORDER.indexOf(screen);
  const total = SCREEN_ORDER.length;
  const publico = isPublico(answers.porte);

  const go = (s: ScreenId) => {
    setErrors({});
    setScreen(s);
  };

  const next = () => {
    if (screen === "boas-vindas") return go("responsavel");
    const errs = validateScreen(screen, answers);
    if (hasErrors(errs)) {
      setErrors(errs);
      return;
    }
    if (fromReview) {
      setFromReview(false);
      return go("revisao");
    }
    const nextScreen = SCREEN_ORDER[index + 1];
    if (nextScreen) go(nextScreen);
  };

  const back = () => {
    if (fromReview) {
      setFromReview(false);
      return go("revisao");
    }
    if (index <= 0) return go("boas-vindas");
    const prev = SCREEN_ORDER[index - 1];
    if (prev) go(prev);
  };

  const edit = (s: ScreenId) => {
    setFromReview(true);
    go(s);
  };

  const setPorte = (porte: string) => {
    setAnswers((a) => {
      const allowed = regimesParaPorte(porte);
      const regimeOk = !a.regime || (allowed as readonly string[]).includes(a.regime);
      return { ...a, porte, regime: regimeOk ? a.regime : "" };
    });
  };

  const toggleService = (id: ServiceId) => {
    setAnswers((a) => {
      const selected = a.servicos.includes(id);
      const servicos = selected ? a.servicos.filter((s) => s !== id) : [...a.servicos, id];
      return { ...a, servicos, servicoIndefinido: false };
    });
    setErrors((e) => ({ ...e, servicos: undefined }));
  };

  const toggleSub = (id: ServiceId, option: string) => {
    setAnswers((a) => {
      const current = a.subopcoes[id] ?? [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...a, subopcoes: { ...a.subopcoes, [id]: updated } };
    });
  };

  const setTipoDetalhe = (key: string, value: string) => {
    setAnswers((a) => ({ ...a, tipoDetalhes: { ...a.tipoDetalhes, [key]: value } }));
  };

  const setTipo = (tipo: string) => {
    // Perguntas condicionais pertencem ao tipo escolhido: ao trocar, descartamos as anteriores.
    setAnswers((a) => ({ ...a, tipo, tipoDetalhes: tipo === a.tipo ? a.tipoDetalhes : {} }));
    setErrors((e) => ({ ...e, tipo: undefined }));
  };

  /* ---------- Envio ---------- */

  const submit = async () => {
    if (sendingRef.current || status === "success") return; // evita envios duplicados
    const errs = validateAll(answers);
    if (hasErrors(errs)) {
      setErrors(errs);
      // volta para a primeira tela com pendência
      const target = (
        ["responsavel", "localizacao", "origem", "servicos", "tipo", "detalhamento"] as ScreenId[]
      ).find((s) => hasErrors(validateScreen(s, answers)));
      if (target) edit(target);
      return;
    }
    sendingRef.current = true;
    setStatus("sending");
    setSendError("");
    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    const payload: AtendimentoPayload = {
      clientSubmissionId: submissionId.current,
      answers,
      website: honeypot.current,
    };
    try {
      const res = await fetch("/api/atendimento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && data?.ok === true) {
        setStatus("success");
        return;
      }
      setStatus("error");
      setSendError(
        data?.error === "nao_configurado"
          ? "O recebimento de solicitações por este formulário ainda não está disponível. Suas respostas foram mantidas: você pode tentar novamente mais tarde ou falar com a equipe pelo WhatsApp."
          : "Não foi possível enviar a sua solicitação agora. Suas respostas foram mantidas. Tente novamente ou fale com a equipe pelo WhatsApp.",
      );
    } catch {
      setStatus("error");
      setSendError(
        "Não foi possível enviar a sua solicitação: verifique sua conexão e tente novamente. Suas respostas foram mantidas.",
      );
    } finally {
      sendingRef.current = false;
    }
  };

  /* ---------- Renderização ---------- */

  const area = useMemo(() => suggestArea(answers), [answers]);

  if (status === "success") {
    return (
      <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" aria-hidden />
        </span>
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="mt-5 font-display text-2xl font-semibold text-foreground focus:outline-none"
        >
          Solicitação registrada
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{SUCCESS}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            label="Falar pelo WhatsApp"
            message={buildWhatsAppSummary(answers)}
            variant="outline"
          />
          <Link to="/" className="btn btn-ghost-dark">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const heading = (
    <h2
      ref={headingRef}
      tabIndex={-1}
      className="font-display text-2xl font-semibold text-foreground focus:outline-none"
    >
      {screen === "regime" && publico ? "Qual a natureza da entidade?" : TITLES[screen]}
    </h2>
  );

  let body: ReactNode = null;

  switch (screen) {
    case "boas-vindas":
      body = (
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">{WELCOME}</p>
          {answers.servicos.length > 0 && (
            <p className="mt-4 rounded-lg bg-accent p-3 text-sm text-accent-foreground">
              Serviço pré-selecionado:{" "}
              <strong>{answers.servicos.map((s) => getService(s)?.shortTitle).join(", ")}</strong>.
              Você poderá alterá-lo na etapa de serviços.
            </p>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Levamos cerca de 3 minutos. Veja como tratamos seus dados no{" "}
            <Link
              to="/privacidade"
              className="font-medium text-primary underline underline-offset-4"
            >
              Aviso de Privacidade
            </Link>
            .
          </p>
        </div>
      );
      break;

    case "responsavel":
      body = (
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <TextField
              id="nome"
              label="Nome completo"
              value={answers.nome}
              onChange={text("nome")}
              onBlur={blur("nome")}
              error={errors["nome"]}
              autoComplete="name"
            />
          </div>
          <TextField
            id="cargo"
            label="Cargo ou função"
            value={answers.cargo}
            onChange={text("cargo")}
            optional
            autoComplete="organization-title"
          />
          <TextField
            id="organizacao"
            label="Empresa ou organização"
            value={answers.organizacao}
            onChange={text("organizacao")}
            onBlur={blur("organizacao")}
            error={errors["organizacao"]}
            autoComplete="organization"
          />
          <TextField
            id="cnpj"
            label="CNPJ"
            value={answers.cnpj}
            onChange={text("cnpj")}
            onBlur={blur("cnpj")}
            error={errors["cnpj"]}
            optional
            inputMode="numeric"
          />
          <TextField
            id="telefone"
            label="Telefone com DDD"
            value={answers.telefone}
            onChange={text("telefone")}
            onBlur={blur("telefone")}
            error={errors["telefone"]}
            type="tel"
            autoComplete="tel"
            hint="Exemplo: (00) 00000-0000"
          />
          <TextField
            id="whatsapp"
            label="WhatsApp, se for diferente do telefone"
            value={answers.whatsapp}
            onChange={text("whatsapp")}
            onBlur={blur("whatsapp")}
            error={errors["whatsapp"]}
            optional
            type="tel"
          />
          <TextField
            id="email"
            label="E-mail"
            value={answers.email}
            onChange={text("email")}
            onBlur={blur("email")}
            error={errors["email"]}
            type="email"
            autoComplete="email"
          />
          <p className="text-xs text-muted-foreground sm:col-span-2">
            Não solicitamos senhas, dados bancários nem documentos confidenciais.
          </p>
        </div>
      );
      break;

    case "porte":
      body = (
        <ChoiceGrid label="Porte" options={PORTES} value={answers.porte} onChange={setPorte} />
      );
      break;

    case "faturamento":
      body = (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Usado apenas para qualificação comercial. Não determina o porte legal nem o regime
            tributário e não impede o atendimento.
          </p>
          <ChoiceGrid
            label="Faturamento bruto anual"
            options={FATURAMENTOS}
            value={answers.faturamento}
            onChange={(v) => set("faturamento", v)}
          />
        </div>
      );
      break;

    case "regime":
      body = publico ? (
        <div className="space-y-8">
          <ChoiceGrid
            label="Natureza da entidade"
            options={NATUREZAS_PUBLICAS}
            value={answers.naturezaEntidade}
            onChange={(v) => set("naturezaEntidade", v)}
            columns={1}
          />
          <div>
            <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
              Há necessidade de auditoria no setor público? Em qual área?
            </h3>
            <ChoiceGrid
              label="Necessidade no setor público"
              options={NECESSIDADES_PUBLICAS}
              value={answers.necessidadeSetorPublico}
              onChange={(v) => set("necessidadeSetorPublico", v)}
            />
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Você pode continuar sem saber: escolha “Não sei informar”.
          </p>
          <ChoiceGrid
            label="Regime tributário"
            options={regimesParaPorte(answers.porte)}
            value={answers.regime}
            onChange={(v) => set("regime", v)}
          />
        </div>
      );
      break;

    case "localizacao":
      body = (
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="cidade"
            label="Cidade"
            value={answers.cidade}
            onChange={text("cidade")}
            onBlur={blur("cidade")}
            error={errors["cidade"]}
            autoComplete="address-level2"
          />
          <FieldWrap id="estado" label="Estado" error={errors["estado"]}>
            <select
              id="estado"
              name="estado"
              value={answers.estado}
              aria-invalid={!!errors["estado"]}
              aria-describedby={errors["estado"] ? "estado-err" : undefined}
              className={errors["estado"] ? "field field-invalid" : "field"}
              onChange={(e) => {
                set("estado", e.target.value);
                setErrors((p) => ({ ...p, estado: undefined }));
              }}
              onBlur={blur("estado")}
            >
              <option value="">Selecione</option>
              {ESTADOS.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </FieldWrap>
          <div className="sm:col-span-2">
            <TextField
              id="regiao"
              label="Região de atendimento"
              value={answers.regiao}
              onChange={text("regiao")}
              optional
              hint="Pode ser diferente da sede, se o serviço for em outro local."
            />
          </div>
        </div>
      );
      break;

    case "modalidade":
      body = (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            A disponibilidade de cada modalidade e de cada localidade é confirmada pela equipe.
          </p>
          <ChoiceGrid
            label="Modalidade"
            options={MODALIDADES}
            value={answers.modalidade}
            onChange={(v) => set("modalidade", v)}
          />
        </div>
      );
      break;

    case "origem":
      body = (
        <div className="space-y-5">
          <ChoiceGrid
            label="Origem do contato"
            options={ORIGENS}
            value={answers.origem}
            onChange={(v) => set("origem", v)}
          />
          {answers.origem === "Outro" && (
            <TextField
              id="origemDetalhe"
              label="Conte-nos como nos conheceu"
              value={answers.origemDetalhe}
              onChange={text("origemDetalhe")}
              onBlur={blur("origemDetalhe")}
              error={errors["origemDetalhe"]}
            />
          )}
          {isIndicacao(answers.origem) && (
            <TextField
              id="indicadoPor"
              label="Quem indicou?"
              value={answers.indicadoPor}
              onChange={text("indicadoPor")}
              optional
            />
          )}
          <p className="text-xs text-muted-foreground">
            Pergunta opcional: você pode continuar sem responder.
          </p>
        </div>
      );
      break;

    case "servicos":
      body = (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Você pode selecionar mais de um serviço.</p>
          {services.map((s) => {
            const selected = answers.servicos.includes(s.id);
            const outraSelecionada = (answers.subopcoes[s.id] ?? []).includes(SUBOPCAO_OUTRA);
            return (
              <div
                key={s.id}
                className={cn(
                  "rounded-xl border p-4 transition-colors",
                  selected ? "border-primary bg-accent/40" : "border-input",
                )}
              >
                <Choice
                  selected={selected}
                  onClick={() => toggleService(s.id)}
                  className="w-full border-0 bg-transparent p-0 hover:bg-transparent"
                >
                  <span className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                    {s.title}
                  </span>
                </Choice>
                {selected && (
                  <fieldset className="mt-4 border-t border-border pt-4">
                    <legend className="mb-2 text-sm font-medium text-foreground">
                      O que você gostaria de avaliar? (opcional)
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {SUBOPCOES[s.id].map((o) => (
                        <label
                          key={o}
                          className="flex min-h-10 cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-surface"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[var(--primary)]"
                            checked={(answers.subopcoes[s.id] ?? []).includes(o)}
                            onChange={() => toggleSub(s.id, o)}
                          />
                          {o}
                        </label>
                      ))}
                    </div>
                    {outraSelecionada && (
                      <div className="mt-3">
                        <TextField
                          id={`outra-${s.id}`}
                          label="Descreva a outra necessidade"
                          value={answers.subopcaoOutra[s.id] ?? ""}
                          onChange={(v) =>
                            setAnswers((a) => ({
                              ...a,
                              subopcaoOutra: { ...a.subopcaoOutra, [s.id]: v },
                            }))
                          }
                          onBlur={blur(`outra-${s.id}`)}
                          error={errors[`outra-${s.id}`]}
                        />
                      </div>
                    )}
                  </fieldset>
                )}
              </div>
            );
          })}
          <Choice
            selected={answers.servicoIndefinido}
            onClick={() => {
              setAnswers((a) => ({
                ...a,
                servicoIndefinido: !a.servicoIndefinido,
                servicos: a.servicoIndefinido ? a.servicos : [],
              }));
              setErrors((e) => ({ ...e, servicos: undefined }));
            }}
            className="w-full"
          >
            Ainda não sei qual serviço preciso
          </Choice>
          {answers.servicos.length > 1 && (
            <TextField
              id="necessidadeIntegrada"
              label="Se quiser, descreva uma necessidade integrada entre esses serviços"
              value={answers.necessidadeIntegrada}
              onChange={text("necessidadeIntegrada")}
              optional
              textarea
            />
          )}
          {errors["servicos"] && (
            <p className="text-sm text-destructive" role="alert">
              {errors["servicos"]}
            </p>
          )}
        </div>
      );
      break;

    case "tipo":
      body = (
        <div>
          <ChoiceGrid
            label="Tipo de atendimento"
            options={TIPOS}
            value={answers.tipo}
            onChange={setTipo}
            columns={1}
          />
          {errors["tipo"] && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {errors["tipo"]}
            </p>
          )}
        </div>
      );
      break;

    case "tipo-detalhes": {
      const fields = TIPO_FIELDS[answers.tipo] ?? [];
      body = (
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Tipo escolhido: <strong className="text-foreground">{answers.tipo}</strong>. As
            perguntas abaixo são opcionais.
          </p>
          {fields.map((f) =>
            f.kind === "choice" ? (
              <div key={f.key}>
                <h3 className="mb-3 text-sm font-medium text-foreground">{f.label}</h3>
                <ChoiceGrid
                  label={f.label}
                  options={f.options ?? []}
                  value={answers.tipoDetalhes[f.key] ?? ""}
                  onChange={(v) => setTipoDetalhe(f.key, v)}
                />
              </div>
            ) : (
              <TextField
                key={f.key}
                id={`td-${f.key}`}
                label={f.label}
                value={answers.tipoDetalhes[f.key] ?? ""}
                onChange={(v) => setTipoDetalhe(f.key, v)}
                optional
                textarea={f.kind === "textarea"}
              />
            ),
          )}
        </div>
      );
      break;
    }

    case "detalhamento":
      body = (
        <div className="space-y-6">
          <TextField
            id="descricao"
            label="Conte-nos um pouco mais sobre a necessidade da sua empresa. Qual problema você deseja resolver ou qual resultado espera alcançar?"
            value={answers.descricao}
            onChange={text("descricao")}
            onBlur={blur("descricao")}
            error={errors["descricao"]}
            textarea
            hint="Não inclua senhas, dados bancários ou documentos confidenciais."
          />
          <div>
            <h3 className="mb-1 text-sm font-medium text-foreground">
              Prazo <span className="font-normal text-muted-foreground">(opcional)</span>
            </h3>
            <p className="mb-3 text-xs text-muted-foreground">
              Informação para organizar o atendimento: não representa compromisso de prazo de
              atendimento ou de execução.
            </p>
            <ChoiceGrid
              label="Prazo"
              options={PRAZOS}
              value={answers.prazo}
              onChange={(v) => set("prazo", v)}
            />
          </div>
        </div>
      );
      break;

    case "revisao": {
      const rows: { title: string; screen: ScreenId; items: [string, string][] }[] = [
        {
          title: "Responsável",
          screen: "responsavel",
          items: [
            ["Nome", answers.nome],
            ["Cargo/função", answers.cargo],
            ["Telefone", answers.telefone],
            ["WhatsApp", answers.whatsapp],
            ["E-mail", answers.email],
          ],
        },
        {
          title: "Organização",
          screen: "porte",
          items: [
            ["Empresa/organização", answers.organizacao],
            ["CNPJ", answers.cnpj],
            ["Porte", answers.porte || "Não informado"],
            ["Faturamento bruto anual", answers.faturamento || "Não informado"],
            publico
              ? ["Natureza da entidade", answers.naturezaEntidade || "Não informada"]
              : ["Regime tributário", answers.regime || "Não informado"],
            ["Localização", [answers.cidade.trim(), answers.estado].filter(Boolean).join("/")],
            ["Região de atendimento", answers.regiao],
          ],
        },
        {
          title: "Origem do contato",
          screen: "origem",
          items: [
            ["Origem", answers.origem || "Não informada"],
            ["Detalhe", answers.origemDetalhe],
            ["Indicado por", answers.indicadoPor],
          ],
        },
        {
          title: "Necessidade",
          screen: "servicos",
          items: [
            ["Serviços", servicosResumo(answers).join(" | ") || "Não informado"],
            ["Necessidade integrada", answers.necessidadeIntegrada],
            ["Tipo de atendimento", answers.tipo],
            ...tipoDetalhesResumo(answers).map((l): [string, string] => {
              const i = l.indexOf(": ");
              return [l.slice(0, i), l.slice(i + 2)];
            }),
            ["Descrição", answers.descricao],
            ["Prazo", answers.prazo || "Não informado"],
            ["Modalidade", answers.modalidade || "Não informada"],
          ],
        },
      ];
      body = (
        <div className="space-y-6">
          {rows.map((r) => (
            <section key={r.title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <button
                  type="button"
                  onClick={() => edit(r.screen)}
                  className="rounded-md px-2 py-1 text-sm font-medium text-primary underline underline-offset-4 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Editar
                </button>
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                {r.items
                  .filter(([, v]) => v && v.trim())
                  .map(([k, v]) => (
                    <div key={k} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="break-words text-foreground">{v}</dd>
                    </div>
                  ))}
              </dl>
            </section>
          ))}

          <section className="rounded-xl bg-accent p-5 text-accent-foreground">
            <h3 className="font-display text-lg font-semibold">Direcionamento sugerido</h3>
            <p className="mt-2 text-sm">
              {area.areas.length
                ? area.areas.join(" · ")
                : "A definir pela equipe, a partir das informações enviadas."}
            </p>
            {area.observacao && <p className="mt-2 text-sm">{area.observacao}</p>}
            <p className="mt-2 text-xs opacity-80">
              Sugestão para organizar o atendimento, sem diagnóstico nem parecer técnico. A equipe
              confirma o encaminhamento.
            </p>
          </section>

          <div className="space-y-3">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
              <input
                type="checkbox"
                className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--primary)]"
                checked={answers.consentimentoPrivacidade}
                aria-invalid={!!errors["consentimentoPrivacidade"]}
                aria-describedby={errors["consentimentoPrivacidade"] ? "consent-err" : undefined}
                onChange={(e) => {
                  set("consentimentoPrivacidade", e.target.checked);
                  setErrors((p) => ({ ...p, consentimentoPrivacidade: undefined }));
                }}
              />
              <span>
                Li o{" "}
                <Link
                  to="/privacidade"
                  target="_blank"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Aviso de Privacidade
                </Link>{" "}
                e concordo com o uso dessas informações para organizar meu atendimento e permitir o
                retorno da equipe.
              </span>
            </label>
            {errors["consentimentoPrivacidade"] && (
              <p id="consent-err" className="text-sm text-destructive">
                {errors["consentimentoPrivacidade"]}
              </p>
            )}
            <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
              <input
                type="checkbox"
                className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--primary)]"
                checked={answers.consentimentoMarketing}
                onChange={(e) => set("consentimentoMarketing", e.target.checked)}
              />
              <span>
                <span className="text-muted-foreground">(opcional)</span> Aceito receber
                comunicações da Carvalho Soluções em Auditoria sobre serviços e conteúdos. Posso
                revogar a qualquer momento.
              </span>
            </label>
          </div>

          {/* Honeypot anti-spam: invisível para pessoas */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Não preencha este campo
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
                onChange={(e) => (honeypot.current = e.target.value)}
              />
            </label>
          </div>

          {status === "error" && (
            <div
              role="alert"
              className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-foreground"
            >
              {sendError}
              <div className="mt-3">
                <WhatsAppButton
                  label="Falar com a equipe"
                  message={buildWhatsAppSummary(answers)}
                  variant="outline"
                />
              </div>
            </div>
          )}
        </div>
      );
      break;
    }
  }

  const progress = screen === "boas-vindas" ? 0 : (index + 1) / total;

  return (
    <div className="mt-10">
      {screen !== "boas-vindas" && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Pergunta {index + 1} de {total}
            </span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div
            role="progressbar"
            aria-label="Progresso do atendimento"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={index + 1}
            className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full origin-left rounded-full bg-primary transition-transform duration-300 ease-in-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      )}

      <div className="relative rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10">
        {screen === "boas-vindas" ? (
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mb-4 font-display text-2xl font-semibold text-foreground focus:outline-none"
          >
            Boas-vindas
          </h2>
        ) : (
          <div className="mb-6">{heading}</div>
        )}

        {body}

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {screen !== "boas-vindas" ? (
            <button
              type="button"
              onClick={back}
              disabled={status === "sending"}
              className="btn btn-ghost-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
            </button>
          ) : (
            <span />
          )}
          {screen === "revisao" ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => edit("responsavel")}
                disabled={status === "sending"}
                className="btn btn-outline"
              >
                Editar respostas
              </button>
              <WhatsAppButton
                label="Falar com a equipe"
                message={buildWhatsAppSummary(answers)}
                variant="outline"
              />
              <button
                type="button"
                onClick={submit}
                disabled={status === "sending"}
                className="btn btn-primary"
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando…
                  </>
                ) : (
                  "Confirmar e enviar solicitação"
                )}
              </button>
            </div>
          ) : (
            <button type="button" onClick={next} className="btn btn-primary">
              {screen === "boas-vindas"
                ? "Começar"
                : fromReview
                  ? "Salvar e voltar à revisão"
                  : "Continuar"}{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
