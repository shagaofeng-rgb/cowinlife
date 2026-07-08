"use client";

import { useState } from "react";
import { products } from "@/data/products";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/storefront/forms", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    const data = await response.json();
    setStatus(response.ok ? "done" : "error");
    setMessage(response.ok ? `Ticket ${data.form.id} created.` : data.error || "Message could not be submitted.");
  }

  return (
    <form className="support-form" onSubmit={submit}>
      <input name="email" type="email" required placeholder="Email" aria-label="Email" />
      <input name="name" required placeholder="Name" aria-label="Name" />
      <select name="formType" aria-label="Support topic">
        <option value="product_question">Product question</option>
        <option value="installation">Installation help</option>
        <option value="return_refund">Return or refund</option>
        <option value="order_status">Order status</option>
      </select>
      <select name="relatedProductId" aria-label="Related product">
        <option value="">No product selected</option>
        {products.map((product) => <option value={product.id} key={product.id}>{product.asin} - {product.name}</option>)}
      </select>
      <textarea name="message" required placeholder="How can we help?" aria-label="Message" />
      <button className="button primary" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Create support ticket"}</button>
      {message && <p className={status === "error" ? "error-note" : "success-note"}>{message}</p>}
    </form>
  );
}
