import express from 'express';
import cors from 'cors';
import TelegramBot from 'node-telegram-bot-api';

// Telegram Bot tokenini bu yerga kiriting
// BotFather dan olingan token
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8463753437:AAGEm6Qi3N6cBZum6TOnc6iBKTjwVvP0790';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '583498226';

// Bot yaratish
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server ishlayapti' });
});

// Forma ma\'lumotlarini qabul qilish
app.post('/api/appointment', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, date, service, message } = req.body;

    // Majburiy maydonlarni tekshirish
    if (!firstName || !lastName || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Ism, Familiya va Telefon majburiy!'
      });
    }

    // Telegram xabarini tayyorlash
    let telegramMessage = `🦷 YANGI QABULGA YOZILISH\n\n`;
    telegramMessage += `👤 Ism: ${firstName}\n`;
    telegramMessage += `👤 Familiya: ${lastName}\n`;
    telegramMessage += `📱 Telefon: ${phone}\n`;
    
    if (email) {
      telegramMessage += `📧 Email: ${email}\n`;
    }
    
    if (date) {
      telegramMessage += `📅 Sana: ${date}\n`;
    }
    
    if (service) {
      telegramMessage += `🏥 Xizmat: ${service}\n`;
    }
    
    if (message) {
      telegramMessage += `\n💬 Xabar:\n${message}\n`;
    }
    
    telegramMessage += `\n⏰ Vaqt: ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`;

    // Telegramga xabar yuborish
    await bot.sendMessage(TELEGRAM_CHAT_ID, telegramMessage, {
      parse_mode: 'HTML'
    });

    res.json({
      success: true,
      message: 'Muvaffaqiyatli yuborildi!'
    });

  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({
      success: false,
      error: 'Xatolik yuz berdi. Qayta urinib ko\'ring.'
    });
  }
});

// Chat ID ni olish uchun (test)
app.get('/api/get-chat-id', (req, res) => {
  res.json({
    message: 'Botga /start yuboring va konsolda chat ID ni ko\'ring',
    instructions: [
      '1. @BotFather dan bot yarating',
      '2. Token oling',
      '3. Botga /start yuboring',
      '4. Bu endpoint ni chaqiring',
      '5. Konsolda chat ID ni ko\'ring'
    ]
  });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`\n🚀 Server ${PORT} portda ishlayapti`);
  console.log(`📱 Telegram Bot tayyor`);
  console.log(`\n⚠️  ESLATMA: .env faylida TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID ni sozlang\n`);
});

// Bot yangilanishlarini tinglash (Chat ID olish uchun)
if (TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE') {
  bot.on('message', (msg) => {
    console.log('\n📩 Yangi xabar keldi:');
    console.log('Chat ID:', msg.chat.id);
    console.log('Foydalanuvchi:', msg.from.first_name);
    console.log('Xabar:', msg.text);
    console.log('\nBu Chat ID ni .env faylga qo\'shing: TELEGRAM_CHAT_ID=' + msg.chat.id + '\n');
  });
}
