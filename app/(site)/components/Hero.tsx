'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

type Tab = 'creator' | 'brand';

const serviceCards = [
  {
    title: 'Pitching Services',
    description: 'Identifying, pitching and securing brand deals for influencers',
    image:'/assets/hero/pitching.jpeg',
    metric: '150+ Strategies',
    growth: '+45%',
  },
  {
    title: 'Campaign Management',
    description: 'End-to-end campaign execution and performance optimization',
    image:'/assets/hero/campaign.jpeg',
    metric: '500+ Campaigns',
    growth: '+92%',
  },
  {
    title: 'Brand Partnerships',
    description: 'Connecting brands with authentic creators for meaningful collaborations',
    image:'/assets/hero/brand.jpeg',
    metric: '2.5B+ Reach',
    growth: '+65%',
  },
];

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState<Tab>('creator');

  // floating background particles
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
      })),
    []
  );

  // carousel
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrentServiceIndex((i) => (i + 1) % serviceCards.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  // CTAs
  const ctas =
    selectedTab === 'creator'
      ? [
          { href: '/services#creator-services', label: 'Join Creator Network', primary: true },
          { href: '/case-studies', label: 'View Case Studies', primary: false },
        ]
      : [
          { href: '/services#brand-services', label: 'Start a Campaign', primary: true },
          { href: '/case-studies', label: 'View Case Studies', primary: false },
        ];

  return (
    <section className="relative overflow-hidden pt-24 py-24 lg:py-40 bg-gradient-to-b from-purple-600 via-purple-700 via-pink-600 via-purple-400/70 via-purple-200/50 to-white">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 top-0 bottom-1/3">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left: headline + CTAs */}
          <div className="text-white space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                You Create. We connect.
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 max-w-2xl">
                We specialize in personalized brand outreach that connects talent with brands aligned
                with their voice, audience, and goals. You focus on content — we focus on opening the
                right doors.
              </p>
            </div>

            {/* Toggle */}
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1 max-w-fit">
                <button
                  onClick={() => setSelectedTab('creator')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                    selectedTab === 'creator'
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'text-white hover:text-pink-300 hover:bg-white/10'
                  }`}
                >
                  FOR CREATORS
                </button>
                <button
                  onClick={() => setSelectedTab('brand')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                    selectedTab === 'brand'
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'text-white hover:text-pink-300 hover:bg-white/10'
                  }`}
                >
                  FOR BRANDS
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {ctas.map((cta, i) => (
                  <Link
                    key={i}
                    href={cta.href}
                    className={`px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 text-center ${
                      cta.primary
                        ? 'bg-white text-purple-600 shadow-xl hover:bg-gray-100'
                        : 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: floating service cards */}
          <div
            className="relative lg:flex justify-center items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Floating KPI chips */}
            <div className="absolute -top-8 -left-8 z-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 animate-float shadow-xl hidden sm:block">
              <div className="text-2xl font-bold text-white">47</div>
              <div className="text-xs text-slate-300">Active Projects</div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 z-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 animate-float shadow-xl hidden md:block"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="text-2xl font-bold text-pink-400">98%</div>
              <div className="text-xs text-slate-300">Client Satisfaction</div>
            </div>

            <div
              className="absolute top-1/2 -right-12 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 animate-float shadow-xl hidden lg:block"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="text-2xl font-bold text-indigo-400">2.1M</div>
              <div className="text-xs text-slate-300">Revenue Generated</div>
            </div>

            {/* Main card */}
            <div className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  key={currentServiceIndex}
                  src={serviceCards[currentServiceIndex].image}
                  alt={serviceCards[currentServiceIndex].title}
                  fill
                  className="object-cover transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Growth badge */}
                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 px-3 py-1 rounded-full">
                  <span className="text-green-400 text-sm font-semibold">
                    {serviceCards[currentServiceIndex].growth}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {serviceCards[currentServiceIndex].title}
                </h3>
                <p className="text-slate-300">{serviceCards[currentServiceIndex].description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-purple-300">
                    {serviceCards[currentServiceIndex].metric}
                  </div>
                  <div className="flex space-x-1">
                    {serviceCards.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Show slide ${i + 1}`}
                        onClick={() => setCurrentServiceIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentServiceIndex ? 'bg-purple-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
}
