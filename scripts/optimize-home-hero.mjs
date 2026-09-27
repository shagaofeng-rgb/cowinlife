// Rebuild the static first-screen variants after the homepage hero changes.
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const requireFromHere = createRequire(import.meta.url);
const requireFromNext = createRequire(requireFromHere.resolve('next/package.json'));
const sharp = requireFromNext('sharp');
const root = path.resolve(import.meta.dirname, '..');
const source = path.join(root, 'public/assets/264d18c377579ba8eaaa.jpg');
const output = path.join(root, 'public/optimized');
await mkdir(output, { recursive: true });
for (const width of [384, 640, 750, 828, 1080, 1200, 1920]) {
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 72, effort: 5 })
    .toFile(path.join(output, `home-hero-264d18c377579ba8eaaa-${width}.webp`));
}
