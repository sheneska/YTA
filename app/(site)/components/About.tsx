'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Where Brands &amp; Creators Connect
              </h3>
              <p className="text-xl text-gray-600">
                At Young Talent Agency, we are dedicated to creating meaningful connections between
                brands and creators, fostering growth and success for all our clients. Our dual focus
                on influencer marketing and talent management allows us to deliver impactful campaigns
                and personalized support tailored to the unique needs of each client. Whether you&apos;re a
                brand seeking authentic engagement or a creator looking to elevate your career, we
                provide the expertise, tools, and guidance to help you achieve your goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Creators Managed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.5B+</div>
                <div className="text-gray-600">Total Reach</div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right visual panel */}
          <div className="relative">
            <div
              className="
                relative rounded-3xl p-10
                bg-gradient-to-br from-purple-50 to-pink-100
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              "
            >
              {/* subtle inner border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />

              <div className="relative h-[420px]">
                {/* Right visual panel */}
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/assets/ui/ytawork1.png" 
                    alt="About visual"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* soft radial glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl"
                   style={{
                     background:
                       'radial-gradient(600px 300px at 70% 50%, rgba(168,85,247,0.25), transparent 60%)'
                   }}
              />
            </div>

            {/* Floating orbs */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-float" />
            <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-30 animate-float"
                 style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

