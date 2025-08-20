'use client';

import { useMemo, useState } from 'react';

type Tab = 'creator' | 'brand';

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState<Tab>('creator');

  // Generate particle positions once per mount (so they don't jump on re-render)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // %
        top: Math.random() * 100,  // %
        delay: Math.random() * 3,  // s
        duration: 3 + Math.random() * 2, // s
      })),
    []
  );

  return (
    <section
      className="
        relative overflow-hidden pt-24
        py-24 lg:py-40
        bg-gradient-to-b
        from-purple-600
        via-purple-700
        via-pink-600
        via-purple-400/70
        via-purple-200/50
        to-white
      "
    >
      {/* floating particles */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: copy & CTAs */}
          <div className="text-white space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connecting
                <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                  Brands
                </span>
                with Young Talent
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 max-w-2xl">
                We bridge the gap between innovative brands and the next generation of digital
                creators, delivering authentic partnerships that drive real results.
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
                <a
                  href="#"
                  className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {selectedTab === 'creator' ? 'Join Our Network' : 'Start Campaign'}
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300"
                >
                  {selectedTab === 'creator' ? 'View Creator Benefits' : 'View Case Studies'}
                </a>
              </div>
            </div>
          </div>

          {/* Right: video card */}
          <div className="relative lg:flex justify-center items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <video
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-float object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/ui/hero-video-poster.jpg"
              >
                <source
                  src="/assets/ui/herovideo.mp4"
                  // type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-t from-purple-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

