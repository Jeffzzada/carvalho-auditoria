import { Link } from "@tanstack/react-router";
import { navLinks } from "@/lib/content";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">Soluções em auditoria de ativo imobilizado.</p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="eyebrow text-gold">Navegação</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow text-gold">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/75 hover:text-primary-foreground">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            {CONTACT_EMAIL && (
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-foreground/75 hover:text-primary-foreground">{CONTACT_EMAIL}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {year} Carvalho Soluções em Auditoria. Todos os direitos reservados.</p>
          <p>
            Privacidade: as informações compartilhadas pelo WhatsApp são utilizadas exclusivamente para o atendimento da sua solicitação.
          </p>
        </div>
      </div>
    </footer>
  );
}
