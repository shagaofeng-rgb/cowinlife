# Cowinlife Sitemap Operations

## Architecture

`/sitemap.xml` is a UTF-8 Sitemap Index generated from the public Cowinlife route models. It links to type-specific files below `/sitemaps/` for pages, products, categories, and posts. Files split automatically before 45,000 URLs or 45 MB, leaving room below Google's 50,000 URL and 50 MB limits.

The production domain is `https://cowinlife.com`. Search, cart, checkout, order status, admin, API, drafts, deleted records, query-string duplicates, noindex pages, and non-self-canonical records are excluded. Product dates reflect the latest catalog import; posts use their real `updatedAt` date; static pages use their recorded content update date.

Vercel Functions cannot atomically replace files in the deployed read-only bundle. Public sitemap routes therefore render from canonical data without mutating deployment files. The manual command downloads, validates, locks, and atomically snapshots the last working XML under `.sitemap-cache/`; a failed write leaves the previous snapshot intact.

## Public URLs

- `https://cowinlife.com/sitemap.xml`
- `https://cowinlife.com/sitemaps/pages-1.xml`
- `https://cowinlife.com/sitemaps/products-1.xml`
- `https://cowinlife.com/sitemaps/categories-1.xml`
- `https://cowinlife.com/sitemaps/posts-1.xml`
- `https://cowinlife.com/robots.txt`

## Commands

```bash
npm run sitemap:generate -- --dry-run --verbose
npm run sitemap:generate -- --force --verbose
npm run sitemap:generate -- --submit --verbose
npm run test:sitemap
```

`--force` replaces the local snapshot even when the fingerprint is unchanged. `--dry-run` validates without writing. `--submit` calls the Search Console Sitemaps API. `--verbose` prints the structured run summary.

## Scheduled Check

Vercel calls `/api/cron/site-maintenance` every day at 02:15 UTC. The route verifies its `Authorization: Bearer $CRON_SECRET` header, acquires a recoverable lock, compares the current fingerprint, checks the public sitemap and robots declaration, logs URL changes and file sizes, checks scheduled content, and optionally submits the index to Search Console. The existing inquiry email check remains separate and runs twice monthly; this keeps the project within the two-Cron Hobby-plan limit.

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://cowinlife.com
CRON_SECRET=<strong-random-value>
GOOGLE_SEARCH_CONSOLE_ENABLED=false
GOOGLE_SEARCH_CONSOLE_SITE_URL=sc-domain:cowinlife.com
GOOGLE_SEARCH_CONSOLE_SITEMAP_URL=https://cowinlife.com/sitemap.xml
GOOGLE_SERVICE_ACCOUNT_JSON_BASE64=<base64-service-account-json>
```

Keep credentials in local/Vercel environment variables, never in Git. Create a Google Cloud service account, enable the Search Console API, add the service account email as a user of the matching Search Console property, and provide the JSON credential as Base64. Sitemap submission requires the `webmasters` scope and adequate property permission.

## Logs

The Cron writes one sanitized JSON event per run to Vercel Runtime Logs. It includes start/end time, duration, trigger, files, URL count, bytes, split status, added/modified/deleted URLs, scheduled content counts, and Search Console result. It never logs private keys, access tokens, passwords, or credential payloads.

## Troubleshooting

- Sitemap 404: confirm the latest production deployment contains `src/app/sitemap.xml/route.ts` and the domain points to that deployment.
- XML error: run `npm run sitemap:generate -- --dry-run --verbose`; the last valid snapshot remains in `.sitemap-cache/`.
- robots declaration missing: open `/robots.txt` and confirm `Sitemap: https://cowinlife.com/sitemap.xml`.
- API 403: confirm the service account email has access to the exact `sc-domain:cowinlife.com` property and the Search Console API is enabled.
- Submitted but not indexed: inspect URL Indexing and Page Indexing reports in Search Console, then check canonical, noindex, crawlability, content quality, and response status.

Successful submission does not mean Google has fetched the sitemap. A fetch does not guarantee that any URL will be indexed. A sitemap primarily helps Google discover canonical URLs; final indexing status must be confirmed in Google Search Console.
