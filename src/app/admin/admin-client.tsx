"use client";

import {
  BarChart3,
  Boxes,
  ClipboardList,
  FileText,
  Globe2,
  KeyRound,
  LogOut,
  Megaphone,
  PackageCheck,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  UserCog,
  Users,
  WalletCards
} from "lucide-react";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

function displaySku(index: number) {
  return `CW-${String(index + 1001).padStart(4, "0")}`;
}

type ModuleKey =
  | "dashboard"
  | "products"
  | "orders"
  | "customers"
  | "marketing"
  | "reviews"
  | "content"
  | "forms"
  | "seo"
  | "sync"
  | "users"
  | "settings"
  | "logs";

type User = {
  id: number;
  username: string;
  displayName: string;
  roleCode: string;
  permissions: string[];
};

type ApiState = Record<string, any>;

const nav: Array<{ key: ModuleKey; label: string; icon: ReactNode }> = [
  { key: "dashboard", label: "数据概览", icon: <BarChart3 size={18} /> },
  { key: "products", label: "商品与库存", icon: <Boxes size={18} /> },
  { key: "orders", label: "订单支付", icon: <ClipboardList size={18} /> },
  { key: "customers", label: "客户管理", icon: <Users size={18} /> },
  { key: "marketing", label: "优惠促销", icon: <Megaphone size={18} /> },
  { key: "reviews", label: "评价审核", icon: <Star size={18} /> },
  { key: "content", label: "新闻内容", icon: <FileText size={18} /> },
  { key: "forms", label: "客户表单", icon: <ShoppingCart size={18} /> },
  { key: "seo", label: "SEO数据", icon: <Globe2 size={18} /> },
  { key: "sync", label: "数据同步", icon: <RefreshCw size={18} /> },
  { key: "users", label: "用户权限", icon: <UserCog size={18} /> },
  { key: "settings", label: "系统设置", icon: <Settings size={18} /> },
  { key: "logs", label: "操作日志", icon: <ShieldCheck size={18} /> }
];

const formatCents = (value: number | null | undefined, currency = "USD") => {
  const amount = Number(value || 0) / 100;
  const prefix = currency === "CNY" ? "CNY " : "$";
  return `${prefix}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export default function AdminClient() {
  const [user, setUser] = useState<User | null>(null);
  const [active, setActive] = useState<ModuleKey>("dashboard");
  const [data, setData] = useState<ApiState>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");

  const loadSession = async () => {
    const response = await fetch("/api/admin/session", { cache: "no-store" });
    if (response.ok) {
      const body = await response.json();
      setUser(body.user);
    }
    setLoading(false);
  };

  const loadModule = async (module: ModuleKey = active) => {
    if (!user) return;
    setLoading(true);
    const response = await fetch(`/api/admin/console?module=${module}`, { cache: "no-store" });
    const body = await response.json();
    if (!response.ok) {
      setMessage(body.error || "加载失败");
    } else {
      setData(body.data || {});
      setMessage("");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    loadModule(active);
  }, [active, user]);

  const runAction = async (action: string, payload: Record<string, unknown> = {}) => {
    setLoading(true);
    const response = await fetch("/api/admin/console", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, payload })
    });
    const body = await response.json();
    setMessage(response.ok ? "操作已保存并写入审计日志" : body.error || "操作失败");
    await loadModule(active);
    setLoading(false);
  };

  const logout = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    setUser(null);
    setData({});
  };

  const filteredProducts = useMemo(() => {
    const items = data.products || [];
    const needle = query.toLowerCase();
    return items.filter((item: any, index: number) => `${item.name} ${displaySku(index)} ${item.collection_name} ${item.status}`.toLowerCase().includes(needle));
  }, [data.products, query]);

  if (loading && !user) {
    return <div className="admin-loading">正在连接管理后台...</div>;
  }

  if (!user) {
    return <LoginScreen onLogin={(nextUser) => setUser(nextUser)} />;
  }

  return (
    <main className="admin-app">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>Q</span>
          <div>
            <strong>COWINLIFE</strong>
            <small>B2C 管理后台</small>
          </div>
        </div>
        <nav aria-label="后台主导航">
          {nav.map((item) => (
            <button className={active === item.key ? "active" : ""} key={item.key} onClick={() => setActive(item.key)}>
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <p>Cowinlife 运营后台</p>
            <h1>{nav.find((item) => item.key === active)?.label}</h1>
          </div>
          <div className="admin-user">
            <span><KeyRound size={16} /> {user.displayName} / {user.roleCode}</span>
            <button onClick={() => loadModule(active)}><RefreshCw size={16} />刷新</button>
            <button onClick={logout}><LogOut size={16} />退出</button>
          </div>
        </header>

        {message && <div className="admin-message">{message}</div>}
        {loading && <div className="admin-message muted">正在处理...</div>}

        {active === "dashboard" && <Dashboard data={data} />}
        {active === "products" && <Products data={data} products={filteredProducts} query={query} setQuery={setQuery} runAction={runAction} />}
        {active === "orders" && <Orders data={data} runAction={runAction} />}
        {active === "customers" && <SimpleTable title="客户档案" rows={data.customers || []} columns={["id", "email", "name", "country", "customer_group", "order_count", "total_spent_cents", "updated_at"]} />}
        {active === "marketing" && <Marketing data={data} runAction={runAction} />}
        {active === "reviews" && <Reviews data={data} runAction={runAction} />}
        {active === "content" && <Content data={data} runAction={runAction} />}
        {active === "forms" && <SimpleTable title="客户表单与询盘" rows={data.forms || []} columns={["id", "form_type", "name", "phone", "email", "country", "requested_product", "product_name", "quantity", "budget", "timeline", "message", "status", "created_at"]} />}
        {active === "seo" && <Seo data={data} runAction={runAction} />}
        {active === "sync" && <Sync data={data} runAction={runAction} />}
        {active === "users" && <UsersPanel data={data} />}
        {active === "settings" && <SettingsPanel data={data} runAction={runAction} />}
        {active === "logs" && <SimpleTable title="操作审计日志" rows={data.logs || []} columns={["id", "username", "action", "entity_type", "entity_id", "created_at"]} />}
      </section>
    </main>
  );
}

function LoginScreen({ onLogin }: { onLogin: (user: User) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const body = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(body.error || "登录失败");
      return;
    }
    onLogin(body.user);
  };

  return (
    <main className="admin-login">
      <form onSubmit={submit}>
        <span className="login-mark">Q</span>
        <h1>COWINLIFE 管理后台</h1>
        <p>请输入服务器中配置的管理员账号和密码。</p>
        <label>
          账号
          <input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" />
        </label>
        <label>
          密码
          <span className="password-field">
            <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
            <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "隐藏密码" : "显示密码"}>
              <KeyRound size={16} />
            </button>
          </span>
        </label>
        {error && <strong className="form-error">{error}</strong>}
        <button className="admin-primary" disabled={loading}>{loading ? "登录中..." : "登录后台"}</button>
      </form>
    </main>
  );
}

function Dashboard({ data }: { data: ApiState }) {
  const totals = data.totals || {};
  const metrics = [
    ["商品总数", totals.products || 0],
    ["已发布商品", totals.published_products || 0],
    ["低库存商品", totals.low_stock_products || 0],
    ["订单数量", totals.orders || 0],
    ["已支付订单", totals.paid_orders || 0],
    ["待支付订单", totals.pending_orders || 0],
    ["待发货订单", totals.unfulfilled_orders || 0],
    ["销售额", formatCents(totals.sales_cents)]
  ];
  return (
    <div className="admin-stack">
      <section className="metric-grid">
        {metrics.map(([label, value]) => (
          <article key={label}>
            <small>{label}</small>
            <strong>{value}</strong>
          </article>
        ))}
      </section>
      <div className="admin-columns">
        <SimpleTable title="低库存与待录入库存" rows={data.lowStock || []} columns={["sku", "name", "available_quantity", "low_stock_threshold", "quantity_source"]} />
        <SimpleTable title="最近同步任务" rows={data.syncJobs || []} columns={["id", "source_name", "job_type", "status", "records_success", "message", "finished_at"]} />
      </div>
    </div>
  );
}

function Products({
  data,
  products,
  query,
  setQuery,
  runAction
}: {
  data: ApiState;
  products: any[];
  query: string;
  setQuery: (value: string) => void;
  runAction: (action: string, payload?: Record<string, unknown>) => Promise<void>;
}) {
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <label className="admin-search">
          <Search size={16} />
          <input placeholder="搜索商品名、SKU、状态" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <button onClick={() => runAction("sync.catalog_snapshot")}><RefreshCw size={16} />同步商品目录快照</button>
      </section>
      <section className="admin-table-wrap">
        <h2>商品管理与库存</h2>
        <table>
          <thead>
            <tr>
              <th>商品</th>
              <th>SKU</th>
              <th>价格</th>
              <th>状态</th>
              <th>可售库存</th>
              <th>来源</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>
                  <div className="product-cell">
                    <img src={product.image} alt="" />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{displaySku(index)}</td>
                <td>{product.price_display}</td>
                <td><Status value={product.status} /></td>
                <td>{product.available_quantity} <small>{product.quantity_source}</small></td>
                <td>{product.price_source}</td>
                <td>
                  <div className="row-actions">
                    <button onClick={() => runAction("inventory.adjust", { productId: product.id, delta: 10, reason: "后台快速入库" })}><PackageCheck size={14} />入库+10</button>
                    <button onClick={() => runAction("product.status", { productId: product.id, status: product.status === "published" ? "draft" : "published" })}>{product.status === "published" ? "下架" : "发布"}</button>
                    <button onClick={() => runAction("product.price", { productId: product.id, priceCents: Math.max(100, Number(product.price_cents || 0) + 100) })}><WalletCards size={14} />调价+$1</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <SimpleTable title="商品分类" rows={data.categories || []} columns={["id", "name", "english_name", "slug", "status", "sort_order", "seo_title"]} />
    </div>
  );
}

function Orders({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <button onClick={() => runAction("order.create_test", { quantity: 1 })}><ClipboardList size={16} />创建本地测试订单</button>
      </section>
      <section className="admin-table-wrap">
        <h2>订单管理</h2>
        <table>
          <thead>
            <tr>
              <th>订单号</th>
              <th>金额</th>
              <th>支付</th>
              <th>订单</th>
              <th>履约</th>
              <th>退款</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {(data.orders || []).map((order: any) => (
              <tr key={order.id}>
                <td>{order.order_no}</td>
                <td>{formatCents(order.total_cents, order.order_currency)}</td>
                <td><Status value={order.payment_status} /></td>
                <td><Status value={order.order_status} /></td>
                <td><Status value={order.fulfillment_status} /></td>
                <td>{formatCents(order.refunded_cents, order.order_currency)}</td>
                <td>
                  <div className="row-actions">
                    <button onClick={() => runAction("order.pay_test", { orderId: order.id })}>测试支付</button>
                    <button onClick={() => runAction("order.ship", { orderId: order.id, carrier: "Manual", trackingNo: `LOCAL${Date.now()}` })}><Truck size={14} />发货</button>
                    <button onClick={() => runAction("refund.create", { orderId: order.id, amountCents: Math.max(100, Math.round(Number(order.paid_cents || 0) / 2)), reason: "后台部分退款" })}>部分退款</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="admin-columns">
        <SimpleTable title="支付记录" rows={data.payments || []} columns={["id", "order_id", "provider", "method", "amount_cents", "currency", "status", "masked_account"]} />
        <SimpleTable title="退款记录" rows={data.refunds || []} columns={["id", "order_id", "amount_cents", "currency", "reason", "status", "created_at"]} />
      </div>
      <SimpleTable title="物流记录" rows={data.shipments || []} columns={["id", "order_id", "carrier", "tracking_no", "status", "updated_at"]} />
    </div>
  );
}

function Marketing({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <button onClick={() => runAction("promotion.create", { code: `QCH${Date.now().toString().slice(-4)}`, name: "本地促销", discountValue: 10 })}><Megaphone size={16} />创建优惠码</button>
      </section>
      <SimpleTable title="优惠与促销" rows={data.promotions || []} columns={["id", "code", "name", "promotion_type", "discount_type", "discount_value", "status", "used_count"]} />
    </div>
  );
}

function Reviews({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  return (
    <section className="admin-table-wrap">
      <h2>评价审核</h2>
      <table>
        <thead>
          <tr>
            <th>商品</th>
            <th>客户</th>
            <th>评分</th>
            <th>内容</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {(data.reviews || []).map((review: any) => (
            <tr key={review.id}>
              <td>{review.product_name}</td>
              <td>{review.customer_name}</td>
              <td>{review.rating}</td>
              <td>{review.content}</td>
              <td><Status value={review.status} /></td>
              <td>
                <div className="row-actions">
                  <button onClick={() => runAction("review.moderate", { reviewId: review.id, status: "approved" })}>通过</button>
                  <button onClick={() => runAction("review.moderate", { reviewId: review.id, status: "rejected" })}>拒绝</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Content({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <button onClick={() => runAction("content.save", { title: "How to apply peel and stick wall decals", contentType: "guide", locale: "en", status: "draft", excerpt: "Installation guide for COWINLIFE decals.", body: "Clean the surface, preview the layout, then peel and apply slowly." })}><FileText size={16} />新增英文指南</button>
      </section>
      <SimpleTable title="新闻、博客、购买指南" rows={data.contents || []} columns={["id", "title", "content_type", "locale", "status", "seo_title", "updated_at"]} />
    </div>
  );
}

function Seo({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  const summary = data.searchConsoleSummary || {};
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <button onClick={() => runAction("sync.google_search_console", { days: 28 })}><RefreshCw size={16} />同步 Google Search Console</button>
      </section>
      <section className="metric-grid">
        <article><small>SEO 数据行</small><strong>{summary.rows || 0}</strong></article>
        <article><small>自然点击</small><strong>{summary.clicks || 0}</strong></article>
        <article><small>曝光量</small><strong>{summary.impressions || 0}</strong></article>
        <article><small>平均排名</small><strong>{Number(summary.avg_position || 0).toFixed(1)}</strong></article>
      </section>
      <section className="admin-table-wrap">
        <h2>站内 SEO 数据</h2>
        <table>
          <thead>
            <tr>
              <th>对象</th>
              <th>路径</th>
              <th>标题</th>
              <th>Robots</th>
              <th>结构化数据</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {(data.seoRecords || []).map((record: any) => (
              <tr key={record.id}>
                <td>{record.entity_type}</td>
                <td>{record.path}</td>
                <td>{record.seo_title}</td>
                <td>{record.robots}</td>
                <td><Status value={record.structured_data_status} /></td>
                <td><button onClick={() => runAction("seo.save", { seoId: record.id, seoTitle: record.seo_title, seoDescription: record.seo_description, robots: "index,follow" })}>检测并保存</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <SimpleTable title="Google Search Console 搜索表现" rows={data.searchConsoleRows || []} columns={["data_date", "query", "page", "country", "device", "clicks", "impressions", "ctr", "position", "synced_at"]} />
    </div>
  );
}

function Sync({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  const summary = data.searchConsoleSummary || {};
  return (
    <div className="admin-stack">
      <section className="sync-panel">
        <div>
          <h2>数据同步中心</h2>
          <p>未配置外部 API 凭证时，不显示伪造数据；当前支持商品目录快照和 Google Search Console SEO 数据同步。</p>
        </div>
        <div className="row-actions">
          <button onClick={() => runAction("sync.catalog_snapshot")}><RefreshCw size={16} />执行商品快照同步</button>
          <button onClick={() => runAction("sync.google_search_console", { days: 28 })}><Globe2 size={16} />同步 Google SEO</button>
        </div>
      </section>
      <section className="metric-grid">
        <article><small>SEO 数据行</small><strong>{summary.rows || 0}</strong></article>
        <article><small>自然点击</small><strong>{summary.clicks || 0}</strong></article>
        <article><small>曝光量</small><strong>{summary.impressions || 0}</strong></article>
        <article><small>平均排名</small><strong>{Number(summary.avg_position || 0).toFixed(1)}</strong></article>
      </section>
      <SimpleTable title="同步任务记录" rows={data.syncJobs || []} columns={["id", "source_name", "job_type", "status", "records_total", "records_success", "records_failed", "message", "finished_at"]} />
    </div>
  );
}

function UsersPanel({ data }: { data: ApiState }) {
  return (
    <div className="admin-stack">
      <SimpleTable title="后台用户" rows={data.admins || []} columns={["id", "username", "display_name", "role_code", "failed_attempts", "locked_until", "last_login_at"]} />
      <SimpleTable title="角色权限" rows={data.roles || []} columns={["code", "name", "permissions"]} />
    </div>
  );
}

function SettingsPanel({ data, runAction }: { data: ApiState; runAction: (action: string, payload?: Record<string, unknown>) => Promise<void> }) {
  return (
    <div className="admin-stack">
      <section className="toolbar">
        <button onClick={() => runAction("settings.save", { key: "payment", value: { testProviderEnabled: true, liveProviderConfigured: false, saveCards: false, updatedBy: "admin" } })}><Settings size={16} />保存支付测试配置</button>
      </section>
      <SimpleTable title="系统设置" rows={data.settings || []} columns={["key", "value", "updated_at"]} />
    </div>
  );
}

function SimpleTable({ title, rows, columns }: { title: string; rows: any[]; columns: string[] }) {
  return (
    <section className="admin-table-wrap">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => <th key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={columns.length}>暂无数据。可通过后台操作或前台流程写入数据库。</td></tr>
          ) : rows.map((row, index) => (
            <tr key={row.id || index}>
              {columns.map((column) => (
                <td key={column}>{formatCell(row[column], column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function formatCell(value: unknown, column: string) {
  if (value === null || value === undefined || value === "") return "-";
  if (column.endsWith("_cents")) return formatCents(Number(value));
  if (typeof value === "object") return JSON.stringify(value);
  const text = String(value);
  return text.length > 120 ? `${text.slice(0, 120)}...` : text;
}

function Status({ value }: { value: string }) {
  return <span className={`status status-${String(value).replace(/[^a-z0-9_-]/gi, "-")}`}>{value}</span>;
}
