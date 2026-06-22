import { Facebook, Instagram, Youtube } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/share/1D2LPgaefV/?mibextid=wwXIfr";
const INSTAGRAM_URL =
  "https://www.instagram.com/institutodefensoriapublica?igsh=MW9qbDZqdGljaXd5bw==";
const YOUTUBE_URL =
  "https://youtube.com/@institutodefensoriapublica?si=15NSM3uM14c0pBxJ";

export function FloatingSocial() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
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
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en YouTube"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-navy text-navy-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Youtube className="h-6 w-6" />
      </a>
    </div>
  );
}
