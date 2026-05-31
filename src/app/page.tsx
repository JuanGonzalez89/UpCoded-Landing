import NavSection from '@/components/sections/section-02-nav';
import HeroSection from '@/components/sections/section-03-hero';
import SocialProofSection from '@/components/sections/section-04-social-proof';
import ServicesSection from '@/components/sections/section-05-services';
import DifferenceSection from '@/components/sections/section-06-difference';
import ProcessSection from '@/components/sections/section-07-process';
import PortfolioSection from '@/components/sections/section-08-portfolio';
import TestimonialsSection from '@/components/sections/section-09-testimonials';
import PricingSection from '@/components/sections/section-10-pricing';
import FinalCtaSection from '@/components/sections/section-11-final-cta';
import FooterSection from '@/components/sections/section-12-footer';

export default function HomePage() {
  return (
    <main className="pt-20">
      <NavSection />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <DifferenceSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}