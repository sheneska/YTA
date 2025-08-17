'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Write the Next
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Chapter Together?
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a brand seeking authentic partnerships or a creator ready to elevate your impact, let&apos;s explore how we can achieve extraordinary things together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Partner With Us
            </button>
            <button className="px-10 py-5 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center">
              Join Our Network
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mt-12 text-purple-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">@</span>
              </div>
              <span>hello@youngtalentagency.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">#</span>
              </div>
              <span>+1 (555) 123-4567</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
