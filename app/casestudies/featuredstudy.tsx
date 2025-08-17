'use client';

import Image from 'next/image';
import { Award, Target, Users, BarChart3, Quote } from 'lucide-react';

export interface FeaturedStudy {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  brand: string;
  duration: string;
  challenge: string;
  solution: string;
  results: {
    reach: string;
    engagement: string;
    conversions: string;
    roi: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function FeaturedCaseStudy({
  featuredStudy,
}: {
  featuredStudy: FeaturedStudy;
}) {
  if (!featuredStudy) return null;

  return (
    <section className="container mx-auto px-6">
      <div className="mb-12 text-center">
        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full mb-4">
          Featured Case Study
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Campaign Spotlight</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden hover:shadow-3xl transition-all duration-500">
        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div className="relative">
            <Image
              src={featuredStudy.image}
              alt={featuredStudy.title}
              width={800}
              height={800}
              className="w-full h-80 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full mb-3">
                {featuredStudy.category}
              </span>
              <h3 className="text-3xl font-bold mb-2">{featuredStudy.title}</h3>
              <p className="text-white/90">{featuredStudy.subtitle}</p>
            </div>
          </div>

          {/* Right */}
          <div className="p-8 lg:p-12">
            <div className="space-y-10">

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <h4 className="text-lg font-bold text-purple-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                    Brand
                  </h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {featuredStudy.brand}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                    Duration
                  </h4>
                  <p className="text-gray-700 font-semibold">{featuredStudy.duration}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold flex items-center mb-4 text-gray-900">
                  <Target className="w-5 h-5 text-purple-600 mr-3" />
                  Challenge
                </h4>
                <p className="text-gray-600">{featuredStudy.challenge}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold flex items-center mb-4 text-gray-900">
                  <Users className="w-5 h-5 text-pink-600 mr-3" />
                  Solution
                </h4>
                <p className="text-gray-600">{featuredStudy.solution}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold flex items-center mb-6 text-gray-900">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-3" />
                  Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: featuredStudy.results.reach, label: 'Total Reach', gradient: 'from-purple-50 to-pink-50', border: 'border-purple-100' },
                    { val: featuredStudy.results.engagement, label: 'Engagement Rate', gradient: 'from-blue-50 to-purple-50', border: 'border-blue-100' },
                    { val: featuredStudy.results.conversions, label: 'Conversions', gradient: 'from-green-50 to-blue-50', border: 'border-green-100' },
                    { val: featuredStudy.results.roi, label: 'ROI', gradient: 'from-yellow-50 to-orange-50', border: 'border-yellow-100' },
                  ].map((r, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${r.gradient} p-6 rounded-2xl text-center border ${r.border}`}>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {r.val}
                      </p>
                      <p className="text-gray-600 mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="italic text-gray-700 mb-4 leading-relaxed">
                      &quot;{featuredStudy.testimonial.quote}&quot;
                    </p>
                    <p className="font-bold text-gray-900">{featuredStudy.testimonial.author}</p>
                    <p className="text-purple-600 font-medium">{featuredStudy.testimonial.role}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
