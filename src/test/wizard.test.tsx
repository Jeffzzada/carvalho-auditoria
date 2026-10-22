import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Wizard } from "@/components/atendimento/Wizard";
import type { ServiceId } from "@/lib/content";

async function renderWizard(initialService?: ServiceId) {
  const root = createRootRoute({ component: () => <Wizard initialService={initialService} /> });
  const router = createRouter({
    routeTree: root,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  render(<RouterProvider router={router} />);
  await screen.findByRole("button", { name: /Começar/ });
}

const click = (name: RegExp | string) => fireEvent.click(screen.getByRole("button", { name }));
const type = (label: RegExp | string, value: string) =>
  fireEvent.change(screen.getByLabelText(label), { target: { value } });

async function fillResponsavel() {
  click(/Começar/);
  await screen.findByLabelText(/Nome completo/);
  type(/Nome completo/, "Maria Silva");
  type(/Empresa ou organização/, "Empresa Teste");
  type(/Telefone com DDD/, "(71) 98450-1050");
  type(/^E-mail/, "maria@empresa.com.br");
  click(/Continuar/);
}

/** Percorre as telas até a revisão, escolhendo o porte informado. */
async function goToReview(porte: string, servico = /Fiscal e Tributária/) {
  await fillResponsavel();
  await screen.findByText("Qual o porte da organização?");
  click(new RegExp(`^${porte}`));
  click(/Continuar/);
  await screen.findByText(/faixa de faturamento/);
  click(/Continuar/); // opcional
  await screen.findByRole("heading", { name: /(regime tributário|natureza da entidade)/i });
  click(/Continuar/);
  await screen.findByLabelText(/Cidade/);
  type(/Cidade/, "Salvador");
  fireEvent.change(screen.getByLabelText(/Estado/), { target: { value: "BA" } });
  click(/Continuar/);
  await screen.findByText(/modalidade de atendimento/);
  click(/Continuar/);
  await screen.findByText(/Como você conheceu/);
  click(/Continuar/);
  await screen.findByText("Qual serviço você procura?");
  click(servico);
  click(/Continuar/);
  await screen.findByText("Qual o tipo de atendimento?");
  click(/Diagnóstico inicial/);
  click(/Continuar/);
  await screen.findByText("Conte-nos um pouco mais");
  click(/Continuar/);
  await screen.findByText("Detalhe sua necessidade");
  type(/Conte-nos um pouco mais sobre/, "Quero avaliar riscos tributários.");
  click(/Continuar/);
  await screen.findByText("Revise e envie sua solicitação");
}

describe("Assistente de Atendimento", () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
  });
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("mostra a mensagem de boas-vindas e o serviço pré-selecionado", async () => {
    await renderWizard("ambiental");
    expect(screen.getByText(/Seja bem-vindo\(a\) à Carvalho Soluções em Auditoria/)).toBeTruthy();
    expect(screen.getByText("Ambiental")).toBeTruthy();
  });

  it("bloqueia a primeira etapa com mensagens de mínimo de caracteres e formato", async () => {
    await renderWizard();
    click(/Começar/);
    await screen.findByLabelText(/Nome completo/);
    click(/Continuar/);
    expect(
      await screen.findByText("Informe seu nome completo (min de caracteres: 2)"),
    ).toBeTruthy();
    expect(screen.getByLabelText(/Nome completo/).getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByText(/Informe um telefone válido com DDD/)).toBeTruthy();
    expect(screen.getByText(/Informe um e-mail válido/)).toBeTruthy();
  });

  it("caminho MEI: não oferece Lucro Presumido nem Lucro Real", async () => {
    await renderWizard();
    await fillResponsavel();
    await screen.findByText("Qual o porte da organização?");
    click(/^MEI/);
    click(/Continuar/);
    await screen.findByText(/faixa de faturamento/);
    click(/Continuar/);
    await screen.findByText("Qual o regime tributário?");
    expect(screen.queryByRole("button", { name: /Lucro/ })).toBeNull();
    expect(screen.getByRole("button", { name: /Não sei informar/ })).toBeTruthy();
  });

  it("caminho Administração Pública: troca o regime pela natureza da entidade", async () => {
    await renderWizard();
    await fillResponsavel();
    await screen.findByText("Qual o porte da organização?");
    click(/^Órgão ou entidade da Administração Pública/);
    click(/Continuar/);
    await screen.findByText(/faixa de faturamento/);
    click(/Continuar/);
    await screen.findByText("Qual a natureza da entidade?");
    expect(screen.queryByRole("button", { name: /Lucro/ })).toBeNull();
    expect(screen.getByText(/necessidade de auditoria no setor público/i)).toBeTruthy();
  });

  it("permite voltar à primeira etapa a partir da revisão para editar as respostas", async () => {
    await renderWizard();
    await goToReview("Médio Porte");
    click(/Editar respostas/);
    await screen.findByLabelText(/Nome completo/);
  });

  it("Lucro Presumido e Lucro Real aparecem para médio porte", async () => {
    await renderWizard();
    await fillResponsavel();
    await screen.findByText("Qual o porte da organização?");
    click(/^Médio Porte/);
    click(/Continuar/);
    await screen.findByText(/faixa de faturamento/);
    click(/Continuar/);
    await screen.findByText("Qual o regime tributário?");
    expect(screen.getByRole("button", { name: /Lucro Presumido/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Lucro Real/ })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /Simples Nacional/ })).toBeNull();
  });

  it("falha no envio: mantém respostas, mostra erro claro e não exibe sucesso", async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ ok: false, error: "falha_ao_registrar" }), { status: 502 }),
    );
    await renderWizard();
    await goToReview("Médio Porte");
    fireEvent.click(screen.getByLabelText(/Li o/));
    click(/Confirmar e enviar solicitação/);
    expect(await screen.findByRole("alert")).toBeTruthy();
    expect(screen.queryByText(/Sua solicitação foi registrada/)).toBeNull();
    expect(screen.getByText("Maria Silva")).toBeTruthy(); // respostas mantidas
  });

  it("envia uma única vez, com o mesmo identificador, e só mostra sucesso após a resposta ok", async () => {
    let resolve!: (r: Response) => void;
    fetchMock.mockImplementation(() => new Promise<Response>((r) => (resolve = r)));
    await renderWizard();
    await goToReview("Médio Porte");
    fireEvent.click(screen.getByLabelText(/Li o/));
    click(/Confirmar e enviar solicitação/);
    // enquanto aguarda, o botão fica bloqueado e nada de sucesso
    await waitFor(() =>
      expect((screen.getByRole("button", { name: /Enviando/ }) as HTMLButtonElement).disabled).toBe(
        true,
      ),
    );
    fireEvent.click(screen.getByRole("button", { name: /Enviando/ }));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByText(/Sua solicitação foi registrada/)).toBeNull();
    resolve(new Response(JSON.stringify({ ok: true, notified: true }), { status: 200 }));
    expect(await screen.findByText(/Sua solicitação foi registrada/)).toBeTruthy();
    const body = JSON.parse((fetchMock.mock.calls[0]![1] as RequestInit).body as string);
    expect(body.answers.nome).toBe("Maria Silva");
    expect(body.answers.servicos).toEqual(["fiscal"]);
    expect(body.clientSubmissionId).toMatch(/^[0-9a-f-]{16,}$/i);
  });

  it("exige o consentimento de privacidade para enviar", async () => {
    await renderWizard();
    await goToReview("Médio Porte");
    click(/Confirmar e enviar solicitação/);
    expect(
      await screen.findByText(/É necessário concordar com o Aviso de Privacidade/),
    ).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
