"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [requestedProduct, setRequestedProduct] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRequestedProduct(params.get("product") || "");
  }, []);

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
    setMessage(response.ok ? `Inquiry ${data.form.id} received. We will reply by email or WhatsApp.` : data.error || "Message could not be submitted.");
  }

  return (
    <form className="support-form" onSubmit={submit}>
      <div className="form-grid">
        <input name="name" required placeholder="Name *" aria-label="Name" />
        <input name="phone" required placeholder="Phone *" aria-label="Phone" />
      </div>
      <div className="form-grid">
        <input name="email" type="email" required placeholder="Email *" aria-label="Email" />
        <input name="country" required placeholder="Country *" aria-label="Country" />
      </div>
      <input name="companyName" placeholder="Company name" aria-label="Company name" />
      <input name="whatsapp" placeholder="WhatsApp or WeChat" aria-label="WhatsApp or WeChat" />
      <select name="formType" aria-label="Support topic">
        <option value="custom_quote">Custom quote</option>
        <option value="product_question">Product question</option>
        <option value="sample_request">Sample request</option>
        <option value="bulk_order">Bulk order</option>
        <option value="installation">Installation help</option>
        <option value="order_status">Order status</option>
      </select>
      <select name="relatedProductId" aria-label="Related product">
        <option value="">No product selected</option>
        {products.map((product) => <option value={product.id} key={product.id}>{product.sku} - {product.name}</option>)}
      </select>
      <input name="requestedProduct" value={requestedProduct} onChange={(event) => setRequestedProduct(event.target.value)} placeholder="Product name or SKU" aria-label="Product name or SKU" />
      <div className="form-grid">
        <input name="quantity" placeholder="Quantity" aria-label="Quantity" />
        <input name="budget" placeholder="Target budget" aria-label="Target budget" />
      </div>
      <input name="timeline" placeholder="Expected timeline" aria-label="Expected timeline" />
      <textarea name="message" required placeholder="Requirement details *" aria-label="Requirement details" />
      <button className="button primary" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit inquiry"}</button>
      {message && <p className={status === "error" ? "error-note" : "success-note"}>{message}</p>}
    </form>
  );
}
