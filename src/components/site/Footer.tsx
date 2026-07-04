import { Link } from "@tanstack/react-router";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="TTNAWA" className="h-12 w-12" width={48} height={48} loading="lazy" />
            <div>
              <div className="font-display text-2xl text-gold">TTNAWA</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Est. 1998</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The official governing body of arm wrestling in Tamil Nadu. Promoting strength, discipline and excellence.
          </p>
          <div className="mt-5 flex gap-3 text-gold">
            <a href="#" aria-label="Facebook" className="hover:text-red transition"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-red transition"><FaInstagram size={20} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red transition"><FaYoutube size={20} /></a>
            <a href="#" aria-label="X" className="hover:text-red transition"><FaXTwitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm text-gold mb-4">Federation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About TTNAWA</Link></li>
            <li><Link to="/committee" className="hover:text-gold">Executive Committee</Link></li>
            <li><Link to="/membership" className="hover:text-gold">Membership</Link></li>
            <li><Link to="/sponsors" className="hover:text-gold">Sponsors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm text-gold mb-4">Competition</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tournaments" className="hover:text-gold">Tournaments</Link></li>
            <li><Link to="/rankings" className="hover:text-gold">State Rankings</Link></li>
            <li><Link to="/athletes" className="hover:text-gold">Athletes</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading uppercase tracking-widest text-sm text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>TTNAWA Headquarters</li>
            <li>Nehru Stadium Complex</li>
            <li>Chennai, Tamil Nadu 600008</li>
            <li className="pt-2">info@ttnawa.org</li>
            <li>+91 44 2536 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} The Tamil Nadu Arm Wrestling Association. All rights reserved.</div>
          <div>Affiliated to Indian Arm Wrestling Federation (IAF) &middot; WAF Recognised</div>
        </div>
      </div>
    </footer>
  );
}
