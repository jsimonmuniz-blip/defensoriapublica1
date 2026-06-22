import { useEffect, useRef, useState } from "react";
import { Eye, Minus, Plus, Contrast, RotateCcw, X } from "lucide-react";

const STORAGE_KEY = "idpnl-a11y";
const BASE_FONT_PX = 16;
const MIN_LEVEL = 0;
const MAX_LEVEL = 5;
const STEP = 0.08; // 8% por nivel

type A11ySettings = {
  level: number;
  contrast: boolean;
};

function loadSettings(): A11ySettings {
  if (typeof window === "undefined") return { level: 0, contrast: false };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { level: 0, contrast: false };
    const parsed = JSON.parse(raw) as Partial<A11ySettings>;
    return {
      level: Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, parsed.level ?? 0)),
      contrast: Boolean(parsed.contrast),
    };
  } catch {
    return { level: 0, contrast: false };
  }
}

function applySettings({ level, contrast }: A11ySettings) {
  if (typeof document === "undefined") return;
  document.documentElement.style.fontSize = `${BASE_FONT_PX * (1 + level * STEP)}px`;
  document.documentElement.classList.toggle("a11y-contrast", contrast);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>({ level: 0, contrast: false });
  const panelRef = useRef<HTMLDivElement>(null);

  // Cargar preferencia guardada al iniciar
  useEffect(() => {
    const initial = loadSettings();
    setSettings(initial);
    applySettings(initial);
  }, []);

  // Aplicar y persistir en cada cambio
  useEffect(() => {
    applySettings(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* almacenamiento no disponible */
    }
  }, [settings]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const increase = () =>
    setSettings((s) => ({ ...s, level: Math.min(MAX_LEVEL, s.level + 1) }));
  const decrease = () =>
    setSettings((s) => ({ ...s, level: Math.max(MIN_LEVEL, s.level - 1) }));
  const toggleContrast = () =>
    setSettings((s) => ({ ...s, contrast: !s.contrast }));
  const reset = () => setSettings({ level: 0, contrast: false });

  const fontPercent = Math.round((1 + settings.level * STEP) * 100);

  return (
    <div ref={panelRef} className="fixed bottom-24 left-5 z-50 flex flex-col items-end gap-3">

      {open && (
        <div
          role="dialog"
          aria-label="Opciones de accesibilidad"
          className="w-72 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-elegant"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Accesibilidad</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar opciones de accesibilidad"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Tamaño de letra
          </p>
          <div className="mb-4 flex items-center gap-2">
            <button
              onClick={decrease}
              disabled={settings.level <= MIN_LEVEL}
              aria-label="Reducir tamaño de letra"
              className="flex h-10 flex-1 items-center justify-center gap-1 rounded-lg border border-border bg-background font-semibold transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Minus className="h-4 w-4" /> A
            </button>
            <span className="w-14 text-center text-sm font-semibold tabular-nums">
              {fontPercent}%
            </span>
            <button
              onClick={increase}
              disabled={settings.level >= MAX_LEVEL}
              aria-label="Aumentar tamaño de letra"
              className="flex h-10 flex-1 items-center justify-center gap-1 rounded-lg border border-border bg-background font-semibold transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-4 w-4" /> A
            </button>
          </div>

          <button
            onClick={toggleContrast}
            aria-pressed={settings.contrast}
            className={`mb-2 flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
              settings.contrast
                ? "border-transparent bg-gradient-navy text-navy-foreground"
                : "border-border bg-background hover:bg-muted"
            }`}
          >
            <Contrast className="h-4 w-4" />
            {settings.contrast ? "Alto contraste activado" : "Activar alto contraste"}
          </button>

          <button
            onClick={reset}
            className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" /> Restablecer
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Opciones de accesibilidad"
        aria-expanded={open}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <Eye className="h-7 w-7" />
      </button>
    </div>
  );
}
