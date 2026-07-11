"use client";

import Link from "next/link";
import { Check, ChevronDown, Minus, Plus, ShieldCheck, ShoppingBag, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Product, ProductParameter } from "@/data/products";

const CART_KEY = "cowinlife-retail-cart";
const MAX_QUANTITY = 20;

type CartItem = { productId: string; quantity: number };

function readCart(): CartItem[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CART_KEY) || "[]") as CartItem[];
    return Array.isArray(parsed) ? parsed.filter((item) => item?.productId && Number.isFinite(item.quantity)) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cowinlife-cart-updated"));
}

function track(event: string, product: Product, quantity: number) {
  const payload = { event, ecommerce: { currency: product.currency, value: product.price ?? 0, items: [{ item_id: product.id, item_name: product.name, item_category: product.collection, price: product.price ?? 0, quantity }] } };
  const target = window as Window & { dataLayer?: unknown[] };
  target.dataLayer?.push(payload);
}

function QuantitySelector({ quantity, onChange, compact = false }: { quantity: number; onChange: (value: number) => void; compact?: boolean }) {
  return (
    <div className={`pdp-quantity${compact ? " compact" : ""}`} aria-label="Quantity selector">
      <button type="button" onClick={() => onChange(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={16} /></button>
      <input aria-label="Quantity" inputMode="numeric" min={1} max={MAX_QUANTITY} type="number" value={quantity} onChange={(event) => onChange(Math.min(MAX_QUANTITY, Math.max(1, Number(event.target.value) || 1)))} />
      <button type="button" onClick={() => onChange(Math.min(MAX_QUANTITY, quantity + 1))} aria-label="Increase quantity"><Plus size={16} /></button>
    </div>
  );
}

export function RetailPurchasePanel({ product, price }: { product: Product; price: string }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState("");
  const available = /available|in stock/i.test(product.availability) && product.price !== null;

  const addToCart = () => {
    if (!available) return;
    const cart = readCart();
    const existing = cart.find((item) => item.productId === product.id);
    const next = existing
      ? cart.map((item) => item.productId === product.id ? { ...item, quantity: Math.min(MAX_QUANTITY, item.quantity + quantity) } : item)
      : [...cart, { productId: product.id, quantity }];
    saveCart(next);
    track("add_to_cart", product, quantity);
    setNotice("Added to cart. You can continue shopping or review your cart.");
  };

  const buyNow = () => {
    if (!available) return;
    track("begin_checkout", product, quantity);
    router.push(`/checkout?product=${encodeURIComponent(product.id)}&quantity=${quantity}&mode=buy-now`);
  };

  return (
    <>
      <div className="pdp-purchase-controls">
        <div className="pdp-quantity-row"><span>Quantity</span><QuantitySelector quantity={quantity} onChange={setQuantity} /></div>
        <button type="button" className="button primary pdp-buy-now" disabled={!available} onClick={buyNow}><Zap size={17} /> Buy now</button>
        <button type="button" className="button secondary pdp-add-cart" disabled={!available} onClick={addToCart}><ShoppingBag size={17} /> Add to cart</button>
        {notice && <p className="pdp-cart-notice">{notice} <Link href="/cart">View cart</Link></p>}
      </div>
      <div className="pdp-payment-trust">
        <ShieldCheck size={19} />
        <span><strong>Secure checkout</strong> Order details are validated on the server. Card details are not collected on this page.</span>
      </div>
      <div className="pdp-fulfillment-note">
        <span><Check size={16} /> {product.shipping}</span>
        <span><Check size={16} /> Support is available before and after checkout.</span>
      </div>
      <div className="pdp-mobile-purchase" aria-label="Mobile purchase controls">
        <div><small>Retail price</small><strong>{price}</strong></div>
        <button type="button" className="button primary" disabled={!available} onClick={buyNow}>Buy now</button>
        <button type="button" className="button secondary" disabled={!available} onClick={addToCart} aria-label="Add to cart"><ShoppingBag size={18} /></button>
      </div>
    </>
  );
}

type TabId = "description" | "specifications" | "features" | "shipping" | "reviews" | "faq";

const tabLabels: Array<{ id: TabId; label: string }> = [
  { id: "description", label: "Description" },
  { id: "specifications", label: "Specifications" },
  { id: "features", label: "Details" },
  { id: "shipping", label: "Shipping & returns" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" }
];

function TabContent({ tab, product, parameters }: { tab: TabId; product: Product; parameters: ProductParameter[] }) {
  if (tab === "description") return <div className="pdp-tab-copy"><p>{product.details}</p><p>{product.features[0]}</p></div>;
  if (tab === "specifications") return <dl className="pdp-spec-table">{parameters.map((parameter) => <div key={parameter.label}><dt>{parameter.label}</dt><dd>{parameter.value}</dd></div>)}</dl>;
  if (tab === "features") return <ul className="feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>;
  if (tab === "shipping") return <div className="pdp-tab-copy"><p>{product.shipping}</p><p>Delivery details and any applicable charges are confirmed during checkout. For help with an order, please contact support before placing it.</p><Link href="/terms" className="text-action">View store terms</Link></div>;
  if (tab === "reviews") return <div className="pdp-tab-copy"><h3>Customer reviews</h3><p>Customer reviews will be available soon.</p></div>;
  return <div className="pdp-faq"><details><summary>How do I choose the right option?<ChevronDown size={17} /></summary><p>Review the specifications and product images, then contact support if you need help before ordering.</p></details><details><summary>Is this item available?<ChevronDown size={17} /></summary><p>The current availability is shown in the purchase area and checked again before an order is created.</p></details><details><summary>What payment methods are available?<ChevronDown size={17} /></summary><p>Available payment options are presented in the secure checkout flow.</p></details><details><summary>How can I contact support?<ChevronDown size={17} /></summary><p>Use the support page or the WhatsApp contact option shown on the site.</p></details></div>;
}

export function RetailProductDetails({ product, parameters }: { product: Product; parameters: ProductParameter[] }) {
  const [activeTab, setActiveTab] = useState<TabId>("description");
  const quickSpecs = useMemo(() => parameters.slice(0, 4), [parameters]);
  return (
    <section className="section pdp-details" id="product-details">
      <div className="section-heading"><p className="eyebrow">Product information</p><h2>Everything you need before checkout</h2></div>
      {quickSpecs.length > 0 && <div className="pdp-quick-specs">{quickSpecs.map((item) => <div key={item.label}><small>{item.label}</small><strong>{item.value}</strong></div>)}</div>}
      <div className="pdp-tabs" role="tablist" aria-label="Product information">
        {tabLabels.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab.id} key={tab.id} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>)}
      </div>
      <div className="pdp-tab-panel" role="tabpanel"><TabContent tab={activeTab} product={product} parameters={parameters} /></div>
      <div className="pdp-mobile-accordion">{tabLabels.map((tab) => <details key={tab.id} open={tab.id === "description"}><summary>{tab.label}<ChevronDown size={17} /></summary><TabContent tab={tab.id} product={product} parameters={parameters} /></details>)}</div>
    </section>
  );
}
