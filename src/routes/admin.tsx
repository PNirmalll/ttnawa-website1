import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { FaLock } from "react-icons/fa";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Login — TTNAWA" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const [err, setErr] = useState("");
  return (
    <PageShell>
      <PageHero eyebrow="Restricted" title="Admin Portal" subtitle="Federation administrators only." />
      <section className="container-x py-12 max-w-md">
        <div className="card-federation p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaLock className="text-gold" size={22} />
            <h2 className="font-display text-2xl uppercase">Sign In</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              if (fd.get("email") === "admin@ttnawa.org" && fd.get("password") === "ttnawa2026") {
                window.location.href = "/admin/dashboard";
              } else {
                setErr("Invalid credentials. Try admin@ttnawa.org / ttnawa2026 for the demo.");
              }
            }}
            className="space-y-4"
          >
            <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
            <input name="password" type="password" required placeholder="Password" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
            {err && <div className="text-sm text-red">{err}</div>}
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </form>
          <div className="mt-6 text-xs text-muted-foreground text-center">
            Demo credentials pre-filled in the code. <Link to="/" className="text-gold hover:underline">← Back home</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
