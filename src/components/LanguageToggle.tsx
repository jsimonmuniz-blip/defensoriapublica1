import { useEffect, useState } from "react";

// Lightweight, dependency-free language switch (Español / English) powered by
// the Google website translator. A flag button toggles between the two.

type Lang = "es" | "en";

const STORAGE_KEY = "preferred-lang";
const COOKIE_NAME = "googtrans";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

function getCurrentLang(): Lang {
  if (typeof document === "undefined") return "es";
  // The user's explicit choice is the source of truth. Google Translate can
  // leave stale cookies on parent domains, so localStorage must win.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* noop */
  }

  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[a-z]+\/([a-z]+)/);
  if (m) return m[1] === "en" ? "en" : "es";
  return "es";
}

function getCookieLang(): Lang | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[a-z]+\/([a-z]+)/);
  if (!m) return null;
  return m[1] === "en" ? "en" : "es";
}

function getDomainCandidates(hostname: string) {
  const cleanHost = hostname.split(":")[0];
  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(cleanHost);
  const domains = new Set<string>();

  if (!cleanHost || cleanHost === "localhost" || isIp) return [];

  const parts = cleanHost.split(".").filter(Boolean);
  for (let i = 0; i <= parts.length - 2; i += 1) {
    const domain = parts.slice(i).join(".");
    domains.add(domain);
    domains.add(`.${domain}`);
  }

  return Array.from(domains);
}

function writeGoogTransCookie(lang: Lang) {
  const value = `/es/${lang}`;
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const persist = "max-age=31536000;SameSite=Lax";
  const domains = getDomainCandidates(window.location.hostname);

  document.cookie = `${COOKIE_NAME}=;path=/;${expire}`;
  domains.forEach((domain) => {
    document.cookie = `${COOKIE_NAME}=;path=/;domain=${domain};${expire}`;
  });

  document.cookie = `${COOKIE_NAME}=${value};path=/;${persist}`;
  domains.forEach((domain) => {
    document.cookie = `${COOKIE_NAME}=${value};path=/;domain=${domain};${persist}`;
  });
}

function setLangCookie(lang: Lang) {
  // Save first, then rewrite every cookie scope Google Translate may read.
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* noop */
  }
  writeGoogTransCookie(lang);
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
    const current = getCurrentLang();
    setLang(current);

    // Enforce the saved preference on every mount/navigation. This prevents a
    // stale parent-domain googtrans cookie from flipping EN back to ES after a
    // reload. We only ever need to force EN: Spanish is the source language, so
    // Google Translate removes the "/es/es" cookie (same source & target),
    // which would otherwise trigger an endless reload loop. Treat a missing
    // cookie as Spanish (the default) and never reload for the "es" case.
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
    if (stored === "en" && getCookieLang() !== "en") {
      writeGoogTransCookie("en");
      window.location.reload();
      return;
    }


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
