'use client';

import { useState } from 'react';
import { Sparkles, Play, Pause, Target, ArrowRight } from 'lucide-react';
import { Eye, Users, Rocket, Star } from 'lucide-react';
import Image from 'next/image';
import Values from './values';
import CTA from './cta';

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { number: '2.5B+', label: 'Total Reach', gradient: 'from-purple-500 to-pink-500', icon: Eye },
    { number: '5+', label: 'Creators Managed', gradient: 'from-pink-500 to-red-500', icon: Users },
    { number: '50+', label: 'Campaigns Executed', gradient: 'from-blue-500 to-purple-500', icon: Rocket },
    { number: '100%', label: 'Client Satisfaction', gradient: 'from-yellow-500 to-orange-500', icon: Star },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-hidden">
        {/* Animated BG bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300/15 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 py-20 lg:py-32 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 space-y-8 text-white">
              <div className="space-y-6 animate-fadeInUp">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  {/* <Sparkles className="w-5 h-5" /> */}
                  <span className="text-sm font-medium">Our Story</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Where
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Creativity
                  </span>
                  Meets Strategy
                </h1>

                <p className="text-xl lg:text-2xl text-purple-100 max-w-2xl leading-relaxed">
                  We&apos;re not just an agency — we&apos;re the bridge between authentic creativity and business success,
                  crafting partnerships that resonate across generations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 bg-gradient-to-r ${stat.gradient} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Right interactive */}
            <div className="lg:col-span-5 space-y-6">
              {/* Video card */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition">
                  <div className="relative aspect-video bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/ui/team1.png"
                      alt="Team working"
                      fill
                      className="object-cover"
                    />
                    {/* <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition transform">
                        {isVideoPlaying ? (
                          <Pause className="w-6 h-6 text-purple-600" />
                        ) : (
                          <Play className="w-6 h-6 text-purple-600 ml-1" />
                        )}
                      </div>
                    </button> */}
                  </div>
                  <div className="pt-4">
                    {/* <h3 className="text-white font-semibold text-lg">Talent That Inspires.</h3> */}
                    {/* <p className="text-purple-200 text-sm">See how we create magic</p> */}
                  </div>
                </div>
              </div>

              {/* Mission card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition">
                <div className="flex items-start space-x-4">
                  <div className="w-32 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[12px] flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-purple-100 leading-relaxed">
                      Our mission is to connect brands and creators to drive success through influencer marketing and talent management, empowering brands to tell impactful stories and helping creators build sustainable careers. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Values/>
      <CTA/>
    </div>
  );
}
