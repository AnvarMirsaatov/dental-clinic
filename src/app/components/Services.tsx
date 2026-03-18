import { Sparkles, Shield, Smile, Zap, Heart, Star } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural-looking results.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and smile makeovers.',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for urgent care when you need it most.',
    color: 'from-red-500 to-orange-400',
  },
  {
    icon: Heart,
    title: 'Preventive Care',
    description: 'Regular checkups, cleanings, and preventive treatments for optimal health.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Star,
    title: 'Orthodontics',
    description: 'Braces and Invisalign treatments to straighten your teeth perfectly.',
    color: 'from-indigo-500 to-blue-400',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-gray-600">
            From routine checkups to advanced procedures, we offer a full range of dental services 
            to keep your smile healthy and beautiful.
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
                    Learn More
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
