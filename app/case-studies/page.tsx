import CaseStudyHero from './casestudyhero';
import CaseStudyStat from './casestudystats';
import FeaturedStudy from './featuredstudy';

const featuredStudy = {
  image: '/assets/case-studies/nike.jpg',
  title: 'Stush In The Bush Case Study',
  subtitle: 'Authenticity in different ambiances',
  category: 'Travel & Explore',
  brand: 'Stush In The Bush',
  duration: '3 months',
  challenge: 'Stush In The Bush wanted to increase brand awareness while maintaining brand authenticity...',
  solution: 'We partnered with one of our travel creators, Romie to authentically highlight and promote brand offerings, emphasizing unique selling points such as the sophisticated ambiance, its original menu as well as unique aspects of their location and service.',
  results: {
    views: '958K+',
    likes: '82K',
    comments: '660',
    shares: '33K',
    saves: '44K'
  },
  testimonial: {
    quote: 'Young Talent Agency delivered exceptional results that far exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'Marketing Director at Stush In The Bush',
  }
};

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyStat />
      <div className="mb-24">
        <FeaturedStudy featuredStudy={featuredStudy} />
      </div>
    </main>
  );
}
