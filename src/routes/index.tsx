import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaMapMarkedAlt, FaMedal, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { PageShell } from "@/components/site/PageShell";
import { stats, tournaments, news, athletes, sponsors } from "@/lib/mock-data";
import hero from "@/assets/hero-armwrestling.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/")({ component: Home });

const statIcons = [FaUsers, FaMapMarkedAlt, FaTrophy, FaMedal];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Arm wrestling" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
        </div>
        <div className="container-x relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="section-label mb-6">Official State Federation</div>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              The Tamil Nadu <br />
              <span className="text-gradient-gold">Arm Wrestling</span> <br />
              Association
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
              Promoting strength, discipline and excellence in arm wrestling across Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/membership" className="btn-primary">Join Association <FaArrowRight /></Link>
              <Link to="/rankings" className="btn-outline">View Rankings</Link>
              <Link to="/tournaments" className="btn-outline">Register for Tournament</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-navy-deep/60">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center"
              >
                <Icon className="mx-auto mb-3 text-gold" size={28} />
                <div className="font-display text-4xl md:text-5xl text-gradient-gold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3">Compete</div>
            <h2 className="font-display text-5xl uppercase">Upcoming Tournaments</h2>
          </div>
          <Link to="/tournaments" className="text-gold text-sm uppercase tracking-widest hover:underline">All Tournaments →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.slice(0, 3).map((t) => (
            <div key={t.id} className="card-federation p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-red font-semibold">{t.status}</span>
                <FaCalendarAlt className="text-gold" />
              </div>
              <h3 className="font-heading text-xl mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.venue}</p>
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-display text-2xl text-gold">
                  {new Date(t.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </span>
                <Link to="/tournaments" className="text-red hover:text-gold text-sm uppercase tracking-widest">Details →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP ATHLETES */}
      <section className="bg-navy-deep/60 border-y border-white/10 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label mb-3">Champions</div>
              <h2 className="font-display text-5xl uppercase">Top Athletes</h2>
            </div>
            <Link to="/athletes" className="text-gold text-sm uppercase tracking-widest hover:underline">Full Roster →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {athletes.slice(0, 4).map((a) => (
              <div key={a.id} className="card-federation overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={a.photo} alt={a.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-red text-white px-2 py-1 text-xs uppercase tracking-widest font-bold">Rank #{a.rank}</div>
                  <div className="absolute bottom-3 right-3 bg-gold text-navy-deep px-2 py-1 text-xs font-bold">{a.category}</div>
                </div>
                <div className="p-4">
                  <div className="font-heading text-lg">{a.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{a.district} · {a.medals} Medals</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3">Newsroom</div>
            <h2 className="font-display text-5xl uppercase">Latest News</h2>
          </div>
          <Link to="/news" className="text-gold text-sm uppercase tracking-widest hover:underline">All News →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <article key={n.id} className="card-federation p-6">
              <span className="text-xs uppercase tracking-widest text-gold">{n.category}</span>
              <h3 className="font-heading text-xl mt-3">{n.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                <span>{new Date(n.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
                <Link to="/news" className="text-red hover:text-gold uppercase tracking-widest">Read →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={gallery1} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="container-x relative">
          <div className="max-w-2xl">
            <div className="section-label mb-3">Moments</div>
            <h2 className="font-display text-5xl uppercase mb-4">The Roar Of Competition</h2>
            <p className="text-muted-foreground text-lg">Championship arenas, gold medal ceremonies and training camps across Tamil Nadu.</p>
            <Link to="/gallery" className="mt-8 btn-outline inline-flex">Explore Gallery</Link>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="container-x py-24">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-3">Our Supporters</div>
          <h2 className="font-display text-5xl uppercase">Sponsors & Partners</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.slice(0, 8).map((s) => (
            <div key={s.name} className="card-federation p-6 text-center">
              <div className="font-heading text-lg">{s.name}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gold">{s.tier}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-lg p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "var(--gradient-red)" }}>
          <h2 className="font-display text-4xl md:text-6xl uppercase text-white">Become A Member</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">Join Tamil Nadu's official arm wrestling federation and compete on the state, national and international stage.</p>
          <Link to="/membership" className="mt-8 inline-flex btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-red">
            Register Now
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
