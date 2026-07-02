# Architecture — `app.js`

The whole site is a static app; all logic lives in a single `app.js` file, organized as follows.

> **Data flow:** every data fetch goes through our own proxy `/api/pptv?p=...`
> (`api/pptv.js`) — never PPTV directly. The `pptvUrl(p)` helper builds the URL.
> See [`DATA_SOURCES.md`](DATA_SOURCES.md) for details.

---

## 1. i18n (Bilingual)

- `TRANSLATIONS_EN` — dictionary of key → English text
- Translatable elements carry `data-i18n="key"` in the HTML
- `applyLanguage(lang)` — replaces text on every `[data-i18n]`, updates the language button,
  then re-renders dynamic sections (results, BMC/Governor map/grid, any open popup)
- `currentLang` — current language state (`'th'` | `'en'`)

---

## 2. Governor Results (Results section)

- `loadResultsFromAPI()` — fetches `/api/rank` + `/api/summary` concurrently
- `renderResults(lang)` — podium + candidate list
- `renderTurnoutModal()` — ballot stats popover
- `renderResultsMeta()` — date/time/`% counted` line from `summary` (bilingual)
- `_formatUpdated(raw, lang)` — converts `"YYYY-MM-DD HH:mm:ss"` → B.E./EN date
- `CAND_NAME_EN`, `PARTY_EN`, `_candName()`, `_partyName()` — candidate/party names in English

---

## 3. District Tabs (BMC & Governor) — one system, two datasets

The core is the **`DVIEWS`** registry, which holds separate state for each tab (`sk`, `gov`):
grid/legend/FAB ids, dataset, display mode, sort mode, active group, zone API, etc.

### Loading & transforming data
- `loadDistrictData()` — renders BMC from mock data immediately, then fetches both tabs' APIs
- `loadSKMapFromAPI()` / `loadGovMapFromAPI()` — fetch `/api/map(/สมาชิกสภากรุงเทพมหานคร)`
- `_transformMapData(json, mode)` — converts to a unified seat model
  - `mode 'gov'` → group by winning candidate · `mode 'sk'` → group by party
  - adds `color`, `zoneNo`, `slug`, `districtEn` (falls back to `_slugToEn`)

### Rendering
- `renderDView(key)` — mode dispatcher:
  - `displayMode 'map'` → `_renderDMap()` (placed by coordinates in `BKK_MAP_GRID`)
  - `gov` Grid → sorted by `zoneNo` 1→50
  - `sk` Grid → `viewMode 'group'` grouped by party / `'sort'` sorted by district
  - always builds a legend (seat/district count per group)
- `_seatMapHTML()` / `_seatDistrictHTML()` — markup for each cell type
- `_buildGroups(data)` — groups by `groupKey`
- Highlighting: `_applyGroupHighlight()` / `_clearGroupHighlight()` (on legend click)

### District Popup
- `showDistrictModal(winner)` — opens the modal:
  1. Paints the top-2 candidates already available instantly (instant paint)
  2. `fetchZoneDetail(slug, kind)` (`kind` = `'gov'` | `'sk'`) fetches the full candidate list
     via the `/api/pptv` proxy, then replaces the content (cached per upstream path)
  3. Shows ≤ 4 cards with scroll · photos from `photo_square` (falls back to a colored box)
- `_renderModalCandidates()` — each candidate's card
- Supports switching language while open (`_lastModalWinner`)

### Interaction & UI
- `initDViewInteractions(key)` — binds seat clicks → popup, legend clicks → highlight
- `initDViewControls(key)` — Map/Grid buttons + FAB (BMC only)
- `initDistrictTabs()` — switches between BMC/Governor tabs
- `updateDFabLabel()` — FAB label shows "the mode it will switch to"

---

## 4. Reference Tables (constants)

| Name | Purpose |
|---|---|
| `BKK_MAP_GRID` | row/col coordinates of the 50 districts on the map (Map mode) |
| `DISTRICT_NO` | Thai district name → district number 1–50 |
| `PARTY_COLORS` | fallback color by party (when `color` isn't provided by the API) |
| `PARTY_EN` | party/group name, Thai → English |

### Helpers
`_parseScore` (string→int) · `_contrastText` (picks text color based on background) ·
`_resolvePos` (district name → coordinates, fuzzy) · `_resolveZoneNo` (district name → number, fuzzy) ·
`_slugToEn` (slug → English name) · `_partyLabel` (party label per language)

---

## 5. Misc

- `updateCountdown()` — countdown to election day
- The `DOMContentLoaded` block at the end of the file — runs all init functions, binds language buttons, popovers
