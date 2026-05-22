import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
import logo from "@/assets/logo-qandos.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="container-q flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 w-40">
          <img src={logo} alt="" className="size-fit" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-primary text-xs px-5 py-2.5">
          Verify a property
        </Link>
      </div>
    </header>
  );
}
