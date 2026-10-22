import { getService } from "@/lib/content";
import { contactFields } from "@/lib/contact-validation";
import { ORIGENS_INDICACAO, ORIGEM_OUTRO, PORTE_PUBLICO } from "./options";
import type { Answers, FieldErrors, ScreenId } from "./types";

/**
 * Mínimos de caracteres. Reaproveita os do formulário de contato (nome, organização, mensagem)
 * para manter a mesma regra em todo o site; demais campos obrigatórios usam o mesmo padrão.
 */
export const MIN = {
  nome: contactFields.nome.min,
  organizacao: contactFields.organizacao.min,
  descricao: contactFields.mensagem.min,
  cidade: 2,
} as const;

const withMin = (message: string, min: number) => `${message} (min de caracteres: ${min})`;

export function digitsOnly(v: string) {
  return v.replace(/\D/g, "");
}

/** Telefone brasileiro com DDD: 10 (fixo) ou 11 dígitos (celular), aceitando prefixo +55. */
export function isValidPhone(value: string): boolean {
  let d = digitsOnly(value);
  if ((d.length === 12 || d.length === 13) && d.startsWith("55")) d = d.slice(2);
  if (d.length !== 10 && d.length !== 11) return false;
  const ddd = Number(d.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  if (d.length === 11 && d[2] !== "9") return false;
  if (/^(\d)\1+$/.test(d)) return false;
  return true;
}

export function isValidEmail(value: string): boolean {
  const v = value.trim();
  return v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export function isValidCnpj(value: string): boolean {
  const d = digitsOnly(value);
  if (d.length !== 14 || /^(\d)\1+$/.test(d)) return false;
  const calc = (len: number) => {
    let sum = 0;
    let pos = len - 7;
    for (let i = len; i >= 1; i--) {
      sum += Number(d[len - i]) * pos--;
      if (pos < 2) pos = 9;
    }
    const r = sum % 11;
    return r < 2 ? 0 : 11 - r;
  };
  return calc(12) === Number(d[12]) && calc(13) === Number(d[13]);
}

export function validateField(name: string, a: Answers): string | undefined {
  const t = (v: string) => v.trim();
  switch (name) {
    case "nome":
      return t(a.nome).length < MIN.nome
        ? withMin("Informe seu nome completo", MIN.nome)
        : undefined;
    case "organizacao":
      return t(a.organizacao).length < MIN.organizacao
        ? withMin("Informe a empresa ou organização", MIN.organizacao)
        : undefined;
    case "cnpj":
      return t(a.cnpj) && !isValidCnpj(a.cnpj)
        ? "Informe um CNPJ válido com 14 dígitos ou deixe em branco"
        : undefined;
    case "telefone":
      return isValidPhone(a.telefone)
        ? undefined
        : "Informe um telefone válido com DDD, por exemplo (00) 00000-0000";
    case "whatsapp":
      return t(a.whatsapp) && !isValidPhone(a.whatsapp)
        ? "Informe um WhatsApp válido com DDD ou deixe em branco"
        : undefined;
    case "email":
      return isValidEmail(a.email)
        ? undefined
        : "Informe um e-mail válido, por exemplo nome@empresa.com.br";
    case "cidade":
      return t(a.cidade).length < MIN.cidade ? withMin("Informe a cidade", MIN.cidade) : undefined;
    case "estado":
      return t(a.estado) ? undefined : "Selecione o estado";
    case "origemDetalhe":
      return a.origem === ORIGEM_OUTRO && t(a.origemDetalhe).length < 2
        ? withMin("Conte-nos de onde nos conheceu", 2)
        : undefined;
    case "descricao":
      return t(a.descricao).length < MIN.descricao
        ? withMin("Descreva brevemente sua necessidade", MIN.descricao)
        : undefined;
    case "servicos":
      return a.servicos.length === 0 && !a.servicoIndefinido
        ? "Selecione ao menos uma opção"
        : undefined;
    case "tipo":
      return a.tipo ? undefined : "Selecione o tipo de atendimento";
    case "consentimentoPrivacidade":
      return a.consentimentoPrivacidade
        ? undefined
        : "É necessário concordar com o Aviso de Privacidade para enviar";
    default: {
      // Subopção "Outra" com campo de detalhe
      if (name.startsWith("outra-")) {
        const id = name.slice(6) as keyof Answers["subopcaoOutra"];
        const selected = a.subopcoes[id] ?? [];
        if (selected.includes("Outra") && t(a.subopcaoOutra[id] ?? "").length < 2) {
          return withMin("Descreva a outra necessidade", 2);
        }
      }
      return undefined;
    }
  }
}

/** Campos validados em cada tela. */
export function fieldsForScreen(screen: ScreenId, a: Answers): string[] {
  switch (screen) {
    case "responsavel":
      return ["nome", "organizacao", "cnpj", "telefone", "whatsapp", "email"];
    case "localizacao":
      return ["cidade", "estado"];
    case "origem":
      return ["origemDetalhe"];
    case "servicos":
      return ["servicos", ...a.servicos.map((id) => `outra-${id}`)];
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

export function validateScreen(screen: ScreenId, a: Answers): FieldErrors {
  const errors: FieldErrors = {};
  for (const f of fieldsForScreen(screen, a)) {
    const e = validateField(f, a);
    if (e) errors[f] = e;
  }
  return errors;
}

/** Valida todas as telas (usado antes do envio e no servidor). */
export function validateAll(a: Answers): FieldErrors {
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
    Object.assign(errors, validateScreen(screen, a));
  }
  return errors;
}

export const hasErrors = (e: FieldErrors) => Object.values(e).some(Boolean);

/** Retorna true quando a origem informada é indicação. */
export const isIndicacao = (origem: string) => ORIGENS_INDICACAO.includes(origem);
export const isPublico = (porte: string) => porte === PORTE_PUBLICO;
export const serviceTitle = (id: string) => getService(id)?.shortTitle ?? id;
