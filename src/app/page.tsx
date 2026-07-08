"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleUserRound,
  Gift,
  Globe2,
  Heart,
  LayoutDashboard,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  TicketPercent,
  Truck,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import { storeConfig } from "@/config/store.config";
import { blogPosts, collections, products, type Product } from "@/data/products";

type CartItem = Product & { qty: number };
type Currency = "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "JPY" | "CNY";

const exchange: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  CAD: 1.36,
  AUD: 1.52,
  JPY: 155,
  CNY: 7.25
};

const symbols: Record<Currency, string> = {
  USD: "$",
  EUR: "EUR ",
  GBP: "GBP ",
  CAD: "C$",
  AUD: "A$",
  JPY: "JPY ",
  CNY: "CNY "
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [room, setRoom] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [locale, setLocale] = useState(storeConfig.defaultLocale);
  const [country, setCountry] = useState(storeConfig.defaultCountry);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<Product>(products[0]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [promo, setPromo] = useState("");
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "confirmed">("cart");
  const [ticketSent, setTicketSent] = useState(false);

  const categories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  const rooms = ["All", ...Array.from(new Set(products.map((item) => item.room)))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const text = `${product.name} ${product.asin} ${product.collection} ${product.category} ${product.tags.join(" ")} ${product.features.join(" ")}`.toLowerCase();
      return (
        text.includes(query.toLowerCase()) &&
        (category === "All" || product.category === category) &&
        (room === "All" || product.room === room)
      );
    });
  }, [category, query, room]);

  const priceAsUsd = (product: Product) => {
    if (product.price === null) return 0;
    return product.currency === "USD" ? product.price : product.price / exchange[product.currency];
  };

  const subtotal = cart.reduce((sum, item) => sum + priceAsUsd(item) * item.qty, 0);
  const discount = promo.toUpperCase() === storeConfig.launchOfferCode ? subtotal * 0.15 : 0;
  const shipping = subtotal - discount >= storeConfig.freeShippingThreshold || subtotal === 0 ? 0 : 6.9;
  const tax = (subtotal - discount) * 0.0725;
  const total = Math.max(0, subtotal - discount + shipping + tax);

  const formatMoney = (value: number) => {
    const converted = value * exchange[currency];
    const maximumFractionDigits = currency === "JPY" ? 0 : 2;
    return `${symbols[currency]}${converted.toLocaleString("en-US", { maximumFractionDigits })}`;
  };

  const formatProductPrice = (product: Product) => {
    if (!product.priceDisplay && product.price === null) return "Price unavailable";
    return product.priceDisplay || formatMoney(priceAsUsd(product));
  };

  const addToCart = (product: Product) => {
    if (product.price === null) return;
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...current, { ...product, qty: 1 }];
    });
    setCartOpen(true);
    setCheckoutStep("cart");
  };

  const changeQty = (id: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  const nav = ["New Arrivals", "Best Sellers", "Shop", "Collections", "Offers", "About", "Blog", "Support"];

  return (
    <main>
      <header className="announcement">
        <span>Amazon-synced catalog: {products.length} QUCHENG ASINs with product images, specs, and source prices.</span>
        <span>Free shipping threshold: {formatMoney(storeConfig.freeShippingThreshold)}.</span>
      </header>

      <nav className="topbar" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="QUCHENG home">
          <span className="brand-mark">Q</span>
          <span>{storeConfig.storeName}</span>
        </a>
        <button className="icon-button mobile-only" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="navlinks">
          {nav.map((item) =>
            item === "Shop" ? (
              <button className="navlink" key={item} onClick={() => setMegaOpen((open) => !open)}>
                Shop <ChevronDown size={14} />
              </button>
            ) : (
              <a className="navlink" href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
                {item}
              </a>
            )
          )}
        </div>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search decals, film, wallpaper" />
          </label>
          <select value={country} onChange={(event) => setCountry(event.target.value)} aria-label="Country">
            <option>US</option>
            <option>CA</option>
            <option>GB</option>
            <option>DE</option>
            <option>AU</option>
          </select>
          <select value={locale} onChange={(event) => setLocale(event.target.value)} aria-label="Language">
            {storeConfig.supportedLocales.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)} aria-label="Currency">
            {storeConfig.supportedCurrencies.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <a className="icon-button" href="#account" aria-label="Account">
            <CircleUserRound size={19} />
          </a>
          <a className="icon-button badge-anchor" href="#wishlist" aria-label="Wishlist">
            <Heart size={19} />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </a>
          <button className="icon-button badge-anchor" onClick={() => setCartOpen(true)} aria-label="Cart">
            <ShoppingBag size={19} />
            {cart.length > 0 && <span className="badge">{cart.reduce((sum, item) => sum + item.qty, 0)}</span>}
          </button>
        </div>
      </nav>

      {(megaOpen || mobileOpen) && (
        <section className="mega-menu" aria-label="Shop menu">
          <button className="icon-button close-menu" onClick={() => { setMegaOpen(false); setMobileOpen(false); }} aria-label="Close menu">
            <X size={18} />
          </button>
          <div>
            <p className="eyebrow">Shop by project</p>
            <div className="mega-grid">
              {collections.map((collection) => (
                <a href="#shop" className="mega-item" key={collection.name} onClick={() => setMegaOpen(false)}>
                  <Image src={collection.image} alt="" width={210} height={140} />
                  <span>{collection.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mega-list">
            <p className="eyebrow">Featured</p>
            <a href="#new-arrivals">New arrivals</a>
            <a href="#best-sellers">Best sellers</a>
            <a href="#gift-cards">Gift guide</a>
            <a href="#support">Install support</a>
          </div>
        </section>
      )}

      <section id="home" className="hero">
        <Image src={products[0].image} alt="Boho watercolor nursery wall decals installed above a child's room wall" fill priority />
        <div className="hero-copy">
          <p className="eyebrow">Removable room refresh</p>
          <h1>{storeConfig.storeName}</h1>
          <p>{storeConfig.brandSlogan}</p>
          <div className="button-row">
            <a href="#shop" className="button primary">
              Shop New Arrivals <ArrowRight size={17} />
            </a>
            <a href="#collections" className="button secondary">
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Store policies">
        <span><PackageCheck size={18} /> Amazon product sync</span>
        <span><Truck size={18} /> Shipping estimator</span>
        <span><ShieldCheck size={18} /> Hosted payment pattern</span>
        <span><Globe2 size={18} /> Multi-language and currency</span>
      </section>

      <section id="collections" className="section">
        <div className="section-heading">
          <p className="eyebrow">Collections</p>
          <h2>Decor projects customers can understand fast</h2>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <a className="collection-tile" href="#shop" key={collection.name}>
              <Image src={collection.image} alt="" width={520} height={360} />
              <span>{collection.name}</span>
              <small>{collection.description}</small>
            </a>
          ))}
        </div>
      </section>

      <section id="shop" className="section shop-section">
        <div className="section-heading">
          <p className="eyebrow">Shop</p>
          <h2>Search, filter, compare, and add to cart</h2>
        </div>
        <aside className="filters" aria-label="Catalog filters">
          <SlidersHorizontal size={19} />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Category filter">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={room} onChange={(event) => setRoom(event.target.value)} aria-label="Room filter">
            {rooms.map((item) => <option key={item}>{item}</option>)}
          </select>
          <button className="text-button" onClick={() => { setQuery(""); setCategory("All"); setRoom("All"); }}>
            Reset
          </button>
        </aside>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <button className="heart-button" onClick={() => toggleWishlist(product.id)} aria-label={`Save ${product.name}`}>
                <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
              </button>
              <button className="product-image" onClick={() => setSelected(product)} aria-label={`View ${product.name}`}>
                <Image src={product.image} alt={product.name} width={520} height={520} />
              </button>
              <div className="product-info">
                <span>{product.collection} / {product.asin}</span>
                <h3>{product.name}</h3>
                <p>{product.tags.slice(0, 3).join(" / ")}</p>
                <div className="price-row">
                  <strong>{formatProductPrice(product)}</strong>
                  {product.unitPrice && <small>{product.unitPrice} / {product.unitBase}</small>}
                </div>
                <div className="product-meta">
                  <span><Star size={14} /> {product.ratingText || "No rating shown"}</span>
                  <span>{product.reviewCount ? `${product.reviewCount} reviews` : "Reviews unavailable"}</span>
                  <span>{product.availability}</span>
                </div>
                <div className="swatches" aria-label="Available colors">
                  {product.colors.slice(0, 4).map((color) => <span className="color-chip" key={color}>{color}</span>)}
                </div>
                <div className="card-actions">
                  <button className="button primary" disabled={product.price === null} onClick={() => addToCart(product)}>Add to cart</button>
                  <button className="button secondary" onClick={() => setSelected(product)}>Quick view</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="best-sellers" className="section split-band">
        <div>
          <p className="eyebrow">Best sellers</p>
          <h2>Room-ready bundles without false urgency</h2>
          <p>
            Product cards show Amazon ASINs, source prices, images, options, and fulfillment notes. The site avoids fake buyer counts,
            fake countdowns, and invented review data.
          </p>
        </div>
        <div className="bundle-list">
          {products.slice(0, 3).map((product) => (
            <button key={product.id} onClick={() => setSelected(product)}>
              <Image src={product.image} alt="" width={96} height={96} />
              <span>{product.name}</span>
              <strong>{formatProductPrice(product)}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="section shoppable">
        <Image src={collections[0].image} alt="Nursery room decor wall decal scene" width={900} height={620} />
        <button className="hotspot one" onClick={() => setSelected(products[0])}><Plus size={16} /></button>
        <button className="hotspot two" onClick={() => setSelected(products[2])}><Plus size={16} /></button>
        <div>
          <p className="eyebrow">Shoppable image</p>
          <h2>Tap a room detail and preview the matching product</h2>
          <p>Scene-based discovery connects lifestyle photos to product detail, cart, and cross-sell recommendations.</p>
        </div>
      </section>

      <section id="offers" className="section feature-grid">
        <article>
          <TicketPercent size={24} />
          <h3>Promotions</h3>
          <p>Coupon, campaign, gift card, and member rules are visible and configurable.</p>
        </article>
        <article id="gift-cards">
          <Gift size={24} />
          <h3>Gift cards</h3>
          <p>Preset values support gifting without forcing a subscription flow.</p>
        </article>
        <article>
          <Sparkles size={24} />
          <h3>Recommendations</h3>
          <p>Related items are based on collection, room, and material tags.</p>
        </article>
        <article>
          <Settings size={24} />
          <h3>Operations</h3>
          <p>Tax, shipping, returns, cookie mode, and payment methods come from configuration.</p>
        </article>
      </section>

      <section id="blog" className="section">
        <div className="section-heading">
          <p className="eyebrow">Content center</p>
          <h2>Guides that help customers buy with confidence</h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <span>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <small>{post.readTime}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="section support-grid">
        <div>
          <p className="eyebrow">Support</p>
          <h2>After-sales, returns, and installation help</h2>
          <p>
            Returns window: {storeConfig.returnsWindowDays} days. Support hours: {storeConfig.businessHours}. Payment cards are not stored locally.
          </p>
          <div className="policy-list">
            <span><Check size={17} /> Installation checklist</span>
            <span><Check size={17} /> Return and refund intake</span>
            <span><Check size={17} /> Order tracking status</span>
            <span><Check size={17} /> FAQ and product questions</span>
          </div>
        </div>
        <form className="support-form" onSubmit={(event) => { event.preventDefault(); setTicketSent(true); }}>
          <input placeholder="Order email" aria-label="Order email" />
          <select aria-label="Support topic">
            <option>Installation question</option>
            <option>Return or refund</option>
            <option>Shipping update</option>
            <option>Product question</option>
          </select>
          <textarea placeholder="How can we help?" aria-label="Message" />
          <button className="button primary">Create ticket</button>
          {ticketSent && <p className="success-note">Ticket queued in the local support workflow.</p>}
        </form>
      </section>

      <section id="account" className="section dashboard-band">
        <div>
          <p className="eyebrow">Customer account</p>
          <h2>Orders, rewards, wishlist, and profile</h2>
          <div className="account-grid">
            <span>Reward tier <strong>Member</strong></span>
            <span>Points <strong>120</strong></span>
            <span>Wishlist <strong>{wishlist.length}</strong></span>
            <span>Open orders <strong>{checkoutStep === "confirmed" ? 1 : 0}</strong></span>
          </div>
        </div>
        <div id="wishlist" className="wishlist-panel">
          <h3>Saved items</h3>
          {wishlist.length === 0 ? (
            <p>No saved items yet.</p>
          ) : (
            wishlist.map((id) => {
              const product = products.find((item) => item.id === id);
              return product ? <button key={id} onClick={() => setSelected(product)}>{product.name}</button> : null;
            })
          )}
        </div>
      </section>

      <section className="section admin-panel" aria-label="Admin preview">
        <div>
          <p className="eyebrow">Admin operations</p>
          <h2>Management surfaces included for local preview</h2>
        </div>
        <div className="admin-grid">
          <span><LayoutDashboard size={19} /> Products: {products.length}</span>
          <span><PackageCheck size={19} /> In-stock ASINs: {products.filter((product) => product.availability.toLowerCase().includes("in stock")).length}</span>
          <span><BarChart3 size={19} /> Cart subtotal: {formatMoney(subtotal)}</span>
          <span><ShieldCheck size={19} /> Priced SKUs: {products.filter((product) => product.price !== null).length}</span>
        </div>
      </section>

      <footer id="about" className="footer">
        <div>
          <span className="brand footer-brand"><span className="brand-mark">Q</span>{storeConfig.storeName}</span>
          <p>{storeConfig.brandDescription}</p>
        </div>
        <div>
          <h3>Shop</h3>
          <a href="#new-arrivals">New arrivals</a>
          <a href="#best-sellers">Best sellers</a>
          <a href="#collections">Collections</a>
          <a href="#offers">Offers</a>
        </div>
        <div>
          <h3>Help</h3>
          <a href="#support">Support center</a>
          <a href="#account">Account</a>
          <a href="#blog">Guides</a>
          <a href="#shop">Search</a>
        </div>
      </footer>

      <ProductDialog product={selected} formatProductPrice={formatProductPrice} addToCart={addToCart} toggleWishlist={toggleWishlist} saved={wishlist.includes(selected.id)} />

      {cartOpen && (
        <aside className="cart-drawer" aria-label="Cart drawer">
          <div className="drawer-header">
            <h2>{checkoutStep === "confirmed" ? "Order confirmed" : checkoutStep === "checkout" ? "Checkout" : "Cart"}</h2>
            <button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={18} /></button>
          </div>
          {checkoutStep === "confirmed" ? (
            <div className="confirmation">
              <PackageCheck size={44} />
              <h3>Order QCH-{Date.now().toString().slice(-6)}</h3>
              <p>Payment is simulated locally. The production version should redirect to a hosted payment provider.</p>
              <button className="button primary" onClick={() => { setCart([]); setCheckoutStep("cart"); setCartOpen(false); }}>Done</button>
            </div>
          ) : checkoutStep === "checkout" ? (
            <form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setCheckoutStep("confirmed"); }}>
              <input placeholder="Email" required aria-label="Email" />
              <input placeholder="Full name" required aria-label="Full name" />
              <input placeholder="Shipping address" required aria-label="Shipping address" />
              <select aria-label="Shipping method">
                <option>Standard shipping {shipping === 0 ? "included" : formatMoney(shipping)}</option>
                <option>Express shipping {formatMoney(14.9)}</option>
              </select>
              <select aria-label="Payment method">
                {storeConfig.payments.map((item) => <option key={item}>{item}</option>)}
              </select>
              <OrderSummary subtotal={subtotal} discount={discount} shipping={shipping} tax={tax} total={total} formatMoney={formatMoney} />
              <button className="button primary" disabled={cart.length === 0}>Place local order</button>
            </form>
          ) : (
            <>
              <div className="cart-items">
                {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <Image src={item.image} alt="" width={76} height={76} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{formatProductPrice(item)}</span>
                      <small>ASIN {item.asin}</small>
                      <div className="qty">
                        <button onClick={() => changeQty(item.id, -1)} aria-label={`Decrease ${item.name}`}><Minus size={14} /></button>
                        <span>{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} aria-label={`Increase ${item.name}`}><Plus size={14} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <label className="promo">
                <span>Promo code</span>
                <input value={promo} onChange={(event) => setPromo(event.target.value)} placeholder={storeConfig.launchOfferCode} />
              </label>
              <OrderSummary subtotal={subtotal} discount={discount} shipping={shipping} tax={tax} total={total} formatMoney={formatMoney} />
              <button className="button primary" disabled={cart.length === 0} onClick={() => setCheckoutStep("checkout")}>Checkout</button>
            </>
          )}
        </aside>
      )}
    </main>
  );
}

function ProductDialog({
  product,
  formatProductPrice,
  addToCart,
  toggleWishlist,
  saved
}: {
  product: Product;
  formatProductPrice: (product: Product) => string;
  addToCart: (product: Product) => void;
  toggleWishlist: (id: string) => void;
  saved: boolean;
}) {
  return (
    <section className="product-detail" aria-label="Product detail">
      <div className="detail-media">
        <Image src={product.image} alt={product.name} width={620} height={620} />
        <div className="gallery-strip" aria-label="Product gallery">
          {product.gallery.slice(0, 4).map((image) => (
            <span key={image}>
              <Image src={image} alt="" width={86} height={86} />
            </span>
          ))}
        </div>
      </div>
      <div className="detail-copy">
        <p className="eyebrow">{product.collection} / ASIN {product.asin}</p>
        <h2>{product.name}</h2>
        <div className="price-row">
          <strong>{formatProductPrice(product)}</strong>
          <small>{product.priceSource}</small>
        </div>
        <div className="product-meta detail-meta">
          <span><Star size={14} /> {product.ratingText || "Rating unavailable"}</span>
          <span>{product.reviewCount ? `${product.reviewCount} reviews` : "Review count unavailable"}</span>
          <span>{product.availability}</span>
        </div>
        <p>{product.details}</p>
        <div className="detail-tags">
          {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <ul>
          {product.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="parameter-grid" aria-label="Product parameters">
          {product.parameters.map((parameter) => (
            <span key={parameter.label}>
              <small>{parameter.label}</small>
              <strong>{parameter.value}</strong>
            </span>
          ))}
        </div>
        <div className="detail-actions">
          <button className="button primary" disabled={product.price === null} onClick={() => addToCart(product)}>Add to cart</button>
          <button className="button secondary" onClick={() => toggleWishlist(product.id)}>
            <Heart size={17} fill={saved ? "currentColor" : "none"} /> Save
          </button>
          <a className="button secondary" href={product.amazonUrl} target="_blank" rel="noreferrer">
            View source
          </a>
        </div>
        <div className="qa-box">
          <div><Star size={17} /> {product.ratingText || "Amazon rating not shown"} {product.reviewCount ? `from ${product.reviewCount} reviews` : ""}</div>
          <div>Merchant: {product.merchant}</div>
          <div>Fulfillment: {product.fulfilledBy}</div>
          <div>Source page: {product.sourcePage}</div>
        </div>
      </div>
    </section>
  );
}

function OrderSummary({
  subtotal,
  discount,
  shipping,
  tax,
  total,
  formatMoney
}: {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  formatMoney: (value: number) => string;
}) {
  return (
    <div className="summary">
      <span>Subtotal <strong>{formatMoney(subtotal)}</strong></span>
      <span>Discount <strong>-{formatMoney(discount)}</strong></span>
      <span>Shipping <strong>{shipping === 0 ? "Included" : formatMoney(shipping)}</strong></span>
      <span>Estimated tax <strong>{formatMoney(tax)}</strong></span>
      <span className="summary-total">Total <strong>{formatMoney(total)}</strong></span>
    </div>
  );
}

