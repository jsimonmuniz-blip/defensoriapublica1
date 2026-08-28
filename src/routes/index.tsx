import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scale,
  Users,
  HandHeart,
  ShieldCheck,
  MapPin,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DirectorSection } from "@/components/DirectorSection";
import { Section } from "@/components/blocks";
import { site, mision, materias, CITAS_URL } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto de Defensoría Pública de Nuevo León | Defensa jurídica gratuita" },
      { name: "description", content: "Asesoría y representación jurídica gratuita en Nuevo León. Materia penal, familiar, civil y administrativa. Agenda tu cita y conoce nuestros trámites." },
    ],
  }),
  component: Index,
});

const valores = [
  { icon: HandHeart, title: "100% Gratuito", desc: "Todos nuestros servicios jurídicos no tienen costo alguno." },
  { icon: ShieldCheck, title: "Defensores certificados", desc: "Abogados capacitados y certificados por la Secretaría de Gobernación." },
  { icon: Scale, title: "Defensa integral", desc: "Atención adecuada, oportuna, técnica y competente en cada caso." },
  { icon: Users, title: "Para todos", desc: "Énfasis en personas de escasos recursos y grupos vulnerables." },
];

function Index() {
  return (
    <>
      <HeroCarousel />

      <DirectorSection />



      {/* Value props */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary">Nuestra misión</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Protegemos tus derechos, sin importar tu situación
            </h2>
            <p className="mt-5 text-justify text-base leading-relaxed text-muted-foreground">{mision}</p>
            <Link
              to="/la-defensoria"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
            >
              Conoce La Defensoría <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
          </div>
          <div className="rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-elegant">
            <p className="font-display text-2xl font-bold text-primary">{site.tagline}</p>
            <p className="mt-3 text-navy-foreground/80">{site.intro}</p>
          </div>
        </div>
      </section>

      {/* Materias */}
      <Section>
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Áreas de atención</h2>
          <p className="mt-3 text-muted-foreground">Brindamos defensa y asesoría especializada en diversas materias.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materias.map((m) => (
            <div key={m.titulo} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <h3 className="font-display text-base font-bold text-foreground">{m.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/servicios" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow">
            Ver todos los servicios <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl bg-gradient-primary px-8 py-14 text-center shadow-glow sm:px-16">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Estamos listos para ayudarte
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Agenda una cita o localiza la oficina más cercana a ti en todo el Estado de Nuevo León.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CITAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 font-semibold text-primary shadow-lg transition-transform hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" /> Agendar cita
            </a>
            <Link
              to="/ubicacion"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              <MapPin className="h-5 w-5" /> Ver oficinas
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
