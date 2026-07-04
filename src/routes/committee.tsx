import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { committee } from "@/lib/mock-data";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Executive Committee — TTNAWA" },
      { name: "description", content: "Meet the executive committee leading the Tamil Nadu Arm Wrestling Association." },
    ],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Leadership" title="Executive Committee" subtitle="The office bearers steering TTNAWA's mission across Tamil Nadu." />
      <section className="container-x py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committee.map((m) => (
            <div key={m.name} className="card-federation overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs uppercase tracking-widest text-gold">{m.role}</div>
                  <div className="font-heading text-xl">{m.name}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-4 flex gap-3 text-gold">
                  <a href="#" aria-label="Email" className="hover:text-red"><FaEnvelope /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-red"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
