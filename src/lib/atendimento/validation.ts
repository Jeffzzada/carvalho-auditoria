import { ORIGENS_INDICACAO, ORIGEM_OUTRO, PORTE_PUBLICO } from "./options";
import type { Answers, FieldErrors, ScreenId } from "./types";

/**
 * Mínimos de caracteres. Mantém a mesma regra em todo o site.
 */
export const MIN = {
  nome: 2,
  organizacao: 2,
  descricao: 10,
  cidade: 2,
} as const;

const withMin = (message: string, min: number) => `${message} (min de caracteres: ${min})`;

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Telefone brasileiro com DDD: 10 (fixo) ou 11 dígitos (celular), aceitando prefixo +55 e rejeitando letras. */
export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || !/^[+\d\s().-]+$/.test(trimmed)) return false;
  let digits = digitsOnly(trimmed);
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) {
    digits = digits.slice(2);
  }
  if (digits.length !== 10 && digits.length !== 11) return false;
  const ddd = Number(digits.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  if (digits.length === 11 && digits[2] !== "9") return false;
  if (/^(\d)\1+$/.test(digits)) return false;
  return true;
}

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.length <= 254 &&
    !/[\r\n<>",;\\]/.test(trimmed) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)
  );
}

export function isValidCnpj(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || !/^[\d.\-/\s]+$/.test(trimmed)) return false;
  const digits = digitsOnly(trimmed);
  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;
  const calcCheckDigit = (len: number) => {
    let sum = 0;
    let weight = len - 7;
    for (let i = len; i >= 1; i--) {
      sum += Number(digits[len - i]) * weight--;
      if (weight < 2) weight = 9;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  return calcCheckDigit(12) === Number(digits[12]) && calcCheckDigit(13) === Number(digits[13]);
}

export function validateField(name: string, answers: Answers): string | undefined {
  const trim = (val: string) => val.trim();
  switch (name) {
    case "nome":
      return trim(answers.nome).length < MIN.nome
        ? withMin("Informe seu nome completo", MIN.nome)
        : undefined;
    case "organizacao":
      return trim(answers.organizacao).length < MIN.organizacao
        ? withMin("Informe a empresa ou organização", MIN.organizacao)
        : undefined;
    case "cnpj":
      return trim(answers.cnpj) && !isValidCnpj(answers.cnpj)
        ? "Informe um CNPJ válido com 14 dígitos ou deixe em branco"
        : undefined;
    case "telefone":
      return isValidPhone(answers.telefone)
        ? undefined
        : "Informe um telefone válido com DDD, por exemplo (71) 99999-9999";
    case "whatsapp":
      return trim(answers.whatsapp) && !isValidPhone(answers.whatsapp)
        ? "Informe um WhatsApp válido com DDD ou deixe em branco"
        : undefined;
    case "email":
      return isValidEmail(answers.email)
        ? undefined
        : "Informe um e-mail válido, por exemplo nome@empresa.com.br";
    case "cidade":
      return trim(answers.cidade).length < MIN.cidade
        ? withMin("Informe a cidade", MIN.cidade)
        : undefined;
    case "estado":
      return trim(answers.estado) ? undefined : "Selecione o estado";
    case "origemDetalhe":
      return answers.origem === ORIGEM_OUTRO && trim(answers.origemDetalhe).length < 2
        ? withMin("Conte-nos de onde nos conheceu", 2)
        : undefined;
    case "descricao":
      return trim(answers.descricao).length < MIN.descricao
        ? withMin("Descreva brevemente sua necessidade", MIN.descricao)
        : undefined;
    case "servicos":
      return answers.servicos.length === 0 && !answers.servicoIndefinido
        ? "Selecione ao menos uma opção"
        : undefined;
    case "tipo":
      return answers.tipo ? undefined : "Selecione o tipo de atendimento";
    case "consentimentoPrivacidade":
      return answers.consentimentoPrivacidade
        ? undefined
        : "É necessário concordar com o Aviso de Privacidade para enviar";
    default: {
      // Subopção "Outra" com campo de detalhe
      if (name.startsWith("outra-")) {
        const id = name.slice(6) as keyof Answers["subopcaoOutra"];
        const selected = answers.subopcoes[id] ?? [];
        if (selected.includes("Outra") && trim(answers.subopcaoOutra[id] ?? "").length < 2) {
          return withMin("Descreva a outra necessidade", 2);
        }
      }
      return undefined;
    }
  }
}

/** Campos validados em cada tela. */
export function fieldsForScreen(screen: ScreenId, answers: Answers): string[] {
  switch (screen) {
    case "responsavel":
      return ["nome", "organizacao", "cnpj", "telefone", "whatsapp", "email"];
    case "localizacao":
      return ["cidade", "estado"];
    case "origem":
      return ["origemDetalhe"];
    case "servicos":
      return ["servicos", ...answers.servicos.map((id) => `outra-${id}`)];
    case "tipo":
      return ["tipo"];
    case "detalhamento":
      return ["descricao"];
    case "revisao":
      return ["consentimentoPrivacidade"];
    default:
      return [];
  }
}

export function validateScreen(screen: ScreenId, answers: Answers): FieldErrors {
  const errors: FieldErrors = {};
  for (const fieldName of fieldsForScreen(screen, answers)) {
    const errorMessage = validateField(fieldName, answers);
    if (errorMessage) errors[fieldName] = errorMessage;
  }
  return errors;
}

/** Valida todas as telas (usado antes do envio e no servidor). */
export function validateAll(answers: Answers): FieldErrors {
  const errors: FieldErrors = {};
  for (const screen of [
    "responsavel",
    "localizacao",
    "origem",
    "servicos",
    "tipo",
    "detalhamento",
    "revisao",
  ] as ScreenId[]) {
    Object.assign(errors, validateScreen(screen, answers));
  }
  return errors;
}

export const hasErrors = (errors: FieldErrors) => Object.values(errors).some(Boolean);

/** Retorna true quando a origem informada é indicação. */
export const isIndicacao = (origem: string) => ORIGENS_INDICACAO.includes(origem);
export const isPublico = (porte: string) => porte === PORTE_PUBLICO;
