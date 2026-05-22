import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  FileSearch,
  MapPin,
  Banknote,
  Check,
  AlertTriangle,
} from "lucide-react";
import heroImg from "@/assets/ill.jpg";
import docsImg from "@/assets/feature-documents.jpg";
import siteImg from "@/assets/surveyor.webp";
import escrowImg from "@/assets/feature-escrow.jpg";
import { HowItWorks } from "@/components/how-it-works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QANDOS — Verify property before you pay" },
      {
        name: "description",
        content:
          "Independent property verification for Nigerian and African real estate. Confirm title, ownership and legitimacy before you transfer money.",
      },
      { property: "og:title", content: "QANDOS — Verify property before you pay" },
      {
        property: "og:description",
        content: "Independent title, ownership and site verification. Avoid real estate fraud.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    eyebrow: "Title & documents",
    title: "Every document, line-by-line.",
    body: "We pull the title at the registry, cross-check survey plans, deeds, governor's consent and C of O. You get a plain-English report — not a stack of scans.",
    img: docsImg,
    points: [
      "Land registry search",
      "Survey plan authentication",
      "Encumbrance & litigation check",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Boots on the ground",
    title: "A real person walks the plot.",
    body: "A licensed surveyor visits the site, photographs boundaries, talks to neighbours and the omoonile, and confirms the property exists exactly as listed.",
    img: siteImg,
    points: [
      "Geo-tagged site photos",
      "Boundary & beacon check",
      "Community ownership confirmation",
    ],
    icon: MapPin,
  },
  {
    eyebrow: "Don't pay yet",
    title: "Funds held until you're sure.",
    body: "Optional QANDOS Escrow holds your money safely while verification runs. Funds only release to the seller once you sign off — or come back to you in full.",
    img: escrowImg,
    points: ["Licensed escrow account", "Release on buyer approval", "Full refund if title fails"],
    icon: Banknote,
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10" />
        <div className="container-q pt-20 md:pt-10 pb-24 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            {/* <span className="eyebrow">Property verification, before payment</span> */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2]">
              Don't wire a kobo
              <br />
              until QANDOS says
              <br />
              <span style={{ color: "var(--brand)" }}>it's real.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We verify property ownership, documentation and legitimacy on your behalf — so the
              only thing you're buying is the land you were promised.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Start a verification <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-ghost">
                See how it works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: "var(--brand)" }} />
                Licensed surveyors
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: "var(--brand)" }} />
                Refund on failed title
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:scale-75">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-4xl" />
              <img
                src={heroImg}
                alt="Verified property illustration with floating title deed, ID and survey plan"
                className="rounded-3xl w-full max-w-[40rem] mx-auto aspect-square"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)] border border-border">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "var(--brand)", color: "white" }}
                >
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Verification status</p>
                  <p className="text-sm font-medium">Title confirmed · Lekki Phase 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAUD STRIP */}
      <section style={{ background: "var(--wine)", color: "var(--wine-foreground)" }}>
        <div className="container-q py-20 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6" style={{ color: "var(--gold)" }} />
            <p className="font-display text-xl">Real estate fraud is industrial.</p>
          </div>
          <Stat value="₦8B+" label="Lost to land scams in 2024 alone" />
          <Stat value="1 in 4" label="Listed plots have title issues" />
        </div>
      </section>

      {/* ZIGZAG FEATURES */}
      <section className="container-q py-24 md:py-32">
        <div className="max-w-2xl">
          {/* <span className="eyebrow">What we check</span> */}
          <h2 className="mt-4 text-4xl md:text-5xl leading-14">
            Three layers between you and a fake deal.
          </h2>
        </div>

        <div className="mt-20 space-y-28">
          {features.map((f, i) => (
            <FeatureRow key={f.title} feature={f} reverse={i % 2 === 1} index={i + 1} />
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-q pb-24">
        <figure className="rounded-3xl p-10 md:p-16 grain" style={{ background: "var(--lime)" }}>
          <blockquote className="font-display text-3xl md:text-4xl leading-tight max-w-3xl">
            "We almost paid ₦42M for a plot that didn't legally exist. QANDOS caught it in 6 days.
            That report saved my family"
          </blockquote>
          <figcaption className="mt-8 text-sm">
            <span className="font-medium">Adaeze O.</span>
            <span className="text-muted-foreground"> — Diaspora buyer, Ikoyi</span>
          </figcaption>
        </figure>
      </section>

      <HowItWorks />
      {/* CTA */}
      <section className="container-q pb-32">
        <div
          className="rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "var(--ink)", color: "var(--cream)" }}
        >
          <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto">
            Buying property? Get peace of mind in{" "}
            <span style={{ color: "var(--brand)" }}>under 10 days</span>.
          </h2>
          <p className="mt-5 max-w-xl mx-auto" style={{ color: "oklch(0.985 0.012 95 / 0.7)" }}>
            Submit the listing. We handle the rest. You only pay if you proceed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-gold">
              Request verification <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="#about"
              className="btn-ghost"
              style={{ color: "var(--cream)", borderColor: "oklch(0.985 0.012 95 / 0.2)" }}
            >
              About QANDOS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl md:text-4xl" style={{ color: "var(--gold)" }}>
        {value}
      </p>
      <p className="mt-1 text-sm" style={{ color: "oklch(0.97 0.02 90 / 0.75)" }}>
        {label}
      </p>
    </div>
  );
}

function FeatureRow({
  feature,
  reverse,
  index,
}: {
  feature: (typeof features)[number];
  reverse: boolean;
  index: number;
}) {
  const Icon = feature.icon;
  return (
    <div
      className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      <div className="md:col-span-6">
        <div className="relative">
          <span
            className="absolute -top-4 -left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-lg"
            style={{ background: "var(--gold)", color: "#fff" }}
          >
            0{index}
          </span>
          <img
            src={feature.img}
            alt={feature.title}
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl w-full h-auto shadow-[var(--shadow-soft)] border border-border"
          />
        </div>
      </div>
      <div className="md:col-span-6">
        <h3 className="mt-4 text-3xl md:text-4xl">{feature.title}</h3>
        <p className="mt-4 text-lg text-muted-foreground">{feature.body}</p>
        <ul className="mt-6 space-y-3">
          {feature.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm">
              <span
                className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full shrink-0"
                style={{ background: "var(--brand)", color: "white" }}
              >
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-2 text-sm">
          <Icon className="h-4 w-4" style={{ color: "var(--brand)" }} />
          <Link to="/how-it-works" className="font-medium hover:underline">
            Inside the process →
          </Link>
        </div>
      </div>
    </div>
  );
}
