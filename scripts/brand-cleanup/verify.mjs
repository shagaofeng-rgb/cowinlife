import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const rows = read('content/index.json');
const redirects = read('content/legacy-brand-redirects.json');
const media = read('content/cleaned-media.json');
const paths = new Set(rows.map(r => r.path));
const failures = [];
const exists = p => fs.existsSync(path.join(root, 'public', p));
const legacy = /\bDXH(?:container|prefab|expandable)?\b|\bDa\s*xiang\b|dxhcontainer\.com|\bNEW BRAND\b/i;
const resource = /\/(?:assets|cleaned|styles)\/[a-zA-Z0-9._-]+/g;
let references = 0;
for (const row of rows) {
  const page = read('content/pages/' + row.file);
  if (page.path !== row.path) failures.push(`Index mismatch: ${row.path}`);
  for (const key of ['title', 'description', 'displayTitle']) {
    if (legacy.test(page[key] || '')) failures.push(`Legacy ${key}: ${row.path}`);
  }
  for (const key of ['html', 'headerHtml', 'footerHtml', 'inquiryHtml']) {
    const html = page[key] || '';
    const text = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' ');
    if (legacy.test(text)) failures.push(`Legacy visible text: ${row.path} ${key}`);
    for (const src of html.match(resource) || []) {
      references++;
      if (!exists(src) && !(media[src] && exists(media[src]))) failures.push(`Missing resource: ${row.path} ${src}`);
      if (media[src]) failures.push(`Unmigrated image: ${row.path} ${src}`);
    }
    for (const attr of html.matchAll(/(?:alt|title|aria-label)=["']([^"']*)["']/g)) {
      if (legacy.test(attr[1])) failures.push(`Legacy accessible text: ${row.path}`);
    }
  }
}
for (const [from, to] of Object.entries(redirects)) {
  if (!paths.has(to) || from === to || redirects[to]) failures.push(`Invalid redirect: ${from} -> ${to}`);
}
for (const [from, to] of Object.entries(media)) {
  if (!exists(to) || media[to] || from === to) failures.push(`Invalid media alias: ${from} -> ${to}`);
  if (exists(from)) failures.push(`Legacy image still directly served: ${from}`);
}
const uniqueFailures = [...new Set(failures)];
const report = { pages: rows.length, checkedReferences: references, redirects: Object.keys(redirects).length, mediaAliases: Object.keys(media).length, failures: uniqueFailures };
fs.mkdirSync('reports/brand-cleanup', { recursive: true });
fs.writeFileSync('reports/brand-cleanup/verification.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, failures: uniqueFailures.slice(0, 30) }, null, 2));
if (uniqueFailures.length) process.exitCode = 1;
