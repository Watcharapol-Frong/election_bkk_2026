# Data Sources & API

ข้อมูลผลคะแนนมาจาก **PPTV HD36 API** แต่ฝั่ง client **ไม่เรียก PPTV ตรงๆ** —
เรียกผ่าน **server-side proxy ของเราเอง** ที่ `/api/pptv` (ดู `api/pptv.js`)

```
Browser  →  /api/pptv?p=<upstream-subpath>  →  PPTV API (server-side)
```

**ทำไมต้อง proxy:**
- เบราว์เซอร์คุยกับโดเมนเราเท่านั้น ไม่ยิง API ภายในของ PPTV จากหน้าเว็บ
- ถ้าวันหน้า upstream ต้องใช้ credential → เก็บใน env var (`PPTV_API_KEY`) ฝั่งเซิร์ฟเวอร์ ไม่หลุดไป client
- มี **allowlist** กัน open-proxy/SSRF + cache ที่ edge (30s)

upstream host/base/key ตั้งผ่าน env (`PPTV_HOST`, `PPTV_BASE_PATH`, `PPTV_API_KEY`)
ดู `.env.example` · ค่าคงที่ฝั่ง client ประกาศไว้ต้น `app.js` (ส่วน `LIVE RESULTS`)

> **client ไม่มี API key ใดๆ** — endpoint ของ PPTV ปัจจุบันเป็น public ไม่ต้องใช้คีย์
> proxy เตรียมรองรับไว้เผื่ออนาคตเท่านั้น

---

## Endpoints ที่ใช้

ตารางด้านล่าง `p` คือค่าที่ส่งให้ proxy: `/api/pptv?p=<upstream-subpath>`

| ค่าคงที่ใน `app.js` | `p` (upstream sub-path) | ใช้ทำอะไร |
|---|---|---|
| `RESULTS_API` | `api/rank` | อันดับผู้สมัครผู้ว่าฯ รวมทั้ง กทม. (โพเดียม + รายชื่อ) |
| `RESULTS_SUMMARY_API` | `api/summary/bkk-governor-2026` | สถิติบัตร: total/good/bad/no votes, `progress` (% นับ), `updated_at`, eligible, turnout |
| `RESULTS_MAP_API` | `api/map` | ผู้ว่าฯ รายเขต (50 เขต, **top‑2 ต่อเขต**) |
| `RESULTS_SK_MAP_API` | `api/map/สมาชิกสภากรุงเทพมหานคร` | ส.ก. รายเขต (50 เขต, **top‑2 ต่อเขต**) |
| `fetchZoneDetail(slug,'gov')` | `api/zone/{slug}` | ผู้ว่าฯ รายเขตแบบเต็ม (ผู้สมัครครบ + สถิติบัตร) |
| `fetchZoneDetail(slug,'sk')` | `api/zone/สมาชิกสภากรุงเทพมหานคร/{slug}` | ส.ก. รายเขตแบบเต็ม (ผู้สมัครครบ + สถิติบัตร) |

> `/api/map` ให้แค่ 2 อันดับแรกต่อเขต — Popup จึงเรียก `/api/zone/{slug}` เพิ่ม
> เพื่อให้ได้ผู้สมัครครบทุกคน (ดูพฤติกรรม "instant paint แล้วเติมเต็ม" ใน `showDistrictModal`)

---

## โครงสร้างข้อมูล (สรุปฟิลด์ที่ใช้)

### `/api/map` และ `/api/map/{ส.ก.}`
อ็อบเจกต์ key เป็น `zone_slug` แต่ละ zone มี:

```jsonc
{
  "phra-nakhon": {
    "zone_name_th": "พระนคร",
    "zone_slug": "phra-nakhon",
    "candidates": [
      {
        "candidate_no": 5,
        "zone_no": 1,                 // เลขเขต 1–50 (ใช้เรียงใน Grid)
        "party_name": "พรรคประชาชน",   // อาจเป็น null = อิสระ
        "f_name": "...", "l_name": "...",
        "score": "4,074",             // string มี comma → _parseScore()
        "score_percent": "31.39",
        "rank": 1,
        "color": "#F57C00",           // สีประจำผู้สมัคร/พรรค (ใช้ลงสี seat)
        "photo_square": "https://.../BKK-01-05.png",
        "zone_name_en": "Phra Nakhon" // ⚠️ มีเฉพาะ governor, ส.ก. ไม่มี
      }
    ]
  }
}
```

### `/api/zone/{slug}` และ `/api/zone/{ส.ก.}/{slug}`
ระดับ zone มีสถิติบัตรเพิ่ม + `candidates` ครบทุกคน:

```jsonc
{
  "zone_slug": "phra-nakhon",
  "zone_name_th": "พระนคร",
  "eligible": "...", "total_votes": "14,957",
  "good_votes": "...", "bad_votes": "...", "no_votes": "...",
  "updated_at": "2026-06-28 22:35:32",
  "candidates": [ /* เหมือน map แต่ครบทุกคน */ ]
}
```

---

## หมายเหตุข้อมูล

- **ผู้ว่าฯ:** ผู้สมัครชุดเดียวกันทั้ง กทม. → `/api/map` จัดกลุ่มตาม *ผู้ชนะ* (candidate)
- **ส.ก.:** ผู้สมัครต่างกันรายเขต + มี `party_name` → จัดกลุ่มตาม *พรรค*
- `zone_name_en` มีเฉพาะฝั่งผู้ว่า — ส.ก. สร้างชื่ออังกฤษจาก slug ด้วย `_slugToEn()`
- `party_name` มาเป็นภาษาไทยเท่านั้น → แปลผ่าน `PARTY_EN` ใน `app.js`
- ตัวเลขคะแนนเป็น string มี comma เสมอ → แปลงด้วย `_parseScore()`

---

## Serverless proxy (`api/results.js`)

Proxy สำรองบน Vercel ที่ดึงข้อมูลจากแหล่งของกรุงเทพมหานคร
(`bangkokvote69.bangkok.go.th`) พร้อม CORS + cache 30 วินาที
ปัจจุบัน UI หลักดึงจาก PPTV API โดยตรง — ไฟล์นี้เป็นทางเลือก/สำรอง
