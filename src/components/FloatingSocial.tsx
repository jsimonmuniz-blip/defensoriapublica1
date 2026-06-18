import { Facebook, Instagram } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/share/1Cvw6VPpXi/";
const INSTAGRAM_URL =
  "https://www.instagram.com/institutodefensoriapublica?igsh=M20wdW81YTVjaHc5";

export function FloatingSocial() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Facebook"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-navy text-navy-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Facebook className="h-6 w-6" fill="currentColor" stroke="none" />
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-navy text-navy-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Instagram className="h-6 w-6" />
      </a>

    </div>
  );
}
