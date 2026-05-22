import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, MapPin, ShieldCheck, Banknote, ScrollText } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Submit the listing",
    body: "Send us the address, the seller's contact and any documents you've been shown. Takes about 4 minutes.",
    icon: ScrollText,
  },
  {
    n: "02",
    title: "Document audit",
    body: "We verify the title, survey plan, governor's consent, deed of assignment and tax history at the relevant registries.",
    icon: FileText,
  },
  {
    n: "03",
    title: "Physical site visit",
    body: "A licensed surveyor visits the property within 48–72 hours, photographs everything, checks beacons and talks to the community.",
    icon: MapPin,
  },
  {
    n: "04",
    title: "Verification report",
    body: "You receive a plain-English PDF with a clear verdict: clear, conditional, or do-not-proceed — with the evidence attached.",
    icon: ShieldCheck,
  },
  {
    n: "05",
    title: "Pay through escrow (optional)",
    body: "Move funds into QANDOS Escrow. We only release to the seller after you sign off. If title fails, you get a full refund.",
    icon: Banknote,
  },
];

export function HowItWorks() {
  return (
    <>
      <section className="container-q pt-20 pb-16 md:pt-28">
        {/* <span className="eyebrow">How it works</span> */}
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl">
          A 10-day moat between you and a bad deal.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Every QANDOS verification combines registry research, on-site inspection and a clear
          written verdict. Here's exactly what happens.
        </p>
      </section>

      <section className="container-q pb-24">
        <ol className="relative grid gap-6">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="grid md:grid-cols-12 gap-6 items-start rounded-2xl border border-border bg-card p-8 md:p-10"
              style={{ background: i % 2 === 0 ? "var(--card)" : "oklch(0.97 0.02 95)" }}
            >
              <div className="md:col-span-2">
                <span className="font-display text-5xl" style={{ color: "var(--brand)" }}>
                  {s.n}
                </span>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-2xl md:text-3xl flex items-center gap-3">
                  <s.icon className="h-6 w-6" style={{ color: "var(--brand)" }} />
                  {s.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span
                  className="inline-block text-xs uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                  style={{ background: "var(--lime)", color: "var(--ink)" }}
                >
                  Day {i === 0 ? 1 : i === 4 ? "10+" : i + 1}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
