# Container brand website — local migration preview

Next.js App Router + React + TypeScript. This repository is a local review build, not a launch-ready brand site.

## Run locally

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. To check a production build:

```sh
pnpm build
pnpm start
```

On this Mac, if Node is not in PATH, use `./start-local.command`.

## Content and architecture

- `content/index.json` maps public URL paths to content-addressed page files.
- `content/pages/` contains sanitized source HTML and per-page carousel configuration.
- `public/styles/` retains the original responsive CSS.
- `public/assets/` contains local media and fonts. No image hotlinking is required.
- `components/Website.tsx` supplies navigation, galleries, carousels, FAQ, search entry points and local inquiry feedback.
- `config/brand.json` records pending company details. At this stage the migration compiler applies this configuration; changing this file alone does not rewrite imported content.
- The sibling `migration/` directory contains private source captures and repeatable import scripts. It is outside this application repository and must not be deployed.

Original scripts, trackers, embedded services and form endpoints are removed. Forms validate locally and clearly state that nothing was sent. The build remains `noindex` until branding, content and launch settings are reviewed.

## Remaining work before acceptance

- Supply the new English company/brand name, logo, contact person, email, phone/WhatsApp, address and company profile.
- Replace embedded old logos/watermarks and old company photographs, certificates and QR codes with reviewed new assets. Text replacement cannot remove pixels from a photograph.
- Complete remaining sitemap pages, translations, video/VR surfaces and their interactive behavior. The sitemap contains 19,419 entries / 19,418 unique URLs; the initial English preview contains 824 pages including linked video pages, pagination and policy.
- Verify page-specific effects and all templates, complete accessibility/form behavior and review the migration audit.
- Confirm product specifications, commercial terms, case-study claims and certifications for the new company.
- Configure inquiry delivery, analytics, canonical URLs, sitemap, robots and deployment settings only after local approval.

No GitHub repository or Vercel deployment has been created. The intended Vercel project root is this `brand-site` directory.
