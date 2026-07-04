import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { sponsors } from "@/lib/mock-data";
import { FaCrown, FaMedal, FaAward, FaStar } from "react-icons/fa";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners — TTNAWA" },
      { name: "description", content: "Sponsors, partners and supporters of the Tamil Nadu Arm Wrestling Association." },
    ],
  }),
  component: SponsorsPage,
});

const tiers = [
  { name: "Title Sponsor", icon: FaCrown, color: "text-gold" },
  { name: "Gold Sponsor", icon: FaAward, color: "text-gold" },
  { name: "Silver Sponsor", icon: FaMedal, color: "text-foreground/70" },
  { name: "Bronze Sponsor", icon: FaStar, color: "text-red" },
];

function SponsorsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Partners" title="Sponsors & Partners" subtitle="Businesses that power arm wrestling in Tamil Nadu." />
      <section className="container-x py-12 space-y-16">
        {tiers.map((tier) => {
          const list = sponsors.filter((s) => s.tier === tier.name);
          if (!list.length) return null;
          const Icon = tier.icon;
          return (
            <div key={tier.name}>
              <div className="flex items-center gap-3 mb-6">
                <Icon className={`text-2xl ${tier.color}`} />
                <h2 className="font-display text-3xl uppercase">{tier.name}</h2>
              </div>
              <div className={`grid gap-4 ${tier.name === "Title Sponsor" ? "grid-cols-1" : "grid-cols-2 md:grid-cols-4"}`}>
                {list.map((s) => (
                  <a key={s.name} href="#" className="card-federation p-8 text-center block">
                    <div className={`font-display uppercase ${tier.name === "Title Sponsor" ? "text-4xl md:text-5xl" : "text-2xl"}`}>{s.name}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-gold">Visit Website →</div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        <div className="card-federation p-10 text-center">
          <h3 className="font-display text-3xl uppercase mb-3">Become A Sponsor</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">Partner with Tamil Nadu's official arm wrestling federation and reach thousands of athletes, families and sports enthusiasts.</p>
          <a href="mailto:sponsorship@ttnawa.org" className="mt-6 inline-flex btn-primary">Contact Us</a>
        </div>
      </section>
    </PageShell>
  );
}
