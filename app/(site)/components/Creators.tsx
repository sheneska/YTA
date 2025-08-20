"use client";

import Image from "next/image";

export default function Creators() {
  const creatorImages = [
    "/assets/creators/creator1.jpg",
    "/assets/creators/creator2.jpg",
    "/assets/creators/creator3.jpg",
    "/assets/creators/creator4.jpg",
    "/assets/creators/creator5.jpg",
    "/assets/creators/creator15.png",
  ];

  // One set of cards
  const track = creatorImages.map((src, index) => (
    <div
      key={index}
      className="flex-none w-80 mx-4"
    >
      <div className="relative overflow-hidden rounded-3xl aspect-[3/4] group cursor-pointer">
        <Image
          src={src}
          alt={`Creator ${index + 1}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  ));

  return (
    <section id="roster" className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Creators</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          Discover the talented creators who bring brands to life through authentic storytelling
        </p>
      </div>

      {/* Infinity Slider */}
      <div className="relative group">
        {/* Edge fades */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-transparent to-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-transparent to-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

        {/* Scroll track */}
        <div
          className="
            flex w-max animate-scroll gap-0
            [animation-duration:30s]
            will-change-transform
          "
        >
          {track}
          {track}
        </div>
      </div>
    </section>
  );
}
