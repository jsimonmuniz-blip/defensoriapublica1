import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight, Phone, Mail, UserRound } from "lucide-react";
import directorPhoto from "@/assets/director-carlos.png.asset.json";
import { site, CITAS_URL } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
];

const directorBio = [
  "Estudió la Licenciatura en Derecho y Ciencias Sociales en la Universidad Autónoma de Nuevo León. Es Maestro en Derecho Penal con enfoque en el Sistema Penal Acusatorio por parte de la UANL. También participó en cursos y diplomados de formación internacional en California Western School of Law.",
  "Se desarrolló profesionalmente como escribiente, Delegado del Ministerio Público y asistente del Director General de Averiguaciones Previas, además de ser Agente del Ministerio Público, Secretario Particular del C. Procurador General de Justicia del Estado de Nuevo León y Director de Bienes Asegurados recuperados e instrumentos del delito de la Procuraduría General de Justicia.",
  "Así mismo, se desempeñó como Coordinador de la Oficina Ejecutiva de la Unidad de Inteligencia Financiera y Económica, Coordinador de Investigaciones y titular de la Unidad de Inteligencia Financiera y Económica en la Secretaría de Finanzas y Tesorería General, estos puestos por parte del Estado de Nuevo León.",
  "Actualmente se desempeña como Director General del Instituto de Defensoría Pública del Estado de Nuevo León.",
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

      <div className="relative mx-auto grid h-full min-h-[inherit] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto flex w-full max-w-xs flex-col items-center text-center"
        >
          <div
            className="w-full overflow-hidden bg-primary/20 shadow-glow ring-4 ring-white/20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)" }}
          >
            <img
              src={directorPhoto.url}
              alt="Carlos Manuel Cuevas Martínez, Director General del IDPNL"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>

          <h2 className="mt-5 font-display text-xl font-bold text-navy-foreground [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Carlos Manuel Cuevas Martínez
          </h2>
          <p className="mt-1 text-sm text-navy-foreground/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Director General del Instituto de Defensoría Pública de Nuevo León
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            Administración 2021-2027
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]">
                <UserRound className="h-4 w-4" /> Conóceme
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  Carlos Manuel Cuevas Martínez
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  Director General del Instituto de Defensoría Pública de Nuevo León · Administración 2021-2027
                </p>
              </DialogHeader>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:8120331548"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Phone className="h-4 w-4 text-primary" /> 8120331548
                </a>
                <a
                  href="tel:8113061135"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Phone className="h-4 w-4 text-primary" /> 8113061135
                </a>
                <a
                  href="mailto:defensoria.publica@idpnl.gob.mx"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Mail className="h-4 w-4 text-primary" /> defensoria.publica@idpnl.gob.mx
                </a>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {directorBio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
