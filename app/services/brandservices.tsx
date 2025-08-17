'use client';

import { Target, Globe } from 'lucide-react';

export default function BrandServices() {
  const brandServices = [
    {
      icon: Target,
      title: 'Influencer Marketing',
      description:
        'Marketing that connects, inspires, and converts with authentic creator partnerships.',
      features: [
        'Access to our dynamic roster of diverse influencers',
        'Campaign Strategy & Management',
        'Performance Analytics',
      ],
    },
    {
      icon: Globe,
      title: 'Web Development & Design',
      description:
        'For brands wanting to showcase their products in a modern, sleek, and professional way.',
      features: ['Design & Development', 'Basic SEO', 'Maintenance'],
    },
  ];

  const gradients = ['from-blue-500 to-purple-600', 'from-purple-500 to-pink-600'];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-pink-100/30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full mb-4">
            For Brands
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Driving Brand Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic influencer marketing solutions that deliver measurable results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brandServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl mb-6 text-white shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[3rem]">{service.description}</p>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
