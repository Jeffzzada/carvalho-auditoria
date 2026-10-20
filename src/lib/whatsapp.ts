/** Número comercial do WhatsApp no formato internacional, apenas dígitos: 55 + DDD + número. */
export const WHATSAPP_NUMBER = "5571984501050";

/** Número do WhatsApp no formato exibido nos textos do site. */
export const WHATSAPP_DISPLAY = "(71) 98450-1050";

/** E-mail oficial — preencher quando fornecido (deixe vazio para ocultar). */
export const CONTACT_EMAIL = "servicos@carvalho.auditoria.com";
/** Localização / área de atendimento — preencher quando confirmada. */
export const SERVICE_AREA = "";
/** Horário comercial — preencher quando definido. */
export const BUSINESS_HOURS = "";

export const DEFAULT_MESSAGE =
  "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de obter informações sobre os serviços de auditoria de ativo imobilizado.";

export const PUBLIC_SECTOR_MESSAGE =
  "Olá! Represento uma instituição pública e gostaria de informações sobre os serviços patrimoniais oferecidos pela Carvalho Soluções em Auditoria.";

export const PRIVATE_SECTOR_MESSAGE =
  "Olá! Represento uma empresa privada e gostaria de informações sobre os serviços patrimoniais oferecidos pela Carvalho Soluções em Auditoria.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
