# 📱 TELEGRAM BOT SOZLASH YO'RIQNOMASI

## 1-QADAM: Telegram Bot yaratish

### A. BotFather bilan bot yaratish

1. Telegram'da **@BotFather** ni qidiring va bosing
2. `/newbot` buyrug'ini yuboring
3. Bot uchun nom kiriting (masalan: **SmileCare Dental Bot**)
4. Bot username kiriting (masalan: **smilecare_dental_bot**)
   - Username `bot` bilan tugashi kerak
   - Misol: `mysmilecare_bot`
5. BotFather sizga **TOKEN** beradi. Uni saqlang!
   - Misol: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

## 2-QADAM: Server o'rnatish

### A. Server papkasiga o'tish

```bash
cd server
```

### B. Dependencies o'rnatish

```bash
npm install
```

## 3-QADAM: .env fayl yaratish

### A. .env.example dan nusxa olish

```bash
cp .env.example .env
```

### B. .env faylini tahrirlash

`.env` faylini ochib quyidagi qatorlarni to'ldiring:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=
PORT=3001
```

**Eslatma:** `TELEGRAM_CHAT_ID` ni keyingi qadamda olamiz.

## 4-QADAM: Chat ID olish

### A. Serverni ishga tushirish

```bash
npm start
```

Server ishga tushgandan keyin:

### B. Botga /start yuborish

1. Telegram'da o'zingiz yaratgan botni toping
2. Botni bosing va `/start` yuboring

### C. Chat ID ni konsoldan olish

Terminal/konsolda quyidagicha xabar paydo bo'ladi:

```
📩 Yangi xabar keldi:
Chat ID: 123456789
Foydalanuvchi: Sizning ismingiz
Xabar: /start

Bu Chat ID ni .env faylga qo'shing: TELEGRAM_CHAT_ID=123456789
```

### D. Chat ID ni .env ga qo'shish

`.env` faylini oching va `TELEGRAM_CHAT_ID` ga o'sha raqamni kiriting:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
PORT=3001
```

### E. Serverni qayta ishga tushirish

`Ctrl+C` bosib serverni to'xtating, keyin qayta ishga tushiring:

```bash
npm start
```

## 5-QADAM: Testlash

### A. Websayt formasini to'ldirish

1. Websaytni ochig (http://localhost:5173)
2. Contact formasiga quyidagi ma'lumotlarni kiriting:
   - Ism: Ali
   - Familiya: Valiyev
   - Telefon: +998901234567
   - (Qolgan maydonlar ixtiyoriy)
3. "Qabulga yozilish" tugmasini bosing

### B. Telegram'da xabarni kutish

Bir necha soniyadan keyin Telegram botingizga xabar keladi:

```
🦷 YANGI QABULGA YOZILISH

👤 Ism: Ali
👤 Familiya: Valiyev
📱 Telefon: +998901234567
📧 Email: ali@example.com
📅 Sana: 2026-03-25
🏥 Xizmat: Umumiy ko'rik

💬 Xabar:
Bugun tushdan keyin bo'sh vaqtim bor

⏰ Vaqt: 19.03.2026, 14:30:45
```

## 🎉 Tayyor!

Agar xabar Telegram'ga kelsa - hammasi to'g'ri ishlayapti!

---

## ⚙️ Development rejimida ishlash

Avtomatik restart uchun (kod o'zgarganda):

```bash
npm run dev
```

---

## 🔒 Xavfsizlik

- `.env` faylini **GIT'ga yuklabmang**
- `TELEGRAM_BOT_TOKEN` ni hech kimga ko'rsatmang
- Production'da server environment variables ishlating

---

## 🐛 Muammolarni hal qilish

### "Server bilan bog'lanishda xatolik"

✅ **Hal:** Serverni ishga tushirib olganingizni tekshiring:
```bash
cd server
npm start
```

### "Telegram bot javob bermayapti"

✅ **Hal qilish:**
1. `.env` faylida `TELEGRAM_BOT_TOKEN` to'g'ri ekanligini tekshiring
2. @BotFather da botni to'xtatib qo'ymaganingizni tekshiring
3. Internetga ulanganingizni tekshiring

### "Chat ID topilmadi"

✅ **Hal qilish:**
1. Botga `/start` yuborganingizni tekshiring
2. To'g'ri botga yuborganingizni tekshiring
3. Konsolda Chat ID ko'rinishini kutib turing

---

## 📞 Qo'shimcha yordam

Agar muammo hal bo'lmasa:
1. `server` papkasidagi `README.md` ni o'qing
2. Node.js (v16+) o'rnatilganini tekshiring: `node --version`
3. npm o'rnatilganini tekshiring: `npm --version`

---

## 🚀 Production'ga deploy qilish

Production'da serveringizni hosting'ga (masalan VPS, Heroku, DigitalOcean) deploy qiling va environment variables ni o'sha yerda sozlang.

Frontend'da API URL'ni o'zgartiring (`http://localhost:3001` o'rniga production URL).
