import { isValidEmail, isValidPhone } from "@/lib/atendimento/validation";

/**
 * Validação dos campos do formulário de contato.
 * Cada campo obrigatório tem um mínimo de caracteres; a mensagem de erro
 * combina o texto original do campo com o mínimo configurado aqui.
 */
export const contactFields = {
  nome: { min: 2, message: "Informe seu nome" },
  organizacao: { min: 2, message: "Informe a organização" },
  assunto: { min: 3, message: "Informe o assunto" },
  mensagem: { min: 10, message: "Descreva brevemente sua necessidade" },
} as const;

export type ContactFieldName = keyof typeof contactFields | "contato";
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export function validateContactField(name: ContactFieldName, value: string): string | undefined {
  if (name === "contato") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    if (isValidEmail(trimmed) || isValidPhone(trimmed)) return undefined;
    return "Informe um e-mail ou telefone com DDD válido ou deixe em branco";
  }
  const field = contactFields[name];
  if (value.trim().length >= field.min) return undefined;
  return `${field.message} (min de caracteres: ${field.min})`;
}

export function validateContactForm(values: Record<string, string>): ContactErrors {
  const errors: ContactErrors = {};
  const allFields: ContactFieldName[] = ["nome", "organizacao", "contato", "assunto", "mensagem"];
  for (const name of allFields) {
    const error = validateContactField(name, values[name] ?? "");
    if (error) errors[name] = error;
  }
  return errors;
}

export function hasContactErrors(errors: ContactErrors): boolean {
  return Object.values(errors).some(Boolean);
}
