/**
 * Configuração central do site.
 *
 * Todos os dados institucionais ficam aqui. Campos vazios ("") NÃO são exibidos
 * em nenhum ponto do site: preencha somente com informações confirmadas pela empresa.
 */
export const siteConfig = {
  name: "Carvalho Soluções em Auditoria",

  /** WhatsApp oficial. `number` = formato internacional (55 + DDD + número), só dígitos. */
  whatsapp: {
    number: "5571984501050",
    display: "(71) 98450-1050",
  },

  /** E-mail comercial: preencher quando confirmado (vazio = oculto). */
  email: "",
  /** Cidade/UF ou área de atendimento: preencher quando confirmada. */
  serviceArea: "",
  /** Horário de atendimento: preencher quando definido. */
  businessHours: "",
  /** Razão social e CNPJ para o Aviso de Privacidade: preencher quando confirmados. */
  legalName: "",
  cnpj: "",
} as const;
