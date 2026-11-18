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

## Deploying to Cloudflare Pages

This site has no server-side features, so it deploys as a static site:

1. Connect the repo in the Cloudflare Pages dashboard (or use `wrangler pages deploy`).
2. Build command: `npm run build`
3. Build output directory: `out`
4. Framework preset: none needed (plain static export).

No environment variables or server bindings are required.
