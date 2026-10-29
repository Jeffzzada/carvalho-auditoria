import { describe, expect, it } from "vitest";

import {
  hasContactErrors,
  validateContactField,
  validateContactForm,
} from "@/lib/contact-validation";

describe("Validação do formulário de contato", () => {
  it("informa o mínimo de caracteres do nome", () => {
    expect(validateContactField("nome", "A")).toBe("Informe seu nome (min de caracteres: 2)");
  });

  it("informa o mínimo de caracteres da organização", () => {
    expect(validateContactField("organizacao", "A")).toBe(
      "Informe a organização (min de caracteres: 2)",
    );
  });

  it("informa o mínimo de caracteres do assunto", () => {
    expect(validateContactField("assunto", "ab")).toBe("Informe o assunto (min de caracteres: 3)");
  });

  it("informa o mínimo de caracteres da mensagem", () => {
    expect(validateContactField("mensagem", "curta")).toBe(
      "Descreva brevemente sua necessidade (min de caracteres: 10)",
    );
  });

  it("aceita valores que atingem o mínimo", () => {
    expect(validateContactField("nome", "Ana")).toBeUndefined();
    expect(validateContactField("assunto", "ABC")).toBeUndefined();
    expect(validateContactField("mensagem", "0123456789")).toBeUndefined();
  });

  it("bloqueia o envio enquanto houver campos inválidos", () => {
    const invalid = validateContactForm({ nome: "", organizacao: "", assunto: "", mensagem: "" });
    expect(hasContactErrors(invalid)).toBe(true);

    const valid = validateContactForm({
      nome: "Ana",
      organizacao: "Empresa LTDA",
      assunto: "Auditoria",
      mensagem: "Preciso de uma avaliação de controles.",
    });
    expect(hasContactErrors(valid)).toBe(false);
  });

  it("valida o campo opcional de contato como e-mail ou telefone com DDD", () => {
    expect(validateContactField("contato", "")).toBeUndefined();
    expect(validateContactField("contato", "ana@empresa.com.br")).toBeUndefined();
    expect(validateContactField("contato", "(71) 98450-1050")).toBeUndefined();
    expect(validateContactField("contato", "invalido")).toMatch(/e-mail ou telefone com DDD/i);
  });
});
