# Glory Orphanage & Community School

Landing page for Glory Orphanage & Community School (Glorious Sky), Luanshya, Zambia — built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

Live site: https://webbychileshe.github.io/glorydemo/

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `main` automatically builds and deploys the site to GitHub Pages via the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Content

Editable site copy (contact info, stats, donation tiers, pillars, etc.) lives in [src/data/site.ts](src/data/site.ts). Some figures (child counts, financial breakdown, donation-tier impact) are placeholders — see the `NOTE:` comments in that file and swap in real numbers before relying on this for fundraising.

## Design reference

The original imported design (Stitch export, design tokens, and screenshot) is kept in [design-reference/](design-reference/) for reference.
