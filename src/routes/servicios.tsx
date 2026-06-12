import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { materias, CITAS_URL } from "@/data/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Defensa penal, familiar, civil y más — IDPNL" },
      { name: "description", content: "Servicios jurídicos gratuitos del IDPNL: materia penal, familiar, civil, justicia para adolescentes, amparo, métodos alternos y justicia administrativa." },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios jurídicos gratuitos"
        subtitle="Defensa, orientación, asesoría y representación legal en todas estas materias, sin costo."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materias.map((m) => (
            <div key={m.titulo} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <h3 className="font-display text-lg font-bold text-foreground">{m.titulo}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl bg-gradient-navy p-8 text-navy-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">¿Buscas el formato de un trámite específico?</h2>
            <p className="mt-2 text-navy-foreground/80">Descarga la guía de requisitos de cada trámite familiar, civil y de registro civil.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/tramites" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow">
              Ver trámites <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={CITAS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-navy-foreground hover:bg-white/10">
              Agendar cita
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
