import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { PageHero, Section, DocLink } from "@/components/blocks";
import { materias, tramites, doc, CITAS_URL } from "@/data/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Defensa penal, familiar, civil y trámites — IDPNL" },
      { name: "description", content: "Servicios jurídicos gratuitos del IDPNL: materia penal, familiar, civil, justicia para adolescentes, amparo, métodos alternos y formatos de trámites." },
    ],
  }),
  component: Servicios,
});

const categorias = ["Todos", "Familiar", "Civil"] as const;

function Servicios() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categorias)[number]>("Todos");

  const filtered = useMemo(() => {
    return tramites.filter((t) => {
      const matchCat = cat === "Todos" || t.categoria === cat;
      const matchQuery = t.nombre.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, cat]);

  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios jurídicos gratuitos"
        subtitle="Defensa, orientación, asesoría, representación legal y formatos de trámites en todas estas materias, sin costo."
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

        <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl bg-gradient-navy p-8 text-navy-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">¿Necesitas agendar una cita?</h2>
            <p className="mt-2 text-navy-foreground/80">Programa tu atención en línea de forma rápida y sencilla.</p>
          </div>
          <a
            href={CITAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow"
          >
            Agendar cita <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-2xl font-bold text-foreground">Trámites y formatos de requisitos</h2>
          <p className="mt-2 text-muted-foreground">Consulta y descarga la información de cada trámite. Todos los servicios son gratuitos.</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar trámite…"
                className="w-full rounded-full border border-input bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    cat === c ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border bg-card text-foreground hover:bg-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <DocLink key={t.file} href={doc(t.file)} title={t.nombre} subtitle={t.categoria} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">No encontramos trámites con esos criterios.</p>
          )}
        </div>
      </Section>
    </>
  );
}
