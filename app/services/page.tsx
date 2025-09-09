import ServicesHero from './serviceshero';
import CreatorServices from './creatorservices';
import BrandServices from './brandservices';
import ServicesCTA from './servicescta';


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <section id="creator-services">
        <CreatorServices />
      </section>

      <section id="brand-services">
        <BrandServices />
      </section>
      <ServicesCTA />
    </main>
  );
}
