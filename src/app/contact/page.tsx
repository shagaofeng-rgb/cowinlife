import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cowinlife support for product, order, installation, return, or refund questions.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Support" title="Contact Cowinlife" text="Send product questions, order questions, installation issues, return requests, and refund messages into the admin backend." />
      <section className="section support-grid route-section">
        <div>
          <h2>Support intake</h2>
          <p>Messages are stored as customer form records with source, status, email, name, message, and optional product relationship for backend follow-up.</p>
        </div>
        <ContactForm />
      </section>
    </PublicShell>
  );
}
