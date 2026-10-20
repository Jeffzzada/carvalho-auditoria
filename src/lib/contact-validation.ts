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

export type ContactFieldName = keyof typeof contactFields;
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export function validateContactField(name: ContactFieldName, value: string): string | undefined {
  const field = contactFields[name];
  if (value.trim().length >= field.min) return undefined;
  return `${field.message} (min de caracteres: ${field.min})`;
}

export function validateContactForm(values: Record<string, string>): ContactErrors {
  const errors: ContactErrors = {};
  for (const name of Object.keys(contactFields) as ContactFieldName[]) {
    const error = validateContactField(name, values[name] ?? "");
    if (error) errors[name] = error;
  }
  return errors;
}

export function hasContactErrors(errors: ContactErrors): boolean {
  return Object.values(errors).some(Boolean);
}
