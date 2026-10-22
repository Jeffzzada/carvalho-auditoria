import logo from "@/assets/logo-carvalho.webp";
import { Link } from "@tanstack/react-router";
import { memo, useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";

export const Logo = memo(function Logo({ light }: { light?: boolean | undefined }) {
  return (
    <span className={light ? "inline-block rounded-lg bg-background px-3 py-2" : "inline-block"}>
      <img
        src={logo}
        alt="Carvalho Soluções em Auditoria"
        width={1410}
        height={450}
        className="h-10 w-auto sm:h-12"
      />
    </span>
  );
});

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background">
      <div className="container-site flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" aria-label="Carvalho Soluções em Auditoria — Início" onClick={close}>
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link nav-link-active" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton label="Fale conosco" className="!py-2.5" />
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={toggle}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Menu móvel" className="border-t border-border bg-background">
            <ul className="container-site flex flex-col py-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={close}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                    activeProps={{
                      className:
                        "block rounded-md px-3 py-3 text-base font-semibold text-primary bg-muted",
                    }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pb-2 pt-3">
                <WhatsAppButton full />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
