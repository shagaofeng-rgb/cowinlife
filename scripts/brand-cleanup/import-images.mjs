// Package approved imagegen edits as cache-safe production assets.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
const root = process.cwd();
const edits = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
const output = path.join(root, 'public/cleaned');
await fs.mkdir(output, {recursive: true});
const mappingFile = path.join(root, 'content/cleaned-media.json');
let mapping = {};
try { mapping = JSON.parse(await fs.readFile(mappingFile, 'utf8')); } catch {}
const dimensions = JSON.parse(await fs.readFile('content/image-dimensions.json', 'utf8'));
for (const [name, input] of Object.entries(edits)) {
  const original = dimensions['/assets/' + name];
  const width = Math.min(original?.[0] || 1600, 1920);
  const bytes = await sharp(input).resize({width, withoutEnlargement:true}).webp({quality:90,effort:5}).toBuffer();
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0,20);
  const target = '/cleaned/' + hash + '.webp';
  await fs.writeFile(path.join(root, 'public', target), bytes);
  const meta = await sharp(bytes).metadata();
  dimensions[target] = [meta.width, meta.height];
  mapping['/assets/' + name] = target;
}
await fs.writeFile(mappingFile, JSON.stringify(mapping,null,2));
await fs.writeFile('content/image-dimensions.json', JSON.stringify(dimensions));
console.log(`Packaged ${Object.keys(edits).length} edits; ${Object.keys(mapping).length} mappings`);
