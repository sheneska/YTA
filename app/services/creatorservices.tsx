'use client';

import { User, Globe } from 'lucide-react';

export default function CreatorServices() {
  const creatorServices = [
    {
      icon: User,
      title: 'Pitching Services',
      description:
        'Custom brand outreach and follow-ups crafted to help creators stand out and be considered for collaboration opportunities.',
      features: [
        'Custom pitches monthly (10–30 depending on tier)',
        'Verified lead generation',
        'Targeted, personalized outreach',
        'Weekly status updates',
        'Brand tracker provided',
        'Follow-up management',
      ],
    },
    {
      icon: Globe,
      title: 'Web Development & Design',
      description:
        'For creators wanting to showcase their talent in a modern, sleek, and professional way while targeting their ideal audience.',
      features: ['Custom coded websites', 'SEO', 'Maintenance'],
    },
  ];

  const gradients = [
    'from-purple-500 to-purple-700',
    'from-pink-500 to-rose-600',
    'from-violet-500 to-purple-600',
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full mb-4">
          For Creators
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Empowering Creator Success
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive support to help you build a sustainable career as a
          digital creator
        </p>
      </div>

      {/* Centered grid */}
      <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
        {creatorServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 relative overflow-hidden flex flex-col h-full w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl mb-6 text-white shadow-lg`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto">
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
