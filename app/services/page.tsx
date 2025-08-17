import ServicesHero from './serviceshero';
import CreatorServices from './creatorservices';
import BrandServices from './brandservices';
import ServicesCTA from './servicescta';


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <CreatorServices />
      <BrandServices />
      <ServicesCTA />
    </main>
  );
}
