# Data Sources & API

> ฉบับภาษาไทย: [`DATA_SOURCES.md`](DATA_SOURCES.md)

Vote results come from the **PPTV HD36 API**, but the client **never calls PPTV directly** —
it goes through **our own server-side proxy** at `/api/pptv` (see `api/pptv.js`)

```
Browser  →  /api/pptv?p=<upstream-subpath>  →  PPTV API (server-side)
```

**Why proxy:**
- The browser only talks to our own domain — it never hits PPTV's internal API from the page
- If the upstream ever requires credentials → store them in an env var (`PPTV_API_KEY`) server-side, never exposed to the client
- **Allowlist** protects against open-proxy/SSRF + edge caching (30s)

Upstream host/base/key are configured via env vars (`PPTV_HOST`, `PPTV_BASE_PATH`, `PPTV_API_KEY`)
See `.env.example` · client-side constants are declared at the top of `app.js` (the `LIVE RESULTS` section)

> **The client has no API keys at all** — the current PPTV endpoint is public and requires no key.
> The proxy is only prepared to support one in the future.

---

## Endpoints in Use

In the table below, `p` is the value sent to the proxy: `/api/pptv?p=<upstream-subpath>`

| Constant in `app.js` | `p` (upstream sub-path) | Purpose |
|---|---|---|
| `RESULTS_API` | `api/rank` | Governor candidate ranking, citywide (podium + list) |
| `RESULTS_SUMMARY_API` | `api/summary/bkk-governor-2026` | Ballot stats: total/good/bad/no votes, `progress` (% counted), `updated_at`, eligible, turnout |
| `RESULTS_MAP_API` | `api/map` | Governor results by district (50 districts, **top-2 per district**) |
| `RESULTS_SK_MAP_API` | `api/map/สมาชิกสภากรุงเทพมหานคร` | BMC results by district (50 districts, **top-2 per district**) |
| `fetchZoneDetail(slug,'gov')` | `api/zone/{slug}` | Full Governor district data (all candidates + ballot stats) |
| `fetchZoneDetail(slug,'sk')` | `api/zone/สมาชิกสภากรุงเทพมหานคร/{slug}` | Full BMC district data (all candidates + ballot stats) |

> `/api/map` only returns the top 2 per district — so the popup calls `/api/zone/{slug}` in addition
> to get every candidate (see the "instant paint then fill in" behavior in `showDistrictModal`)

---

## Data Structures (key fields used)

### `/api/map` and `/api/map/{BMC}`
An object keyed by `zone_slug`; each zone has:

```jsonc
{
  "phra-nakhon": {
    "zone_name_th": "พระนคร",
    "zone_slug": "phra-nakhon",
    "candidates": [
      {
        "candidate_no": 5,
        "zone_no": 1,                 // district number 1–50 (used for Grid sort order)
        "party_name": "พรรคประชาชน",   // may be null = independent
        "f_name": "...", "l_name": "...",
        "score": "4,074",             // string with a comma → _parseScore()
        "score_percent": "31.39",
        "rank": 1,
        "color": "#F57C00",           // candidate/party color (used to color the seat)
        "photo_square": "https://.../BKK-01-05.png",
        "zone_name_en": "Phra Nakhon" // ⚠️ Governor only — BMC has no English name
      }
    ]
  }
}
```

### `/api/zone/{slug}` and `/api/zone/{BMC}/{slug}`
Zone-level data adds ballot stats + the **full** `candidates` list:

```jsonc
{
  "zone_slug": "phra-nakhon",
  "zone_name_th": "พระนคร",
  "eligible": "...", "total_votes": "14,957",
  "good_votes": "...", "bad_votes": "...", "no_votes": "...",
  "updated_at": "2026-06-28 22:35:32",
  "candidates": [ /* same shape as map, but every candidate */ ]
}
```

---

## Notes

- **Governor:** the same candidate set runs citywide → `/api/map` groups by the *winning candidate*
- **BMC:** candidates differ per district and include `party_name` → grouped by *party*
- `zone_name_en` only exists for Governor — BMC English names are generated from the slug via `_slugToEn()`
- `party_name` is Thai-only → translated via `PARTY_EN` in `app.js`
- Vote numbers are always strings with commas → converted with `_parseScore()`

---

## Serverless proxy (`api/results.js`)

A backup Vercel proxy that pulls data from the Bangkok Metropolitan Administration's source
(`bangkokvote69.bangkok.go.th`) with CORS + a 30-second cache.
The main UI currently fetches directly from the PPTV API — this file is an alternate/fallback.
