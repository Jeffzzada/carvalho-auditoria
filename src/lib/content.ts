import { ClipboardList, Scale, Database, SearchCheck, ShieldCheck, FileText, BadgeCheck, FileSearch, Lock, Handshake, TrendingUp } from "lucide-react";

export const services = [
  {
    icon: ClipboardList,
    title: "Levantamento físico patrimonial",
    text: "Verificação física dos bens patrimoniais, com identificação, localização e confronto com as informações disponibilizadas pela organização.",
    message:
      "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de levantamento físico patrimonial.",
  },
  {
    icon: Scale,
    title: "Conciliação físico-contábil",
    text: "Comparação entre os bens identificados fisicamente e os respectivos registros contábeis e patrimoniais, visando identificar divergências e inconsistências.",
    message:
      "Olá! Gostaria de conhecer melhor o serviço de conciliação físico-contábil oferecido pela Carvalho Soluções em Auditoria.",
  },
  {
    icon: Database,
    title: "Análise cadastral do ativo imobilizado",
    text: "Verificação dos cadastros patrimoniais e das informações disponíveis para apoiar a consistência e a organização da base de bens.",
    message:
      "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de análise cadastral do ativo imobilizado.",
  },
  {
    icon: SearchCheck,
    title: "Identificação de divergências patrimoniais",
    text: "Levantamento de diferenças entre os registros existentes e as informações verificadas durante os procedimentos contratados.",
    message:
      "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de identificação de divergências patrimoniais.",
  },
  {
    icon: ShieldCheck,
    title: "Apoio ao controle patrimonial",
    text: "Contribuição para o aprimoramento dos processos de controle, identificação, acompanhamento e organização dos bens.",
    message:
      "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o apoio ao controle patrimonial.",
  },
  {
    icon: FileText,
    title: "Relatórios e apresentação de resultados",
    text: "Organização dos resultados dos procedimentos executados, com apresentação dos apontamentos identificados e das informações pertinentes ao escopo contratado.",
    message:
      "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre relatórios e apresentação de resultados.",
  },
];

export const values = [
  "Precisão técnica",
  "Transparência",
  "Organização",
  "Confidencialidade",
  "Compromisso com a qualidade",
  "Atendimento profissional",
];

export const differentials = [
  "Análise estruturada das informações patrimoniais.",
  "Procedimentos alinhados ao escopo contratado.",
  "Comunicação clara durante o atendimento.",
  "Organização dos apontamentos identificados.",
  "Atenção à confidencialidade das informações.",
  "Atendimento direcionado às necessidades da organização.",
];

export const steps = [
  { n: "01", title: "Primeiro contato", text: "O cliente apresenta sua necessidade inicial pelo WhatsApp." },
  {
    n: "02",
    title: "Entendimento da demanda",
    text: "A equipe busca compreender as características do patrimônio, as informações disponíveis e os objetivos pretendidos.",
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
    q: "O que é auditoria de ativo imobilizado?",
    a: "É um conjunto de procedimentos voltados à verificação e análise de informações relacionadas aos bens de uma organização, conforme o objetivo e o escopo do trabalho contratado.",
  },
  {
    q: "Qual a diferença entre levantamento físico e conciliação físico-contábil?",
    a: "O levantamento físico envolve a identificação e verificação dos bens. A conciliação físico-contábil compara os resultados dessa verificação com os registros contábeis e patrimoniais disponíveis.",
  },
  {
    q: "A empresa atende organizações públicas e privadas?",
    a: "O site está direcionado aos dois segmentos. A possibilidade de atendimento de cada demanda deverá ser confirmada conforme os requisitos e as condições aplicáveis à contratação.",
  },
  {
    q: "Como solicitar uma proposta?",
    a: "Entre em contato pelo WhatsApp e apresente brevemente a necessidade da sua organização. A equipe poderá orientar sobre as informações necessárias para avaliar a demanda.",
  },
  {
    q: "Quanto custa uma auditoria de ativo imobilizado?",
    a: "O valor depende de fatores como quantidade e distribuição dos bens, complexidade da operação, informações disponíveis, procedimentos necessários e prazo solicitado. Entre em contato para discutir as características da sua demanda.",
  },
];

export const mission = {
  title: "Missão",
  text: "Contribuir para a confiabilidade das informações patrimoniais das organizações por meio de serviços especializados em auditoria de ativo imobilizado, promovendo maior controle, transparência e segurança na gestão dos bens.",
};

export const vision = {
  title: "Visão",
  text: "Ser reconhecida pela qualidade técnica, confiabilidade e excelência na prestação de serviços de auditoria de ativo imobilizado, tornando-se referência para organizações públicas e privadas na gestão e no controle patrimonial.",
};

export const coreValues = [
  { icon: ShieldCheck, title: "Ética e integridade", text: "Atuação responsável, transparente e comprometida com a verdade." },
  { icon: Scale, title: "Rigor técnico", text: "Procedimentos criteriosos e fundamentados nas normas aplicáveis ao trabalho." },
  { icon: BadgeCheck, title: "Confiabilidade", text: "Compromisso com a qualidade das informações e dos resultados apresentados." },
  { icon: FileSearch, title: "Transparência", text: "Comunicação clara sobre procedimentos, limitações e conclusões." },
  { icon: Lock, title: "Confidencialidade", text: "Proteção das informações e dos documentos dos clientes." },
  { icon: Handshake, title: "Compromisso com o cliente", text: "Atendimento profissional, respeitando as necessidades de cada organização." },
  { icon: TrendingUp, title: "Melhoria contínua", text: "Aperfeiçoamento de métodos, processos e conhecimentos técnicos." },
];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/perguntas-frequentes", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;
