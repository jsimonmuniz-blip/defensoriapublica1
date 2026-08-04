import { useMemo, useRef, useState } from "react";
import { Search, FileText, X } from "lucide-react";
import { tramites, docPublic } from "@/data/site";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const POPULARES = ["Divorcio", "Pensión alimenticia", "Adopción", "Acta de nacimiento", "Guarda y custodia"];

export function HeroServiceSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    const words = q.split(/\s+/);
    return tramites
      .filter((t) => {
        const hay = normalize(`${t.nombre} ${t.categoria}`);
        return words.every((w) => hay.includes(w));
      })
      .slice(0, 8);
  }, [query]);

  const open = focused && query.trim().length >= 2;

  return (
    <div className="relative mt-8 w-full max-w-2xl">
      <label htmlFor="hero-buscador" className="sr-only">
        Buscar un servicio o trámite
      </label>
      <div className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/95 px-4 py-2.5 shadow-elegant backdrop-blur">
        <Search className="h-5 w-5 shrink-0 text-primary" />
        <input
          id="hero-buscador"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 180)}
          placeholder="Busca tu trámite: divorcio, pensión, acta…"
          className="w-full bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            aria-label="Limpiar búsqueda"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="rounded-full p-1 text-muted-foreground hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-navy-foreground/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Búsquedas frecuentes:
        </span>
        {POPULARES.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setQuery(p);
              setFocused(true);
              inputRef.current?.focus();
            }}
            className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-medium text-navy-foreground backdrop-blur transition-colors hover:bg-white/30"
          >
            {p}
          </button>
        ))}
      </div>

      {open && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              No encontramos ese trámite. Prueba con otra palabra o pregúntale a nuestro asistente virtual.
            </p>
          ) : (
            <ul className="max-h-80 overflow-y-auto">
              {results.map((t) => (
                <li key={t.file}>
                  <a
                    href={docPublic(t.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border-b border-border/60 px-4 py-3 transition-colors last:border-0 hover:bg-secondary"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-foreground">{t.nombre}</span>
                      <span className="text-xs text-muted-foreground">Materia {t.categoria} · Requisitos en PDF</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
