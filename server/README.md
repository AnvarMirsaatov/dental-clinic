# Stomatologiya Telegram Bot

Bu bot sayitdan kelgan qabulga yozilish ma'lumotlarini Telegramga yuboradi.

## O'rnatish

### 1. Dependencies o'rnatish

```bash
cd server
npm install
```

### 2. Telegram Bot yaratish

1. Telegram'da **@BotFather** ni toping
2. `/newbot` buyrug'ini yuboring
3. Bot nomini kiriting (masalan: SmileCare Dental Bot)
4. Bot username kiriting (masalan: smilecare_bot)
5. BotFather sizga **TOKEN** beradi, uni saqlang

### 3. Chat ID olish

1. `.env.example` faylini `.env` ga ko'chiring:
   ```bash
   cp .env.example .env
   ```

2. `.env` faylida `TELEGRAM_BOT_TOKEN` ni kiriting

3. Serverni ishga tushiring:
   ```bash
   npm start
   ```

4. Telegram'da o'z botingizga `/start` yuboring

5. Konsolda `Chat ID` ko'rinadi, uni `.env` faylga kiriting:
   ```
   TELEGRAM_CHAT_ID=sizning_chat_id
   ```

6. Serverni qayta ishga tushiring

### 4. Serverni ishlatish

**Development rejimi (avtomatik restart):**
```bash
npm run dev
```

**Production rejimi:**
```bash
npm start
```

Server `http://localhost:3001` da ishga tushadi.

## API Endpoints

### POST /api/appointment

Qabulga yozilish ma'lumotlarini yuborish.

**Majburiy maydonlar:**
- `firstName` - Ism
- `lastName` - Familiya  
- `phone` - Telefon raqami

**Ixtiyoriy maydonlar:**
- `email` - Email
- `date` - Qabul sanasi
- `service` - Kerakli xizmat
- `message` - Qo'shimcha xabar

**Misol:**
```json
{
  "firstName": "Ali",
  "lastName": "Valiyev",
  "phone": "+998901234567",
  "email": "ali@example.com",
  "date": "2026-03-25",
  "service": "Tishlarni oqartirish",
  "message": "Bugun tushdan keyin bo'sh vaqtim bor"
}
```

**Javob:**
```json
{
  "success": true,
  "message": "Muvaffaqiyatli yuborildi!"
}
```

## Xavfsizlik

- `.env` faylini hech qachon Git'ga yuklabmang
- `TELEGRAM_BOT_TOKEN` ni hech kimga ko'rsatmang
- Production'da environment variables ishlating

## Muammolar

Agar xatolik bo'lsa:
1. `TELEGRAM_BOT_TOKEN` to'g'ri kiritilganini tekshiring
2. `TELEGRAM_CHAT_ID` to'g'ri kiritilganini tekshiring
3. Internetga ulanganingizni tekshiring
4. Botni @BotFather da to'xtatib qo'ymaganingizni tekshiring
