"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type CheckoutProduct = {
  id: string;
  sku: string;
  name: string;
  price: number;
  image: string;
};

type Props = {
  initialProductId?: string;
  products: CheckoutProduct[];
};

const money = (cents: number) => `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export function CheckoutClient({ initialProductId, products }: Props) {
  const [productId, setProductId] = useState(initialProductId || products[0]?.id || "");
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const selected = useMemo(() => products.find((product) => product.id === productId) || products[0], [productId, products]);
  const estimate = Math.round(selected.price * 100) * quantity;

  async function createOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") || ""),
      name: String(form.get("name") || ""),
      address: String(form.get("address") || ""),
      country: String(form.get("country") || "US"),
      note: String(form.get("note") || ""),
      items: [{ productId, quantity }]
    };
    const response = await fetch("/api/storefront/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) {
      setStatus("error");
      setMessage(data.error || "Order could not be created.");
      return;
    }
    setStatus("done");
    setMessage(`Order ${data.order.order_no} created. Payment status: ${data.order.payment_status}.`);
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form checkout-page-form" onSubmit={createOrder}>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="name@example.com" />
        </label>
        <label>
          <span>Full name</span>
          <input name="name" required placeholder="Customer name" />
        </label>
        <label>
          <span>Shipping address</span>
          <input name="address" required placeholder="Street, city, state, ZIP" />
        </label>
        <label>
          <span>Country</span>
          <select name="country" defaultValue="US">
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </label>
        <label>
          <span>Product</span>
          <select value={productId} onChange={(event) => setProductId(event.target.value)} aria-label="Product">
            {products.map((product) => (
              <option value={product.id} key={product.id}>{product.sku} - {product.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Quantity</span>
          <input type="number" min={1} max={20} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
        </label>
        <label>
          <span>Order note</span>
          <textarea name="note" placeholder="Installation question, color preference, or delivery note" />
        </label>
        <button className="button primary" disabled={status === "loading"}>{status === "loading" ? "Creating..." : "Create secure order"}</button>
        {message && <p className={status === "error" ? "error-note" : "success-note"}>{message}</p>}
      </form>
      <aside className="checkout-preview">
        <Image src={selected.image} alt={selected.name} width={360} height={360} />
        <h3>{selected.name}</h3>
        <p>SKU {selected.sku}</p>
        <div className="summary">
          <span>Item estimate <strong>{money(estimate)}</strong></span>
          <span>Shipping and tax <strong>Validated server-side</strong></span>
        </div>
      </aside>
    </div>
  );
}
