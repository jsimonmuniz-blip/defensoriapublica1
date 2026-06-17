import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Building2 } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { directorio, type Oficina, type DirectorioGrupo } from "@/data/site";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación | Directorio de oficinas en Nuevo León — IDPNL" },
      { name: "description", content: "Directorio oficial 2026 del IDPNL: teléfonos y direcciones por área de defensa en Monterrey, su área metropolitana y municipios foráneos." },
    ],
  }),
  component: Ubicacion,
});

function OficinaCard({ o }: { o: Oficina }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
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
          <OficinaCard key={`${g.titulo}-${o.nombre}`} o={o} />
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
