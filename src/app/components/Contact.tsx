import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div>
              <span className="text-blue-100 font-semibold text-sm uppercase tracking-wide">{t('contact.badge')}</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-blue-50">
                {t('contact.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t('contact.visit')}</div>
                  <div className="text-blue-50" style={{ whiteSpace: 'pre-line' }}>{t('contact.address')}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t('contact.call')}</div>
                  <div className="text-blue-50">(123) 456-7890<br />{t('contact.emergency')}: (123) 456-7891</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t('contact.email')}</div>
                  <div className="text-blue-50">info@smilecare.com<br />appointments@smilecare.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t('contact.hours')}</div>
                  <div className="text-blue-50">
                    {t('contact.hours.weekday')}<br />
                    {t('contact.hours.saturday')}<br />
                    {t('contact.hours.sunday')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h3>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.firstName')}</label>
                  <input 
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.lastName')}</label>
                  <input 
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                <input 
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.date')}</label>
                <input 
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.service')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  <option>{t('contact.service.checkup')}</option>
                  <option>{t('contact.service.whitening')}</option>
                  <option>{t('contact.service.implants')}</option>
                  <option>{t('contact.service.cosmetic')}</option>
                  <option>{t('contact.service.emergency')}</option>
                  <option>{t('contact.service.orthodontics')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  rows={3}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all font-medium"
              >
                {t('contact.form.submit')}
              </button>

              <p className="text-sm text-gray-500 text-center">
                {t('contact.form.note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}