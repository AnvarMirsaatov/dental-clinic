import { Sparkles, Shield, Smile, Zap, Heart, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t('services.whitening'),
      description: t('services.whitening.desc'),
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Shield,
      title: t('services.implants'),
      description: t('services.implants.desc'),
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: Smile,
      title: t('services.cosmetic'),
      description: t('services.cosmetic.desc'),
      color: 'from-orange-500 to-yellow-400',
    },
    {
      icon: Zap,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      color: 'from-red-500 to-orange-400',
    },
    {
      icon: Heart,
      title: t('services.preventive'),
      description: t('services.preventive.desc'),
      color: 'from-green-500 to-emerald-400',
    },
    {
      icon: Star,
      title: t('services.orthodontics'),
      description: t('services.orthodontics.desc'),
      color: 'from-indigo-500 to-blue-400',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{t('services.badge')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <a href="#contact" className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t('services.learnMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}