import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { athletes, weightCategoriesMen, weightCategoriesWomen } from "@/lib/mock-data";

export const Route = createFileRoute("/rankings")({
  head: () => ({
    meta: [
      { title: "State Rankings — TTNAWA" },
      { name: "description", content: "Official Tamil Nadu state arm wrestling rankings across all weight categories." },
    ],
  }),
  component: RankingsPage,
});

function RankingsPage() {
  const [gender, setGender] = useState<"Men" | "Women">("Men");
  const cats = gender === "Men" ? weightCategoriesMen : weightCategoriesWomen;
  const [cat, setCat] = useState<string>(cats[0]);

  // Generate expanded ranking data
  const ranked = Array.from({ length: 10 }).map((_, i) => {
    const base = athletes[i % athletes.length];
    return { ...base, id: `${cat}-${i}`, rank: i + 1, points: 2900 - i * 85, category: cat, gender };
  });

  return (
    <PageShell>
      <PageHero eyebrow="Leaderboard" title="State Rankings" subtitle="Live rankings maintained by the TTNAWA Technical Committee." />

      <section className="container-x py-12">
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex gap-1 border border-white/10 rounded p-1 bg-navy-deep">
            {(["Men", "Women"] as const).map((g) => (
              <button
                key={g}
                onClick={() => { setGender(g); setCat(g === "Men" ? weightCategoriesMen[0] : weightCategoriesWomen[0]); }}
                className={`px-6 py-2 rounded uppercase text-sm tracking-widest font-heading transition ${gender === g ? "bg-red text-white" : "text-muted-foreground hover:text-gold"}`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded uppercase text-xs tracking-widest font-heading border transition ${cat === c ? "border-gold bg-gold/10 text-gold" : "border-white/10 text-muted-foreground hover:text-gold hover:border-gold/50"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="card-federation overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-deep border-b border-white/10">
              <tr>
                <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Rank</th>
                <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Athlete</th>
                <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold hidden md:table-cell">District</th>
                <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold hidden md:table-cell">Medals</th>
                <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((a) => (
                <tr key={a.id} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="p-4">
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-lg ${a.rank === 1 ? "bg-gold text-navy-deep" : a.rank <= 3 ? "bg-red text-white" : "bg-white/10 text-foreground"}`}>
                      {a.rank}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={a.photo} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div>
                        <div className="font-heading">{a.name}</div>
                        <div className="text-xs text-muted-foreground md:hidden">{a.district}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell text-muted-foreground">{a.district}</td>
                  <td className="p-4 hidden md:table-cell text-muted-foreground">{a.medals}</td>
                  <td className="p-4 text-right font-display text-xl text-gradient-gold">{a.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
