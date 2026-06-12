import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, DocLink } from "@/components/blocks";
import { legislacion, doc } from "@/data/site";

export const Route = createFileRoute("/legislacion")({
  head: () => ({
    meta: [
      { title: "Legislación | Ley y Reglamento — IDPNL" },
      { name: "description", content: "Consulta la Ley de Defensoría Pública para el Estado de Nuevo León y el Reglamento del Instituto." },
    ],
  }),
  component: Legislacion,
});

function Legislacion() {
  return (
    <>
      <PageHero
        eyebrow="Legislación"
        title="Marco legal"
        subtitle="Las leyes y reglamentos que rigen al Instituto de Defensoría Pública de Nuevo León."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {legislacion.map((l) => (
            <DocLink key={l.file} href={doc(l.file)} title={l.titulo} subtitle="Documento oficial (PDF)" />
          ))}
        </div>
      </Section>
    </>
  );
}
