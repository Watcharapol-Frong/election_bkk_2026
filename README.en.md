# Bangkok Vote · Bangkok Governor Election 2026

> **ฉบับภาษาไทย:** [`README.md`](README.md)

An independent website for tracking the results of the **Bangkok Governor**
election and the **Bangkok Metropolitan Council (BMC / ส.ก.)** election, 2026
(2569 B.E.) — live vote counts by district, candidates, policies, and how to
vote, in a clean, bilingual (Thai/English) format.

> This website was built **for educational purposes**. It is not an official
> Election Commission (ECT) site and is not affiliated with the ECT,
> the Bangkok Metropolitan Administration, PPTV, or any political party.

---

## ✨ Features

- **Live Governor results** — top-3 podium + full candidate list, pulled from the API
- **Turnout bar + popover** — valid/invalid/no-vote ballot stats and voter turnout
- **Two district tabs sharing one UI**
  - **BMC (ส.ก.) results** — 50 districts, grouped/seat-counted by party
  - **Governor results** — 50 districts, sorted by district number
- **Two views per tab:** `Map` (geographic Bangkok map) · `Grid` (table)
  - BMC tab has a FAB toggle for *group by party* / *sort by district*
- **District popup** — tap a cell to see every candidate, votes, percentage, photo, and vote count
- **Thai/English i18n** — switches the whole page, including romanized district names and party names
- **Date/time/% counted** — pulled automatically from the API
- **Static site** — no build step, fast load, mobile-friendly

---

## 🧱 Tech Stack

- **Vanilla HTML + CSS + JavaScript** (no framework / build tool)
- **Vercel** for hosting + serverless proxy (`/api`)
- **Google Analytics 4** (anonymized, IP anonymization enabled)
- Fonts: Anuphan, IBM Plex Sans Thai, Outfit (Google Fonts)

---

## 📁 Project Structure

```
.
├── index.html          # Main page
├── about.html          # About & data sources + Disclaimer + Privacy
├── app.js              # All logic (i18n, API fetching, results/map/popup rendering)
├── style.css            # All styles + design tokens (:root variables)
├── assets/              # Site logos and images
├── candidates/          # Governor candidate photos (no-1.webp … no-18.webp)
├── api/
│   ├── pptv.js           # Vercel serverless proxy → PPTV API (allowlist + cache)
│   └── results.js        # Vercel serverless proxy (fallback) → Bangkok data
├── .env.example          # Example env vars (no real values)
├── vercel.json           # Config: cleanUrls, security headers, cache policy
├── robots.txt
├── LICENSE                # CC BY-NC-SA 4.0 (original content only)
├── .editorconfig          # Code formatting standard
└── docs/                  # Additional documentation
    ├── ARCHITECTURE.md    # Code structure of app.js (Thai)
    ├── ARCHITECTURE.en.md # Code structure of app.js (English)
    ├── DATA_SOURCES.md    # API details and data structures (Thai)
    ├── DATA_SOURCES.en.md # API details and data structures (English)
    ├── DEPLOY_SUBPATH.md  # Subpath deploy guide (Thai)
    └── DEPLOY_SUBPATH.en.md # Subpath deploy guide (English)
```

---

## 🚀 Local Development

The site is static, but live results are fetched through a serverless proxy
(`/api/pptv`), so run it with the **Vercel CLI** so `/api/*` works:

```bash
npm i -g vercel
vercel dev          # serves static + serverless at http://localhost:3000
```

> Opening it with a plain static server (`npx serve .`) will render the page,
> but the results section won't load since `/api/pptv` won't be running.
> See all endpoints in [`docs/DATA_SOURCES.en.md`](docs/DATA_SOURCES.en.md)

---

## ☁️ Deployment

Deployed via **Vercel** (connected to the `main` branch)

- `vercel.json` configures security headers, cache policy, and `cleanUrls`
- Every commit to `main` triggers an automatic rebuild

**Served under a subpath of another domain** (e.g. `frong.me/election-bkk-2026`)
via a Cloudflare Worker reverse proxy — see
[`docs/DEPLOY_SUBPATH.en.md`](docs/DEPLOY_SUBPATH.en.md) and
[`deploy/election-proxy.worker.js`](deploy/election-proxy.worker.js)
(every path in the app is relative, so it works both at the root and under a prefix)

---

## 📊 Google Analytics (GA4) Setup

`index.html` and `about.html` already include the GA4 snippet configured with
Measurement ID `G-EL7HS25NP4`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EL7HS25NP4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-EL7HS25NP4', { anonymize_ip: true });
</script>
```

---

## 🌐 i18n (Bilingual)

- Static text uses the `data-i18n="key"` attribute + the `TRANSLATIONS_EN` dictionary in `app.js`
- Clicking `EN/ไทย` calls `applyLanguage(lang)`, translating the whole page + re-rendering dynamic sections
- BMC district names aren't provided in English by the API → generated from the slug (`_slugToEn`)
- Party/group names are translated via `PARTY_EN` (registered parties = official name, local groups = transliterated)

---

## 🔒 Security & Secrets

- **No API keys/secrets in client-side code** — the current PPTV endpoint is public
- All data requests go through a **server-side proxy** at `/api/pptv` (`api/pptv.js`):
  - The browser only talks to our own domain (never calls PPTV's internal API directly)
  - **Allowlist** protects against open-proxy/SSRF + edge caching
  - If the upstream ever requires credentials → set env var `PPTV_API_KEY`
    (sent as an `x-api-key` header from the server) **never exposed to the browser**
- Configure env vars via Vercel or a `.env` file (see [`.env.example`](.env.example)) — `.env` is gitignored
- Security headers (X-Frame-Options, nosniff, Referrer-Policy, etc.) are set in `vercel.json`

> Never commit real secret values to the repo — env variables only.

---

## ⚖️ License & Usage

- **Original site content** (code, design, self-authored text) is released under
  **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)**
- **Vote results, candidate photos, party logos, and third-party data are NOT covered by this license** —
  they remain the property of their original owners (PPTV HD36 and sources), shown here for reference/education only
- See full details and data sources on the [`about.html`](about.html) page

---

## 🙏 Credits

- Vote counting data: **PPTV HD36**
- Official data: Election Commission of Thailand (ECT)
- Developed by [frong.me](https://frong.me)
