import { Calendar, Award, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title1')}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> {t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg font-medium">
                {t('hero.consultation')}
              </button>
              <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all text-lg font-medium">
                {t('hero.learn')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">{t('hero.years')}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">{t('hero.patients')}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">{t('hero.emergency')}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzcwNjI1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern dental clinic"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('hero.topRated')}</div>
                  <div className="text-sm text-gray-600">5.0 ⭐⭐⭐⭐⭐ {t('hero.reviews')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}