import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { navLinks, services, coreValues, mission, vision } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

function walk(dir: string, out: string[] = []): string[] {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css|html|md|json)$/.test(f) && !f.endsWith(".gen.ts")) out.push(p);
  }
  return out;
}

describe("Conteúdo do site", () => {
  it("tem o menu pedido", () => {
    expect(navLinks.map((l) => l.label)).toEqual([
      "Início",
      "Sobre nós",
      "Serviços",
      "Atendimento",
      "Contato",
    ]);
  });

  it("tem 4 serviços completos com CTA", () => {
    expect(services.map((s) => s.id)).toEqual(["ti", "contabil", "fiscal", "ambiental"]);
    for (const s of services) {
      expect(s.objective.length).toBeGreaterThan(20);
      expect(s.fronts.length).toBeGreaterThan(3);
      expect(s.benefits.length).toBeGreaterThan(1);
      expect(s.ctaLabel.startsWith("Solicite")).toBe(true);
    }
  });

  it("mantém o aviso obrigatório da auditoria contábil", () => {
    const contabil = services.find((s) => s.id === "contabil")!;
    expect(contabil.notice).toMatch(/auditoria independente de demonstrações contábeis/i);
  });

  it("tem missão, visão e 7 valores", () => {
    expect(mission.text).toMatch(/transparência, a segurança, a conformidade/);
    expect(vision.text).toMatch(/empresa de referência/);
    expect(coreValues.map((v) => v.title)).toEqual([
      "Ética",
      "Independência",
      "Transparência",
      "Responsabilidade",
      "Excelência técnica",
      "Confidencialidade",
      "Compromisso com a melhoria contínua",
    ]);
  });

  it("não deixa referências a ativo imobilizado nem o WhatsApp antigo no código-fonte", () => {
    const files = [...walk("src"), "index.html", "README.md"].filter((f) => {
      try {
        statSync(f);
        return !f.includes("test/site-content");
      } catch {
        return false;
      }
    });
    for (const f of files) {
      const txt = readFileSync(f, "utf8");
      expect(txt, f).not.toMatch(/imobilizado/i);
    }
  });

  it("usa o WhatsApp oficial configurado e não inventa e-mail", () => {
    expect(whatsappUrl()).toContain("https://wa.me/5571984501050");
    expect(siteConfig.whatsapp.display).toBe("(71) 98450-1050");
    expect(siteConfig.email).toBe("");
    // O número só deve existir em um lugar do código: a configuração central.
    const withNumber = walk("src").filter(
      (f) => /98450|5571984501050/.test(readFileSync(f, "utf8")) && !f.includes("/test/"),
    );
    expect(withNumber).toEqual([join("src", "config", "site.ts")]);
  });
});
