import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { X, Send, Sparkles } from "lucide-react";
import dipi from "@/assets/dipi-mascot.png";

const SUGGESTIONS = [
  "¿Cómo saco mi CURP?",
  "¿Cómo obtengo un acta de nacimiento?",
  "Quiero asesoría de divorcio",
  "¿Dónde están sus oficinas?",
];

const GREETING =
  "¡Hola! 👋 Soy el asistente virtual del Instituto de Defensoría Pública de Nuevo León. Puedo ayudarte con trámites, servicios gratuitos, ubicaciones y dudas como sacar tu CURP o un acta de nacimiento. ¿En qué te apoyo?";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isLoading) return;
    sendMessage({ text: value });
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating launcher + proactive bubble */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showBubble && !open && (
            <motion.button
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="relative max-w-[260px] rounded-2xl rounded-br-sm bg-card p-4 text-left shadow-elegant ring-1 ring-border"
            >
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-semibold text-foreground">¡Hola! 👋</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Soy el asistente virtual. ¿Necesitas ayuda con un trámite o servicio? Pregúntame lo que quieras.
              </p>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              aria-label="Abrir asistente virtual"
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow"
            >
              <img src={dipi} alt="Asistente virtual" className="h-12 w-12 object-contain drop-shadow" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="fixed bottom-5 right-5 z-50 flex h-[min(620px,85vh)] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl bg-card shadow-elegant ring-1 ring-border"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-navy px-4 py-3.5 text-navy-foreground">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 p-1">
                <img src={dipi} alt="Asistente virtual" className="h-9 w-9 object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-bold leading-none">Asistente virtual</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-navy-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Asistente del IDPNL
                </p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Cerrar" className="rounded-full p-1.5 hover:bg-white/15">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-background px-4 py-4">
              {/* Greeting */}
              <div className="flex gap-2.5">
                <img src={dipi} alt="" className="h-8 w-8 shrink-0 rounded-full bg-accent object-contain p-0.5" />
                <div className="prose-chat max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5 text-sm text-foreground">
                  <ReactMarkdown>{GREETING}</ReactMarkdown>
                </div>
              </div>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pl-10">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                if (m.role === "user") {
                  return (
                    <div key={m.id} className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-primary px-3.5 py-2.5 text-sm text-primary-foreground">
                        {text}
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={m.id} className="flex gap-2.5">
                    <img src={dipi} alt="" className="h-8 w-8 shrink-0 rounded-full bg-accent object-contain p-0.5" />
                    <div className="prose-chat max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5 text-sm text-foreground">
                      <ReactMarkdown
                        components={{
                          a: ({ ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline" />
                          ),
                        }}
                      >
                        {text || "…"}
                      </ReactMarkdown>
                    </div>
                  </div>
                );
              })}

              {status === "submitted" && (
                <div className="flex gap-2.5">
                  <img src={dipi} alt="" className="h-8 w-8 shrink-0 rounded-full bg-accent object-contain p-0.5" />
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-secondary px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                  </div>
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card px-3 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta…"
                className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="flex items-center justify-center gap-1 bg-card pb-2 text-[10px] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> El asistente solo responde temas del IDPNL
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
