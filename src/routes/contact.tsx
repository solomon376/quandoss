import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container-q pt-20 pb-16 md:pt-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-6 text-5xl md:text-6xl">Send us a listing.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us what you're looking at. We respond within one business day with a fixed quote
              and timeline — usually 7–10 working days.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5" style={{ color: "var(--brand)" }} />
                hello@qandos.app
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5" style={{ color: "var(--brand)" }} />
                +234 (0) 800 QANDOS
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5" style={{ color: "var(--brand)" }} />
                Victoria Island, Lagos · Wuse II, Abuja
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <span
                    className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "var(--brand)", color: "white" }}
                  >
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-2xl">Got it — we're on it.</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    A verifications lead will reach out within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Your name" name="name" placeholder="Adaeze Okafor" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                  <Field label="Phone (WhatsApp preferred)" name="phone" placeholder="+234 ..." />
                  <Field
                    label="Property address / listing link"
                    name="address"
                    placeholder="Plot 12, Lekki Phase 1 — or paste a link"
                  />
                  <div>
                    <label className="block text-sm font-medium">Anything we should know?</label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Seller name, asking price, documents you've already been shown..."
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Request verification
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    No payment now. We'll quote first.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact QANDOS — request a property verification" },
      {
        name: "description",
        content:
          "Tell us about the property you're considering. We'll get back within one business day with scope, timeline and a fixed quote.",
      },
      { property: "og:title", content: "Request a verification — QANDOS" },
      {
        property: "og:description",
        content: "Send us a listing. We'll respond within one business day.",
      },
    ],
  }),
  component: Contact,
});
