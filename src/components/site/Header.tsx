import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/committee", label: "Committee" },
  { to: "/athletes", label: "Athletes" },
  { to: "/rankings", label: "Rankings" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/80 backdrop-blur-xl">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TTNAWA" className="h-11 w-11" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-display text-xl text-gold">TTNAWA</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">
              Tamil Nadu Arm Wrestling Association
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-medium uppercase tracking-wider text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/membership" className="btn-primary">Join Now</Link>
        </div>

        <button
          className="lg:hidden text-gold p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm uppercase tracking-wider text-foreground/80 hover:text-gold border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/membership" onClick={() => setOpen(false)} className="btn-primary mt-3">Join Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
