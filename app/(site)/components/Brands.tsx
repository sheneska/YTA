import Image from "next/image";

const logos = [
  { src: "/assets/logos/frontier.png", alt: "Frontier Airlines" },
  { src: "/assets/logos/meta.png", alt: "Meta" },
  { src: "/assets/logos/KrispyKreme.png", alt: "Krispy Kreme" },
  { src: "/assets/logos/Hyatt.png", alt: "Hyatt" },
  { src: "/assets/logos/expedia.png", alt: "Expedia" },
  { src: "/assets/logos/coloradosprings.png", alt: "Colorado Springs" },
  { src: "/assets/logos/moxy.png", alt: "Moxy Hotels" },
  { src: "/assets/logos/gopro.png", alt: "GoPro" },
  { src: "/assets/logos/kroger.png", alt: "Kroger" },
];

export default function BrandLogos() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Brands we&apos;ve worked with
        </h2>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}       // ⬅️ increase these for bigger logos
                height={100}
                className="object-contain h-20 w-auto" // ⬅️ force consistent height
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
