import { useEffect, useState } from "react";

// Lightweight, dependency-free language switch (Español / English) powered by
// the Google website translator. A flag button toggles between the two.

type Lang = "es" | "en";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

function getCurrentLang(): Lang {
  if (typeof document === "undefined") return "es";
  const m = document.cookie.match(/googtrans=\/[a-z]+\/([a-z]+)/);
  return m && m[1] === "en" ? "en" : "es";
}

function setLangCookie(lang: Lang) {
  // Always set an explicit value: "/es/en" to translate to English, or
  // "/es/es" to force the original Spanish. Setting "/es/es" (rather than
  // deleting the cookie) reliably reverts Google Translate, which otherwise
  // keeps the page translated after a plain cookie removal.
  const value = `/es/${lang}`;
  const host = window.location.hostname;
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  // Clear any stale cookie across every domain scope first.
  document.cookie = `googtrans=;path=/;${expire}`;
  document.cookie = `googtrans=;path=/;domain=${host};${expire}`;
  document.cookie = `googtrans=;path=/;domain=.${host};${expire}`;
  // Then set the desired value on all scopes so the widget picks it up.
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${host}`;
  document.cookie = `googtrans=${value};path=/;domain=.${host}`;
  window.location.reload();
}

function USFlag({ className }: { className?: string }) {
  // Simplified United States flag (13 stripes + 50-star canton)
  const stars = [];
  for (let row = 0; row < 9; row++) {
    const count = row % 2 === 0 ? 6 : 5;
    const xStart = row % 2 === 0 ? 0.7 : 1.4;
    for (let col = 0; col < count; col++) {
      stars.push(
        <circle
          key={`${row}-${col}`}
          cx={xStart + col * 1.4}
          cy={0.9 + row * 1.05}
          r={0.35}
          fill="#fff"
        />
      );
    }
  }

  return (
    <svg
      viewBox="0 0 16 12"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>United States flag</title>
      <rect width="16" height="12" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          y={(i * 24) / 13}
          width="16"
          height={12 / 13}
          fill="#B22234"
        />
      ))}
      <rect width="6.4" height={Math.round((7 * 12) / 13)} fill="#3C3B6E" />
      {stars}
    </svg>
  );
}

function MexicoFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 12"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Mexico flag</title>
      <rect width="5.33" height="12" fill="#006847" />
      <rect x="5.33" width="5.33" height="12" fill="#fff" />
      <rect x="10.67" width="5.33" height="12" fill="#CE1126" />
    </svg>
  );
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    setLang(getCurrentLang());

    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        try {
          // eslint-disable-next-line no-new
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "es",
              includedLanguages: "en,es",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        } catch {
          /* noop */
        }
      };
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      className={`notranslate inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 text-sm font-semibold text-foreground ${className}`}
    >
      <button
        type="button"
        onClick={() => setLangCookie("es")}
        title="Ver en español"
        aria-label="Ver en español"
        className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${
          lang === "es"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "hover:bg-accent hover:text-primary"
        }`}
      >
        <MexicoFlag className="h-4 w-5 rounded-sm shadow-sm" />
        <span>ES</span>
      </button>
      <button
        type="button"
        onClick={() => setLangCookie("en")}
        title="View in English"
        aria-label="View in English"
        className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "hover:bg-accent hover:text-primary"
        }`}
      >
        <USFlag className="h-4 w-5 rounded-sm shadow-sm" />
        <span>EN</span>
      </button>
      <div id="google_translate_element" className="sr-only" aria-hidden="true" />
    </div>
  );
}
