import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import logoAsset from "@/assets/logo-idpnl.png.asset.json";
import { CITAS_URL } from "@/data/site";
import { LanguageToggle } from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/la-defensoria", label: "La Defensoría" },
  { to: "/servicios", label: "Servicios" },
  { to: "/tramites", label: "Trámites" },
  { to: "/legislacion", label: "Legislación" },
  { to: "/transparencia", label: "Transparencia" },
  { to: "/ubicacion", label: "Ubicación" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Instituto de Defensoría Pública de Nuevo León" className="h-16 w-auto sm:h-20" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary [&.active]:text-primary [&.active]:bg-accent"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CITAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar cita
          </a>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border bg-card lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CITAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}
