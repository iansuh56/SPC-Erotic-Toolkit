# SPC Erotic Toolkit — site shell

An interactive educational website for ages 8–13, built for a Tulane Sex, Power, and Culture (GESS 1900) group project. This repo contains the site's structure, visual design, reusable components, and activity mechanics. It intentionally contains **no lesson content** — every piece of user-facing copy is a bracketed placeholder for the group to write. See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for where to edit it.

## Stack

- Next.js (App Router) + TypeScript, static export (`output: "export"`)
- Tailwind CSS v4 (design tokens live in `src/app/globals.css`)
- Newsreader / Public Sans / IBM Plex Mono via `next/font/google`
- No server runtime — the whole site is static HTML/CSS/JS

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

This produces a static export in `out/`. Preview it locally with any static file server, e.g. `npx serve out`.

## Linting & type checking

```bash
npm run lint
npx tsc --noEmit
```

## Deploying to Cloudflare

This site has no server-side features — it's a static export — so it deploys as static assets, not as a Next.js server.

### Option A: Cloudflare Workers (static assets), via Git integration

This repo includes `wrangler.jsonc`, which points Wrangler at the `out/` folder as static assets. **This file is what matters** — its presence stops Wrangler's auto-config from trying to set up the Next.js-on-Workers (OpenNext) SSR adapter, which this project doesn't need and which fails on a pure static export.

In the Cloudflare dashboard, for a Worker connected to this repo:

1. Build command: `npm run build`
2. Deploy command: `npx wrangler deploy` (or `npm run deploy`)
3. Framework preset: none / static (don't let it auto-select "Next.js" — that triggers the OpenNext migration)

### Option B: Cloudflare Pages

1. Connect the repo in the Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Build output directory: `out`
4. Framework preset: none needed (plain static export).

### Deploying manually

```bash
npm run build
npx wrangler deploy
```

No environment variables or server bindings are required.
