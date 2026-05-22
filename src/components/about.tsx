import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About QANDOS — why we exist" },
      { name: "description", content: "QANDOS is an independent property verification platform. We work for the buyer, not the seller — and we put our refund where our mouth is." },
      { property: "og:title", content: "About QANDOS" },
      { property: "og:description", content: "An independent verification platform built for buyers, not sellers." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Independent", body: "We never take a cent from sellers, listing platforms or agents. Our only client is the person about to pay." },
  { title: "Evidence-based", body: "Every verdict ships with photographs, registry receipts and a paper trail you could take to court." },
  { title: "Accountable", body: "If we clear a title and it turns out fraudulent, we refund our fee — and assist with recovery." },
];

function About() {
  return (
    <>
      <section className="container-q pt-20 pb-20 md:pt-28">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow">About</span>
            <h1 className="mt-6 text-5xl md:text-6xl">
              Built because too many<br />good people lost everything.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground">
              QANDOS was founded after one too many friends, family members and
              clients sent millions to sellers who never owned the land they were
              selling. The system was broken. So we built the check that should
              have existed all along.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28"
        style={{ background: "var(--lime)" }}
      >
        <div className="container-q grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-2xl" style={{ color: "var(--wine)" }}>{v.title}</h3>
              <p className="mt-3 text-sm text-ink/80" style={{ color: "var(--ink)" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-q py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Our promise</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            We work for you, not the listing.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg">
          <p>
            Every QANDOS report is signed by a named surveyor and a named
            verifications lead. There's a real person, with a real licence,
            putting their name on your decision.
          </p>
          <p className="text-muted-foreground">
            We currently operate across Lagos, Abuja, Port Harcourt and Ibadan,
            with a network of vetted surveyors and registry contacts in every
            state we cover.
          </p>
        </div>
      </section>

      <section className="container-q pb-32">
        <div
          className="rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"
          style={{ background: "var(--wine)", color: "var(--wine-foreground)" }}
        >
          <h2 className="text-3xl md:text-4xl max-w-lg">
            One verification can save a lifetime of savings.
          </h2>
          <Link to="/contact" className="btn-gold">
            Verify a property <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
