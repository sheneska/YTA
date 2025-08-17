'use client';

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-20 text-white relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-base font-medium">
          Success Stories
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover how we&apos;ve helped brands achieve remarkable results through strategic 
          influencer partnerships and authentic content creation.
        </p>

        {/* Extra floating orbs */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
