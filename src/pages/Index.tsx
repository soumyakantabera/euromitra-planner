import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Pillars } from '@/components/home/Pillars';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ItineraryPreview } from '@/components/home/ItineraryPreview';
import { PlanWithUs } from '@/components/home/PlanWithUs';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Pillars />
      <HowItWorks />
      <ItineraryPreview />
      <PlanWithUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
