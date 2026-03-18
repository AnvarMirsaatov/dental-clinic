import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface Translations {
  [key: string]: {
    uz: string;
    ru: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
  'nav.services': { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
  'nav.about': { uz: 'Biz haqimizda', ru: 'О нас', en: 'About' },
  'nav.testimonials': { uz: 'Sharhlar', ru: 'Отзывы', en: 'Testimonials' },
  'nav.contact': { uz: 'Aloqa', ru: 'Контакты', en: 'Contact' },
  'nav.book': { uz: 'Qabulga yozilish', ru: 'Записаться', en: 'Book Appointment' },

  // Hero
  'hero.badge': { uz: '🏆 Mukofotlangan stomatologiya', ru: '🏆 Отмеченная наградами стоматология', en: '🏆 Award-Winning Dental Care' },
  'hero.title1': { uz: 'Sizning tabassumingiz', ru: 'Ваша улыбка', en: 'Your Smile is Our' },
  'hero.title2': { uz: 'bizning ustuvorligimiz', ru: 'наш приоритет', en: 'Priority' },
  'hero.description': { uz: 'Tajribali mutaxassislar jamoasi bilan ajoyib stomatologik xizmatdan bahramand bo\'ling. Biz ilg\'or texnologiyani mehrli g\'amxo\'rlik bilan birlashtiramiz, sizga munosib tabassum taqdim etamiz.', ru: 'Получите исключительную стоматологическую помощь от команды опытных специалистов. Мы сочетаем передовые технологии с заботливым уходом, чтобы подарить вам улыбку, которую вы заслуживаете.', en: 'Experience exceptional dental care with our team of experienced professionals. We combine advanced technology with compassionate care to give you the smile you deserve.' },
  'hero.consultation': { uz: 'Konsultatsiyaga yozilish', ru: 'Записаться на консультацию', en: 'Schedule Consultation' },
  'hero.learn': { uz: 'Batafsil', ru: 'Подробнее', en: 'Learn More' },
  'hero.years': { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years Experience' },
  'hero.patients': { uz: 'Mamnun bemorlar', ru: 'Довольных пациентов', en: 'Happy Patients' },
  'hero.emergency': { uz: 'Favqulodda yordam', ru: 'Экстренная помощь', en: 'Emergency Care' },
  'hero.topRated': { uz: 'Yuqori baholangan', ru: 'Высокий рейтинг', en: 'Top Rated' },
  'hero.reviews': { uz: '(500+ sharh)', ru: '(500+ отзывов)', en: '(500+ reviews)' },

  // Services
  'services.badge': { uz: 'Bizning xizmatlarimiz', ru: 'Наши услуги', en: 'Our Services' },
  'services.title': { uz: 'Kompleks stomatologik xizmat', ru: 'Комплексная стоматологическая помощь', en: 'Comprehensive Dental Care' },
  'services.description': { uz: 'Muntazam tekshiruvlardan tortib ilg\'or protseduralar, biz sizning tabassumingizni sog\'lom va chiroyli saqlash uchun to\'liq xizmatlar spektrini taklif qilamiz.', ru: 'От регулярных осмотров до передовых процедур - мы предлагаем полный спектр стоматологических услуг, чтобы сохранить вашу улыбку здоровой и красивой.', en: 'From routine checkups to advanced procedures, we offer a full range of dental services to keep your smile healthy and beautiful.' },
  'services.whitening': { uz: 'Tishlarni oqartirish', ru: 'Отбеливание зубов', en: 'Teeth Whitening' },
  'services.whitening.desc': { uz: 'Yorqinroq va ishonchli tabassum uchun professional oqartirish muolajasi.', ru: 'Профессиональные процедуры отбеливания для более яркой и уверенной улыбки.', en: 'Professional whitening treatments for a brighter, more confident smile.' },
  'services.implants': { uz: 'Tish implantatsiyasi', ru: 'Зубные имплантаты', en: 'Dental Implants' },
  'services.implants.desc': { uz: 'Yo\'qolgan tishlar uchun tabiiy ko\'rinishli natijalar bilan doimiy yechim.', ru: 'Постоянное решение для отсутствующих зубов с естественным видом.', en: 'Permanent solution for missing teeth with natural-looking results.' },
  'services.cosmetic': { uz: 'Kosmetik stomatologiya', ru: 'Косметическая стоматология', en: 'Cosmetic Dentistry' },
  'services.cosmetic.desc': { uz: 'Vinirlar, bonding va tabassum dizayni bilan tabassumingizni o\'zgartiring.', ru: 'Преобразите свою улыбку с помощью виниров, бондинга и дизайна улыбки.', en: 'Transform your smile with veneers, bonding, and smile makeovers.' },
  'services.emergency': { uz: 'Tez yordam', ru: 'Экстренная помощь', en: 'Emergency Care' },
  'services.emergency.desc': { uz: 'Sizga kerak bo\'lganda shoshilinch yordam uchun 24/7 tez stomatologik xizmat.', ru: 'Круглосуточная экстренная стоматологическая помощь, когда она вам нужна больше всего.', en: '24/7 emergency dental services for urgent care when you need it most.' },
  'services.preventive': { uz: 'Profilaktik parvarishlash', ru: 'Профилактический уход', en: 'Preventive Care' },
  'services.preventive.desc': { uz: 'Optimal salomatlik uchun muntazam tekshiruvlar, tozalash va profilaktik muolajalar.', ru: 'Регулярные осмотры, чистка и профилактические процедуры для оптимального здоровья.', en: 'Regular checkups, cleanings, and preventive treatments for optimal health.' },
  'services.orthodontics': { uz: 'Ortodontiya', ru: 'Ортодонтия', en: 'Orthodontics' },
  'services.orthodontics.desc': { uz: 'Tishlaringizni mukammal tekislash uchun breketlar va Invisalign muolajalari.', ru: 'Брекеты и лечение Invisalign для идеального выравнивания зубов.', en: 'Braces and Invisalign treatments to straighten your teeth perfectly.' },
  'services.learnMore': { uz: 'Batafsil', ru: 'Подробнее', en: 'Learn More' },

  // About
  'about.badge': { uz: 'Biz haqimizda', ru: 'О нас', en: 'About Us' },
  'about.title': { uz: '2008 yildan beri stomatologiyada mukammallik', ru: 'Совершенство в стоматологии с 2008 года', en: 'Excellence in Dental Care Since 2008' },
  'about.desc1': { uz: 'SmileCare da biz har bir kishi sog\'lom va chiroyli tabassumga loyiq ekanligiga ishonamiz. Tajribali stomatolog mutaxassislarimiz jamoasi qulay va samimiy muhitda mukammal xizmat ko\'rsatishga sodiqdir.', ru: 'В SmileCare мы верим, что каждый заслуживает здоровой и красивой улыбки. Наша команда опытных стоматологов стремится обеспечить исключительный уход в комфортной, гостеприимной обстановке.', en: 'At SmileCare, we believe everyone deserves a healthy, beautiful smile. Our team of experienced dental professionals is committed to providing exceptional care in a comfortable, welcoming environment.' },
  'about.desc2': { uz: 'Biz sizga eng samarali va samarali davolashni taqdim etish uchun stomatologiya texnologiyasi va usullarining oldingi qatorida turamiz. Sizning qulayligingiz va qoniqishingiz bizning asosiy ustuvorliklarimizdir.', ru: 'Мы находимся в авангарде стоматологических технологий и методов, чтобы обеспечить вам самое эффективное и результативное лечение. Ваш комфорт и удовлетворение - наши главные приоритеты.', en: 'We stay at the forefront of dental technology and techniques to ensure you receive the most effective, efficient treatments available. Your comfort and satisfaction are our top priorities.' },
  'about.feature1': { uz: 'Tajribali jamoa', ru: 'Опытная команда', en: 'Experienced Team' },
  'about.feature1.desc': { uz: 'Ko\'p yillik tajribaga ega sertifikatlangan stomatologlar', ru: 'Сертифицированные стоматологи с многолетним опытом', en: 'Board-certified dentists with years of expertise' },
  'about.feature2': { uz: 'Ilg\'or texnologiya', ru: 'Передовые технологии', en: 'Advanced Technology' },
  'about.feature2.desc': { uz: 'Aniq davolash uchun zamonaviy uskunalar', ru: 'Современное оборудование для точного лечения', en: 'State-of-the-art equipment for precise treatments' },
  'about.feature3': { uz: 'Bemorga yo\'naltirilgan parvarishlash', ru: 'Уход, ориентированный на пациента', en: 'Patient-Centered Care' },
  'about.feature3.desc': { uz: 'Har bir bemor uchun individual davolash rejalari', ru: 'Индивидуальные планы лечения для каждого пациента', en: 'Personalized treatment plans for every patient' },
  'about.team': { uz: 'Jamoamiz bilan tanishing', ru: 'Познакомьтесь с командой', en: 'Meet Our Team' },

  // Testimonials
  'testimonials.badge': { uz: 'Sharhlar', ru: 'Отзывы', en: 'Testimonials' },
  'testimonials.title': { uz: 'Bemorlarimiz fikrlari', ru: 'Что говорят наши пациенты', en: 'What Our Patients Say' },
  'testimonials.description': { uz: 'Faqat bizning so\'zimizga ishonmang. Bizga o\'z tabassumlarini ishonib topshirgan mamnun bemorlarimizdan eshiting.', ru: 'Не верьте нам на слово. Послушайте наших довольных пациентов, которые доверяют нам свои улыбки.', en: 'Don\'t just take our word for it. Hear from our satisfied patients who trust us with their smiles.' },
  'testimonials.since': { uz: 'dan bemor', ru: 'Пациент с', en: 'Patient since' },

  // Contact
  'contact.badge': { uz: 'Bog\'lanish', ru: 'Связаться', en: 'Get In Touch' },
  'contact.title': { uz: 'Tabassumingizni o\'zgartirishga tayyormisiz?', ru: 'Готовы изменить свою улыбку?', en: 'Ready to Transform Your Smile?' },
  'contact.description': { uz: 'Bugun konsultatsiyaga yoziling va sog\'lom, ishonchli tabassum sari birinchi qadamni tashlang.', ru: 'Запишитесь на консультацию сегодня и сделайте первый шаг к более здоровой и уверенной улыбке.', en: 'Schedule your consultation today and take the first step towards a healthier, more confident smile.' },
  'contact.visit': { uz: 'Bizga tashrif buyuring', ru: 'Посетите нас', en: 'Visit Us' },
  'contact.address': { uz: '123 Dental ko\'chasi, 100-xona\nNyu-York, NY 10001', ru: '123 Dental Street, офис 100\nНью-Йорк, NY 10001', en: '123 Dental Street, Suite 100\nNew York, NY 10001' },
  'contact.call': { uz: 'Qo\'ng\'iroq qiling', ru: 'Позвоните нам', en: 'Call Us' },
  'contact.emergency': { uz: 'Tez yordam', ru: 'Экстренная помощь', en: 'Emergency' },
  'contact.email': { uz: 'Email yozing', ru: 'Напишите нам', en: 'Email Us' },
  'contact.hours': { uz: 'Ish vaqti', ru: 'Часы работы', en: 'Office Hours' },
  'contact.hours.weekday': { uz: 'Dush-Jum: 8:00 - 18:00', ru: 'Пн-Пт: 8:00 - 18:00', en: 'Mon-Fri: 8:00 AM - 6:00 PM' },
  'contact.hours.saturday': { uz: 'Shanba: 9:00 - 15:00', ru: 'Сб: 9:00 - 15:00', en: 'Sat: 9:00 AM - 3:00 PM' },
  'contact.hours.sunday': { uz: 'Yakshanba: Yopiq', ru: 'Вс: Закрыто', en: 'Sun: Closed' },
  'contact.form.title': { uz: 'Qabulga yozilish', ru: 'Записаться на прием', en: 'Book an Appointment' },
  'contact.form.firstName': { uz: 'Ism', ru: 'Имя', en: 'First Name' },
  'contact.form.lastName': { uz: 'Familiya', ru: 'Фамилия', en: 'Last Name' },
  'contact.form.email': { uz: 'Email', ru: 'Email', en: 'Email' },
  'contact.form.phone': { uz: 'Telefon', ru: 'Телефон', en: 'Phone' },
  'contact.form.date': { uz: 'Maqul sana', ru: 'Предпочтительная дата', en: 'Preferred Date' },
  'contact.form.service': { uz: 'Kerakli xizmat', ru: 'Требуемая услуга', en: 'Service Needed' },
  'contact.form.message': { uz: 'Xabar (ixtiyoriy)', ru: 'Сообщение (по желанию)', en: 'Message (Optional)' },
  'contact.form.messagePlaceholder': { uz: 'Stomatologik muammolaringiz haqida bizga xabar bering...', ru: 'Расскажите нам о ваших стоматологических проблемах...', en: 'Tell us about your dental concerns...' },
  'contact.form.submit': { uz: 'Qabulga yozilish', ru: 'Записаться', en: 'Schedule Appointment' },
  'contact.form.note': { uz: 'Biz sizga 24 soat ichida qabulingizni tasdiqlash uchun bog\'lanamiz.', ru: 'Мы свяжемся с вами в течение 24 часов для подтверждения записи.', en: 'We\'ll contact you within 24 hours to confirm your appointment.' },
  'contact.service.checkup': { uz: 'Umumiy ko\'rik', ru: 'Общий осмотр', en: 'General Checkup' },
  'contact.service.whitening': { uz: 'Tishlarni oqartirish', ru: 'Отбеливание зубов', en: 'Teeth Whitening' },
  'contact.service.implants': { uz: 'Tish implantatsiyasi', ru: 'Зубные имплантаты', en: 'Dental Implants' },
  'contact.service.cosmetic': { uz: 'Kosmetik stomatologiya', ru: 'Косметическая стоматология', en: 'Cosmetic Dentistry' },
  'contact.service.emergency': { uz: 'Tez yordam', ru: 'Экстренная помощь', en: 'Emergency Care' },
  'contact.service.orthodontics': { uz: 'Ortodontiya', ru: 'Ортодонтия', en: 'Orthodontics' },

  // Footer
  'footer.description': { uz: '2008 yildan beri mehr-shafqat va tajriba bilan mukammal stomatologik xizmat ko\'rsatamiz.', ru: 'Предоставляем исключительную стоматологическую помощь с заботой и профессионализмом с 2008 года.', en: 'Providing exceptional dental care with compassion and expertise since 2008.' },
  'footer.quickLinks': { uz: 'Tez havolalar', ru: 'Быстрые ссылки', en: 'Quick Links' },
  'footer.ourServices': { uz: 'Bizning xizmatlarimiz', ru: 'Наши услуги', en: 'Our Services' },
  'footer.contactInfo': { uz: 'Aloqa ma\'lumotlari', ru: 'Контактная информация', en: 'Contact Info' },
  'footer.rights': { uz: 'SmileCare stomatologiya klinikasi. Barcha huquqlar himoyalangan.', ru: 'SmileCare стоматологическая клиника. Все права защищены.', en: 'SmileCare Dental Clinic. All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
