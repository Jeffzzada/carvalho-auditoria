import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { getService, services, type ServiceId } from "@/lib/content";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Choice, ChoiceGrid, FieldWrap, TextField } from "./FormControls";
import {
  ESTADOS,
  FATURAMENTOS,
  MODALIDADES,
  NATUREZAS_PUBLICAS,
  NECESSIDADES_PUBLICAS,
  ORIGEM_OUTRO,
  ORIGENS,
  PORTES,
  PRAZOS,
  SUBOPCAO_OUTRA,
  SUBOPCOES,
  TIPO_FIELDS,
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
  tipoDetalhesPairs,
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
      setAnswers((prev) =>
        prev.servicos.includes(initialService)
          ? prev
          : { ...prev, servicos: [initialService], servicoIndefinido: false },
      );
    }
  }, [initialService]);

  const setAnswer = useCallback(<K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const answersRef = useRef(answers);
  answersRef.current = answers;
  const handleBlur = useCallback(
    (name: string) => () => {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, answersRef.current) }));
    },
    [],
  );

  // Limpa o erro assim que o campo passa a ser válido.
  const clearIfValid = (name: string, nextAnswers: Answers) => {
    if (errors[name] && !validateField(name, nextAnswers)) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const updateTextField = (name: keyof Answers & string) => (value: string) => {
    const nextAnswers = { ...answers, [name]: value } as Answers;
    setAnswers(nextAnswers);
    clearIfValid(name, nextAnswers);
  };

  const index = SCREEN_ORDER.indexOf(screen);
  const total = SCREEN_ORDER.length;
  const publico = isPublico(answers.porte);

  const navigateTo = (targetScreen: ScreenId, initialErrors: FieldErrors = {}) => {
    setErrors(initialErrors);
    setScreen(targetScreen);
  };

  const next = () => {
    if (screen === "boas-vindas") return navigateTo("responsavel");
    const screenErrors = validateScreen(screen, answers);
    if (hasErrors(screenErrors)) {
      setErrors(screenErrors);
      return;
    }
    if (fromReview) {
      setFromReview(false);
      return navigateTo("revisao");
    }
    const nextScreen = SCREEN_ORDER[index + 1];
    if (nextScreen) navigateTo(nextScreen);
  };

  const back = () => {
    if (fromReview) {
      const screenErrors = validateScreen(screen, answers);
      if (hasErrors(screenErrors)) {
        setErrors(screenErrors);
        return;
      }
      setFromReview(false);
      return navigateTo("revisao");
    }
    if (index <= 0) return navigateTo("boas-vindas");
    const prevScreen = SCREEN_ORDER[index - 1];
    if (prevScreen) navigateTo(prevScreen);
  };

  const edit = (targetScreen: ScreenId, initialErrors: FieldErrors = {}) => {
    setFromReview(true);
    navigateTo(targetScreen, initialErrors);
  };

  const restartReviewFlow = () => {
    setFromReview(false);
    navigateTo("responsavel");
  };

  const setPorte = (porte: string) => {
    setAnswers((prev) => {
      if (isPublico(porte)) {
        return { ...prev, porte, regime: "" };
      }
      const allowed = regimesParaPorte(porte);
      const regimeOk = !prev.regime || (allowed as readonly string[]).includes(prev.regime);
      return {
        ...prev,
        porte,
        regime: regimeOk ? prev.regime : "",
        naturezaEntidade: "",
        necessidadeSetorPublico: "",
      };
    });
  };

  const setOrigem = (origem: string) => {
    setAnswers((prev) => ({
      ...prev,
      origem,
      origemDetalhe: origem === ORIGEM_OUTRO ? prev.origemDetalhe : "",
      indicadoPor: isIndicacao(origem) ? prev.indicadoPor : "",
    }));
    setErrors((prev) => ({ ...prev, origemDetalhe: undefined }));
  };

  const toggleService = (id: ServiceId) => {
    setAnswers((prev) => {
      const selected = prev.servicos.includes(id);
      const servicos = selected ? prev.servicos.filter((s) => s !== id) : [...prev.servicos, id];
      const nextSubopcoes = { ...prev.subopcoes };
      const nextSubopcaoOutra = { ...prev.subopcaoOutra };
      if (selected) {
        delete nextSubopcoes[id];
        delete nextSubopcaoOutra[id];
      }
      return {
        ...prev,
        servicos,
        servicoIndefinido: false,
        subopcoes: nextSubopcoes,
        subopcaoOutra: nextSubopcaoOutra,
        necessidadeIntegrada: servicos.length > 1 ? prev.necessidadeIntegrada : "",
      };
    });
    setErrors((prev) => ({ ...prev, servicos: undefined, [`outra-${id}`]: undefined }));
  };

  const toggleSub = (id: ServiceId, option: string) => {
    setAnswers((prev) => {
      const current = prev.subopcoes[id] ?? [];
      const isSelected = current.includes(option);
      const updated = isSelected ? current.filter((o) => o !== option) : [...current, option];
      const nextSubopcaoOutra = { ...prev.subopcaoOutra };
      if (isSelected && option === SUBOPCAO_OUTRA) {
        delete nextSubopcaoOutra[id];
      }
      return {
        ...prev,
        subopcoes: { ...prev.subopcoes, [id]: updated },
        subopcaoOutra: nextSubopcaoOutra,
      };
    });
    if (option === SUBOPCAO_OUTRA) {
      setErrors((prev) => ({ ...prev, [`outra-${id}`]: undefined }));
    }
  };

  const setTipoDetalhe = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, tipoDetalhes: { ...prev.tipoDetalhes, [key]: value } }));
  };

  const setTipo = (tipo: string) => {
    // Perguntas condicionais pertencem ao tipo escolhido: ao trocar, descartamos as anteriores.
    setAnswers((prev) => ({
      ...prev,
      tipo,
      tipoDetalhes: tipo === prev.tipo ? prev.tipoDetalhes : {},
    }));
    setErrors((prev) => ({ ...prev, tipo: undefined }));
  };

  /* ---------- Envio ---------- */

  const submit = async () => {
    if (sendingRef.current || status === "success") return; // evita envios duplicados
    const allErrors = validateAll(answers);
    if (hasErrors(allErrors)) {
      const target = (
        ["responsavel", "localizacao", "origem", "servicos", "tipo", "detalhamento"] as ScreenId[]
      ).find((s) => hasErrors(validateScreen(s, answers)));
      if (target) {
        edit(target, validateScreen(target, answers));
      } else {
        setErrors(allErrors);
      }
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
              onChange={updateTextField("nome")}
              onBlur={handleBlur("nome")}
              error={errors["nome"]}
              autoComplete="name"
            />
          </div>
          <TextField
            id="cargo"
            label="Cargo ou função"
            value={answers.cargo}
            onChange={updateTextField("cargo")}
            optional
            autoComplete="organization-title"
          />
          <TextField
            id="organizacao"
            label="Empresa ou organização"
            value={answers.organizacao}
            onChange={updateTextField("organizacao")}
            onBlur={handleBlur("organizacao")}
            error={errors["organizacao"]}
            autoComplete="organization"
          />
          <TextField
            id="cnpj"
            label="CNPJ"
            value={answers.cnpj}
            onChange={updateTextField("cnpj")}
            onBlur={handleBlur("cnpj")}
            error={errors["cnpj"]}
            optional
            inputMode="numeric"
          />
          <TextField
            id="telefone"
            label="Telefone com DDD"
            value={answers.telefone}
            onChange={updateTextField("telefone")}
            onBlur={handleBlur("telefone")}
            error={errors["telefone"]}
            type="tel"
            autoComplete="tel"
            hint="Exemplo: (71) 99999-9999"
          />
          <TextField
            id="whatsapp"
            label="WhatsApp, se for diferente do telefone"
            value={answers.whatsapp}
            onChange={updateTextField("whatsapp")}
            onBlur={handleBlur("whatsapp")}
            error={errors["whatsapp"]}
            optional
            type="tel"
          />
          <TextField
            id="email"
            label="E-mail"
            value={answers.email}
            onChange={updateTextField("email")}
            onBlur={handleBlur("email")}
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
            onChange={(value) => setAnswer("faturamento", value)}
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
            onChange={(value) => setAnswer("naturezaEntidade", value)}
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
              onChange={(value) => setAnswer("necessidadeSetorPublico", value)}
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
            onChange={(value) => setAnswer("regime", value)}
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
            onChange={updateTextField("cidade")}
            onBlur={handleBlur("cidade")}
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
                setAnswer("estado", e.target.value);
                setErrors((prev) => ({ ...prev, estado: undefined }));
              }}
              onBlur={handleBlur("estado")}
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
              onChange={updateTextField("regiao")}
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
            onChange={(value) => setAnswer("modalidade", value)}
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
            onChange={setOrigem}
          />
          {answers.origem === ORIGEM_OUTRO && (
            <TextField
              id="origemDetalhe"
              label="Conte-nos como nos conheceu"
              value={answers.origemDetalhe}
              onChange={updateTextField("origemDetalhe")}
              onBlur={handleBlur("origemDetalhe")}
              error={errors["origemDetalhe"]}
            />
          )}
          {isIndicacao(answers.origem) && (
            <TextField
              id="indicadoPor"
              label="Quem indicou?"
              value={answers.indicadoPor}
              onChange={updateTextField("indicadoPor")}
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
          {services.map((service) => {
            const selected = answers.servicos.includes(service.id);
            const outraSelecionada = (answers.subopcoes[service.id] ?? []).includes(SUBOPCAO_OUTRA);
            return (
              <div
                key={service.id}
                className={cn(
                  "rounded-xl border p-4 transition-colors",
                  selected ? "border-primary bg-accent/40" : "border-input",
                )}
              >
                <Choice
                  selected={selected}
                  onClick={() => toggleService(service.id)}
                  className="w-full border-0 bg-transparent p-0 hover:bg-transparent"
                >
                  <span className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                    {service.title}
                  </span>
                </Choice>
                {selected && (
                  <fieldset className="mt-4 border-t border-border pt-4">
                    <legend className="mb-2 text-sm font-medium text-foreground">
                      O que você gostaria de avaliar? (opcional)
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {SUBOPCOES[service.id].map((option) => (
                        <label
                          key={option}
                          className="flex min-h-10 cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-surface"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-[var(--primary)]"
                            checked={(answers.subopcoes[service.id] ?? []).includes(option)}
                            onChange={() => toggleSub(service.id, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {outraSelecionada && (
                      <div className="mt-3">
                        <TextField
                          id={`outra-${service.id}`}
                          label="Descreva a outra necessidade"
                          value={answers.subopcaoOutra[service.id] ?? ""}
                          onChange={(value) => {
                            const nextAnswers = {
                              ...answers,
                              subopcaoOutra: { ...answers.subopcaoOutra, [service.id]: value },
                            };
                            setAnswers(nextAnswers);
                            clearIfValid(`outra-${service.id}`, nextAnswers);
                          }}
                          onBlur={handleBlur(`outra-${service.id}`)}
                          error={errors[`outra-${service.id}`]}
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
              setAnswers((prev) => {
                const nextIndefinido = !prev.servicoIndefinido;
                return {
                  ...prev,
                  servicoIndefinido: nextIndefinido,
                  servicos: nextIndefinido ? [] : prev.servicos,
                  subopcoes: nextIndefinido ? {} : prev.subopcoes,
                  subopcaoOutra: nextIndefinido ? {} : prev.subopcaoOutra,
                  necessidadeIntegrada: nextIndefinido ? "" : prev.necessidadeIntegrada,
                };
              });
              setErrors((prev) => ({ ...prev, servicos: undefined }));
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
              onChange={updateTextField("necessidadeIntegrada")}
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
            allowDeselect={false}
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
          {fields.map((field) =>
            field.kind === "choice" ? (
              <div key={field.key}>
                <h3 className="mb-3 text-sm font-medium text-foreground">{field.label}</h3>
                <ChoiceGrid
                  label={field.label}
                  options={field.options ?? []}
                  value={answers.tipoDetalhes[field.key] ?? ""}
                  onChange={(value) => setTipoDetalhe(field.key, value)}
                />
              </div>
            ) : (
              <TextField
                key={field.key}
                id={`td-${field.key}`}
                label={field.label}
                value={answers.tipoDetalhes[field.key] ?? ""}
                onChange={(value) => setTipoDetalhe(field.key, value)}
                optional
                textarea={field.kind === "textarea"}
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
            onChange={updateTextField("descricao")}
            onBlur={handleBlur("descricao")}
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
              onChange={(value) => setAnswer("prazo", value)}
            />
          </div>
        </div>
      );
      break;

    case "revisao": {
      const rows: {
        title: string;
        screen: ScreenId;
        extraActions?: { label: string; screen: ScreenId }[];
        items: [string, string][];
      }[] = [
        {
          title: "Responsável",
          screen: "responsavel",
          items: [
            ["Nome", answers.nome],
            ["Cargo/função", answers.cargo],
            ["Empresa/organização", answers.organizacao],
            ["CNPJ", answers.cnpj],
            ["Telefone", answers.telefone],
            ["WhatsApp", answers.whatsapp],
            ["E-mail", answers.email],
          ],
        },
        {
          title: "Organização e localização",
          screen: "porte",
          extraActions: [
            { label: "Faturamento", screen: "faturamento" },
            { label: publico ? "Natureza" : "Regime", screen: "regime" },
            { label: "Localização", screen: "localizacao" },
            { label: "Modalidade", screen: "modalidade" },
          ],
          items: [
            ["Porte", answers.porte || "Não informado"],
            ["Faturamento bruto anual", answers.faturamento || "Não informado"],
            publico
              ? ["Natureza da entidade", answers.naturezaEntidade || "Não informada"]
              : ["Regime tributário", answers.regime || "Não informado"],
            ...(publico && answers.necessidadeSetorPublico
              ? ([["Necessidade no setor público", answers.necessidadeSetorPublico]] as [
                  string,
                  string,
                ][])
              : []),
            ["Localização", [answers.cidade.trim(), answers.estado].filter(Boolean).join("/")],
            ["Região de atendimento", answers.regiao],
            ["Modalidade", answers.modalidade || "Não informada"],
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
          extraActions: [
            { label: "Tipo", screen: "tipo" },
            { label: "Detalhes do tipo", screen: "tipo-detalhes" },
            { label: "Descrição e prazo", screen: "detalhamento" },
          ],
          items: [
            ["Serviços", servicosResumo(answers).join(" | ") || "Não informado"],
            ["Necessidade integrada", answers.necessidadeIntegrada],
            ["Tipo de atendimento", answers.tipo],
            ...tipoDetalhesPairs(answers),
            ["Descrição", answers.descricao],
            ["Prazo", answers.prazo || "Não informado"],
          ],
        },
      ];
      body = (
        <div className="space-y-6">
          {rows.map((row) => (
            <section key={row.title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{row.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => edit(row.screen)}
                    className="rounded-md px-2 py-1 text-sm font-medium text-primary underline underline-offset-4 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Editar
                  </button>
                  {row.extraActions?.map((action) => (
                    <button
                      key={action.screen}
                      type="button"
                      onClick={() => edit(action.screen)}
                      className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground underline underline-offset-4 hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                {row.items
                  .filter(([, val]) => val && val.trim())
                  .map(([key, val]) => (
                    <div key={key} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="break-words text-foreground">{val}</dd>
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
                  setAnswer("consentimentoPrivacidade", e.target.checked);
                  setErrors((prev) => ({ ...prev, consentimentoPrivacidade: undefined }));
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
                onChange={(e) => setAnswer("consentimentoMarketing", e.target.checked)}
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
                onClick={restartReviewFlow}
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
