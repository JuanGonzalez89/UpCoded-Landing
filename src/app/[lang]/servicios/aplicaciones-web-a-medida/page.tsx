import type { Metadata } from 'next';
import { PiArrowRight } from 'react-icons/pi';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { buildAlternates, localizedUrl, toLocale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const locale = toLocale(params.lang);

  return {
  title: 'Sistemas Web a Medida en Argentina | UpCoded',
  description:
    'Desarrollamos plataformas web completas para tu negocio en Argentina. Con panel de administración, usuarios, base de datos y las funcionalidades que necesites.',
  alternates: buildAlternates(locale, 'servicios/aplicaciones-web-a-medida'),
  openGraph: {
    title: 'Sistemas Web a Medida en Argentina | UpCoded',
    description:
      'Plataformas web completas con panel de administración, usuarios y base de datos. Hechas a la medida de tu negocio.',
    url: localizedUrl(locale, 'servicios/aplicaciones-web-a-medida'),
  },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sistemas Web a Medida',
  description:
    'Desarrollo de plataformas web completas en Argentina con panel de administración, usuarios y base de datos.',
  provider: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: 'Plataforma Web',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '1200',
      priceCurrency: 'USD',
    },
  },
};

const capabilities = [
  { title: 'Tu propia base de datos', description: 'Guardamos y organizamos la información de tu negocio para que la tengas siempre disponible y ordenada.' },
  { title: 'Panel de administración', description: 'Un escritorio a medida para que puedas gestionar tu plataforma sin depender de nadie.' },
  { title: 'Usuarios y permisos', description: 'Creá cuentas para tu equipo, asigná roles y controlá quién ve y hace qué dentro del sistema.' },
  { title: 'Conexiones con otras herramientas', description: 'Conectamos tu plataforma con MercadoPago, WhatsApp, redes sociales y los sistemas que ya usás.' },
  { title: 'Publicado en la nube', description: 'Lo dejamos funcionando en internet, accesible desde cualquier dispositivo, listo para usar.' },
  { title: 'Preparado para crecer', description: 'El sistema se adapta a medida que tu negocio crece. Más usuarios, más datos, más funcionalidades.' },
];

const faqs = [
  {
    q: '¿Cuál es la diferencia entre una landing page y un sistema web?',
    a: 'Una landing page es una página para presentar tu negocio. Un sistema web tiene panel de administración, usuarios, datos que se guardan y funcionalidades como cobros, reportes o gestión de clientes.',
  },
  {
    q: '¿Cuánto cuesta desarrollar un sistema web en Argentina?',
    a: 'Desde USD 1.200 para una primera versión funcional. El precio depende de la cantidad de funcionalidades, integraciones y la complejidad del proyecto.',
  },
  {
    q: '¿Me entregan el sistema funcionando o necesito hacer algo después?',
    a: 'Lo entregamos funcionando y publicado en internet. También te damos acceso al panel de administración y te explicamos cómo usarlo.',
  },
  {
    q: '¿El código es mío?',
    a: 'Sí, es 100% tuyo. Te entregamos todo listo para que puedas seguir trabajando con nosotros o con quien elijas en el futuro.',
  },
];

export default function AplicacionesWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavSection />
      <main id="contenido" className="pt-[68px]">

        {/* Hero */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-mono text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-primary">Sistemas Web</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-display-lg text-on-surface mb-6">
              Sistemas web completos para tu negocio
            </h1>
            <p className="mb-8 text-body-md text-on-surface-variant max-w-2xl">
              Si tu negocio necesita algo más que un sitio web (una plataforma con usuarios, datos, cobros y panel de gestión), construimos la solución exacta que necesitás.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-medium text-on-primary transition-colors duration-200 ease-upcoded hover:bg-primary-container active:scale-[0.98]"
              >
                Discutir mi proyecto
              <PiArrowRight aria-hidden size={16} />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-outline-strong px-7 text-base font-medium text-on-surface transition-colors duration-200 ease-upcoded hover:border-primary hover:text-primary active:scale-[0.98]"
              >
                Ver casos reales
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="text-headline-lg text-on-surface mb-16">
              Qué podemos construir para vos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-[transform,border-color] duration-200 ease-upcoded hover:-translate-y-[3px] hover:border-primary"
                >
                  <h3 className="text-headline-md mb-2 text-on-surface">{c.title}</h3>
                  <p className="text-on-surface-variant">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="text-headline-lg text-on-surface mb-16">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-outline-variant bg-surface-container p-6">
                <h3 className="text-headline-md mb-3 text-on-surface">{faq.q}</h3>
                <p className="text-on-surface-variant">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="on-ink bg-ink py-24 text-on-ink">
          <div className="mx-auto max-w-container-max px-margin-mobile py-8 text-center md:px-margin-desktop">
            <h2 className="text-headline-lg text-on-ink mb-4">
              ¿Tenés una idea que necesite un sistema?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-md text-on-ink-variant">
              Contanos qué necesitás construir. Te damos una propuesta concreta en menos de 24 horas.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-on-ink px-7 text-base font-medium text-ink transition-colors duration-200 ease-upcoded hover:bg-accent-ink active:scale-[0.98]"
            >
              Quiero una propuesta gratuita
              <PiArrowRight aria-hidden size={16} />
            </Link>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  );
}
