import { CheckCircle, Users, Microscope, HeartPulse } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('about.feature1'),
      description: t('about.feature1.desc'),
    },
    {
      icon: Microscope,
      title: t('about.feature2'),
      description: t('about.feature2.desc'),
    },
    {
      icon: HeartPulse,
      title: t('about.feature3'),
      description: t('about.feature3.desc'),
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwNjQzMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Happy patient"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcwNzI0MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern dental office"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzA2NTc3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dental team"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{t('about.badge')}</span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.desc1')}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.desc2')}
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                {t('about.team')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}