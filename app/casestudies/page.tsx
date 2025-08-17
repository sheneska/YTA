import CaseStudyHero from './casestudyhero';
import CaseStudyStat from './casestudystats';
import FeaturedStudy from './featuredstudy';

const featuredStudy = {
  image: '/assets/case-studies/nike.jpg',
  title: 'Nike Summer Campaign',
  subtitle: 'Driving Athletic Lifestyle Engagement',
  category: 'Lifestyle & Fitness',
  brand: 'Nike',
  duration: '3 months',
  challenge: 'Nike wanted to increase brand awareness among Gen Z while maintaining brand authenticity...',
  solution: 'We partnered with 15 high-performing creators to produce engaging user-generated content and distribute across TikTok and Instagram.',
  results: {
    reach: '27.2M+',
    engagement: '8.1%',
    conversions: '105K+',
    roi: '337%',
  },
  testimonial: {
    quote: 'Young Talent Agency delivered exceptional results that far exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'Marketing Director at Nike',
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
