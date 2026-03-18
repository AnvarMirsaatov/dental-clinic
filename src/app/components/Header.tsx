import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold text-gray-900">SmileCare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.home')}</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.services')}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.about')}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.testimonials')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              {t('nav.book')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors py-2">{t('nav.home')}</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors py-2">{t('nav.services')}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">{t('nav.about')}</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors py-2">{t('nav.testimonials')}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">{t('nav.contact')}</a>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-2">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all w-full">
                {t('nav.book')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}