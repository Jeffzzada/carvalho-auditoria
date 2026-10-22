import type { ServiceId } from "@/lib/content";

/** Opções do assistente de Atendimento. Edite rótulos aqui. */

export const PORTES = [
  "MEI",
  "Microempresa (ME)",
  "Empresa de Pequeno Porte (EPP)",
  "Médio Porte",
  "Grande Porte",
  "Órgão ou entidade da Administração Pública",
  "Outro",
  "Não sei informar",
] as const;
export type Porte = (typeof PORTES)[number];
export const PORTE_PUBLICO: Porte = "Órgão ou entidade da Administração Pública";

export const FATURAMENTOS = [
  "Até R$ 81 mil",
  "R$ 81 mil a R$ 360 mil",
  "R$ 360 mil a R$ 4,8 milhões",
  "R$ 4,8 a R$ 10 milhões",
  "R$ 10 a R$ 50 milhões",
  "Acima de R$ 50 milhões",
  "Prefiro informar depois",
  "Não se aplica",
] as const;

export const REGIMES_TODOS = [
  "MEI",
  "Simples Nacional",
  "Lucro Presumido",
  "Lucro Real",
  "Outro regime ou situação específica",
  "Não sei informar",
  "Não se aplica",
] as const;
export type Regime = (typeof REGIMES_TODOS)[number];

/**
 * Regimes oferecidos conforme o porte informado. Nunca sugere enquadramento a partir do faturamento.
 * MEI/ME: não oferece Lucro Presumido/Real para MEI; Simples/MEI não aparecem com Lucro Real/Presumido na mesma lista.
 */
export function regimesParaPorte(porte: string): readonly Regime[] {
  const comuns: Regime[] = [
    "Outro regime ou situação específica",
    "Não sei informar",
    "Não se aplica",
  ];
  switch (porte) {
    case "MEI":
      return ["MEI", ...comuns];
    case "Microempresa (ME)":
    case "Empresa de Pequeno Porte (EPP)":
      return ["Simples Nacional", "Lucro Presumido", "Lucro Real", ...comuns];
    case "Médio Porte":
    case "Grande Porte":
      return ["Lucro Presumido", "Lucro Real", ...comuns];
    default:
      return REGIMES_TODOS;
  }
}

export const NATUREZAS_PUBLICAS = [
  "Administração direta (órgão da União, estado ou município)",
  "Autarquia ou fundação pública",
  "Empresa pública ou sociedade de economia mista",
  "Poder Legislativo, Judiciário, Ministério Público ou Tribunal de Contas",
  "Consórcio ou outra entidade pública",
  "Outra natureza",
  "Não sei informar",
] as const;

export const NECESSIDADES_PUBLICAS = [
  "Auditoria de sistemas e TI",
  "Auditoria financeira e contábil",
  "Auditoria fiscal e tributária",
  "Auditoria ambiental",
  "Ainda não sei informar",
] as const;

export const MODALIDADES = ["Remoto", "Presencial", "Híbrido", "Ainda não definido"] as const;

export const ESTADOS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;

export const ORIGENS = [
  "Indicação de cliente/parceiro",
  "Indicação de contador/escritório contábil",
  "Google ou buscador",
  "Instagram/rede social",
  "LinkedIn",
  "Site ou conteúdo institucional",
  "Evento/palestra/contato profissional",
  "Prospecção da própria empresa",
  "Já conhecia",
  "Outro",
] as const;
export const ORIGENS_INDICACAO: readonly string[] = [ORIGENS[0], ORIGENS[1]];
export const ORIGEM_OUTRO = "Outro";

export const SERVICO_INDEFINIDO = "indefinido" as const;

export const SUBOPCOES: Record<ServiceId, readonly string[]> = {
  ti: [
    "Segurança da informação",
    "Controles internos de TI",
    "Riscos tecnológicos",
    "LGPD e proteção de dados",
    "Governança de TI",
    "Outra",
  ],
  contabil: [
    "Registros e demonstrações contábeis",
    "Controles internos",
    "Processos financeiros",
    "Inconsistências",
    "Outra",
  ],
  fiscal: [
    "Apuração de tributos",
    "Obrigações acessórias",
    "Inconsistências fiscais",
    "Riscos tributários",
    "Regularização fiscal",
    "Outra",
  ],
  ambiental: [
    "Controles ambientais",
    "Conformidade",
    "Riscos",
    "Gestão e indicadores de sustentabilidade",
    "Outra",
  ],
};
export const SUBOPCAO_OUTRA = "Outra";

export const TIPOS = [
  "Consultoria ou orientação técnica",
  "Contratação de serviço",
  "Diagnóstico inicial",
  "Esclarecimento de dúvidas",
  "Solicitação de proposta comercial",
  "Outro",
] as const;
export type Tipo = (typeof TIPOS)[number];

export const SIM_NAO = ["Sim", "Não", "Em parte"] as const;

export const AREAS_DUVIDA = [
  "Sistemas e TI",
  "Financeira e Contábil",
  "Fiscal e Tributária",
  "Ambiental",
  "Outra área",
] as const;

export const PRAZOS = [
  "Urgente",
  "Próximos 7 dias",
  "Próximos 30 dias",
  "Sem prazo definido",
  "Apenas obter informações",
] as const;
