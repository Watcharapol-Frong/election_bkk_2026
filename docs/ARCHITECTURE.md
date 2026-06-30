# Architecture — `app.js`

ทั้งเว็บเป็น static site ตรรกะอยู่ใน `app.js` ไฟล์เดียว แบ่งตามหน้าที่ดังนี้

---

## 1. i18n (สองภาษา)

- `TRANSLATIONS_EN` — dictionary คีย์ → ข้อความอังกฤษ
- องค์ประกอบที่แปลได้ติด attribute `data-i18n="key"` ใน HTML
- `applyLanguage(lang)` — แทนข้อความทุก `[data-i18n]`, อัปเดตปุ่มภาษา,
  แล้ว re-render ส่วน dynamic (ผลคะแนน, แผนที่/ตาราง ส.ก./ผู้ว่า, popup ที่เปิดอยู่)
- `currentLang` — สถานะภาษาปัจจุบัน (`'th'` | `'en'`)

---

## 2. ผลคะแนนผู้ว่าฯ (Results section)

- `loadResultsFromAPI()` — ดึง `/api/rank` + `/api/summary` พร้อมกัน
- `renderResults(lang)` — โพเดียม + รายชื่อผู้สมัคร
- `renderTurnoutModal()` — popover สถิติบัตร
- `renderResultsMeta()` — บรรทัดวันที่/เวลา/`% นับ` จาก `summary` (สองภาษา)
- `_formatUpdated(raw, lang)` — แปลง `"YYYY-MM-DD HH:mm:ss"` → วันที่ พ.ศ./EN
- `CAND_NAME_EN`, `PARTY_EN`, `_candName()`, `_partyName()` — ชื่อผู้สมัคร/พรรค EN

---

## 3. แท็บรายเขต (ส.ก. & ผู้ว่า) — ระบบเดียว 2 ชุดข้อมูล

หัวใจคือ registry **`DVIEWS`** ที่เก็บ state แยกของแต่ละแท็บ (`sk`, `gov`):
id ของ grid/legend/FAB, ชุดข้อมูล, โหมดแสดงผล, โหมดเรียง, กลุ่มที่ active, zone API ฯลฯ

### โหลด & แปลงข้อมูล
- `loadDistrictData()` — เรนเดอร์ ส.ก. จาก mock ทันที แล้วยิง API ทั้งสองแท็บ
- `loadSKMapFromAPI()` / `loadGovMapFromAPI()` — ดึง `/api/map(/ส.ก.)`
- `_transformMapData(json, mode)` — แปลงเป็น unified seat model
  - `mode 'gov'` → group ตามผู้ชนะ (candidate) · `mode 'sk'` → group ตามพรรค
  - ใส่ `color`, `zoneNo`, `slug`, `districtEn` (fallback `_slugToEn`)

### เรนเดอร์
- `renderDView(key)` — ตัวกลางเลือกโหมด:
  - `displayMode 'map'` → `_renderDMap()` (วางตามพิกัด `BKK_MAP_GRID`)
  - `gov` Grid → เรียงตาม `zoneNo` 1→50
  - `sk` Grid → `viewMode 'group'` รวมตามพรรค / `'sort'` เรียงตามเขต
  - สร้าง legend (นับที่นั่ง/เขต ต่อกลุ่ม) เสมอ
- `_seatMapHTML()` / `_seatDistrictHTML()` — markup ของช่องแต่ละแบบ
- `_buildGroups(data)` — จัดกลุ่มตาม `groupKey`
- ไฮไลต์: `_applyGroupHighlight()` / `_clearGroupHighlight()` (คลิก legend)

### Popup รายเขต
- `showDistrictModal(winner)` — เปิด modal:
  1. วาดผู้สมัคร top‑2 ที่มีอยู่ทันที (instant paint)
  2. `fetchZoneDetail(slug, base)` ดึงรายชื่อครบ แล้วแทนที่ (cache ตาม `base+slug`)
  3. แสดง ≤ 4 cards แล้วเลื่อนดูได้ · รูปจาก `photo_square` (fallback กล่องสี)
- `_renderModalCandidates()` — การ์ดผู้สมัครแต่ละคน
- รองรับสลับภาษาขณะเปิด (`_lastModalWinner`)

### Interaction & UI
- `initDViewInteractions(key)` — bind คลิก seat → popup, คลิก legend → ไฮไลต์
- `initDViewControls(key)` — ปุ่ม Map/Grid + FAB (เฉพาะ ส.ก.)
- `initDistrictTabs()` — สลับแท็บ ส.ก./ผู้ว่า
- `updateDFabLabel()` — ป้าย FAB แสดง "โหมดที่จะสลับไป"

---

## 4. ตารางอ้างอิง (constants)

| ชื่อ | ใช้ทำอะไร |
|---|---|
| `BKK_MAP_GRID` | พิกัด row/col ของ 50 เขตบนแผนที่ (โหมด Map) |
| `DISTRICT_NO` | ชื่อเขต(ไทย) → เลขเขต 1–50 |
| `PARTY_COLORS` | สี fallback ตามพรรค (กรณีไม่มี `color` จาก API) |
| `PARTY_EN` | ชื่อพรรค/กลุ่ม ไทย → อังกฤษ |

### Helpers
`_parseScore` (string→int) · `_contrastText` (เลือกสีตัวอักษรตามพื้นหลัง) ·
`_resolvePos` (ชื่อเขต→พิกัด, fuzzy) · `_resolveZoneNo` (ชื่อเขต→เลข, fuzzy) ·
`_slugToEn` (slug→ชื่ออังกฤษ) · `_partyLabel` (ป้ายชื่อพรรคตามภาษา)

---

## 5. อื่น ๆ

- `updateCountdown()` — นับถอยหลังถึงวันเลือกตั้ง
- ส่วน DOMContentLoaded ปลายไฟล์ — เรียก init ทั้งหมด, bind ปุ่มภาษา, popover
