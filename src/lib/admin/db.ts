import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { products, collections } from "@/data/products";
import { fetchSearchConsoleData } from "@/lib/admin/google-search-console";

type Database = {
  exec: (sql: string) => void;
  prepare: (sql: string) => {
    all: (...params: unknown[]) => Record<string, unknown>[];
    get: (...params: unknown[]) => Record<string, unknown> | undefined;
    run: (...params: unknown[]) => { changes: number; lastInsertRowid: number | bigint };
  };
};

type AdminUser = {
  id: number;
  username: string;
  display_name: string;
  role_code: string;
  permissions_json: string;
};

type DbModule =
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

const sqlite = require("node:sqlite") as { DatabaseSync: new (file: string) => Database };

const dbFile = process.env.VERCEL
  ? path.join("/tmp", "qucheng-admin.sqlite")
  : path.join(process.cwd(), "data", "qucheng-admin.sqlite");
let db: Database | null = null;

const now = () => new Date().toISOString();
const json = (value: unknown) => JSON.stringify(value ?? null);

function moneyToCents(value: number | null) {
  return value === null ? null : Math.round(value * 100);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
}

function hashPassword(password: string, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 210000, 32, "sha256").toString("hex");
  return `pbkdf2_sha256$210000$${salt}$${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [, iterations, salt, expected] = storedHash.split("$");
  const actual = crypto.pbkdf2Sync(password, salt, Number(iterations), 32, "sha256").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

function initSchema(database: Database) {
  database.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS roles (
      code TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      permissions_json TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      display_name TEXT NOT NULL,
      role_code TEXT NOT NULL REFERENCES roles(code),
      failed_attempts INTEGER NOT NULL DEFAULT 0,
      locked_until TEXT,
      last_login_at TEXT,
      last_login_ip TEXT,
      must_change_password INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS admin_sessions (
      token_hash TEXT PRIMARY KEY,
      admin_id INTEGER NOT NULL REFERENCES admins(id),
      expires_at TEXT NOT NULL,
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      english_name TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      parent_id INTEGER REFERENCES categories(id),
      sort_order INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'enabled',
      seo_title TEXT NOT NULL DEFAULT '',
      seo_description TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products_admin (
      id TEXT PRIMARY KEY,
      sku TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      subtitle TEXT NOT NULL DEFAULT '',
      slug TEXT NOT NULL UNIQUE,
      product_type TEXT NOT NULL,
      category_id INTEGER REFERENCES categories(id),
      category_name TEXT NOT NULL,
      collection_name TEXT NOT NULL,
      status TEXT NOT NULL,
      currency TEXT NOT NULL,
      price_cents INTEGER,
      price_display TEXT NOT NULL,
      price_source TEXT NOT NULL,
      product_url TEXT NOT NULL,
      image TEXT NOT NULL,
      gallery_json TEXT NOT NULL,
      tags_json TEXT NOT NULL,
      features_json TEXT NOT NULL,
      parameters_json TEXT NOT NULL,
      seo_title TEXT NOT NULL DEFAULT '',
      seo_description TEXT NOT NULL DEFAULT '',
      source_snapshot_json TEXT NOT NULL,
      published_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS inventory (
      product_id TEXT PRIMARY KEY REFERENCES products_admin(id) ON DELETE CASCADE,
      sku TEXT NOT NULL UNIQUE,
      total_quantity INTEGER NOT NULL DEFAULT 0,
      available_quantity INTEGER NOT NULL DEFAULT 0,
      locked_quantity INTEGER NOT NULL DEFAULT 0,
      sold_unshipped_quantity INTEGER NOT NULL DEFAULT 0,
      inbound_quantity INTEGER NOT NULL DEFAULT 0,
      safety_quantity INTEGER NOT NULL DEFAULT 5,
      low_stock_threshold INTEGER NOT NULL DEFAULT 5,
      catalog_availability TEXT NOT NULL DEFAULT '',
      quantity_source TEXT NOT NULL DEFAULT 'manual',
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS inventory_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL REFERENCES products_admin(id),
      sku TEXT NOT NULL,
      movement_type TEXT NOT NULL,
      quantity_delta INTEGER NOT NULL,
      quantity_after INTEGER NOT NULL,
      reason TEXT NOT NULL,
      actor_admin_id INTEGER REFERENCES admins(id),
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      phone_masked TEXT NOT NULL DEFAULT '',
      country TEXT NOT NULL DEFAULT '',
      customer_group TEXT NOT NULL DEFAULT '新客户',
      tags_json TEXT NOT NULL DEFAULT '[]',
      marketing_consent INTEGER NOT NULL DEFAULT 0,
      order_count INTEGER NOT NULL DEFAULT 0,
      total_spent_cents INTEGER NOT NULL DEFAULT 0,
      refund_total_cents INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS carts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER REFERENCES customers(id),
      email TEXT NOT NULL DEFAULT '',
      items_json TEXT NOT NULL,
      currency TEXT NOT NULL DEFAULT 'USD',
      subtotal_cents INTEGER NOT NULL DEFAULT 0,
      discount_cents INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'active',
      abandon_reason TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_no TEXT NOT NULL UNIQUE,
      customer_id INTEGER REFERENCES customers(id),
      customer_snapshot_json TEXT NOT NULL,
      items_snapshot_json TEXT NOT NULL,
      subtotal_cents INTEGER NOT NULL,
      discount_cents INTEGER NOT NULL DEFAULT 0,
      shipping_cents INTEGER NOT NULL DEFAULT 0,
      tax_cents INTEGER NOT NULL DEFAULT 0,
      total_cents INTEGER NOT NULL,
      paid_cents INTEGER NOT NULL DEFAULT 0,
      refunded_cents INTEGER NOT NULL DEFAULT 0,
      order_currency TEXT NOT NULL DEFAULT 'USD',
      payment_currency TEXT NOT NULL DEFAULT 'USD',
      payment_status TEXT NOT NULL DEFAULT 'pending',
      order_status TEXT NOT NULL DEFAULT 'pending_payment',
      fulfillment_status TEXT NOT NULL DEFAULT 'unfulfilled',
      aftersale_status TEXT NOT NULL DEFAULT 'none',
      source TEXT NOT NULL DEFAULT 'admin',
      customer_note TEXT NOT NULL DEFAULT '',
      admin_note TEXT NOT NULL DEFAULT '',
      paid_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id),
      provider TEXT NOT NULL,
      provider_payment_id TEXT NOT NULL UNIQUE,
      method TEXT NOT NULL,
      amount_cents INTEGER NOT NULL,
      currency TEXT NOT NULL,
      status TEXT NOT NULL,
      idempotency_key TEXT NOT NULL UNIQUE,
      masked_account TEXT NOT NULL DEFAULT '',
      raw_status TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS refunds (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id),
      payment_id INTEGER REFERENCES payments(id),
      amount_cents INTEGER NOT NULL,
      currency TEXT NOT NULL,
      reason TEXT NOT NULL,
      status TEXT NOT NULL,
      idempotency_key TEXT NOT NULL UNIQUE,
      restock INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS shipments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id),
      carrier TEXT NOT NULL,
      tracking_no TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'created',
      tracking_events_json TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(order_id, tracking_no)
    );

    CREATE TABLE IF NOT EXISTS promotions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      promotion_type TEXT NOT NULL,
      discount_type TEXT NOT NULL,
      discount_value INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'draft',
      starts_at TEXT,
      ends_at TEXT,
      rules_json TEXT NOT NULL DEFAULT '{}',
      usage_limit INTEGER,
      used_count INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL REFERENCES products_admin(id),
      order_id INTEGER REFERENCES orders(id),
      customer_name TEXT NOT NULL,
      rating INTEGER NOT NULL,
      content TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      source TEXT NOT NULL DEFAULT 'customer',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS contents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      content_type TEXT NOT NULL,
      locale TEXT NOT NULL DEFAULT 'en',
      status TEXT NOT NULL DEFAULT 'draft',
      excerpt TEXT NOT NULL DEFAULT '',
      body TEXT NOT NULL DEFAULT '',
      related_products_json TEXT NOT NULL DEFAULT '[]',
      seo_title TEXT NOT NULL DEFAULT '',
      seo_description TEXT NOT NULL DEFAULT '',
      published_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS customer_forms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      form_type TEXT NOT NULL,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      message TEXT NOT NULL,
      related_product_id TEXT REFERENCES products_admin(id),
      source TEXT NOT NULL DEFAULT 'site',
      status TEXT NOT NULL DEFAULT 'new',
      assignee_admin_id INTEGER REFERENCES admins(id),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_type TEXT NOT NULL,
      product_id TEXT REFERENCES products_admin(id),
      order_id INTEGER REFERENCES orders(id),
      country TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT '',
      device TEXT NOT NULL DEFAULT '',
      value_cents INTEGER NOT NULL DEFAULT 0,
      occurred_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS seo_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL,
      path TEXT NOT NULL,
      seo_title TEXT NOT NULL DEFAULT '',
      seo_description TEXT NOT NULL DEFAULT '',
      robots TEXT NOT NULL DEFAULT 'index,follow',
      canonical_url TEXT NOT NULL DEFAULT '',
      structured_data_status TEXT NOT NULL DEFAULT 'pending',
      issues_json TEXT NOT NULL DEFAULT '[]',
      updated_at TEXT NOT NULL,
      UNIQUE(entity_type, entity_id)
    );

    CREATE TABLE IF NOT EXISTS seo_search_console_rows (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      site_url TEXT NOT NULL,
      data_date TEXT NOT NULL,
      query TEXT NOT NULL DEFAULT '',
      page TEXT NOT NULL DEFAULT '',
      country TEXT NOT NULL DEFAULT '',
      device TEXT NOT NULL DEFAULT '',
      clicks INTEGER NOT NULL DEFAULT 0,
      impressions INTEGER NOT NULL DEFAULT 0,
      ctr REAL NOT NULL DEFAULT 0,
      position REAL NOT NULL DEFAULT 0,
      synced_at TEXT NOT NULL,
      UNIQUE(site_url, data_date, query, page, country, device)
    );

    CREATE TABLE IF NOT EXISTS sync_jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_name TEXT NOT NULL,
      job_type TEXT NOT NULL,
      status TEXT NOT NULL,
      records_total INTEGER NOT NULL DEFAULT 0,
      records_success INTEGER NOT NULL DEFAULT 0,
      records_failed INTEGER NOT NULL DEFAULT 0,
      message TEXT NOT NULL DEFAULT '',
      started_at TEXT NOT NULL,
      finished_at TEXT
    );

    CREATE TABLE IF NOT EXISTS audit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      actor_admin_id INTEGER REFERENCES admins(id),
      action TEXT NOT NULL,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL DEFAULT '',
      before_json TEXT,
      after_json TEXT,
      ip TEXT NOT NULL DEFAULT '',
      user_agent TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
}

function seedRoles(database: Database) {
  const roles = [
    ["super_admin", "超级管理员", ["*"]],
    ["admin", "管理员", ["dashboard.view", "product.*", "inventory.*", "order.*", "customer.view", "marketing.*", "content.*", "seo.*", "sync.run", "logs.view"]],
    ["product_operator", "商品运营", ["dashboard.view", "product.*", "inventory.view", "inventory.adjust", "seo.product"]],
    ["content_editor", "内容编辑", ["dashboard.view", "content.*", "seo.content"]],
    ["customer_service", "客服人员", ["dashboard.view", "order.view", "order.note", "customer.view", "forms.*", "review.moderate"]],
    ["warehouse", "仓库人员", ["dashboard.view", "inventory.*", "order.view", "shipment.*"]],
    ["finance", "财务人员", ["dashboard.view", "order.view", "payment.view", "refund.*", "settings.payment"]],
    ["marketing", "市场人员", ["dashboard.view", "marketing.*", "analytics.view", "seo.*"]],
    ["analyst", "数据分析人员", ["dashboard.view", "analytics.view", "sync.view"]],
    ["readonly", "只读用户", ["dashboard.view", "*.view"]]
  ];
  const statement = database.prepare("INSERT OR REPLACE INTO roles (code, name, permissions_json) VALUES (?, ?, ?)");
  for (const role of roles) statement.run(role[0], role[1], json(role[2]));
}

function seedAdmin(database: Database) {
  const existing = database.prepare("SELECT id FROM admins WHERE username = ?").get("admin");
  if (existing) return;
  const timestamp = now();
  database
    .prepare(
      `INSERT INTO admins (username, password_hash, display_name, role_code, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run("admin", hashPassword("Admin@2026!"), "本地超级管理员", "super_admin", timestamp, timestamp);
}

function seedCatalog(database: Database) {
  const timestamp = now();
  for (let index = 0; index < collections.length; index += 1) {
    const collection = collections[index];
    database
      .prepare(
        `INSERT OR IGNORE INTO categories (name, english_name, slug, sort_order, seo_title, seo_description, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(collection.name, collection.name, slugify(collection.name), index + 1, collection.name, collection.description, timestamp, timestamp);
  }

  for (const product of products) {
    const category = database.prepare("SELECT id FROM categories WHERE name = ?").get(product.collection);
    const categoryId = Number(category?.id ?? 0) || null;
    const productType = product.colors.length > 1 ? "multi_variant" : "physical";
    database
      .prepare(
        `INSERT OR IGNORE INTO products_admin
        (id, sku, name, subtitle, slug, product_type, category_id, category_name, collection_name, status, currency, price_cents,
         price_display, price_source, product_url, image, gallery_json, tags_json, features_json, parameters_json, seo_title,
         seo_description, source_snapshot_json, published_at, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        product.id,
        product.sku,
        product.name,
        product.tags.slice(0, 3).join(" / "),
        slugify(`${product.sku}-${product.name}`),
        productType,
        categoryId,
        product.category,
        product.collection,
        "published",
        product.currency,
        moneyToCents(product.price),
        product.priceDisplay,
        product.priceSource,
        "",
        product.image,
        json(product.gallery),
        json(product.tags),
        json(product.features),
        json(product.parameters),
        product.name.slice(0, 70),
        product.details.slice(0, 160),
        json(product),
        timestamp,
        timestamp,
        timestamp
      );

    database
      .prepare(
        `INSERT OR IGNORE INTO inventory
        (product_id, sku, total_quantity, available_quantity, catalog_availability, quantity_source, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .run(product.id, product.sku, 0, 0, product.availability, "catalog_status_quantity_pending", timestamp);

    database
      .prepare(
        `INSERT OR IGNORE INTO seo_records
        (entity_type, entity_id, path, seo_title, seo_description, structured_data_status, issues_json, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run("product", product.id, `/products/${slugify(`${product.sku}-${product.name}`)}`, product.name.slice(0, 70), product.details.slice(0, 160), "pending", json([]), timestamp);
  }

  database
    .prepare("INSERT OR IGNORE INTO settings (key, value_json, updated_at) VALUES (?, ?, ?)")
    .run("store", json({ timezone: "Asia/Shanghai", defaultCurrency: "USD", freeShippingThresholdCents: 4900 }), timestamp);
  database
    .prepare("INSERT OR IGNORE INTO settings (key, value_json, updated_at) VALUES (?, ?, ?)")
    .run("payment", json({ testProviderEnabled: true, liveProviderConfigured: false, saveCards: false }), timestamp);
  database
    .prepare("INSERT OR IGNORE INTO settings (key, value_json, updated_at) VALUES (?, ?, ?)")
    .run("sync", json({ catalogSnapshot: "manual", seoExternal: "credentials_required", analyticsExternal: "credentials_required" }), timestamp);
}

function initialize(database: Database) {
  initSchema(database);
  seedRoles(database);
  seedAdmin(database);
  seedCatalog(database);
}

export function getDb() {
  if (!db) {
    fs.mkdirSync(path.dirname(dbFile), { recursive: true });
    db = new sqlite.DatabaseSync(dbFile);
    initialize(db);
  }
  return db;
}

export function getAdminByUsername(username: string) {
  return getDb()
    .prepare(
      `SELECT admins.*, roles.permissions_json
       FROM admins JOIN roles ON roles.code = admins.role_code
       WHERE admins.username = ?`
    )
    .get(username) as (AdminUser & { password_hash: string; failed_attempts: number; locked_until?: string }) | undefined;
}

export function getAdminBySession(token: string) {
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  return getDb()
    .prepare(
      `SELECT admins.id, admins.username, admins.display_name, admins.role_code, roles.permissions_json
       FROM admin_sessions
       JOIN admins ON admins.id = admin_sessions.admin_id
       JOIN roles ON roles.code = admins.role_code
       WHERE admin_sessions.token_hash = ? AND admin_sessions.expires_at > ?`
    )
    .get(tokenHash, now()) as AdminUser | undefined;
}

export function createSession(adminId: number, ip: string, userAgent: string) {
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const timestamp = now();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString();
  getDb()
    .prepare("INSERT INTO admin_sessions (token_hash, admin_id, expires_at, ip, user_agent, created_at) VALUES (?, ?, ?, ?, ?, ?)")
    .run(tokenHash, adminId, expiresAt, ip, userAgent, timestamp);
  return { token, expiresAt };
}

export function deleteSession(token: string) {
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  getDb().prepare("DELETE FROM admin_sessions WHERE token_hash = ?").run(tokenHash);
}

export function hasPermission(user: AdminUser, permission: string) {
  const permissions = JSON.parse(user.permissions_json || "[]") as string[];
  return permissions.includes("*") || permissions.includes(permission) || permissions.some((item) => item.endsWith(".*") && permission.startsWith(item.slice(0, -1)));
}

export function assertPermission(user: AdminUser, permission: string) {
  if (!hasPermission(user, permission)) {
    const error = new Error("权限不足");
    error.name = "Forbidden";
    throw error;
  }
}

export function audit(user: AdminUser | null, action: string, entityType: string, entityId: string, before: unknown, after: unknown, request?: Request) {
  getDb()
    .prepare(
      `INSERT INTO audit_logs (actor_admin_id, action, entity_type, entity_id, before_json, after_json, ip, user_agent, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      user?.id ?? null,
      action,
      entityType,
      entityId,
      before ? json(before) : null,
      after ? json(after) : null,
      request?.headers.get("x-forwarded-for") || "",
      request?.headers.get("user-agent") || "",
      now()
    );
}

type PublicOrderInput = {
  email: string;
  name: string;
  address: string;
  country: string;
  note?: string;
  items: Array<Record<string, unknown>>;
  subtotalCents: number;
  shippingCents: number;
  taxCents: number;
  totalCents: number;
  currency: string;
  request?: Request;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function createPublicOrder(input: PublicOrderInput) {
  const email = normalizeEmail(input.email);
  const name = input.name.trim();
  const address = input.address.trim();
  const country = input.country.trim() || "US";
  if (!email.includes("@")) throw new Error("Valid email is required");
  if (!name) throw new Error("Customer name is required");
  if (!address) throw new Error("Shipping address is required");
  if (!input.items.length) throw new Error("At least one priced product is required");

  const database = getDb();
  const timestamp = now();
  const orderNo = `CWL-${Date.now()}-${crypto.randomInt(1000, 9999)}`;
  const customerSnapshot = { email, name, country, address };

  database.exec("BEGIN IMMEDIATE");
  try {
    database
      .prepare(
        `INSERT INTO customers (email, name, country, tags_json, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(email) DO UPDATE SET name = excluded.name, country = excluded.country, updated_at = excluded.updated_at`
      )
      .run(email, name, country, json(["storefront"]), timestamp, timestamp);
    const customer = get("SELECT * FROM customers WHERE email = ?", email);
    const customerId = Number(customer?.id || 0) || null;

    database
      .prepare(
        `INSERT INTO carts (customer_id, email, items_json, currency, subtotal_cents, discount_cents, status, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(customerId, email, json(input.items), input.currency, input.subtotalCents, 0, "converted_to_order", timestamp, timestamp);

    database
      .prepare(
        `INSERT INTO orders
        (order_no, customer_id, customer_snapshot_json, items_snapshot_json, subtotal_cents, discount_cents, shipping_cents, tax_cents,
         total_cents, order_currency, payment_currency, payment_status, order_status, fulfillment_status, source, customer_note, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        orderNo,
        customerId,
        json(customerSnapshot),
        json(input.items),
        input.subtotalCents,
        0,
        input.shippingCents,
        input.taxCents,
        input.totalCents,
        input.currency,
        input.currency,
        "pending",
        "pending_payment",
        "unfulfilled",
        "storefront",
        input.note || "",
        timestamp,
        timestamp
      );

    database
      .prepare("UPDATE customers SET order_count = order_count + 1, updated_at = ? WHERE id = ?")
      .run(timestamp, customerId);
    database.exec("COMMIT");
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }

  const order = get("SELECT * FROM orders WHERE order_no = ?", orderNo);
  audit(null, "storefront_order_created", "order", String(order?.id || orderNo), null, order, input.request);
  return order;
}

export function getPublicOrder(orderNo: string) {
  return get("SELECT * FROM orders WHERE order_no = ?", orderNo);
}

export function createPublicForm(input: {
  formType: string;
  email: string;
  name: string;
  message: string;
  relatedProductId?: string;
  request?: Request;
}) {
  const email = normalizeEmail(input.email);
  const name = input.name.trim();
  const message = input.message.trim();
  if (!email.includes("@")) throw new Error("Valid email is required");
  if (!name) throw new Error("Name is required");
  if (message.length < 3) throw new Error("Message is required");
  const timestamp = now();
  const database = getDb();
  database
    .prepare(
      `INSERT INTO customer_forms (form_type, email, name, message, related_product_id, source, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      input.formType || "contact",
      email,
      name,
      message,
      input.relatedProductId || null,
      "storefront",
      "new",
      timestamp,
      timestamp
    );
  const form = get("SELECT * FROM customer_forms ORDER BY id DESC LIMIT 1");
  audit(null, "storefront_form_created", "customer_form", String(form?.id || ""), null, form, input.request);
  return form;
}

function parseRow<T extends Record<string, unknown>>(row: T) {
  const parsed: Record<string, unknown> = { ...row };
  for (const key of Object.keys(parsed)) {
    if (key.endsWith("_json") && typeof parsed[key] === "string") {
      parsed[key.replace(/_json$/, "")] = JSON.parse(parsed[key] as string);
      delete parsed[key];
    }
  }
  return parsed;
}

function all(sql: string, ...params: unknown[]) {
  return getDb().prepare(sql).all(...params).map(parseRow);
}

function get(sql: string, ...params: unknown[]) {
  const row = getDb().prepare(sql).get(...params);
  return row ? parseRow(row) : null;
}

export function getModuleData(module: DbModule) {
  switch (module) {
    case "dashboard": {
      const totals = get(`
        SELECT
          (SELECT COUNT(*) FROM products_admin) AS products,
          (SELECT COUNT(*) FROM products_admin WHERE status = 'published') AS published_products,
          (SELECT COUNT(*) FROM inventory WHERE available_quantity <= low_stock_threshold) AS low_stock_products,
          (SELECT COUNT(*) FROM orders) AS orders,
          (SELECT COALESCE(SUM(total_cents), 0) FROM orders WHERE payment_status = 'paid') AS sales_cents,
          (SELECT COUNT(*) FROM orders WHERE payment_status = 'paid') AS paid_orders,
          (SELECT COUNT(*) FROM orders WHERE payment_status = 'pending') AS pending_orders,
          (SELECT COUNT(*) FROM orders WHERE fulfillment_status = 'unfulfilled') AS unfulfilled_orders,
          (SELECT COUNT(*) FROM customers) AS customers,
          (SELECT COUNT(*) FROM customer_forms WHERE status = 'new') AS new_forms,
          (SELECT COUNT(*) FROM reviews WHERE status = 'pending') AS pending_reviews
      `);
      return {
        totals,
        recentOrders: all("SELECT * FROM orders ORDER BY created_at DESC LIMIT 8"),
        lowStock: all(`
          SELECT products_admin.name, products_admin.sku, inventory.available_quantity, inventory.low_stock_threshold, inventory.quantity_source
          FROM inventory JOIN products_admin ON products_admin.id = inventory.product_id
          WHERE inventory.available_quantity <= inventory.low_stock_threshold
          ORDER BY inventory.available_quantity ASC LIMIT 8
        `),
        syncJobs: all("SELECT * FROM sync_jobs ORDER BY started_at DESC LIMIT 6")
      };
    }
    case "products":
      return {
        products: all(`
          SELECT products_admin.*, inventory.total_quantity, inventory.available_quantity, inventory.locked_quantity, inventory.catalog_availability, inventory.quantity_source
          FROM products_admin LEFT JOIN inventory ON inventory.product_id = products_admin.id
          ORDER BY products_admin.updated_at DESC
        `),
        categories: all("SELECT * FROM categories ORDER BY sort_order ASC, name ASC")
      };
    case "orders":
      return {
        orders: all("SELECT * FROM orders ORDER BY created_at DESC"),
        payments: all("SELECT * FROM payments ORDER BY created_at DESC"),
        refunds: all("SELECT * FROM refunds ORDER BY created_at DESC"),
        shipments: all("SELECT * FROM shipments ORDER BY created_at DESC")
      };
    case "customers":
      return { customers: all("SELECT * FROM customers ORDER BY updated_at DESC") };
    case "marketing":
      return { promotions: all("SELECT * FROM promotions ORDER BY updated_at DESC") };
    case "reviews":
      return {
        reviews: all(`
          SELECT reviews.*, products_admin.name AS product_name, products_admin.sku
          FROM reviews JOIN products_admin ON products_admin.id = reviews.product_id
          ORDER BY reviews.created_at DESC
        `)
      };
    case "content":
      return { contents: all("SELECT * FROM contents ORDER BY updated_at DESC") };
    case "forms":
      return {
        forms: all(`
          SELECT customer_forms.*, products_admin.name AS product_name
          FROM customer_forms LEFT JOIN products_admin ON products_admin.id = customer_forms.related_product_id
          ORDER BY customer_forms.created_at DESC
        `)
      };
    case "seo":
      return {
        seoRecords: all("SELECT * FROM seo_records ORDER BY updated_at DESC"),
        searchConsoleSummary: get(`
          SELECT
            COUNT(*) AS rows,
            COALESCE(SUM(clicks), 0) AS clicks,
            COALESCE(SUM(impressions), 0) AS impressions,
            COALESCE(AVG(position), 0) AS avg_position,
            MAX(synced_at) AS last_synced_at
          FROM seo_search_console_rows
        `),
        searchConsoleRows: all("SELECT * FROM seo_search_console_rows ORDER BY data_date DESC, clicks DESC LIMIT 100")
      };
    case "sync":
      return {
        syncJobs: all("SELECT * FROM sync_jobs ORDER BY started_at DESC"),
        searchConsoleSummary: get(`
          SELECT
            COUNT(*) AS rows,
            COALESCE(SUM(clicks), 0) AS clicks,
            COALESCE(SUM(impressions), 0) AS impressions,
            COALESCE(AVG(position), 0) AS avg_position,
            MAX(synced_at) AS last_synced_at
          FROM seo_search_console_rows
        `)
      };
    case "users":
      return {
        admins: all("SELECT admins.id, admins.username, admins.display_name, admins.role_code, admins.failed_attempts, admins.locked_until, admins.last_login_at, admins.created_at FROM admins ORDER BY id ASC"),
        roles: all("SELECT * FROM roles ORDER BY code ASC")
      };
    case "settings":
      return { settings: all("SELECT * FROM settings ORDER BY key ASC") };
    case "logs":
      return { logs: all("SELECT audit_logs.*, admins.username FROM audit_logs LEFT JOIN admins ON admins.id = audit_logs.actor_admin_id ORDER BY audit_logs.created_at DESC LIMIT 200") };
    default:
      return {};
  }
}

export async function executeAction(user: AdminUser, action: string, payload: Record<string, unknown>, request: Request) {
  const database = getDb();
  const timestamp = now();
  switch (action) {
    case "product.status": {
      assertPermission(user, "product.edit");
      const before = get("SELECT * FROM products_admin WHERE id = ?", payload.productId);
      database.prepare("UPDATE products_admin SET status = ?, updated_at = ?, published_at = CASE WHEN ? = 'published' THEN COALESCE(published_at, ?) ELSE published_at END WHERE id = ?")
        .run(payload.status, timestamp, payload.status, timestamp, payload.productId);
      const after = get("SELECT * FROM products_admin WHERE id = ?", payload.productId);
      audit(user, "修改商品状态", "product", String(payload.productId), before, after, request);
      return after;
    }
    case "product.price": {
      assertPermission(user, "product.price");
      const priceCents = Math.max(0, Math.round(Number(payload.priceCents || 0)));
      const before = get("SELECT * FROM products_admin WHERE id = ?", payload.productId);
      database.prepare("UPDATE products_admin SET price_cents = ?, price_display = ?, price_source = ?, updated_at = ? WHERE id = ?")
        .run(priceCents, `$${(priceCents / 100).toFixed(2)}`, "后台人工维护价格", timestamp, payload.productId);
      const after = get("SELECT * FROM products_admin WHERE id = ?", payload.productId);
      audit(user, "修改商品价格", "product", String(payload.productId), before, after, request);
      return after;
    }
    case "inventory.adjust": {
      assertPermission(user, "inventory.adjust");
      const delta = Math.trunc(Number(payload.delta || 0));
      if (!delta) throw new Error("库存调整数量不能为 0");
      const before = get("SELECT * FROM inventory WHERE product_id = ?", payload.productId);
      const current = Number(before?.available_quantity || 0);
      const next = Math.max(0, current + delta);
      database.prepare("UPDATE inventory SET total_quantity = ?, available_quantity = ?, quantity_source = ?, updated_at = ? WHERE product_id = ?")
        .run(next, next, "manual", timestamp, payload.productId);
      const row = get("SELECT * FROM inventory WHERE product_id = ?", payload.productId);
      database.prepare("INSERT INTO inventory_movements (product_id, sku, movement_type, quantity_delta, quantity_after, reason, actor_admin_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
        .run(payload.productId, row?.sku, "manual_adjustment", delta, next, String(payload.reason || "后台手动调整"), user.id, timestamp);
      audit(user, "调整库存", "inventory", String(payload.productId), before, row, request);
      return row;
    }
    case "order.create_test": {
      assertPermission(user, "order.create");
      const product = payload.productId
        ? get("SELECT * FROM products_admin WHERE id = ?", payload.productId)
        : get("SELECT * FROM products_admin ORDER BY updated_at DESC LIMIT 1");
      if (!product) throw new Error("没有可用于创建订单的商品");
      const priceCents = Number(product.price_cents || 0);
      const quantity = Math.max(1, Math.trunc(Number(payload.quantity || 1)));
      const subtotal = priceCents * quantity;
      const shipping = subtotal >= 4900 ? 0 : 690;
      const total = subtotal + shipping;
      const orderNo = `QCH-${Date.now()}`;
      const customerSnapshot = { name: "本地测试客户", email: "local-customer@example.com", country: "US" };
      const items = [{ productId: product.id, sku: product.sku, name: product.name, unitPriceCents: priceCents, quantity }];
      database.prepare(`
        INSERT INTO orders (order_no, customer_snapshot_json, items_snapshot_json, subtotal_cents, shipping_cents, total_cents, order_currency, payment_currency, source, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(orderNo, json(customerSnapshot), json(items), subtotal, shipping, total, product.currency || "USD", product.currency || "USD", "admin_test", timestamp, timestamp);
      const order = get("SELECT * FROM orders WHERE order_no = ?", orderNo);
      audit(user, "创建后台测试订单", "order", String(order?.id), null, order, request);
      return order;
    }
    case "order.pay_test": {
      assertPermission(user, "payment.view");
      const order = get("SELECT * FROM orders WHERE id = ?", payload.orderId);
      if (!order) throw new Error("订单不存在");
      const idempotencyKey = `testpay_${order.id}_${order.total_cents}`;
      database.prepare(`
        INSERT OR IGNORE INTO payments (order_id, provider, provider_payment_id, method, amount_cents, currency, status, idempotency_key, masked_account, raw_status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(order.id, "local_test_provider", idempotencyKey, "test_card", order.total_cents, order.payment_currency, "succeeded", idempotencyKey, "**** 4242", "local_success", timestamp, timestamp);
      database.prepare("UPDATE orders SET payment_status = 'paid', order_status = 'paid', paid_cents = total_cents, paid_at = ?, updated_at = ? WHERE id = ?")
        .run(timestamp, timestamp, order.id);
      const after = get("SELECT * FROM orders WHERE id = ?", order.id);
      audit(user, "测试支付成功", "order", String(order.id), order, after, request);
      return after;
    }
    case "order.ship": {
      assertPermission(user, "shipment.create");
      const order = get("SELECT * FROM orders WHERE id = ?", payload.orderId);
      if (!order) throw new Error("订单不存在");
      database.prepare("INSERT OR IGNORE INTO shipments (order_id, carrier, tracking_no, status, tracking_events_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)")
        .run(payload.orderId, String(payload.carrier || "Manual"), String(payload.trackingNo || `LOCAL${Date.now()}`), "created", json([{ time: timestamp, message: "后台手动录入物流单号" }]), timestamp, timestamp);
      database.prepare("UPDATE orders SET fulfillment_status = 'shipped', order_status = 'shipped', updated_at = ? WHERE id = ?").run(timestamp, payload.orderId);
      const after = get("SELECT * FROM orders WHERE id = ?", payload.orderId);
      audit(user, "添加物流单号", "order", String(payload.orderId), order, after, request);
      return after;
    }
    case "refund.create": {
      assertPermission(user, "refund.create");
      const order = get("SELECT * FROM orders WHERE id = ?", payload.orderId);
      if (!order) throw new Error("订单不存在");
      const amount = Math.max(1, Math.round(Number(payload.amountCents || 0)));
      if (amount + Number(order.refunded_cents || 0) > Number(order.paid_cents || 0)) throw new Error("退款金额不能超过已支付金额");
      const idempotencyKey = `refund_${order.id}_${Date.now()}`;
      database.prepare("INSERT INTO refunds (order_id, amount_cents, currency, reason, status, idempotency_key, restock, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .run(order.id, amount, order.payment_currency, String(payload.reason || "后台退款"), "succeeded", idempotencyKey, payload.restock ? 1 : 0, timestamp, timestamp);
      const refunded = Number(order.refunded_cents || 0) + amount;
      const paymentStatus = refunded >= Number(order.paid_cents || 0) ? "refunded" : "partially_refunded";
      database.prepare("UPDATE orders SET refunded_cents = ?, payment_status = ?, aftersale_status = ?, updated_at = ? WHERE id = ?")
        .run(refunded, paymentStatus, paymentStatus, timestamp, order.id);
      const after = get("SELECT * FROM orders WHERE id = ?", order.id);
      audit(user, "创建退款", "refund", String(order.id), order, after, request);
      return after;
    }
    case "promotion.create": {
      assertPermission(user, "marketing.edit");
      const code = String(payload.code || `LOCAL${Date.now()}`).toUpperCase();
      database.prepare("INSERT OR IGNORE INTO promotions (code, name, promotion_type, discount_type, discount_value, status, rules_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .run(code, String(payload.name || "本地优惠码"), "coupon", "percent", Number(payload.discountValue || 10), "active", json({ minOrderCents: 0, stackable: false }), timestamp, timestamp);
      const row = get("SELECT * FROM promotions WHERE code = ?", code);
      audit(user, "创建优惠", "promotion", code, null, row, request);
      return row;
    }
    case "review.moderate": {
      assertPermission(user, "review.moderate");
      database.prepare("UPDATE reviews SET status = ?, updated_at = ? WHERE id = ?").run(payload.status, timestamp, payload.reviewId);
      const row = get("SELECT * FROM reviews WHERE id = ?", payload.reviewId);
      audit(user, "审核评价", "review", String(payload.reviewId), null, row, request);
      return row;
    }
    case "content.save": {
      assertPermission(user, "content.edit");
      const title = String(payload.title || "未命名内容");
      const slug = slugify(String(payload.slug || title));
      database.prepare(`
        INSERT INTO contents (title, slug, content_type, locale, status, excerpt, body, seo_title, seo_description, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(slug) DO UPDATE SET title = excluded.title, content_type = excluded.content_type, locale = excluded.locale, status = excluded.status, excerpt = excluded.excerpt, body = excluded.body, seo_title = excluded.seo_title, seo_description = excluded.seo_description, updated_at = excluded.updated_at
      `).run(title, slug, String(payload.contentType || "blog"), String(payload.locale || "en"), String(payload.status || "draft"), String(payload.excerpt || ""), String(payload.body || ""), String(payload.seoTitle || title), String(payload.seoDescription || ""), timestamp, timestamp);
      const row = get("SELECT * FROM contents WHERE slug = ?", slug);
      audit(user, "保存内容", "content", slug, null, row, request);
      return row;
    }
    case "seo.save": {
      assertPermission(user, "seo.edit");
      database.prepare("UPDATE seo_records SET seo_title = ?, seo_description = ?, robots = ?, structured_data_status = ?, updated_at = ? WHERE id = ?")
        .run(payload.seoTitle, payload.seoDescription, payload.robots || "index,follow", "checked", timestamp, payload.seoId);
      const row = get("SELECT * FROM seo_records WHERE id = ?", payload.seoId);
      audit(user, "修改SEO", "seo", String(payload.seoId), null, row, request);
      return row;
    }
    case "sync.catalog_snapshot": {
      assertPermission(user, "sync.run");
      let success = 0;
      for (const product of products) {
        database.prepare("UPDATE products_admin SET source_snapshot_json = ?, updated_at = ? WHERE id = ?").run(json(product), timestamp, product.id);
        success += 1;
      }
      database.prepare("INSERT INTO sync_jobs (source_name, job_type, status, records_total, records_success, records_failed, message, started_at, finished_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .run("商品目录快照", "manual_snapshot", "success", products.length, success, 0, "已将当前本地商品目录快照同步到后台数据库", timestamp, now());
      const row = get("SELECT * FROM sync_jobs ORDER BY id DESC LIMIT 1");
      audit(user, "手动同步商品快照", "sync", String(row?.id), null, row, request);
      return row;
    }
    case "sync.google_search_console": {
      assertPermission(user, "sync.run");
      const startedAt = timestamp;
      const result = await fetchSearchConsoleData(Number(payload.days || 28));
      let success = 0;
      for (const row of result.rows) {
        const keys = row.keys || [];
        database.prepare(`
          INSERT INTO seo_search_console_rows
          (site_url, data_date, query, page, country, device, clicks, impressions, ctr, position, synced_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(site_url, data_date, query, page, country, device) DO UPDATE SET
            clicks = excluded.clicks,
            impressions = excluded.impressions,
            ctr = excluded.ctr,
            position = excluded.position,
            synced_at = excluded.synced_at
        `).run(
          result.siteUrl,
          String(keys[0] || ""),
          String(keys[1] || ""),
          String(keys[2] || ""),
          String(keys[3] || ""),
          String(keys[4] || ""),
          Math.round(Number(row.clicks || 0)),
          Math.round(Number(row.impressions || 0)),
          Number(row.ctr || 0),
          Number(row.position || 0),
          now()
        );
        success += 1;
      }
      database.prepare("INSERT INTO sync_jobs (source_name, job_type, status, records_total, records_success, records_failed, message, started_at, finished_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .run("Google Search Console", "seo_search_analytics", "success", result.rows.length, success, 0, `已同步 ${result.siteUrl} ${result.fromDate} 至 ${result.toDate} 的搜索表现数据`, startedAt, now());
      const row = get("SELECT * FROM sync_jobs ORDER BY id DESC LIMIT 1");
      audit(user, "同步 Google SEO 数据", "sync", String(row?.id), null, { ...row, availableSites: result.availableSites }, request);
      return { ...row, siteUrl: result.siteUrl, fromDate: result.fromDate, toDate: result.toDate, rows: success };
    }
    case "settings.save": {
      assertPermission(user, "settings.edit");
      database.prepare("INSERT INTO settings (key, value_json, updated_at) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at")
        .run(String(payload.key), json(payload.value || {}), timestamp);
      const row = get("SELECT * FROM settings WHERE key = ?", payload.key);
      audit(user, "修改系统设置", "settings", String(payload.key), null, row, request);
      return row;
    }
    default:
      throw new Error(`未知操作：${action}`);
  }
}

export type { AdminUser, DbModule };
