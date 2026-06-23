import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero, Section, DocLink } from "@/components/blocks";
import { tramites, doc } from "@/data/site";

export const Route = createFileRoute("/tramites")({
  head: () => ({
    meta: [
      { title: "Trámites y formatos | Requisitos descargables — IDPNL" },
      { name: "description", content: "Descarga la guía de requisitos de los trámites del IDPNL: divorcio, alimentos, rectificación de actas, sucesiones, adopción y más." },
    ],
  }),
  component: Tramites,
});

const categorias = ["Todos", "Familiar", "Civil"] as const;

function Tramites() {
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
        eyebrow="Trámites"
        title="Trámites y formatos de requisitos"
        subtitle="Consulta y descarga la información de cada trámite. Todos los servicios son gratuitos."
      />

      <Section>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <DocLink key={t.file} href={doc(t.file)} title={t.nombre} subtitle={t.categoria} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No encontramos trámites con esos criterios.</p>
        )}
      </Section>
    </>
  );
}
