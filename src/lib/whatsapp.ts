import { siteConfig } from "@/config/site";

/** Número comercial do WhatsApp no formato internacional, apenas dígitos: 55 + DDD + número. */
export const WHATSAPP_NUMBER: string = siteConfig.whatsapp.number;

/** Número do WhatsApp no formato exibido nos textos do site. */
export const WHATSAPP_DISPLAY: string = siteConfig.whatsapp.display;

/** Campos opcionais de contato (vazios ficam ocultos). */
export const CONTACT_EMAIL: string = siteConfig.email;
export const SERVICE_AREA: string = siteConfig.serviceArea;
export const BUSINESS_HOURS: string = siteConfig.businessHours;

export const DEFAULT_MESSAGE =
  "Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de obter informações sobre os serviços.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
