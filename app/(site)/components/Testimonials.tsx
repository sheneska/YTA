'use client';

import Image from 'next/image';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating?: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I never knew the difference having an efficient and organized management team could make! Getting things done without lifting a finger, securing deals with ease having the administrative side of negotiations handled and being presented with deals – all of which comes simply and easily while utilizing the services of Young Talent Agency.",
    name: 'Jade McIntosh',
    role: 'Creator',
    avatar: '/assets/creators/creator15.png',
    rating: 5,
  },
  {
    quote:
      "Young Talent Agency has completely changed the trajectory of my influencer career. Since I'm not a full time creator, I have little time to pitch brands and negotiate contracts. Not only have they taken care of my partnerships from pitching to closing, but their professionalism, responsiveness, and reliability make my experience top-notch. Being managed by them is worth every penny.",
    name: 'Romie Robertson',
    role: 'Creator',
    avatar: '/assets/creators/creator11.jpeg',
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-5 w-5 fill-current"
          aria-hidden
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from some of our creators who have achieved incredible results
            with Young Talent Agency
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={t.name}
              className="
                bg-white rounded-3xl p-8
                shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                ring-1 ring-black/5
                transition-transform duration-300 hover:scale-105 hover:shadow-[0_35px_100px_rgba(0,0,0,0.16)]
              "
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <Stars count={t.rating ?? 5} />

              <p className="mt-5 mb-6 italic text-slate-700 leading-8">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
