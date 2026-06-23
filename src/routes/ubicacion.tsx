import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Building2, ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { directorio, type Oficina, type DirectorioGrupo } from "@/data/site";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación | Directorio de oficinas en Nuevo León — IDPNL" },
      { name: "description", content: "Directorio oficial 2026 del IDPNL: teléfonos y direcciones por área de defensa en Monterrey, su área metropolitana y municipios foráneos." },
    ],
  }),
  component: Ubicacion,
});

function OficinaCard({ o, sede }: { o: Oficina; sede?: string }) {
  const isMobile = useIsMobile();
  const card = (
    <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
      <h3 className="font-display text-base font-bold text-foreground">{o.nombre}</h3>
      {o.telefono && o.telefono !== "—" ? (
        <a href={`tel:${o.telefono.replace(/[^0-9]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
          <Phone className="h-4 w-4 shrink-0" /> {o.telefono}
        </a>
      ) : null}
      {o.piso ? (
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4 shrink-0" /> {o.piso}
        </p>
      ) : null}
      {o.direccion ? (
        <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {o.direccion}
        </p>
      ) : null}
    </div>
  );

  const mapAddress = o.direccion || sede;
  if (!mapAddress) return card;

  const query = encodeURIComponent(`${o.nombre}, ${mapAddress}`);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  const mapContent = (
    <>
      <div className="relative aspect-video w-full bg-muted">
        <iframe
          title={`Mapa de ${o.nombre}`}
          src={embedSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
      >
        <ExternalLink className="h-4 w-4" /> Abrir en Google Maps
      </a>
    </>
  );

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <div className="h-full cursor-pointer">{card}</div>
        </PopoverTrigger>
        <PopoverContent className="w-80 overflow-hidden p-0" sideOffset={8}>
          {mapContent}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <HoverCard openDelay={120} closeDelay={120}>
      <HoverCardTrigger asChild>
        <div className="h-full cursor-pointer">{card}</div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 overflow-hidden p-0" sideOffset={8}>
        {mapContent}
      </HoverCardContent>
    </HoverCard>
  );
}


function Grupo({ g }: { g: DirectorioGrupo }) {
  return (
    <div className="mb-10">
      <h2 className="mb-1 font-display text-2xl font-bold text-foreground">
        <span className="border-b-4 border-primary pb-1">{g.titulo}</span>
      </h2>
      {g.sede ? <p className="mb-5 mt-3 text-sm text-muted-foreground">{g.sede}</p> : <div className="mb-5" />}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {g.oficinas.map((o) => (
          <OficinaCard key={`${g.titulo}-${o.nombre}`} o={o} sede={g.sede} />
        ))}
      </div>
    </div>
  );
}

function Ubicacion() {
  return (
    <>
      <PageHero
        eyebrow="Ubicación"
        title="Directorio de oficinas"
        subtitle="Encuentra el teléfono y la dirección del área que necesitas en Monterrey, su área metropolitana y los municipios foráneos del Estado."
      />

      <Section>
        {directorio.map((g) => (
          <Grupo key={g.titulo} g={g} />
        ))}
      </Section>
    </>
  );
}
