import { createLazyRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BUSINESS_HOURS, CONTACT_EMAIL, SERVICE_AREA, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import {
  contactFields,
  hasContactErrors,
  validateContactField,
  validateContactForm,
  type ContactErrors,
  type ContactFieldName,
} from "@/lib/contact-validation";

export const Route = createLazyRoute("/contato")({
  component: Contato,
});

type FieldName = ContactFieldName | "contato";

function Contato() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.currentTarget.name as FieldName;
    if (!(name in contactFields)) return;
    const error = validateContactField(name as ContactFieldName, e.currentTarget.value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.currentTarget.name as FieldName;
    if (!(name in contactFields)) return;
    const typed = name as ContactFieldName;
    if (errors[typed] && !validateContactField(typed, e.currentTarget.value)) {
      setErrors((prev) => ({ ...prev, [typed]: undefined }));
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs = validateContactForm(data);
    if (hasContactErrors(errs)) {
      setErrors(errs);
      setSent(false);
      return;
    }
    setErrors({});
    const msg = `Olá! Acessei o site da Carvalho Soluções em Auditoria.\n\nNome: ${data["nome"]}\nOrganização: ${data["organizacao"]}${data["contato"] ? `\nContato: ${data["contato"]}` : ""}\nAssunto: ${data["assunto"]}\n\n${data["mensagem"]}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field = (name: FieldName, label: string, opts: { textarea?: boolean; optional?: boolean } = {}) => {
    const error = (errors as Record<string, string | undefined>)[name];
    const className = error ? "field field-invalid" : "field";
    return (
      <div>
        <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
          {label} {opts.optional && <span className="font-normal text-muted-foreground">(opcional)</span>}
        </label>
        {opts.textarea ? (
          <textarea id={name} name={name} rows={5} maxLength={1000} className={className} aria-invalid={!!error} aria-describedby={`${name}-err`} onBlur={onBlur} onChange={onChange} />
        ) : (
          <input id={name} name={name} type="text" maxLength={120} className={className} aria-invalid={!!error} aria-describedby={`${name}-err`} onBlur={onBlur} onChange={onChange} />
        )}
        {error && (
          <p id={`${name}-err`} className="mt-1 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  };

  const info = [
    { icon: Phone, label: "WhatsApp", value: WHATSAPP_DISPLAY },
    { icon: Mail, label: "E-mail", value: CONTACT_EMAIL },
    { icon: MapPin, label: "Área de atendimento", value: SERVICE_AREA },
    { icon: Clock, label: "Horário comercial", value: BUSINESS_HOURS },
  ].filter((i) => i.value);

  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Contato</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vamos conversar sobre a necessidade da sua organização?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Entre em contato com a Carvalho Soluções em Auditoria para apresentar sua demanda e conhecer as possibilidades de atendimento.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Conversar pelo WhatsApp" className="w-full sm:w-auto" />
          </div>
          {info.length > 0 && (
            <ul className="mt-10 space-y-4">
              {info.map((i) => (
                <li key={i.label} className="flex gap-3">
                  <i.icon className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{i.label}</p>
                    <p className="font-medium text-foreground">{i.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl bg-surface p-6 sm:p-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Prefere descrever antes?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Preencha os campos e sua mensagem será aberta pronta no WhatsApp para envio.</p>
          </div>
          {field("nome", "Nome")}
          {field("organizacao", "Organização")}
          {field("contato", "E-mail ou telefone", { optional: true })}
          {field("assunto", "Assunto")}
          {field("mensagem", "Mensagem", { textarea: true })}
          <button type="submit" className="btn btn-primary w-full">Abrir mensagem no WhatsApp</button>
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
