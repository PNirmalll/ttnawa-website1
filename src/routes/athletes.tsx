import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { athletes, districts, weightCategoriesMen, weightCategoriesWomen } from "@/lib/mock-data";
import { FaSearch, FaMedal } from "react-icons/fa";

export const Route = createFileRoute("/athletes")({
  head: () => ({
    meta: [
      { title: "Athletes — TTNAWA" },
      { name: "description", content: "Browse registered athletes representing Tamil Nadu in arm wrestling." },
    ],
  }),
  component: AthletesPage,
});

function AthletesPage() {
  const [q, setQ] = useState("");
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");
  const [cat, setCat] = useState("");

  const filtered = useMemo(() => {
    return athletes.filter((a) =>
      (!q || a.name.toLowerCase().includes(q.toLowerCase())) &&
      (!gender || a.gender === gender) &&
      (!district || a.district === district) &&
      (!cat || a.category === cat)
    );
  }, [q, gender, district, cat]);

  const categories = gender === "Women" ? weightCategoriesWomen : gender === "Men" ? weightCategoriesMen : [...weightCategoriesMen, ...weightCategoriesWomen];

  return (
    <PageShell>
      <PageHero eyebrow="Roster" title="Athlete Directory" subtitle="Registered athletes competing under the TTNAWA banner." />

      <section className="container-x py-12">
        <div className="card-federation p-6 grid gap-3 md:grid-cols-5 mb-8">
          <div className="relative md:col-span-2">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search athletes..."
              className="w-full pl-10 pr-3 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none"
            />
          </div>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="px-3 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none">
            <option value="">All Genders</option>
            <option>Men</option>
            <option>Women</option>
          </select>
          <select value={district} onChange={(e) => setDistrict(e.target.value)} className="px-3 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none">
            <option value="">All Districts</option>
            {districts.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="px-3 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none">
            <option value="">All Categories</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((a) => (
            <div key={a.id} className="card-federation overflow-hidden group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={a.photo} alt={a.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-red text-white px-2 py-1 text-xs uppercase tracking-widest font-bold">#{a.rank}</div>
                <div className="absolute top-3 right-3 bg-gold text-navy-deep px-2 py-1 text-xs font-bold">{a.category}</div>
              </div>
              <div className="p-4">
                <div className="font-heading text-lg">{a.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{a.district} · {a.gender}</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gold"><FaMedal /> {a.medals} medals · {a.points} pts</div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-16">No athletes match your filters.</div>
        )}
      </section>
    </PageShell>
  );
}
