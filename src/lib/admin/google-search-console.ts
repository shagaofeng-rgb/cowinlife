import fs from "node:fs";
import { google } from "googleapis";
import { siteUrl as publicSiteUrl } from "@/lib/storefront";

const readScope = "https://www.googleapis.com/auth/webmasters.readonly";
const writeScope = "https://www.googleapis.com/auth/webmasters";
const defaultCredentialPath = "D:/maximal-relic-498108-e9-766f87fb0668.json";

type Credential = {
  client_email: string;
  private_key: string;
};

export type SearchConsoleRow = {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
};

export type SearchConsoleSyncResult = {
  siteUrl: string;
  fromDate: string;
  toDate: string;
  rows: SearchConsoleRow[];
  availableSites: string[];
};

export type SitemapSubmissionResult = {
  enabled: boolean;
  submitted: boolean;
  siteUrl: string;
  sitemapUrl: string;
  attempts: number;
  message: string;
};

function parseCredentials(): Credential {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64) {
    return JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64, "base64").toString("utf8"));
  }
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  }
  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || defaultCredentialPath;
  if (fs.existsSync(credentialPath)) {
    return JSON.parse(fs.readFileSync(credentialPath, "utf8"));
  }
  throw new Error("未找到 Google 服务账号凭证。请配置 GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 或 GOOGLE_APPLICATION_CREDENTIALS。");
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function candidateSites() {
  return [
    process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL,
    "sc-domain:cowinlife.com",
    "https://www.cowinlife.com/",
    "https://cowinlife.com/"
  ].filter(Boolean) as string[];
}

function createAuth(scopes: string[]) {
  const credentials = parseCredentials();
  return new google.auth.JWT({ email: credentials.client_email, key: credentials.private_key, scopes });
}

async function availableSiteUrl(searchconsole: ReturnType<typeof google.searchconsole>) {
  const sitesResponse = await searchconsole.sites.list({}, { timeout: 10_000 });
  const availableSites = (sitesResponse.data.siteEntry || []).map((site) => site.siteUrl).filter((site): site is string => Boolean(site));
  const siteUrl = candidateSites().find((site) => availableSites.includes(site)) || availableSites[0];
  if (!siteUrl) throw new Error("Google Search Console 当前没有返回可访问站点。请确认服务账号已添加到 cowinlife.com 属性。");
  return { siteUrl, availableSites };
}

export async function fetchSearchConsoleData(days = 28): Promise<SearchConsoleSyncResult> {
  const auth = createAuth([readScope]);
  const searchconsole = google.searchconsole({ version: "v1", auth });
  const { siteUrl, availableSites } = await availableSiteUrl(searchconsole);

  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 2);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - days + 1);

  const response = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: formatDate(start),
      endDate: formatDate(end),
      dimensions: ["date", "query", "page", "country", "device"],
      rowLimit: 250
    }
  });

  return {
    siteUrl,
    fromDate: formatDate(start),
    toDate: formatDate(end),
    rows: (response.data.rows || []).map((row) => ({
      keys: row.keys || [],
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: row.ctr || 0,
      position: row.position || 0
    })),
    availableSites
  };
}

export async function submitSitemapToSearchConsole(options: { force?: boolean } = {}): Promise<SitemapSubmissionResult> {
  const enabled = options.force || process.env.GOOGLE_SEARCH_CONSOLE_ENABLED === "true";
  const configuredSite = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || "sc-domain:cowinlife.com";
  const sitemapUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITEMAP_URL || `${publicSiteUrl}/sitemap.xml`;
  if (!enabled) return { enabled: false, submitted: false, siteUrl: configuredSite, sitemapUrl, attempts: 0, message: "Search Console sitemap submission is disabled" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(sitemapUrl, { headers: { accept: "application/xml" }, signal: controller.signal, cache: "no-store" });
    if (!response.ok) throw new Error(`Sitemap URL returned HTTP ${response.status}`);
  } finally {
    clearTimeout(timer);
  }

  const auth = createAuth([writeScope]);
  const searchconsole = google.searchconsole({ version: "v1", auth });
  const { siteUrl } = await availableSiteUrl(searchconsole);
  let lastError: unknown;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      await searchconsole.sitemaps.submit({ siteUrl, feedpath: sitemapUrl }, { timeout: 10_000 });
      return { enabled: true, submitted: true, siteUrl, sitemapUrl, attempts: attempt, message: "Google Search Console accepted the sitemap submission" };
    } catch (error) {
      lastError = error;
    }
  }
  const message = lastError instanceof Error ? lastError.message : "Unknown Search Console API error";
  throw new Error(`Google Search Console sitemap submission failed after 2 attempts: ${message}`);
}
