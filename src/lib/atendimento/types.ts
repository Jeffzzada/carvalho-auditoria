import type { ServiceId } from "@/lib/content";

export type Answers = {
  // Etapa 1: responsável
  nome: string;
  cargo: string;
  organizacao: string;
  cnpj: string;
  telefone: string;
  whatsapp: string;
  email: string;
  // Etapa 2: porte e faturamento
  porte: string;
  faturamento: string;
  // Etapa 3: regime (ou natureza da entidade, para a Administração Pública)
  regime: string;
  naturezaEntidade: string;
  necessidadeSetorPublico: string;
  // Etapa 4: localização
  cidade: string;
  estado: string;
  regiao: string;
  modalidade: string;
  // Etapa 5: origem
  origem: string;
  origemDetalhe: string;
  indicadoPor: string;
  // Etapa 6: serviços
  servicos: ServiceId[];
  servicoIndefinido: boolean;
  subopcoes: Partial<Record<ServiceId, string[]>>;
  subopcaoOutra: Partial<Record<ServiceId, string>>;
  necessidadeIntegrada: string;
  // Etapa 7: tipo de atendimento (e perguntas condicionais)
  tipo: string;
  tipoDetalhes: Record<string, string>;
  // Etapa 8: detalhamento
  descricao: string;
  prazo: string;
  // Etapa 9: consentimentos
  consentimentoPrivacidade: boolean;
  consentimentoMarketing: boolean;
};

export const emptyAnswers: Answers = {
  nome: "",
  cargo: "",
  organizacao: "",
  cnpj: "",
  telefone: "",
  whatsapp: "",
  email: "",
  porte: "",
  faturamento: "",
  regime: "",
  naturezaEntidade: "",
  necessidadeSetorPublico: "",
  cidade: "",
  estado: "",
  regiao: "",
  modalidade: "",
  origem: "",
  origemDetalhe: "",
  indicadoPor: "",
  servicos: [],
  servicoIndefinido: false,
  subopcoes: {},
  subopcaoOutra: {},
  necessidadeIntegrada: "",
  tipo: "",
  tipoDetalhes: {},
  descricao: "",
  prazo: "",
  consentimentoPrivacidade: false,
  consentimentoMarketing: false,
};

export type ScreenId =
  | "boas-vindas"
  | "responsavel"
  | "porte"
  | "faturamento"
  | "regime"
  | "localizacao"
  | "modalidade"
  | "origem"
  | "servicos"
  | "tipo"
  | "tipo-detalhes"
  | "detalhamento"
  | "revisao";

/** Telas de pergunta, na ordem. A tela de boas-vindas e a de sucesso ficam fora do progresso. */
export const SCREEN_ORDER: ScreenId[] = [
  "responsavel",
  "porte",
  "faturamento",
  "regime",
  "localizacao",
  "modalidade",
  "origem",
  "servicos",
  "tipo",
  "tipo-detalhes",
  "detalhamento",
  "revisao",
];

export type FieldErrors = Record<string, string | undefined>;
