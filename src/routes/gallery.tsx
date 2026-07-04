import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import hero from "@/assets/hero-armwrestling.jpg";
import g1 from "@/assets/gallery-1.jpg";
import a1 from "@/assets/athlete-1.jpg";
import a2 from "@/assets/athlete-2.jpg";
import a3 from "@/assets/athlete-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — TTNAWA" },
      { name: "description", content: "Photos from championships, training camps and medal ceremonies." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Championships", "Training Camps", "Medal Ceremonies", "Meetings", "Events"];

const images = [
  { src: g1, cat: "Championships" },
  { src: hero, cat: "Championships" },
  { src: a1, cat: "Events" },
  { src: a2, cat: "Medal Ceremonies" },
  { src: a3, cat: "Training Camps" },
  { src: g1, cat: "Medal Ceremonies" },
  { src: hero, cat: "Events" },
  { src: a1, cat: "Meetings" },
  { src: a2, cat: "Championships" },
];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = cat === "All" ? images : images.filter((i) => i.cat === cat);

  return (
    <PageShell>
      <PageHero eyebrow="Moments" title="Gallery" subtitle="A visual chronicle of TTNAWA competitions and events." />
      <section className="container-x py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded uppercase text-xs tracking-widest font-heading border transition ${cat === c ? "border-gold bg-gold/10 text-gold" : "border-white/10 text-muted-foreground hover:text-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="block w-full break-inside-avoid overflow-hidden rounded card-federation group"
            >
              <img src={img.src} alt="" className="w-full transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-3 text-left text-xs uppercase tracking-widest text-gold">{img.cat}</div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-6">
          <img src={lightbox} alt="" className="max-h-full max-w-full rounded shadow-2xl" />
        </div>
      )}
    </PageShell>
  );
}
