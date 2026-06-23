import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import heroEdificio from "@/assets/hero-edificio.jpg.asset.json";
import { site, CITAS_URL } from "@/data/site";

const slides = [
  {
    img: hero1,
    title: "Defensa jurídica gratuita para todos los nuevoleoneses",
    subtitle: "Asesoría y representación legal especializada, sin costo, para proteger tus derechos.",
  },
  {
    img: hero2,
    title: "Sin defensa no hay justicia",
    subtitle: "Defensores certificados a tu lado en materia penal, familiar, civil y administrativa.",
  },
  {
    img: hero3,
    title: "Estamos cerca de ti en todo el Estado",
    subtitle: "Más de 30 oficinas en el área metropolitana y municipios foráneos listas para atenderte.",
  },
  {
    img: heroEdificio.url,
    title: "Instituto de Defensoría Pública",
    subtitle: "Edificio Central — atención cercana, profesional y gratuita para las familias de Nuevo León.",
  },
];



export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden py-16 lg:py-0">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slide.img}
          alt=""
          width={1920}
          height={1080}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1 }, scale: { duration: 6.5, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative mx-auto grid h-full min-h-[inherit] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary-foreground backdrop-blur">
            {site.shortName} · Servicios 100% gratuitos
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-balance font-display text-4xl font-extrabold leading-tight text-navy-foreground [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-navy-foreground/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">{slide.subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={CITAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              <CalendarCheck className="h-5 w-5" /> Agendar una cita
            </a>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-navy-foreground backdrop-blur transition-colors hover:bg-white/20"
            >
              Ver servicios <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-primary" : "w-5 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
