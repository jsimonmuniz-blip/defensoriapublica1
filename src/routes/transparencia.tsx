import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, DocLink } from "@/components/blocks";
import { transparencia, doc } from "@/data/site";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparencia | Manuales, avisos de privacidad y cuenta pública — IDPNL" },
      { name: "description", content: "Documentos de transparencia del IDPNL: manuales y protocolos, avisos de privacidad, adquisiciones y cuenta pública." },
    ],
  }),
  component: Transparencia,
});

function Transparencia() {
  return (
    <>
      <PageHero
        eyebrow="Transparencia"
        title="Transparencia y rendición de cuentas"
        subtitle="Manuales, protocolos, avisos de privacidad, adquisiciones y contabilidad pública."
      />
      <Section>
        <div className="space-y-12">
          {transparencia.map((g) => (
            <div key={g.grupo}>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground">
                <span className="border-b-4 border-primary pb-1">{g.grupo}</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {g.items.map((i) => (
                  <DocLink key={i.file} href={doc(i.file)} title={i.titulo} subtitle="PDF" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
