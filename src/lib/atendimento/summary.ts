import { getService, services, type ServiceId } from "@/lib/content";
import { TIPO_FIELDS } from "./options";
import type { Answers } from "./types";
import { isPublico } from "./validation";

export type AreaSugerida = {
  /** Áreas sugeridas para direcionamento. Vazio = a definir pela equipe. */
  areas: string[];
  observacao?: string;
};

/** Palavras-chave usadas apenas para organizar o direcionamento quando o serviço não foi escolhido. */
const KEYWORDS: Record<ServiceId, RegExp> = {
  ti: /\b(lgpd|seguran[cç]a da informa|sistema|ti\b|tecnologia|acesso|dados pessoais|ciberseguran|backup|software|rede)\w*/i,
  contabil:
    /\b(cont[aá]bil|contabilidade|balan[cç]o|demonstra[cç][oõ]es|concilia[cç]|financeir|fluxo de caixa|lan[cç]amento)\w*/i,
  fiscal:
    /\b(tribut|imposto|fiscal|nota fiscal|sped|simples nacional|icms|iss\b|pis|cofins|obriga[cç][oõ]es acess)\w*/i,
  ambiental: /\b(ambient|licenciamento|res[ií]duo|sustentabilidade|esg|emiss[oõ]es)\w*/i,
};

/** Sugere a área de atendimento mais adequada. Não é diagnóstico nem parecer técnico. */
export function suggestArea(answers: Answers): AreaSugerida {
  const areas = answers.servicos.map((id) => getService(id)?.shortTitle ?? id);
  const publico = isPublico(answers.porte);

  let observacao: string | undefined;
  if (publico) {
    observacao =
      "Órgão ou entidade da Administração Pública: avaliar serviços compatíveis com sua natureza e com as normas aplicáveis.";
  }

  if (areas.length === 0) {
    const text = [
      answers.descricao,
      answers.necessidadeIntegrada,
      ...Object.values(answers.tipoDetalhes),
      publico ? answers.necessidadeSetorPublico : "",
    ].join(" ");
    for (const service of services) {
      if (KEYWORDS[service.id].test(text)) areas.push(service.shortTitle);
    }
  }
  return observacao ? { areas, observacao } : { areas };
}

const line = (label: string, value: string | undefined) =>
  value && value.trim() ? `${label}: ${value.trim()}` : null;

export function servicosResumo(answers: Answers): string[] {
  const out: string[] = [];
  for (const id of answers.servicos) {
    const service = getService(id);
    if (!service) continue;
    const subs = (answers.subopcoes[id] ?? []).map((option) =>
      option === "Outra" && answers.subopcaoOutra[id]?.trim()
        ? `Outra: ${answers.subopcaoOutra[id]!.trim()}`
        : option,
    );
    out.push(subs.length ? `${service.shortTitle} (${subs.join("; ")})` : service.shortTitle);
  }
  if (answers.servicoIndefinido) out.push("Ainda não sei qual serviço preciso");
  return out;
}

const TIPO_LABELS: Record<string, string> = Object.fromEntries(
  Object.values(TIPO_FIELDS)
    .flat()
    .map((field) => [field.key, field.summaryLabel]),
);

export function tipoDetalhesPairs(answers: Answers): [string, string][] {
  return Object.entries(answers.tipoDetalhes)
    .filter(([, value]) => value && value.trim())
    .map(([key, value]) => [TIPO_LABELS[key] ?? key, value.trim()]);
}

export function tipoDetalhesResumo(answers: Answers): string[] {
  return tipoDetalhesPairs(answers).map(([label, value]) => `${label}: ${value}`);
}

/** Resumo organizado para a equipe (texto simples). */
export function buildTeamSummary(answers: Answers): string {
  const area = suggestArea(answers);
  const origem = answers.origem
    ? [
        answers.origem,
        answers.origemDetalhe.trim(),
        answers.indicadoPor.trim() ? `indicado por ${answers.indicadoPor.trim()}` : "",
      ]
        .filter(Boolean)
        .join(" | ")
    : "Não informada";
  const sections: (string | null)[] = [
    "RESPONSÁVEL",
    line("Nome", answers.nome),
    line("Cargo/função", answers.cargo),
    line("Telefone", answers.telefone),
    line("WhatsApp", answers.whatsapp),
    line("E-mail", answers.email),
    "",
    "ORGANIZAÇÃO",
    line("Nome", answers.organizacao),
    line("CNPJ", answers.cnpj),
    line("Porte", answers.porte || "Não informado"),
    line(
      "Faturamento bruto anual (qualificação comercial)",
      answers.faturamento || "Não informado",
    ),
    isPublico(answers.porte)
      ? line("Natureza da entidade", answers.naturezaEntidade || "Não informada")
      : line("Regime tributário informado", answers.regime || "Não informado"),
    isPublico(answers.porte)
      ? line("Necessidade no setor público", answers.necessidadeSetorPublico)
      : null,
    line("Localização", [answers.cidade.trim(), answers.estado].filter(Boolean).join("/")),
    line("Região de atendimento", answers.regiao),
    line("Modalidade", answers.modalidade || "Não informada"),
    "",
    "ORIGEM DO CONTATO",
    origem,
    "",
    "NECESSIDADE",
    line("Serviços de interesse", servicosResumo(answers).join(" | ") || "Não informado"),
    line("Necessidade integrada", answers.necessidadeIntegrada),
    line("Tipo de atendimento", answers.tipo),
    ...tipoDetalhesResumo(answers),
    line("Descrição", answers.descricao),
    line("Prazo desejado", answers.prazo || "Não informado"),
    "",
    "DIRECIONAMENTO SUGERIDO (organização do atendimento, sem diagnóstico ou parecer técnico)",
    area.areas.length ? area.areas.join(" | ") : "A definir pela equipe",
    area.observacao ?? null,
  ];
  return sections.filter((section): section is string => section !== null).join("\n");
}

/** Mensagem de WhatsApp com resumo NÃO sensível: nome, serviço de interesse e tipo de atendimento. */
export function buildWhatsAppSummary(answers: Answers): string {
  const nome = answers.nome.trim();
  const servicos = servicosResumo(answers)
    .map((service) => service.replace(/\s*\(.*\)$/, ""))
    .join(", ");
  const parts = [
    "Olá! Acessei o site da Carvalho Soluções em Auditoria e iniciei um pedido de atendimento.",
  ];
  if (nome) parts.push(`Nome: ${nome}`);
  if (servicos) parts.push(`Serviço de interesse: ${servicos}`);
  if (answers.tipo) parts.push(`Tipo de atendimento: ${answers.tipo}`);
  return parts.join("\n");
}

/** Dados enviados ao servidor. */
export type AtendimentoPayload = {
  clientSubmissionId: string;
  answers: Answers;
  /** Honeypot anti-spam: deve ficar vazio. */
  website: string;
};
