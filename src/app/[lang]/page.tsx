import NavSection from '@/components/sections/section-02-nav';
import HeroSection from '@/components/sections/section-03-hero';
import StatsSection from '@/components/sections/section-04-stats';
import ServicesSection from '@/components/sections/section-05-services';
import WorkSection from '@/components/sections/section-06-work';
import ResultsSection from '@/components/sections/section-07-results';
import DifferenceSection from '@/components/sections/section-08-difference';
import FoundersSection from '@/components/sections/section-08b-founders';
import ProcessSection from '@/components/sections/section-09-process';
import PricingSection from '@/components/sections/section-10-pricing';
import FaqSection from '@/components/sections/section-10b-faq';
import ContactSection from '@/components/sections/section-11-contact';
import FooterSection from '@/components/sections/section-12-footer';
import { getDictionary } from '@/dictionaries';
import { localizedUrl } from '@/lib/seo';

export default async function HomePage({ params }: { params: { lang: 'es' | 'en' } }) {
  const dict = await getDictionary(params.lang);
  const en = params.lang === 'en';

  // Solo la home declara este WebPage: en el layout se repetia en todas las
  // paginas con url=https://upcoded.dev y contradecia sus canonicals.
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${localizedUrl(params.lang)}#webpage`,
    url: localizedUrl(params.lang),
    name: en ? 'Web Development Agency in Argentina | UpCoded' : 'Agencia de Desarrollo Web en Argentina | UpCoded',
    isPartOf: { '@id': 'https://upcoded.dev/#website' },
    about: { '@id': 'https://upcoded.dev/#organization' },
    inLanguage: en ? 'en' : 'es-AR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <NavSection dict={dict.nav} lang={params.lang} />
      <main id="contenido">
        <HeroSection dict={dict.hero} lang={params.lang} />
        <StatsSection dict={dict.stats} />
        <ServicesSection dict={dict.servicesSection} lang={params.lang} />
        <WorkSection lang={params.lang} dict={dict.work} />
        <ResultsSection dict={dict.results} />
        <DifferenceSection dict={dict.difference} />
        <FoundersSection dict={dict.founders} />
        <ProcessSection dict={dict.process} />
        <PricingSection dict={dict.pricing} lang={params.lang} />
        <FaqSection dict={dict.faq} />
        <ContactSection dict={dict.contact} lang={params.lang} />
      </main>
      <FooterSection lang={params.lang} dict={dict.footer} />
    </>
  );
}
