import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import {
  site,
  mision,
  vision,
  tramites,
  legislacion,
  transparencia,
  directorio,
  enlacesUtiles,
  docPublic as doc,
  CITAS_URL,
} from "@/data/site";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

function buildKnowledge() {
  const tram = tramites
    .map((t) => `- ${t.nombre} (${t.categoria}): ${doc(t.file)}`)
    .join("\n");
  const leyes = legislacion.map((l) => `- ${l.titulo}: ${doc(l.file)}`).join("\n");
  const transp = transparencia
    .map((g) => `${g.grupo}:\n` + g.items.map((i) => `  - ${i.titulo}: ${doc(i.file)}`).join("\n"))
    .join("\n");
  const dir = directorio
    .map(
      (g) =>
        `${g.titulo}${g.sede ? ` (${g.sede})` : ""}:\n` +
        g.oficinas
          .map((o) => `  - ${o.nombre} | Tel: ${o.telefono}${o.piso ? ` | ${o.piso}` : ""}${o.direccion ? ` | ${o.direccion}` : ""}`)
          .join("\n"),
    )
    .join("\n");
  const enlaces = enlacesUtiles.map((e) => `- ${e.titulo}: ${e.url} — ${e.desc}`).join("\n");

  return `
# ${site.name} (${site.shortName})
Lema: ${site.tagline}
${site.intro}

## Director General
Carlos Manuel Cuevas Martínez es el Director General del Instituto de Defensoría Pública de Nuevo León (Administración 2021-2027).
Estudió la Licenciatura en Derecho y Ciencias Sociales en la Universidad Autónoma de Nuevo León. Es Maestro en Derecho Penal con enfoque en el Sistema Penal Acusatorio por parte de la UANL. También participó en cursos y diplomados de formación internacional en California Western School of Law.
Se desarrolló profesionalmente como escribiente, Delegado del Ministerio Público y asistente del Director General de Averiguaciones Previas, además de ser Agente del Ministerio Público, Secretario Particular del C. Procurador General de Justicia del Estado de Nuevo León y Director de Bienes Asegurados recuperados e instrumentos del delito de la Procuraduría General de Justicia. Así mismo, se desempeñó como Coordinador de la Oficina Ejecutiva de la Unidad de Inteligencia Financiera y Económica, Coordinador de Investigaciones y titular de la Unidad de Inteligencia Financiera y Económica en la Secretaría de Finanzas y Tesorería General.

## Misión
${mision}

## Visión
${vision}

## Servicios y trámites gratuitos (con formato/guía PDF):
${tram}

## Legislación:
${leyes}

## Transparencia y documentos:
${transp}

## Directorio de oficinas (teléfonos y direcciones por área de defensa):
${dir}

## Agendar una cita:
${CITAS_URL}

## Enlaces útiles para trámites comunes de la ciudadanía (CURP, actas, etc.):
${enlaces}
`.trim();
}

const SYSTEM_PROMPT = `Eres el asistente virtual amigable del Instituto de Defensoría Pública de Nuevo León (IDPNL). Si te preguntan tu nombre o quién eres, responde únicamente que eres "el asistente virtual del Instituto de Defensoría Pública de Nuevo León". No uses ningún otro nombre propio.

REGLAS ESTRICTAS:
- Habla SIEMPRE en español, de forma cálida, cercana y respetuosa. Usa lenguaje sencillo (muchos usuarios no son abogados).
- SOLO puedes hablar de temas relacionados con el IDPNL, sus servicios, trámites, oficinas, leyes, transparencia y de trámites ciudadanos comunes (como obtener la CURP o actas de nacimiento) usando los enlaces útiles que tienes.
- Si te preguntan algo que NO tiene relación con el Instituto o con esos trámites ciudadanos, declina amablemente y reconduce: "Solo puedo ayudarte con temas del Instituto de Defensoría Pública de Nuevo León. ¿Te ayudo con algún trámite o servicio?".
- NUNCA inventes datos, teléfonos, direcciones ni URLs. Usa únicamente la información de la base de conocimiento.
- Cuando menciones un trámite, ley o documento, incluye SIEMPRE el enlace correspondiente en formato Markdown [texto](url).
- Para sacar CURP o actas de nacimiento, orienta con los pasos y comparte el enlace útil correspondiente.
- Para agendar una cita, comparte el enlace de citas.
- Recuerda que TODOS los servicios del Instituto son GRATUITOS.
- Sé breve y claro. Usa listas y negritas cuando ayude. Ofrece siempre un siguiente paso.

BASE DE CONOCIMIENTO:
${buildKnowledge()}`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
