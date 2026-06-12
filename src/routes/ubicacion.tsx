import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { oficinasMetro, oficinasForaneas, type Oficina } from "@/data/site";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación | Oficinas en Nuevo León — IDPNL" },
      { name: "description", content: "Directorio de oficinas del IDPNL en el área metropolitana de Monterrey y municipios foráneos: teléfonos y direcciones." },
    ],
  }),
  component: Ubicacion,
});

function OficinaCard({ o }: { o: Oficina }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
      <h3 className="font-display text-base font-bold text-foreground">{o.nombre}</h3>
      <a href={`tel:${o.telefono.replace(/[^0-9]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
        <Phone className="h-4 w-4" /> {o.telefono}
      </a>
      <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {o.direccion}
      </p>
    </div>
  );
}

function Ubicacion() {
  return (
    <>
      <PageHero
        eyebrow="Ubicación"
        title="Encuentra tu oficina más cercana"
        subtitle="Estamos presentes en el área metropolitana de Monterrey y en municipios de todo el Estado."
      />

      <Section>
        <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
          <span className="border-b-4 border-primary pb-1">Área Metropolitana</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oficinasMetro.map((o) => (
            <OficinaCard key={o.nombre} o={o} />
          ))}
        </div>
      </Section>

      <section className="bg-secondary">
        <Section className="!py-14">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
            <span className="border-b-4 border-primary pb-1">Área Foránea</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oficinasForaneas.map((o) => (
              <OficinaCard key={o.nombre} o={o} />
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
