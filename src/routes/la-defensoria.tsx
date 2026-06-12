import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/blocks";
import { mision, vision, atribuciones, antecedentes } from "@/data/site";

export const Route = createFileRoute("/la-defensoria")({
  head: () => ({
    meta: [
      { title: "La Defensoría | Misión, Visión, Atribuciones y Antecedentes — IDPNL" },
      { name: "description", content: "Conoce la misión, visión, atribuciones y la historia del Instituto de Defensoría Pública de Nuevo León." },
    ],
  }),
  component: LaDefensoria,
});

function LaDefensoria() {
  return (
    <>
      <PageHero
        eyebrow="La Defensoría"
        title="Quiénes somos"
        subtitle="Más de un siglo defendiendo el derecho de toda persona a una defensa adecuada y gratuita."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-primary">Misión</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{mision}</p>
          </div>
          <div className="rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-elegant">
            <h2 className="font-display text-2xl font-bold text-primary">Visión</h2>
            <p className="mt-3 leading-relaxed text-navy-foreground/85">{vision}</p>
          </div>
        </div>
      </Section>

      <section className="bg-secondary">
        <Section className="!py-16">
          <h2 className="font-display text-3xl font-extrabold text-foreground">Atribuciones</h2>
          <div className="mt-6 space-y-4">
            {atribuciones.map((a, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <h2 className="font-display text-3xl font-extrabold text-foreground">Antecedentes</h2>
        <p className="mt-2 text-muted-foreground">Nuestra historia, de la Defensoría de Oficio al Instituto de hoy.</p>
        <div className="mt-8 space-y-6 border-l-2 border-primary/30 pl-6">
          {antecedentes.map((a, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[1.95rem] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
