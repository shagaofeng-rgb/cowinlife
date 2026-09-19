import { Pool, type QueryResultRow } from 'pg';

let pool: Pool | undefined;
let schemaPromise: Promise<void> | undefined;

function database() {
  if (!pool) {
    if (!process.env.DATABASE_URL) throw new Error('Database is not configured');
    pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5, connectionTimeoutMillis: 5000, idleTimeoutMillis: 10000, ssl: { rejectUnauthorized: false } });
  }
  return pool;
}

export async function ensureDatabase() {
  if (!schemaPromise) schemaPromise = (async () => {
    const db = database();
    await db.query(`
      CREATE EXTENSION IF NOT EXISTS pgcrypto;
      CREATE TABLE IF NOT EXISTS analytics_events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(), visitor_id TEXT NOT NULL, session_id TEXT NOT NULL,
        event_type TEXT NOT NULL, page_path TEXT NOT NULL, previous_path TEXT, referrer TEXT,
        source TEXT NOT NULL DEFAULT 'Direct', channel TEXT NOT NULL DEFAULT 'Direct', device TEXT,
        country TEXT, event_time TIMESTAMPTZ NOT NULL DEFAULT now(), metadata JSONB NOT NULL DEFAULT '{}'::jsonb
      );
      CREATE INDEX IF NOT EXISTS analytics_events_time_idx ON analytics_events (event_time DESC);
      CREATE INDEX IF NOT EXISTS analytics_events_session_time_idx ON analytics_events (session_id, event_time DESC);
      CREATE INDEX IF NOT EXISTS analytics_events_source_time_idx ON analytics_events (source, event_time DESC);
      CREATE INDEX IF NOT EXISTS analytics_events_page_time_idx ON analytics_events (page_path, event_time DESC);
      CREATE TABLE IF NOT EXISTS inquiries (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT, email TEXT, message TEXT,
        page_path TEXT, products JSONB NOT NULL DEFAULT '[]'::jsonb, fields JSONB NOT NULL DEFAULT '{}'::jsonb,
        status TEXT NOT NULL DEFAULT 'new', created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      CREATE INDEX IF NOT EXISTS inquiries_created_idx ON inquiries (created_at DESC);
      CREATE TABLE IF NOT EXISTS admin_tokens (
        token_hash TEXT PRIMARY KEY, email TEXT NOT NULL, expires_at TIMESTAMPTZ NOT NULL, used_at TIMESTAMPTZ
      );
      CREATE TABLE IF NOT EXISTS admin_sessions (
        token_hash TEXT PRIMARY KEY, email TEXT NOT NULL, expires_at TIMESTAMPTZ NOT NULL
      );
    `);
  })();
  return schemaPromise;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, values: unknown[] = []) {
  await ensureDatabase();
  return database().query<T>(text, values);
}
