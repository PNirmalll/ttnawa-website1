import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TTNAWA — Tamil Nadu Arm Wrestling Association" },
      { name: "description", content: "History, mission, vision and achievements of the Tamil Nadu Arm Wrestling Association." },
    ],
  }),
  component: AboutPage,
});

const objectives = [
  "Talent identification across all 38 districts",
  "Conduct annual state and zonal championships",
  "Structured athlete development pathways",
  "Certified coaching programmes",
  "Grassroots youth participation initiatives",
  "Dedicated women's participation cell",
  "International representation of Tamil Nadu athletes",
  "Anti-doping education and compliance",
];

const timeline = [
  { year: "1998", title: "TTNAWA Founded", desc: "Established as the official state federation for arm wrestling in Tamil Nadu." },
  { year: "2005", title: "IAF Affiliation", desc: "Recognised by the Indian Arm Wrestling Federation." },
  { year: "2012", title: "First International Medal", desc: "Tamil Nadu athlete wins silver at Asian Championships." },
  { year: "2018", title: "Women's Wing", desc: "Launched dedicated women's development programme." },
  { year: "2023", title: "38 District Units", desc: "Complete coverage across every district of Tamil Nadu." },
  { year: "2025", title: "12 National Medals", desc: "Historic tally at the National Championship in Delhi." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About" title="About TTNAWA" subtitle="The story, purpose and ambition of Tamil Nadu's arm wrestling federation." />

      <section className="container-x py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="section-label mb-3">Our Story</div>
          <h2 className="font-display text-4xl uppercase mb-6">A Federation Built On Strength</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Founded in 1998, The Tamil Nadu Arm Wrestling Association (TTNAWA) is the official state governing body for the sport. Recognised by the Indian Arm Wrestling Federation and affiliated with the World Armwrestling Federation, TTNAWA oversees competition, coaching, athlete welfare and grassroots development.</p>
            <p>From humble beginnings in a handful of clubs, TTNAWA has grown to represent 38 district associations, over 1,240 registered athletes and a growing network of certified coaches and officials.</p>
            <p>Our work is guided by a single conviction: that arm wrestling — an ancient test of strength — deserves a modern, professional, and inclusive federation worthy of Tamil Nadu's sporting heritage.</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="card-federation p-8">
            <FaBullseye className="text-gold mb-3" size={28} />
            <h3 className="font-heading text-2xl uppercase mb-2">Mission</h3>
            <p className="text-muted-foreground">Promote arm wrestling throughout Tamil Nadu by providing structured competition, quality coaching and a clear pathway from grassroots to international representation.</p>
          </div>
          <div className="card-federation p-8">
            <FaEye className="text-gold mb-3" size={28} />
            <h3 className="font-heading text-2xl uppercase mb-2">Vision</h3>
            <p className="text-muted-foreground">To develop world-class athletes and firmly establish Tamil Nadu as India's leading arm wrestling state — represented on national and international podiums.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep/60 border-y border-white/10 py-20">
        <div className="container-x">
          <div className="section-label mb-3">Objectives</div>
          <h2 className="font-display text-4xl uppercase mb-12">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((o) => (
              <div key={o} className="flex items-start gap-3 p-4 rounded border border-white/5">
                <FaCheckCircle className="text-red mt-1 flex-shrink-0" />
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="section-label mb-3">Milestones</div>
        <h2 className="font-display text-4xl uppercase mb-12">Achievements Timeline</h2>
        <div className="relative border-l-2 border-gold/40 pl-8 space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-red border-4 border-navy-deep" />
              <div className="font-display text-3xl text-gold">{t.year}</div>
              <div className="font-heading text-xl mt-1">{t.title}</div>
              <p className="text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card-federation p-10 text-center">
          <div className="section-label justify-center mb-3">Affiliations</div>
          <h3 className="font-display text-3xl uppercase mb-6">Recognised & Affiliated With</h3>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div><div className="font-heading text-lg text-foreground">IAF</div>Indian Arm Wrestling Federation</div>
            <div><div className="font-heading text-lg text-foreground">WAF</div>World Armwrestling Federation</div>
            <div><div className="font-heading text-lg text-foreground">AAF</div>Asian Armwrestling Federation</div>
            <div><div className="font-heading text-lg text-foreground">TN SDAT</div>Sports Development Authority TN</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
