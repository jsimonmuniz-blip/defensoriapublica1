import { FileText, Download } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-primary">
      <div className="mx-auto flex min-h-[18rem] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="mb-3 inline-block w-fit rounded-full bg-white/25 px-4 py-1 text-sm font-semibold text-primary-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="text-balance font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}

export function DocLink({ href, title, subtitle }: { href: string; title: string; subtitle?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
        <FileText className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        {subtitle && <span className="mt-0.5 block text-xs text-muted-foreground">{subtitle}</span>}
      </span>
      <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </a>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}
