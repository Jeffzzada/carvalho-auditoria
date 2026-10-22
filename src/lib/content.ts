import {
  Monitor,
  Landmark,
  Receipt,
  Leaf,
  ShieldCheck,
  Scale,
  FileSearch,
  Lock,
  TrendingUp,
  Gavel,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type ServiceId = "ti" | "contabil" | "fiscal" | "ambiental";

export type Service = {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  /** Nome curto, usado em resumos e mensagens. */
  shortTitle: string;
  objective: string;
  fronts: string[];
  benefits: string[];
  /** Perfis atendidos (opcional). */
  profiles?: string[];
  /** Aviso/limite de escopo exibido junto do serviço. */
  notice?: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    id: "ti",
    icon: Monitor,
    title: "Auditoria de Sistemas e Tecnologia da Informação",
    shortTitle: "Sistemas e TI",
    objective:
      "Ajudar a identificar fragilidades, avaliar riscos e aprimorar os controles tecnológicos da organização, conforme o escopo contratado.",
    fronts: [
      "Controles internos de TI",
      "Análise de riscos tecnológicos",
      "Controles de acesso e segurança da informação",
      "Proteção e tratamento de dados pessoais (processos e controles relacionados à LGPD)",
      "Governança e gestão de riscos de TI",
      "Continuidade e segurança operacional",
    ],
    benefits: [
      "Maior visibilidade sobre riscos e fragilidades tecnológicas",
      "Apoio ao aprimoramento dos controles de acesso e de segurança da informação",
      "Subsídios para a gestão de riscos e para a tomada de decisão",
    ],
    notice:
      "A avaliação não constitui certificação de conformidade com a LGPD nem garante segurança absoluta dos sistemas e dos dados.",
    ctaLabel: "Solicite uma avaliação de TI",
  },
  {
    id: "contabil",
    icon: Landmark,
    title: "Auditoria Financeira e Contábil",
    shortTitle: "Financeira e Contábil",
    objective:
      "Apoiar empresas privadas e organizações públicas na avaliação de registros, procedimentos e controles financeiros e contábeis, conforme o escopo contratado.",
    fronts: [
      "Análise de registros e documentos contábeis",
      "Avaliação de demonstrações contábeis",
      "Revisão de procedimentos financeiros",
      "Controles internos",
      "Inconsistências e riscos financeiros",
      "Conciliações e documentação",
      "Confiabilidade das informações de gestão",
    ],
    benefits: [
      "Mais organização das informações financeiras e contábeis",
      "Identificação de fragilidades nos registros e nos procedimentos",
      "Controles internos fortalecidos",
      "Apoio à tomada de decisão",
    ],
    notice:
      "Trabalhos de consultoria, revisão e procedimentos acordados são diferentes de auditoria independente de demonstrações contábeis. Não anunciamos asseguração independente nem emissão de opinião de auditoria sem o atendimento dos requisitos profissionais e legais aplicáveis.",
    ctaLabel: "Solicite um atendimento contábil e financeiro",
  },
  {
    id: "fiscal",
    icon: Receipt,
    title: "Auditoria Fiscal e Tributária",
    shortTitle: "Fiscal e Tributária",
    objective:
      "Avaliar apurações, documentos e obrigações fiscais para identificar inconsistências e riscos tributários, respeitando as particularidades de cada regime.",
    fronts: [
      "Revisão da apuração de tributos",
      "Documentos e registros fiscais",
      "Obrigações acessórias",
      "Inconsistências e riscos tributários",
      "Controles internos fiscais",
      "Divergências entre documentos, escriturações e declarações",
      "Tributos federais, estaduais e municipais",
      "Orientação técnica de melhoria e regularização, quando aplicável",
    ],
    benefits: [
      "Mais organização dos documentos e dos registros fiscais",
      "Identificação de inconsistências e de riscos tributários",
      "Apoio ao aprimoramento dos controles internos fiscais",
    ],
    profiles: ["MEI", "Simples Nacional", "Lucro Presumido", "Lucro Real"],
    notice:
      "A avaliação não garante redução de tributos nem recuperação de créditos. Os resultados dependem da documentação analisada e do escopo contratado.",
    ctaLabel: "Solicite uma avaliação fiscal e tributária",
  },
  {
    id: "ambiental",
    icon: Leaf,
    title: "Auditoria Ambiental",
    shortTitle: "Ambiental",
    objective:
      "Avaliar controles, procedimentos e práticas de gestão ambiental, apoiando a gestão responsável, a prevenção de riscos e a melhoria contínua.",
    fronts: [
      "Controles e procedimentos ambientais",
      "Conformidade ambiental",
      "Riscos e fragilidades",
      "Práticas de gestão ambiental",
      "Monitoramento de indicadores",
      "Controles e informações de sustentabilidade",
      "Oportunidades de melhoria",
    ],
    benefits: [
      "Gestão responsável dos aspectos ambientais",
      "Prevenção de riscos por meio da identificação de fragilidades",
      "Apoio à melhoria contínua dos controles e dos indicadores",
    ],
    notice: "A avaliação não constitui licenciamento nem atestado de conformidade ambiental.",
    ctaLabel: "Solicite uma avaliação ambiental",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export const differentials = [
  "Análise estruturada das informações e dos processos.",
  "Procedimentos alinhados ao escopo contratado.",
  "Comunicação clara durante o atendimento.",
  "Organização dos apontamentos identificados.",
  "Atenção à confidencialidade das informações.",
  "Atendimento direcionado às necessidades de cada organização.",
];

export const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "A organização apresenta sua necessidade inicial pelo assistente de Atendimento ou pelo WhatsApp.",
  },
  {
    n: "02",
    title: "Entendimento da demanda",
    text: "A equipe busca compreender as características da organização, as informações disponíveis e os objetivos pretendidos.",
  },
  {
    n: "03",
    title: "Proposta e definição do escopo",
    text: "São alinhados os serviços, os procedimentos, os prazos, os documentos necessários e as condições comerciais.",
  },
  {
    n: "04",
    title: "Execução dos serviços",
    text: "Os procedimentos são realizados conforme o escopo acordado, com apresentação dos resultados previstos na contratação.",
  },
];

export const faqs = [
  {
    q: "Quais serviços a Carvalho Soluções em Auditoria oferece?",
    a: "Auditoria de Sistemas e Tecnologia da Informação, Auditoria Financeira e Contábil, Auditoria Fiscal e Tributária e Auditoria Ambiental, sempre conforme o escopo contratado.",
  },
  {
    q: "Os serviços incluem auditoria independente de demonstrações contábeis?",
    a: "Trabalhos de consultoria, revisão e procedimentos acordados são diferentes de auditoria independente de demonstrações contábeis. Não anunciamos asseguração independente nem emissão de opinião de auditoria sem o atendimento dos requisitos profissionais e legais aplicáveis.",
  },
  {
    q: "A empresa atende organizações públicas e privadas?",
    a: "O site está direcionado aos dois segmentos. A possibilidade de atendimento de cada demanda é avaliada conforme os requisitos e as condições aplicáveis à contratação.",
  },
  {
    q: "Preciso saber meu porte, faturamento ou regime tributário para solicitar atendimento?",
    a: "Não. Essas informações servem apenas para organizar o atendimento e podem ser deixadas em branco ou respondidas como “não sei informar”. Elas não impedem a solicitação.",
  },
  {
    q: "Como solicitar uma proposta?",
    a: "Acesse a aba Atendimento, responda às perguntas rápidas e envie sua solicitação. Se preferir, fale diretamente pelo WhatsApp. A equipe poderá orientar sobre as informações necessárias para avaliar a demanda.",
  },
  {
    q: "Quanto custa um serviço de auditoria?",
    a: "O valor depende de fatores como o serviço escolhido, a complexidade da operação, as informações disponíveis, os procedimentos necessários e o prazo solicitado. Entre em contato para discutir as características da sua demanda.",
  },
  {
    q: "Como as informações enviadas são tratadas?",
    a: "As informações são usadas apenas para organizar o atendimento e permitir o retorno da equipe. Consulte o Aviso de Privacidade para mais detalhes.",
  },
];

/** Missão e Visão: textos editáveis. */
export const mission = {
  title: "Missão",
  text: "Oferecer soluções de auditoria e avaliação de controles que contribuam para a transparência, a segurança, a conformidade e a melhoria dos processos organizacionais.",
};

export const vision = {
  title: "Visão",
  text: "Consolidar-se como uma empresa de referência em soluções de auditoria, reconhecida pela qualidade técnica, pela confiança e pela contribuição à gestão responsável das organizações.",
};

/** Valores: 7 cards com ícone. Edite título e texto aqui. */
export const coreValues = [
  {
    icon: ShieldCheck,
    title: "Ética",
    text: "Atuação responsável, transparente e comprometida com a verdade.",
  },
  {
    icon: Gavel,
    title: "Independência",
    text: "Condução imparcial dos trabalhos, conforme o escopo contratado.",
  },
  {
    icon: FileSearch,
    title: "Transparência",
    text: "Comunicação clara sobre procedimentos, limitações e conclusões.",
  },
  {
    icon: UserCheck,
    title: "Responsabilidade",
    text: "Zelo pelas informações recebidas e pelos procedimentos executados.",
  },
  {
    icon: Scale,
    title: "Excelência técnica",
    text: "Procedimentos criteriosos e fundamentados nas normas aplicáveis ao trabalho.",
  },
  {
    icon: Lock,
    title: "Confidencialidade",
    text: "Proteção das informações e dos documentos dos clientes.",
  },
  {
    icon: TrendingUp,
    title: "Compromisso com a melhoria contínua",
    text: "Aperfeiçoamento de métodos, processos e conhecimentos técnicos.",
  },
];

export const segments = [
  {
    title: "Empresas privadas",
    text: "Serviços direcionados às necessidades de empresas de diferentes portes e regimes tributários, conforme as características de seus processos, registros e controles internos.",
  },
  {
    title: "Organizações públicas",
    text: "Serviços compatíveis com a natureza de órgãos e entidades da Administração Pública, respeitando as normas aplicáveis, o escopo contratado e os procedimentos pertinentes a cada instituição.",
  },
];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/atendimento", label: "Atendimento" },
  { to: "/contato", label: "Contato" },
] as const;
