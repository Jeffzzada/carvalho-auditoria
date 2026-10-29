import { createLazyRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { TextField } from "@/components/atendimento/FormControls";
import {
  BUSINESS_HOURS,
  CONTACT_EMAIL,
  SERVICE_AREA,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from "@/lib/whatsapp";
import {
  hasContactErrors,
  validateContactField,
  validateContactForm,
  type ContactErrors,
  type ContactFieldName,
} from "@/lib/contact-validation";

export const Route = createLazyRoute("/contato")({
  component: Contato,
});

function Contato() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  function onBlur(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.currentTarget.name as ContactFieldName;
    const error = validateContactField(name, event.currentTarget.value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.currentTarget.name as ContactFieldName;
    if (errors[name] && !validateContactField(name, event.currentTarget.value)) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const formErrors = validateContactForm(data);
    if (hasContactErrors(formErrors)) {
      setErrors(formErrors);
      setSent(false);
      return;
    }
    setErrors({});
    const msg = `Olá! Acessei o site da Carvalho Soluções em Auditoria.\n\nNome: ${data["nome"]?.trim()}\nOrganização: ${data["organizacao"]?.trim()}${data["contato"]?.trim() ? `\nContato: ${data["contato"].trim()}` : ""}\nAssunto: ${data["assunto"]?.trim()}\n\n${data["mensagem"]?.trim()}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const info = [
    { icon: Phone, label: "WhatsApp", value: WHATSAPP_DISPLAY },
    { icon: Mail, label: "E-mail", value: CONTACT_EMAIL },
    { icon: MapPin, label: "Área de atendimento", value: SERVICE_AREA },
    { icon: Clock, label: "Horário comercial", value: BUSINESS_HOURS },
  ].filter((item) => item.value);

  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Contato</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vamos conversar sobre a necessidade da sua organização?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Entre em contato com a Carvalho Soluções em Auditoria para apresentar sua demanda e
            conhecer as possibilidades de atendimento.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Conversar pelo WhatsApp" className="w-full sm:w-auto" />
          </div>
          {info.length > 0 && (
            <ul className="mt-10 space-y-4">
              {info.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-5 rounded-2xl bg-surface p-6 sm:p-10"
        >
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Prefere descrever antes?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha os campos e sua mensagem será aberta pronta no WhatsApp para envio. Não
              inclua senhas, dados bancários nem documentos confidenciais.
            </p>
          </div>
          <TextField
            id="nome"
            label="Nome"
            maxLength={120}
            error={errors.nome}
            onBlurEvent={onBlur}
            onChangeEvent={onChange}
          />
          <TextField
            id="organizacao"
            label="Organização"
            maxLength={120}
            error={errors.organizacao}
            onBlurEvent={onBlur}
            onChangeEvent={onChange}
          />
          <TextField
            id="contato"
            label="E-mail ou telefone"
            optional
            maxLength={120}
            error={errors.contato}
            onBlurEvent={onBlur}
            onChangeEvent={onChange}
          />
          <TextField
            id="assunto"
            label="Assunto"
            maxLength={120}
            error={errors.assunto}
            onBlurEvent={onBlur}
            onChangeEvent={onChange}
          />
          <TextField
            id="mensagem"
            label="Mensagem"
            textarea
            maxLength={1000}
            error={errors.mensagem}
            onBlurEvent={onBlur}
            onChangeEvent={onChange}
          />
          <button type="submit" className="btn btn-primary w-full">
            Abrir mensagem no WhatsApp
          </button>
          {sent && (
            <p role="status" className="rounded-md bg-accent p-3 text-sm text-accent-foreground">
              Sua mensagem foi preparada no WhatsApp. Confirme o envio na conversa aberta.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
