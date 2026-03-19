import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold text-white">SmileCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.ourServices')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.whitening')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.implants')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.cosmetic')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.emergency')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.orthodontics')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Dental Street, Suite 100<br />
                New York, NY 10001
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +998 94 6053939
                </a>
              </li>
              <li>
                <a href="mailto:info@smilecare.com" className="hover:text-blue-400 transition-colors">
                  info@smilecare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}