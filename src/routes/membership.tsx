import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { FaCheck } from "react-icons/fa";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — TTNAWA" },
      { name: "description", content: "Register as an athlete, coach, official or district unit member of TTNAWA." },
    ],
  }),
  component: MembershipPage,
});

const plans = [
  {
    type: "Athlete",
    fee: "₹500 / year",
    perks: ["Official TTNAWA membership ID", "Eligible for state ranking", "Tournament registration access", "Insurance coverage during events"],
  },
  {
    type: "Coach",
    fee: "₹1,000 / year",
    perks: ["Coach certification pathway", "Access to coaching clinics", "Athlete assignment", "Voting rights at AGM"],
  },
  {
    type: "Official",
    fee: "₹800 / year",
    perks: ["Referee & judge certification", "Tournament officiating assignments", "Rulebook and training kit", "Continuous education workshops"],
  },
  {
    type: "District Unit",
    fee: "₹5,000 / year",
    perks: ["Official district recognition", "Right to conduct district events", "Athlete pipeline into state teams", "Federation resource support"],
  },
];

function MembershipPage() {
  const [selected, setSelected] = useState(plans[0].type);
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero eyebrow="Join" title="Membership" subtitle="Become part of Tamil Nadu's official arm wrestling federation." />

      <section className="container-x py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((p) => (
            <button
              key={p.type}
              onClick={() => setSelected(p.type)}
              className={`card-federation p-6 text-left ${selected === p.type ? "!border-gold shadow-glow" : ""}`}
              style={selected === p.type ? { boxShadow: "var(--shadow-gold)" } : undefined}
            >
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{p.type} Membership</div>
              <div className="font-display text-3xl mb-4">{p.fee}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2"><FaCheck className="text-red mt-1 flex-shrink-0" size={12} /> {perk}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-federation p-8">
            <h2 className="font-display text-3xl uppercase mb-6">Registration Form</h2>
            {submitted ? (
              <div className="p-8 rounded text-center border border-gold bg-gold/10">
                <div className="font-display text-4xl text-gradient-gold mb-2">Welcome!</div>
                <div className="text-muted-foreground">Your {selected} membership application has been received. Payment link and membership ID will be emailed shortly.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                  <input required type="date" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input required type="email" placeholder="Email" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                  <input required placeholder="Phone" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                </div>
                <input required placeholder="District" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                <textarea placeholder="Achievements / Notes" rows={3} className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none resize-none" />
                <div className="p-3 rounded border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected Plan</div>
                    <div className="font-heading">{selected} Membership</div>
                  </div>
                  <div className="font-display text-2xl text-gold">{plans.find((p) => p.type === selected)?.fee}</div>
                </div>
                <button type="submit" className="btn-primary w-full">Register & Proceed to Payment</button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-display text-3xl uppercase mb-6">Membership ID Preview</h2>
            <div className="rounded-lg overflow-hidden border-2 border-gold" style={{ background: "var(--gradient-hero)" }}>
              <div className="p-6 border-b-2 border-gold flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold">Tamil Nadu Arm Wrestling Association</div>
                  <div className="font-display text-2xl text-white">TTNAWA</div>
                </div>
                <div className="font-display text-2xl text-gradient-gold">2026</div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="aspect-square bg-white/10 rounded flex items-center justify-center text-xs uppercase text-muted-foreground text-center">Photo</div>
                <div className="col-span-2 space-y-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">Name</div>
                    <div className="font-heading">Your Name Here</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">Member Type</div>
                    <div className="font-heading">{selected}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">Member ID</div>
                    <div className="font-display text-lg text-gold">TTN-2026-0000</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-navy-deep border-t border-gold flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Valid until 31 Dec 2026</span>
                <span className="text-gold">ttnawa.org</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Digital ID card issued upon payment confirmation. Physical card mailed within 15 working days.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
