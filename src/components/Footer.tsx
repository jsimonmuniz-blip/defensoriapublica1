import { Link } from "@tanstack/react-router";
import { Phone, MapPin, CalendarCheck } from "lucide-react";
import logo from "@/assets/logo-original.jpg";
import { site, CITAS_URL } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="inline-flex rounded-lg bg-white p-3">
            <img src={logo} alt={site.name} className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/75">{site.intro}</p>
          <p className="mt-4 font-display text-lg font-bold text-primary">{site.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-foreground/90">Navegación</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            <li><Link to="/la-defensoria" className="hover:text-primary">La Defensoría</Link></li>
            <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
            <li><Link to="/legislacion" className="hover:text-primary">Legislación</Link></li>
            <li><Link to="/transparencia" className="hover:text-primary">Transparencia</Link></li>
            <li><Link to="/ubicacion" className="hover:text-primary">Ubicación</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-foreground/90">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>81 2020-5600</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Matamoros 311 Ote., Centro, Monterrey, N.L.</span>
            </li>
            <li>
              <a
                href={CITAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-gradient-blue px-4 py-2 font-semibold text-navy-foreground shadow-blue"
              >
                <CalendarCheck className="h-4 w-4" /> Agendar cita
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Servicios jurídicos gratuitos · Gobierno del Estado de Nuevo León.
        </div>
      </div>
    </footer>
  );
}
