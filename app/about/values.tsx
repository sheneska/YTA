'use client';

import { Heart, Zap, Globe, Award } from 'lucide-react';

export default function Values() {
  const values = [
    {
      title: 'Our Vision',
      description:'We envision a future where talent of all backgrounds are recognized not just for their reach, but for their voice, value, and influence. At Young Talent Agency, we aim to champion diverse talent and ensure creators are consistently positioned in front of the brands that align with their identity and goals. Through intentional outreach, strategy, and support, we strive to create space for authentic partnerships and sustainable growth. Our vision is to redefine success in the digital space by focusing on fit, not formulas — building long-term opportunities that benefit both creators and brands.',
      icon: Heart,
      color: 'from-pink-500 to-fuchsia-500',
    },
    {
      title: 'Our Culture',
      description:
        'At Young Talent Agency, we foster a collaborative and creative culture focused on innovation and empowerment. We value each individual&apos;s strength and strive to inspire success through authenticity and excellence, creating lasting impressions. ',
      icon: Zap,
      color: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Global Mindset',
      description:
        'Building bridges across cultures and markets to create worldwide impact.',
      icon: Globe,
      color: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Excellence Always',
      description:
        'Committed to delivering exceptional results that exceed expectations every time.',
      icon: Award,
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Talent that Inspires.
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connects.Converts.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Young Talent Agency, we specialize in helping talent get in front of the brands that fit them best. Through personalized outreach and tailored pitching strategies, we connect talent with aligned partnerships — not just based on size, but on synergy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const sizes = [
              'lg:col-span-2 lg:row-span-2', // large block
              'lg:col-span-2 lg:row-span-1', // wide
              'lg:col-span-1 lg:row-span-2', // tall
              'lg:col-span-1 lg:row-span-1', // small
            ];

            const Icon = value.icon;

            return (
              <div
                key={index}
                className={`${sizes[index]} relative group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`h-full bg-gradient-to-br ${value.color} p-8 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] text-white overflow-hidden relative`}
                >
                  {/* blurry circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3
                        className={`${
                          index === 0 ? 'text-4xl' : 'text-2xl'
                        } font-bold mb-4`}
                      >
                        {value.title}
                      </h3>
                    </div>

                    <div className="flex-1 flex items-center">
                      <p
                        className={`text-white/90 leading-relaxed ${
                          index === 0 ? 'text-lg' : 'text-base'
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 mt-6 w-16 h-1 bg-white/30 rounded-full group-hover:w-24 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
