import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient since 2020',
    content: 'The team at SmileCare is absolutely amazing! They made me feel comfortable throughout my entire treatment. My smile has never looked better!',
    rating: 5,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Patient since 2019',
    content: 'I was always afraid of going to the dentist, but SmileCare changed that completely. They are gentle, professional, and truly care about their patients.',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient since 2021',
    content: 'From the front desk to the dentist chair, everyone here is top-notch. The office is modern, clean, and the technology they use is impressive.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David Thompson',
    role: 'Patient since 2018',
    content: 'Best dental experience I have ever had. The staff is friendly, the service is excellent, and they always work with my schedule. Highly recommend!',
    rating: 5,
    avatar: 'DT',
  },
  {
    name: 'Lisa Anderson',
    role: 'Patient since 2022',
    content: 'My kids actually look forward to their dental appointments now! The team is wonderful with children and makes every visit fun and educational.',
    rating: 5,
    avatar: 'LA',
  },
  {
    name: 'James Wilson',
    role: 'Patient since 2017',
    content: 'After years of dental issues, SmileCare helped restore my confidence. Their expertise in cosmetic dentistry is unmatched. Thank you!',
    rating: 5,
    avatar: 'JW',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Hear from our satisfied patients who trust us with their smiles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
