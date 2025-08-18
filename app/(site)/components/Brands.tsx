/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type Brand = {
  src?: string;        // logo path (prefer white SVG/PNG)
  alt: string;
  link?: string;       // optional external link
  nameFallback?: string;
};

const LOGOS: Brand[] = [
  { src: "/assets/logos/frontier.png",        alt: "Frontier" },
  { src: "/assets/logos/meta.png",            alt: "Meta" },
  { src: "/assets/logos/KrispyKreme.png",     alt: "Krispy Kreme" },
  { src: "/assets/logos/Hyatt.png",           alt: "Hyatt" },
  { src: "/assets/logos/coloradosprings.png", alt: "Colorado Springs" },
  { src: "/assets/logos/moxy.png",            alt: "Moxy" },
  { src: "/assets/logos/expedia.png",         alt: "Expedia" },
  { src: "/assets/logos/gopro.png",           alt: "GoPro" },
  { src: "/assets/logos/kroger.png",          alt: "Kroger" },
];

export default function Brands() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Gradient panel */}
        <div className="
          relative rounded-3xl p-16
          bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900
          shadow-[0_40px_120px_rgba(0,0,0,0.25)]
        ">
          {/* title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Brands we&apos;ve worked with
            </h2>
          </div>

          {/* logo grid (3 x 3, centered) */}
<div className="
  grid
  grid-cols-3
  sm:grid-cols-3
  gap-x-12 gap-y-6
  items-center justify-items-center
  max-w-5xl mx-auto
">
            {LOGOS.map((brand, i) => {
              const content = (
                <div
                className="flex items-center justify-center h-20 w-full sm:h-24 md:h-28"
                style={{ animationDelay: `${i * 100}ms` }}
                >
                  {brand.src ? (
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={220}
                      height={80}
                      // Bigger & crisp; invert makes dark logos appear white on the purple panel.
                      className="object-contain opacity-95 hover:opacity-100 transition h-32 sm:h-36 md:h-40 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                    />
                  ) : (
                    <span className="text-white font-semibold text-lg">
                      {brand.nameFallback ?? brand.alt}
                    </span>
                  )}
                </div>
              );

              return brand.link ? (
                <a
                  key={brand.alt}
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {content}
                </a>
              ) : (
                <div key={brand.alt} className="w-full">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
