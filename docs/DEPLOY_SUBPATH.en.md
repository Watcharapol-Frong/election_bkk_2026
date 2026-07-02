# Deploying under a subpath: `frong.me/election-bkk-2026`

> ฉบับภาษาไทย: [`DEPLOY_SUBPATH.md`](DEPLOY_SUBPATH.md)

The app is hosted on **Vercel** but served under a path of **frong.me** (which
runs on Hostinger, with DNS on Cloudflare) via a **Cloudflare Worker** that
acts as a reverse proxy.

```
Browser → frong.me/election-bkk-2026/*  → Cloudflare Worker → Vercel (prefix stripped)
Browser → frong.me/* (everything else)  → Hostinger (existing site, unchanged)
```

## Code-side requirements (already done)
- Every path is **relative** (`api/pptv`, `style.css`, `assets/…`, `candidates/…`),
  so it works both at the root and under a prefix
- All API calls go through our own `api/pptv` proxy (see `api/pptv.js`)

## Setup Steps

### 1. Get the Vercel production URL
e.g. `https://election-bkk-2026.vercel.app` (Vercel → Project → Domains)

### 2. Create a Cloudflare Worker
- Cloudflare → zone **frong.me** → **Workers & Pages → Create → Worker**
- Paste the script from [`deploy/election-proxy.worker.js`](../deploy/election-proxy.worker.js)
- Set `ORIGIN` to the Vercel production URL (no trailing `/`)
- **Deploy**

### 3. Bind the Route
- Worker → **Settings → Triggers → Routes → Add route**
  - Route: `frong.me/election-bkk-2026*`
  - Zone: `frong.me`
- Everything else on `frong.me` outside this path still serves from Hostinger as before

### 4. Test
Open `https://frong.me/election-bkk-2026/` — it should redirect to add a trailing `/` and load the full app
(results/map/popup should be able to fetch data via `…/election-bkk-2026/api/pptv`)

## Google Analytics
Once served under `frong.me`, it's the same domain as frong.me → **you can reuse the same
GA property/Measurement ID as frong.me** (GA4 will report the page path as
`/election-bkk-2026/…`, so you can still filter by path) — already configured with
`G-EL7HS25NP4` in `index.html` + `about.html`

## Things to Watch
- If the main frong.me site (Hostinger) has aggressive Cloudflare caching, exclude the
  `/election-bkk-2026/*` path from any conflicting cache rule, or let the Worker handle it
- If the Vercel production URL ever changes, update `ORIGIN` in the Worker too
- A simpler alternative (if a subdomain is acceptable): point a CNAME `election.frong.me` →
  Vercel directly, no Worker needed
