'use client';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
      {/* Floating background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-10 text-purple-100 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re a creator looking to grow or a brand ready to connect with your audience,
          we&apos;re here to help you succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
            For Creators
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
            For Brands
          </button>
        </div>
      </div>
    </section>
  );
}
