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
import { getDictionary } from '@/dictionaries';

export default async function HomePage({ params }: { params: { lang: 'es' | 'en' } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <NavSection dict={dict.nav} lang={params.lang} />
      <main id="contenido">
        <HeroSection dict={dict.hero} />
        <StatsSection />
        <ServicesSection />
        <WorkSection lang={params.lang} />
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
