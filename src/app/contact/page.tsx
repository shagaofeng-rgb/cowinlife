import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { storeConfig } from "@/config/store.config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cowinlife support for product, order, installation, return, or refund questions.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Support" title="Contact Cowinlife" text="Send product questions, custom requirements, order questions, installation issues, return requests, and refund messages into the admin backend." />
      <section className="section support-grid route-section">
        <div>
          <h2>Inquiry intake</h2>
          <p>Messages are stored in the backend and emailed to the Cowinlife operations inbox for follow-up.</p>
          <div className="contact-card">
            <strong>{storeConfig.legalCompanyName}</strong>
            <a href={`mailto:${storeConfig.supportEmail}`}>{storeConfig.supportEmail}</a>
            <a href={`https://wa.me/${storeConfig.whatsapp.replace(/[^0-9]/g, "")}`}>WhatsApp {storeConfig.whatsapp}</a>
            <span>{storeConfig.address}</span>
          </div>
        </div>
        <ContactForm />
      </section>
    </PublicShell>
  );
}
