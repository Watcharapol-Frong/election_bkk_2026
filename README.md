# Bangkok Vote · เลือกตั้งผู้ว่าฯ กทม. 2569

เว็บไซต์อิสระสำหรับติดตามผลการเลือกตั้ง **ผู้ว่าราชการกรุงเทพมหานคร** และ
**สมาชิกสภากรุงเทพมหานคร (ส.ก.)** ประจำปี 2569 (2026) — แสดงผลคะแนนแบบเรียลไทม์
รายเขต ผู้สมัคร นโยบาย และวิธีลงคะแนน ในรูปแบบที่อ่านง่ายและรองรับสองภาษา (ไทย/English)

> เว็บไซต์นี้จัดทำขึ้น**เพื่อการศึกษา** ไม่ใช่เว็บทางการของ กกต. และไม่มีส่วนเกี่ยวข้องกับ
> กกต. / กรุงเทพมหานคร / PPTV หรือพรรคการเมืองใด

---

## ✨ คุณสมบัติหลัก (Features)

- **ผลนับคะแนนผู้ว่าฯ แบบสด** — โพเดียมอันดับ 1–3 + รายชื่อผู้สมัครทั้งหมด ดึงจาก API
- **Turnout Bar + Popover** — สถิติบัตรดี/เสีย/ไม่ประสงค์ลงคะแนน และผู้มาใช้สิทธิ
- **แท็บรายเขต 2 ชุดข้อมูล** ใช้ UI เดียวกัน
  - **ผลการเลือก ส.ก.** — 50 เขต จัดกลุ่ม/นับที่นั่งตามพรรค
  - **ผลคะแนนผู้ว่า** — 50 เขต เรียงตามเลขเขต
- **สองมุมมองต่อแท็บ:** `Map` (แผนที่ กทม. ตามตำแหน่งภูมิศาสตร์) · `Grid` (ตาราง)
  - ส.ก. มีปุ่ม FAB สลับ *จัดกลุ่มตามพรรค* / *เรียงตามเขต*
- **Popup รายเขต** — กดที่ช่องเพื่อดูผู้สมัครครบทุกคน คะแนน เปอร์เซ็นต์ รูป และยอดนับคะแนน
- **i18n ไทย/English** — สลับภาษาทั้งหน้า รวมถึงชื่อเขต (โรมัน) และชื่อพรรค (อังกฤษ)
- **วันที่/เวลา/% นับคะแนน** ดึงจาก API อัตโนมัติ
- **Static site** — ไม่มี build step, โหลดเร็ว, รองรับมือถือ

---

## 🧱 เทคโนโลยี (Tech Stack)

- **Vanilla HTML + CSS + JavaScript** (ไม่มี framework / build tool)
- **Vercel** สำหรับ hosting + serverless proxy (`/api`)
- **Google Analytics 4** (สถิติแบบไม่ระบุตัวตน, เปิด IP anonymization)
- ฟอนต์: Anuphan, IBM Plex Sans Thai, Outfit (Google Fonts)

---

## 📁 โครงสร้างโปรเจกต์

```
.
├── index.html          # หน้าหลัก
├── about.html          # เกี่ยวกับ & ที่มาข้อมูล + Disclaimer + Privacy
├── app.js              # ตรรกะทั้งหมด (i18n, ดึง API, เรนเดอร์ผล/แผนที่/popup)
├── style.css           # สไตล์ทั้งหมด + design tokens (:root variables)
├── assets/             # โลโก้และรูปภาพของเว็บไซต์
├── candidates/         # รูปผู้สมัครผู้ว่าฯ (no-1.webp … no-18.webp)
├── api/
│   └── results.js      # Vercel serverless proxy (สำรอง) → ข้อมูล กทม.
├── vercel.json         # config: cleanUrls, security headers, cache policy
├── robots.txt
└── docs/               # เอกสารเพิ่มเติม
    ├── ARCHITECTURE.md # โครงสร้างโค้ดใน app.js
    └── DATA_SOURCES.md # รายละเอียด API และโครงสร้างข้อมูล
```

---

## 🚀 การรัน (Local Development)

เป็น static site ไม่ต้อง build — เปิดด้วย static server ตัวใดก็ได้:

```bash
# ตัวอย่าง
npx serve .
# หรือ
python3 -m http.server 8000
```

แล้วเปิด `http://localhost:8000`

> หมายเหตุ: ข้อมูลผลคะแนนดึงจาก PPTV API โดยตรงจากฝั่ง client จึงต้องต่ออินเทอร์เน็ต
> ดูรายละเอียด endpoint ทั้งหมดได้ที่ [`docs/DATA_SOURCES.md`](docs/DATA_SOURCES.md)

---

## ☁️ การ Deploy

Deploy ผ่าน **Vercel** (เชื่อมกับ branch `main`)

- `vercel.json` ตั้งค่า security headers, cache policy และ `cleanUrls`
- ทุก commit ที่ขึ้น `main` จะถูก build ใหม่อัตโนมัติ

---

## 📊 ตั้งค่า Google Analytics (GA4)

ในไฟล์ `index.html` และ `about.html` มี snippet GA4 พร้อม placeholder
**ต้องแก้ `G-XXXXXXXXXX` เป็น Measurement ID จริงก่อนใช้งานจริง**

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```

---

## 🌐 i18n (สองภาษา)

- ข้อความคงที่ใช้ attribute `data-i18n="key"` + dictionary `TRANSLATIONS_EN` ใน `app.js`
- กดปุ่ม `EN/ไทย` เรียก `applyLanguage(lang)` แปลทั้งหน้า + re-render ส่วน dynamic
- ชื่อเขต ส.ก. ไม่มีในภาษาอังกฤษจาก API → สร้างจาก slug (`_slugToEn`)
- ชื่อพรรค/กลุ่มแปลผ่าน `PARTY_EN` (พรรคจดทะเบียน = ชื่อทางการ, กลุ่มท้องถิ่น = ทับศัพท์)

---

## ⚖️ ลิขสิทธิ์และการใช้งาน

- **เนื้อหาต้นฉบับของเว็บไซต์** (โค้ด ดีไซน์ ข้อความที่จัดทำเอง) เผยแพร่ภายใต้
  **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)**
- **ผลคะแนน รูปผู้สมัคร โลโก้พรรค และข้อมูลจากแหล่งภายนอก ไม่อยู่ภายใต้สัญญานี้** —
  เป็นลิขสิทธิ์ของเจ้าของเดิม (PPTV HD36 และแหล่งที่มา) นำมาแสดงเพื่ออ้างอิง/ศึกษาเท่านั้น
- ดูรายละเอียดและที่มาข้อมูลทั้งหมดได้ที่หน้า [`about.html`](about.html)

---

## 🙏 เครดิต

- ผลนับคะแนน: **PPTV HD36**
- ข้อมูลทางการ: สำนักงานคณะกรรมการการเลือกตั้ง (กกต.)
- พัฒนาโดย [frong.me](https://frong.me)
