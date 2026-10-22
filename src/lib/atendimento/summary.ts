import { getService, services, type ServiceId } from "@/lib/content";
import { SERVICO_INDEFINIDO } from "./options";
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
export function suggestArea(a: Answers): AreaSugerida {
  const areas = a.servicos.map((id) => getService(id)?.shortTitle ?? id);
  const publico = isPublico(a.porte);

  let observacao: string | undefined;
  if (publico) {
    observacao =
      "Órgão ou entidade da Administração Pública: avaliar serviços compatíveis com sua natureza e com as normas aplicáveis.";
  }

  if (areas.length === 0) {
    const text = [
      a.descricao,
      a.necessidadeIntegrada,
      ...Object.values(a.tipoDetalhes),
      a.necessidadeSetorPublico,
    ].join(" ");
    for (const s of services) {
      if (KEYWORDS[s.id].test(text)) areas.push(s.shortTitle);
    }
  }
  return observacao ? { areas, observacao } : { areas };
}

const line = (label: string, value: string | undefined) =>
  value && value.trim() ? `${label}: ${value.trim()}` : null;

export function servicosResumo(a: Answers): string[] {
  const out: string[] = [];
  for (const id of a.servicos) {
    const s = getService(id);
    if (!s) continue;
    const subs = (a.subopcoes[id] ?? []).map((o) =>
      o === "Outra" && a.subopcaoOutra[id]?.trim() ? `Outra: ${a.subopcaoOutra[id]!.trim()}` : o,
    );
    out.push(subs.length ? `${s.shortTitle} (${subs.join("; ")})` : s.shortTitle);
  }
  if (a.servicoIndefinido) out.push("Ainda não sei qual serviço preciso");
  return out;
}

const TIPO_LABELS: Record<string, string> = {
  duvida: "Dúvida, problema ou decisão",
  objetivo: "Objetivo",
  escopo: "Escopo pretendido",
  docPrevia: "Documentação ou definição prévia",
  riscos: "Principais riscos, dificuldades ou processos",
  area: "Área relacionada",
  escopoDefinido: "Escopo definido",
  prazoDesejado: "Prazo desejado",
  condicoes: "Condições relevantes",
  outroDescricao: "Detalhe",
};

export function tipoDetalhesResumo(a: Answers): string[] {
  return Object.entries(a.tipoDetalhes)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${TIPO_LABELS[k] ?? k}: ${v.trim()}`);
}

/** Resumo organizado para a equipe (texto simples). */
export function buildTeamSummary(a: Answers): string {
  const area = suggestArea(a);
  const origem = a.origem
    ? [
        a.origem,
        a.origemDetalhe.trim(),
        a.indicadoPor.trim() ? `indicado por ${a.indicadoPor.trim()}` : "",
      ]
        .filter(Boolean)
        .join(" | ")
    : "Não informada";
  const sections: (string | null)[] = [
    "RESPONSÁVEL",
    line("Nome", a.nome),
    line("Cargo/função", a.cargo),
    line("Telefone", a.telefone),
    line("WhatsApp", a.whatsapp),
    line("E-mail", a.email),
    "",
    "ORGANIZAÇÃO",
    line("Nome", a.organizacao),
    line("CNPJ", a.cnpj),
    line("Porte", a.porte || "Não informado"),
    line("Faturamento bruto anual (qualificação comercial)", a.faturamento || "Não informado"),
    isPublico(a.porte)
      ? line("Natureza da entidade", a.naturezaEntidade || "Não informada")
      : line("Regime tributário informado", a.regime || "Não informado"),
    isPublico(a.porte) ? line("Necessidade no setor público", a.necessidadeSetorPublico) : null,
    line("Localização", [a.cidade.trim(), a.estado].filter(Boolean).join("/")),
    line("Região de atendimento", a.regiao),
    line("Modalidade", a.modalidade || "Não informada"),
    "",
    "ORIGEM DO CONTATO",
    origem,
    "",
    "NECESSIDADE",
    line("Serviços de interesse", servicosResumo(a).join(" | ") || "Não informado"),
    line("Necessidade integrada", a.necessidadeIntegrada),
    line("Tipo de atendimento", a.tipo),
    ...tipoDetalhesResumo(a),
    line("Descrição", a.descricao),
    line("Prazo desejado", a.prazo || "Não informado"),
    "",
    "DIRECIONAMENTO SUGERIDO (organização do atendimento, sem diagnóstico ou parecer técnico)",
    area.areas.length ? area.areas.join(" | ") : "A definir pela equipe",
    area.observacao ?? null,
  ];
  return sections.filter((s): s is string => s !== null).join("\n");
}

/** Mensagem de WhatsApp com resumo NÃO sensível: nome, serviço de interesse e tipo de atendimento. */
export function buildWhatsAppSummary(a: Answers): string {
  const nome = a.nome.trim();
  const servicos = servicosResumo(a)
    .map((s) => s.replace(/\s*\(.*\)$/, ""))
    .join(", ");
  const parts = [
    "Olá! Acessei o site da Carvalho Soluções em Auditoria e iniciei um pedido de atendimento.",
  ];
  if (nome) parts.push(`Nome: ${nome}`);
  if (servicos) parts.push(`Serviço de interesse: ${servicos}`);
  if (a.tipo) parts.push(`Tipo de atendimento: ${a.tipo}`);
  return parts.join("\n");
}

/** Dados enviados ao servidor. */
export type AtendimentoPayload = {
  clientSubmissionId: string;
  answers: Answers;
  /** Honeypot anti-spam: deve ficar vazio. */
  website: string;
};

export const SERVICO_INDEFINIDO_ID = SERVICO_INDEFINIDO;
