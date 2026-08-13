import NavSection from '@/components/sections/section-02-nav';
import HeroSection from '@/components/sections/section-03-hero';
import StatsSection from '@/components/sections/section-04-stats';
import ServicesSection from '@/components/sections/section-05-services';
import WorkSection from '@/components/sections/section-06-work';
import ResultsSection from '@/components/sections/section-07-results';
import DifferenceSection from '@/components/sections/section-08-difference';
import ProcessSection from '@/components/sections/section-09-process';
import PricingSection from '@/components/sections/section-10-pricing';
import ContactSection from '@/components/sections/section-11-contact';
import FooterSection from '@/components/sections/section-12-footer';

export default function HomePage() {
  return (
    <>
      <NavSection />
      <main id="contenido">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WorkSection />
        <ResultsSection />
        <DifferenceSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
