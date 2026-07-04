import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { tournaments, pastTournaments } from "@/lib/mock-data";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaFilePdf } from "react-icons/fa";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — TTNAWA" },
      { name: "description", content: "Upcoming and past arm wrestling tournaments organised by TTNAWA." },
    ],
  }),
  component: TournamentsPage,
});

function TournamentsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  return (
    <PageShell>
      <PageHero eyebrow="Compete" title="Tournaments" subtitle="Championships, cups and open events across Tamil Nadu." />

      <section className="container-x py-12">
        <div className="flex gap-1 border border-white/10 rounded p-1 bg-navy-deep w-fit mb-10">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded uppercase text-sm tracking-widest font-heading transition ${tab === t ? "bg-red text-white" : "text-muted-foreground hover:text-gold"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "upcoming" ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {tournaments.map((t) => (
              <div key={t.id} className="card-federation p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs uppercase tracking-widest font-bold px-2 py-1 rounded ${t.status === "Registration Open" ? "bg-red text-white" : "bg-white/10 text-gold"}`}>
                    {t.status}
                  </span>
                  <span className="font-display text-2xl text-gold">
                    {new Date(t.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </span>
                </div>
                <h3 className="font-heading text-2xl mb-3">{t.title}</h3>
                <p className="text-muted-foreground mb-5">{t.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-gold" /> {t.venue}</div>
                  <div className="flex items-center gap-3"><FaCalendarAlt className="text-gold" /> {new Date(t.date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</div>
                  <div className="flex items-start gap-3"><FaUserFriends className="text-gold mt-1" /> {t.categories.join(" · ")}</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="btn-primary">Register</button>
                  <button className="btn-outline"><FaFilePdf /> Brochure</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-federation overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-navy-deep border-b border-white/10">
                <tr>
                  <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Tournament</th>
                  <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Venue</th>
                  <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Date</th>
                  <th className="p-4 font-heading uppercase text-xs tracking-widest text-gold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {pastTournaments.map((p) => (
                  <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4 font-heading">{p.title}</td>
                    <td className="p-4 text-muted-foreground">{p.venue}</td>
                    <td className="p-4 text-muted-foreground">{new Date(p.date).toLocaleDateString("en-IN")}</td>
                    <td className="p-4 text-gold">{p.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </PageShell>
  );
}
