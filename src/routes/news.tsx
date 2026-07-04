import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { news } from "@/lib/mock-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Announcements — TTNAWA" },
      { name: "description", content: "Latest news, tournament updates and circulars from TTNAWA." },
    ],
  }),
  component: NewsPage,
});

const cats = ["All", "Association News", "Tournament News", "Athlete Achievements", "Circulars"];

function NewsPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? news : news.filter((n) => n.category === cat);
  return (
    <PageShell>
      <PageHero eyebrow="Newsroom" title="News & Announcements" subtitle="Federation updates, results and official circulars." />
      <section className="container-x py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded uppercase text-xs tracking-widest font-heading border transition ${cat === c ? "border-gold bg-gold/10 text-gold" : "border-white/10 text-muted-foreground hover:text-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((n) => (
            <article key={n.id} className="card-federation p-6 flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gold">{n.category}</span>
              <h3 className="font-heading text-xl mt-3">{n.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{n.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                <span>{new Date(n.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
                <span>{n.author}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
