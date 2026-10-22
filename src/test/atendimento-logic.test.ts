import { describe, expect, it } from "vitest";
import { emptyAnswers, type Answers } from "@/lib/atendimento/types";
import { regimesParaPorte } from "@/lib/atendimento/options";
import {
  isValidCnpj,
  isValidEmail,
  isValidPhone,
  validateAll,
  validateField,
  validateScreen,
} from "@/lib/atendimento/validation";
import { buildTeamSummary, buildWhatsAppSummary, suggestArea } from "@/lib/atendimento/summary";

const valid: Answers = {
  ...emptyAnswers,
  nome: "Maria Silva",
  organizacao: "Empresa Teste",
  cnpj: "11.222.333/0001-81",
  faturamento: "R$ 4,8 a R$ 10 milhões",
  telefone: "(71) 98450-1050",
  email: "maria@empresa.com.br",
  porte: "Médio Porte",
  regime: "Lucro Presumido",
  cidade: "Salvador",
  estado: "BA",
  servicos: ["fiscal"],
  tipo: "Diagnóstico inicial",
  descricao: "Quero avaliar riscos tributários.",
  consentimentoPrivacidade: true,
};

describe("Validação do Atendimento", () => {
  it("valida telefone com DDD", () => {
    expect(isValidPhone("(71) 98450-1050")).toBe(true);
    expect(isValidPhone("+55 71 98450-1050")).toBe(true);
    expect(isValidPhone("(71) 3333-4444")).toBe(true);
    expect(isValidPhone("98450-1050")).toBe(false);
    expect(isValidPhone("(71) 88450-1050")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });

  it("valida e-mail e CNPJ (opcional)", () => {
    expect(isValidEmail("a@b.com.br")).toBe(true);
    expect(isValidEmail("a@b")).toBe(false);
    expect(isValidCnpj("11.222.333/0001-81")).toBe(true);
    expect(isValidCnpj("11.222.333/0001-82")).toBe(false);
    expect(validateField("cnpj", { ...emptyAnswers, cnpj: "" })).toBeUndefined();
  });

  it("usa a mensagem com o mínimo de caracteres", () => {
    expect(validateField("nome", { ...emptyAnswers, nome: "A" })).toBe(
      "Informe seu nome completo (min de caracteres: 2)",
    );
    expect(validateField("descricao", { ...emptyAnswers, descricao: "curta" })).toBe(
      "Descreva brevemente sua necessidade (min de caracteres: 10)",
    );
  });

  it("exige apenas o necessário e bloqueia envio incompleto", () => {
    expect(Object.keys(validateScreen("responsavel", emptyAnswers)).sort()).toEqual([
      "email",
      "nome",
      "organizacao",
      "telefone",
    ]);
    expect(validateAll(valid)).toEqual({});
    expect(
      validateAll({ ...valid, consentimentoPrivacidade: false })["consentimentoPrivacidade"],
    ).toBeTruthy();
  });

  it("porte, faturamento e regime nunca são obrigatórios", () => {
    expect(validateAll({ ...valid, porte: "", faturamento: "", regime: "" })).toEqual({});
  });

  it("exige detalhe quando a origem é 'Outro' ou a subopção é 'Outra'", () => {
    expect(
      validateField("origemDetalhe", { ...valid, origem: "Outro", origemDetalhe: "" }),
    ).toBeTruthy();
    const a: Answers = {
      ...valid,
      subopcoes: { fiscal: ["Outra"] },
      subopcaoOutra: { fiscal: "" },
    };
    expect(validateField("outra-fiscal", a)).toBeTruthy();
  });
});

describe("Regimes por porte", () => {
  it("MEI não recebe Lucro Presumido nem Lucro Real", () => {
    const r = regimesParaPorte("MEI");
    expect(r).toContain("MEI");
    expect(r).not.toContain("Lucro Presumido");
    expect(r).not.toContain("Lucro Real");
  });
  it("permite continuar sem saber", () => {
    for (const p of ["MEI", "Microempresa (ME)", "Médio Porte", "Outro", ""]) {
      expect(regimesParaPorte(p)).toContain("Não sei informar");
    }
  });
});

describe("Direcionamento e resumos", () => {
  it("sugere a área a partir dos serviços escolhidos", () => {
    expect(suggestArea({ ...valid, servicos: ["ti"] }).areas).toEqual(["Sistemas e TI"]);
  });

  it("quando o serviço é indefinido, organiza por palavras-chave sem diagnosticar", () => {
    const a: Answers = {
      ...valid,
      servicos: [],
      servicoIndefinido: true,
      descricao: "Preciso revisar a apuração de impostos e obrigações acessórias",
    };
    expect(suggestArea(a).areas).toEqual(["Fiscal e Tributária"]);
    expect(suggestArea({ ...a, descricao: "Quero conversar" }).areas).toEqual([]);
  });

  it("órgãos públicos recebem observação de compatibilidade", () => {
    const a = { ...valid, porte: "Órgão ou entidade da Administração Pública" };
    expect(suggestArea(a).observacao).toMatch(/compat/i);
  });

  it("a mensagem do WhatsApp não contém dados sensíveis", () => {
    const msg = buildWhatsAppSummary(valid);
    expect(msg).toContain("Maria Silva");
    expect(msg).toContain("Fiscal e Tributária");
    expect(msg).toContain("Diagnóstico inicial");
    expect(msg).not.toMatch(/11\.222|CNPJ|milhões|Lucro|maria@empresa|98450/i);
  });

  it("o resumo da equipe traz origem, necessidade e organização", () => {
    const s = buildTeamSummary({ ...valid, origem: "LinkedIn" });
    expect(s).toMatch(/RESPONSÁVEL/);
    expect(s).toMatch(/CNPJ: 11\.222\.333\/0001-81/);
    expect(s).toMatch(/ORIGEM DO CONTATO\nLinkedIn/);
    expect(s).toMatch(/Serviços de interesse: Fiscal e Tributária/);
  });
});
