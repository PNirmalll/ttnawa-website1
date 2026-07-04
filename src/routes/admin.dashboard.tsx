import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { athletes, tournaments, news, sponsors, committee } from "@/lib/mock-data";
import { FaUsers, FaTrophy, FaNewspaper, FaHandshake, FaChartLine, FaEnvelope, FaImages, FaIdCard } from "react-icons/fa";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — TTNAWA" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const modules = [
  { name: "Athletes", icon: FaUsers, count: "1,240" },
  { name: "Tournaments", icon: FaTrophy, count: "24" },
  { name: "News Articles", icon: FaNewspaper, count: news.length.toString() },
  { name: "Sponsors", icon: FaHandshake, count: sponsors.length.toString() },
  { name: "Rankings", icon: FaChartLine, count: "16 cats" },
  { name: "Messages", icon: FaEnvelope, count: "12 new" },
  { name: "Gallery", icon: FaImages, count: "348" },
  { name: "Memberships", icon: FaIdCard, count: "1,562" },
];

function Dashboard() {
  return (
    <PageShell>
      <section className="container-x py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="section-label mb-2">Admin Console</div>
            <h1 className="font-display text-4xl uppercase">Dashboard</h1>
          </div>
          <Link to="/admin" className="text-sm text-muted-foreground hover:text-gold">Sign out →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {modules.slice(0, 4).map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.name} className="card-federation p-6">
                <Icon className="text-gold mb-3" size={24} />
                <div className="font-display text-3xl text-gradient-gold">{m.count}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.name}</div>
              </div>
            );
          })}
        </div>

        <h2 className="font-display text-2xl uppercase mb-4">Management Modules</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <button key={m.name} className="card-federation p-6 text-left">
                <Icon className="text-red mb-3" size={22} />
                <div className="font-heading">{m.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.count}</div>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-federation p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading uppercase">Recent Athletes</h3>
              <button className="text-xs uppercase tracking-widest text-gold">Manage →</button>
            </div>
            <table className="w-full text-sm">
              <thead className="text-muted-foreground text-xs uppercase tracking-widest">
                <tr><th className="text-left pb-2">Name</th><th className="text-left pb-2">District</th><th className="text-left pb-2">Cat.</th><th className="text-right pb-2">Actions</th></tr>
              </thead>
              <tbody>
                {athletes.slice(0, 5).map((a) => (
                  <tr key={a.id} className="border-t border-white/5">
                    <td className="py-2">{a.name}</td>
                    <td className="py-2 text-muted-foreground">{a.district}</td>
                    <td className="py-2 text-muted-foreground">{a.category}</td>
                    <td className="py-2 text-right space-x-3 text-xs uppercase">
                      <button className="text-gold hover:underline">Edit</button>
                      <button className="text-red hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-federation p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading uppercase">Recent Tournaments</h3>
              <button className="btn-primary !py-2 !px-4 text-xs">+ New</button>
            </div>
            <ul className="space-y-3">
              {tournaments.slice(0, 4).map((t) => (
                <li key={t.id} className="flex items-center justify-between border-t border-white/5 pt-3 first:border-0 first:pt-0">
                  <div>
                    <div className="text-sm font-heading">{t.title}</div>
                    <div className="text-xs text-muted-foreground">{t.venue}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gold">{t.status}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-federation p-6">
            <h3 className="font-heading uppercase mb-4">Committee</h3>
            <ul className="space-y-2 text-sm">
              {committee.slice(0, 4).map((c) => (
                <li key={c.name} className="flex justify-between border-t border-white/5 pt-2 first:border-0 first:pt-0">
                  <span>{c.name}</span>
                  <span className="text-gold uppercase text-xs">{c.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-federation p-6">
            <h3 className="font-heading uppercase mb-4">Contact Messages</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="border-t border-white/5 pt-3 first:border-0 first:pt-0">
                <div className="text-foreground font-heading">Rahul S. — Sponsorship inquiry</div>
                <div>Interested in becoming a Gold Sponsor for 2026 season...</div>
              </li>
              <li className="border-t border-white/5 pt-3">
                <div className="text-foreground font-heading">Meena K. — Coach certification</div>
                <div>Requesting information on the Level-2 coach programme...</div>
              </li>
              <li className="border-t border-white/5 pt-3">
                <div className="text-foreground font-heading">Arjun P. — Athlete registration</div>
                <div>Need help completing the athlete membership form...</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
