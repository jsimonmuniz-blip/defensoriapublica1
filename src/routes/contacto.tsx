import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, CalendarCheck, MessageCircle, ClipboardList, ShieldAlert } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { CITAS_URL, CONSULTA_CITA_URL } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y citas | IDPNL" },
      { name: "description", content: "Contáctanos o agenda tu cita en el Instituto de Defensoría Pública de Nuevo León. Edificio Central: Matamoros 311 Ote., Centro, Monterrey." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contáctanos"
        subtitle="Agenda tu cita o comunícate con el Edificio Central. Estamos para servirte."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <a
            href={CITAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <CalendarCheck className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-foreground">Agendar una cita</h3>
            <p className="mt-2 text-sm text-muted-foreground">Reserva tu cita en línea para recibir atención jurídica gratuita.</p>
          </a>

          <a
            href={CONSULTA_CITA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <ClipboardList className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-foreground">Consultar mi cita</h3>
            <p className="mt-2 text-sm text-muted-foreground">¿Ya tienes una cita? Consulta el estatus de tu solicitud.</p>
          </a>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <MessageCircle className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-foreground">Pregúntale a Dipi</h3>
            <p className="mt-2 text-sm text-muted-foreground">Nuestro asistente virtual resuelve tus dudas sobre trámites y servicios al instante, abajo a la derecha.</p>
          </div>


        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-card sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Edificio Central</h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Matamoros 311 Ote., Centro, Monterrey, N.L.
            </p>
            <a href="tel:8120205600" className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" /> 81 2020-5600
            </a>
          </div>
          <div className="rounded-2xl bg-secondary p-5">
            <p className="font-display text-lg font-bold text-primary">¡Sin defensa no hay justicia!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Recuerda que todos nuestros servicios son completamente gratuitos.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
