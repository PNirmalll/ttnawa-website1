import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TTNAWA" },
      { name: "description", content: "Get in touch with the Tamil Nadu Arm Wrestling Association." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero eyebrow="Reach Out" title="Contact Us" subtitle="Athletes, sponsors, media and district units — we're here to help." />

      <section className="container-x py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="card-federation p-6">
            <FaMapMarkerAlt className="text-gold mb-2" size={22} />
            <div className="font-heading uppercase text-sm text-gold mb-1">Address</div>
            <p className="text-sm text-muted-foreground">TTNAWA Headquarters<br />Nehru Stadium Complex<br />Periamet, Chennai 600008<br />Tamil Nadu, India</p>
          </div>
          <div className="card-federation p-6">
            <FaPhone className="text-gold mb-2" size={22} />
            <div className="font-heading uppercase text-sm text-gold mb-1">Phone</div>
            <p className="text-sm text-muted-foreground">+91 44 2536 0000<br />+91 98400 12345</p>
          </div>
          <div className="card-federation p-6">
            <FaEnvelope className="text-gold mb-2" size={22} />
            <div className="font-heading uppercase text-sm text-gold mb-1">Email</div>
            <p className="text-sm text-muted-foreground">info@ttnawa.org<br />secretary@ttnawa.org</p>
          </div>
          <div className="card-federation p-6">
            <FaClock className="text-gold mb-2" size={22} />
            <div className="font-heading uppercase text-sm text-gold mb-1">Office Hours</div>
            <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 6:00 PM<br />Sunday: Closed</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="card-federation p-8">
            <h2 className="font-display text-3xl uppercase mb-6">Send A Message</h2>
            {sent ? (
              <div className="p-6 rounded bg-red/20 border border-red text-center">
                <div className="font-heading text-xl text-gold">Message Received</div>
                <p className="text-sm text-muted-foreground mt-2">We'll get back to you within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                  <input required type="email" placeholder="Email Address" className="px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                </div>
                <input placeholder="Phone Number" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                <input placeholder="Subject" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none" />
                <textarea required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded bg-navy-deep border border-white/10 focus:border-gold outline-none resize-none" />
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            )}
          </div>

          <div className="card-federation overflow-hidden">
            <iframe
              title="TTNAWA Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.26%2C13.07%2C80.28%2C13.09&layer=mapnik"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
