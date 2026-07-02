# Deploy ใต้ subpath: `frong.me/election-bkk-2026`

แอปโฮสต์บน **Vercel** แต่ให้บริการใต้ path ของ **frong.me** (อยู่บน Hostinger,
DNS ที่ Cloudflare) ผ่าน **Cloudflare Worker** ที่ทำ reverse-proxy

```
Browser → frong.me/election-bkk-2026/*  → Cloudflare Worker → Vercel (strip prefix)
Browser → frong.me/* (อื่นๆ)            → Hostinger (เว็บเดิม ตามปกติ)
```

## เงื่อนไขฝั่งโค้ด (ทำให้แล้ว)
- ทุก path เป็น **relative** (`api/pptv`, `style.css`, `assets/…`, `candidates/…`)
  จึงทำงานได้ทั้งที่ root และใต้ prefix
- API ทั้งหมดวิ่งผ่าน proxy `api/pptv` ของเราเอง (ดู `api/pptv.js`)

## ขั้นตอนตั้งค่า

### 1. รู้ URL production ของ Vercel
เช่น `https://election-bkk-2026.vercel.app` (Vercel → Project → Domains)

### 2. สร้าง Cloudflare Worker
- Cloudflare → zone **frong.me** → **Workers & Pages → Create → Worker**
- วางสคริปต์จาก [`deploy/election-proxy.worker.js`](../deploy/election-proxy.worker.js)
- แก้ค่า `ORIGIN` ให้เป็น URL production ของ Vercel (ไม่มี `/` ท้าย)
- **Deploy**

### 3. ผูก Route
- Worker → **Settings → Triggers → Routes → Add route**
  - Route: `frong.me/election-bkk-2026*`
  - Zone: `frong.me`
- ทุกอย่างนอก path นี้ frong.me ยังเสิร์ฟจาก Hostinger เหมือนเดิม

### 4. ทดสอบ
เปิด `https://frong.me/election-bkk-2026/` — ควรเด้งเติม `/` ท้ายและโหลดแอปครบ
(ผลคะแนน/แผนที่/popup ต้องดึงข้อมูลได้ผ่าน `…/election-bkk-2026/api/pptv`)

## Google Analytics
เมื่ออยู่ใต้ `frong.me` แล้ว = โดเมนเดียวกับ frong.me → **ใช้ GA property/Measurement
ID เดียวกับ frong.me ได้** (GA4 จะรายงาน page path เป็น `/election-bkk-2026/…`
แยกดูได้ด้วย path) — ตั้งค่าไว้แล้วด้วย `G-EL7HS25NP4` ใน `index.html` + `about.html`

## ข้อควรรู้
- ถ้าหน้า frong.me หลัก (Hostinger) มี Cloudflare cache แรง ให้ยกเว้น path
  `/election-bkk-2026/*` จาก cache rule ที่ขัดแย้ง หรือปล่อยให้ Worker จัดการ
- ถ้าเปลี่ยน URL production ของ Vercel ต้องอัปเดต `ORIGIN` ใน Worker ด้วย
- ทางเลือกที่ง่ายกว่า (ถ้ายอมรับ subdomain): ชี้ CNAME `election.frong.me` →
  Vercel ตรงๆ ไม่ต้องใช้ Worker
