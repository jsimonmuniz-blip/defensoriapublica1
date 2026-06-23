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
  const value = `/es/${lang}`;
  const host = window.location.hostname;
  // Clear then set across all reasonable domain scopes so the widget picks it up.
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=;path=/;${expire}`;
  document.cookie = `googtrans=;path=/;domain=${host};${expire}`;
  document.cookie = `googtrans=;path=/;domain=.${host};${expire}`;
  if (lang === "en") {
    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};path=/;domain=${host}`;
    document.cookie = `googtrans=${value};path=/;domain=.${host}`;
  }
  window.location.reload();
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

  const isEnglish = lang === "en";

  return (
    <>
      <button
        type="button"
        onClick={() => setLangCookie(isEnglish ? "es" : "en")}
        title={isEnglish ? "Ver en español" : "View in English"}
        aria-label={isEnglish ? "Ver en español" : "View in English"}
        className={`notranslate inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary ${className}`}
      >
        <span className="text-base leading-none">{isEnglish ? "🇲🇽" : "🇺🇸"}</span>
        <span>{isEnglish ? "ES" : "EN"}</span>
      </button>
      <div id="google_translate_element" className="sr-only" aria-hidden="true" />
    </>
  );
}
