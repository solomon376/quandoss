import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container-q py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-md"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">QANDOS</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70" style={{ color: "oklch(0.985 0.012 95 / 0.65)" }}>
            Verify property ownership, documentation and legitimacy before you pay.
            Built for buyers, agents and developers who refuse to gamble with title.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>Product</h4>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "oklch(0.985 0.012 95 / 0.75)" }}>
            <li><Link to="/how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">Verification reports</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">Escrow protection</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>Company</h4>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "oklch(0.985 0.012 95 / 0.75)" }}>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "oklch(0.985 0.012 95 / 0.1)" }}>
        <div className="container-q py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "oklch(0.985 0.012 95 / 0.5)" }}>
          <p>© {new Date().getFullYear()} QANDOS Verification Ltd. All rights reserved.</p>
          <p>Verify before you pay.</p>
        </div>
      </div>
    </footer>
  );
}
