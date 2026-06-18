import { motion } from "framer-motion";
import { Phone, Mail, UserRound } from "lucide-react";
import directorPhoto from "@/assets/director-carlos.png.asset.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const directorBio = [
  "Estudió la Licenciatura en Derecho y Ciencias Sociales en la Universidad Autónoma de Nuevo León. Es Maestro en Derecho Penal con enfoque en el Sistema Penal Acusatorio por parte de la UANL. También participó en cursos y diplomados de formación internacional en California Western School of Law.",
  "Se desarrolló profesionalmente como escribiente, Delegado del Ministerio Público y asistente del Director General de Averiguaciones Previas, además de ser Agente del Ministerio Público, Secretario Particular del C. Procurador General de Justicia del Estado de Nuevo León y Director de Bienes Asegurados recuperados e instrumentos del delito de la Procuraduría General de Justicia.",
  "Así mismo, se desempeñó como Coordinador de la Oficina Ejecutiva de la Unidad de Inteligencia Financiera y Económica, Coordinador de Investigaciones y titular de la Unidad de Inteligencia Financiera y Económica en la Secretaría de Finanzas y Tesorería General, estos puestos por parte del Estado de Nuevo León.",
  "Actualmente se desempeña como Director General del Instituto de Defensoría Pública del Estado de Nuevo León.",
];

export function DirectorSection() {
  return (
    <section className="bg-gradient-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 rounded-3xl bg-navy-foreground/5 p-6 ring-1 ring-white/10 sm:grid-cols-[auto_1fr] sm:p-8"
        >
          <div
            className="mx-auto w-44 overflow-hidden bg-primary/20 shadow-glow ring-4 ring-white/20 sm:mx-0 sm:w-52"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)" }}
          >
            <img
              src={directorPhoto.url}
              alt="Carlos Manuel Cuevas Martínez, Director General del IDPNL"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>

          <div className="text-center sm:text-left">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/50 bg-white/25 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              Administración 2021-2027
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-primary-foreground [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] sm:text-3xl">
              Carlos Manuel Cuevas Martínez
            </h2>
            <p className="mt-2 text-base font-medium text-primary-foreground [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
              Director General del Instituto de Defensoría Pública de Nuevo León
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="tel:8120331548"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
              >
                <Phone className="h-4 w-4 text-primary" /> 8120331548
              </a>
              <a
                href="mailto:defensoria.publica@idpnl.gob.mx"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
              >
                <Mail className="h-4 w-4 text-primary" /> defensoria.publica@idpnl.gob.mx
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm transition-colors hover:bg-white/90">
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
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
