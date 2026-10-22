import { createLazyRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createLazyRoute("/privacidade")({
  component: Page,
});

const items: { title: string; body: string[] }[] = [
  {
    title: "Quais dados coletamos",
    body: [
      "No assistente de Atendimento coletamos apenas o necessário para organizar sua solicitação: nome, cargo ou função (opcional), empresa ou organização, CNPJ (opcional), telefone, e-mail, porte, faixa de faturamento e regime tributário (opcionais, para qualificação comercial), localização, origem do contato, serviços de interesse e a descrição da sua necessidade.",
      "Não solicitamos senhas, credenciais de acesso, dados bancários nem documentos confidenciais. Pedimos que você também não os envie nos campos de texto.",
    ],
  },
  {
    title: "Para que usamos",
    body: [
      "As informações são usadas apenas para organizar o seu atendimento e permitir o retorno da nossa equipe. Não as utilizamos para finalidades incompatíveis com essa.",
      "Comunicações de marketing só são enviadas se você der consentimento específico e opcional no momento do envio.",
    ],
  },
  {
    title: "Base legal",
    body: [
      "O tratamento ocorre com base no seu consentimento e, quando aplicável, na realização de procedimentos preliminares relacionados a contrato do qual você seja parte, a pedido seu (Lei nº 13.709/2018, LGPD).",
    ],
  },
  {
    title: "Armazenamento e acesso",
    body: [
      "As solicitações são armazenadas em banco de dados com acesso restrito à equipe responsável e transmitidas por conexão protegida. Cada solicitação é acessível apenas à equipe da empresa, nunca a outros clientes.",
      "Utilizamos prestadores de infraestrutura (como hospedagem, banco de dados e envio de e-mail) apenas para viabilizar o atendimento.",
    ],
  },
  {
    title: "Mensagens pelo WhatsApp",
    body: [
      "Quando você opta por falar pelo WhatsApp, a mensagem pré-preenchida contém apenas um resumo não sensível (nome, serviço de interesse e tipo de atendimento). O tratamento posterior segue as regras do próprio WhatsApp.",
    ],
  },
  {
    title: "Seus direitos",
    body: [
      "Você pode solicitar confirmação do tratamento, acesso, correção, anonimização, eliminação, portabilidade e informações sobre o compartilhamento dos seus dados, além de revogar o consentimento, nos termos do art. 18 da LGPD. Para isso, fale com a nossa equipe pelos canais abaixo.",
    ],
  },
];

function Page() {
  const controller = [siteConfig.legalName, siteConfig.cnpj && `CNPJ ${siteConfig.cnpj}`]
    .filter(Boolean)
    .join(", ");
  return (
    <section className="section">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Privacidade</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aviso de Privacidade
          </h1>
          <div className="gold-rule mt-5" />
          <p className="mt-6 text-lg text-muted-foreground">
            Este aviso explica como a Carvalho Soluções em Auditoria trata os dados pessoais
            informados neste site.
            {controller ? ` Controladora: ${controller}.` : ""}
          </p>
          <div className="mt-10 space-y-10">
            {items.map((it) => (
              <section key={it.title}>
                <h2 className="font-display text-xl font-semibold text-foreground">{it.title}</h2>
                <div className="mt-3 space-y-3 text-muted-foreground">
                  {it.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Fale conosco sobre seus dados
              </h2>
              <p className="mt-3 text-muted-foreground">
                WhatsApp: {siteConfig.whatsapp.display}
                {siteConfig.email ? ` · E-mail: ${siteConfig.email}` : ""}
              </p>
              <div className="mt-5">
                <WhatsAppButton
                  label="Falar com a equipe"
                  variant="outline"
                  message="Olá! Gostaria de falar sobre o tratamento dos meus dados pessoais informados no site."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
