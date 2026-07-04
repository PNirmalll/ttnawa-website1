import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,var(--red)_0%,transparent_65%)]" />
      <div className="container-x relative py-20 md:py-28 text-center">
        {eyebrow && <div className="section-label justify-center mb-4">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-7xl uppercase">
          <span className="text-gradient-gold">{title}</span>
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
