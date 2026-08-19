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
  title: 'Desarrollo Web en Argentina | Agencia Profesional | UpCoded',
  description:
    'Agencia de desarrollo web en Argentina. Creamos sitios rápidos, modernos y optimizados para que tu negocio aparezca en Google. Entrega en semanas, no meses.',
  alternates: buildAlternates(locale, 'servicios/desarrollo-web-argentina'),
  openGraph: {
    title: 'Desarrollo Web en Argentina | UpCoded',
    description:
      'Creamos sitios rápidos, modernos y optimizados para que tu negocio aparezca en Google.',
    url: localizedUrl(locale, 'servicios/desarrollo-web-argentina'),
  },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desarrollo Web en Argentina',
  description:
    'Servicio profesional de desarrollo web en Argentina. Sitios rápidos, modernos y optimizados para buscadores.',
  provider: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  serviceType: 'Desarrollo Web',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '300',
      priceCurrency: 'USD',
      description: 'Desde USD 300 para sitios y landing pages',
    },
  },
};

const features = [
  {
    title: 'Velocidad que tus clientes notan',
    description:
      'Un sitio lento hace que la gente se vaya antes de verte. Los nuestros cargan al instante, en cualquier dispositivo.',
  },
  {
    title: 'Se ve bien en todos lados',
    description:
      'Diseñamos para que se vea perfecto en celular, tablet y computadora. Sin sorpresas, sin pantallas rotas.',
  },
  {
    title: 'Listo para aparecer en Google',
    description:
      'Configuramos todo lo necesario para que Google encuentre tu sitio y lo muestre cuando alguien busca lo que hacés.',
  },
  {
    title: 'Seguro y sin complicaciones',
    description:
      'Código limpio y moderno. Olvidate de mantener plugins, actualizaciones de emergencia o sitios que se caen.',
  },
];

const faqs = [
  {
    q: '¿Cuánto tarda tener mi sitio web listo?',
    a: 'Para una landing page o sitio institucional, lo tenés en 2 a 3 semanas. Un sistema más complejo puede llevar entre 4 y 8 semanas. Te damos fechas concretas desde el primer día.',
  },
  {
    q: '¿Cuánto cuesta hacer un sitio web en Argentina?',
    a: 'Nuestros proyectos arrancan desde USD 300 para una landing page optimizada. El precio final depende de lo que necesite tu negocio: páginas, funcionalidades y nivel de diseño.',
  },
  {
    q: '¿Trabajan con clientes de todo el país?',
    a: 'Sí, trabajamos 100% remoto con clientes de toda Argentina y también del exterior. Te respondemos siempre directo, sin intermediarios.',
  },
  {
    q: '¿Qué tecnología usan?',
    a: 'Usamos tecnología moderna que hace que tu sitio sea rápido, seguro y fácil de mantener. El mismo tipo de tecnología que usan empresas como Nike, Airbnb y TikTok para sus sitios web.',
  },
];

export default function DesarrolloWebArgentinaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavSection />
      <main id="contenido" className="pt-[68px]">

        {/* Hero */}
        <section className="relative mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-mono text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-primary">Desarrollo Web Argentina</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-display-lg text-on-surface mb-6">
              Creamos el sitio web que tu negocio merece
            </h1>
            <p className="mb-8 text-body-md text-on-surface-variant max-w-2xl">
              Tu sitio web es la puerta de entrada a nuevos clientes. Nosotros lo construimos rápido, moderno y optimizado para que te encuentren en Google. Sin plantillas genéricas, sin vueltas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-medium text-on-primary transition-colors duration-200 ease-upcoded hover:bg-primary-container active:scale-[0.98]"
              >
                Pedir presupuesto gratis
              <PiArrowRight aria-hidden size={16} />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-outline-strong px-7 text-base font-medium text-on-surface transition-colors duration-200 ease-upcoded hover:border-primary hover:text-primary active:scale-[0.98]"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-outline-variant bg-surface-container-low py-16">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="text-headline-lg text-on-surface mb-4">
              Por qué elegirnos para tu proyecto web
            </h2>
            <p className="mb-16 max-w-2xl text-body-md text-on-surface-variant">
              No usamos plantillas ni tercerizamos el trabajo. Cada proyecto lo construimos desde cero pensando en tu negocio.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-[transform,border-color] duration-200 ease-upcoded hover:-translate-y-[3px] hover:border-primary"
                >
                  <div>
                    <h3 className="text-headline-md mb-2 text-on-surface">
                      {f.title}
                    </h3>
                    <p className="text-on-surface-variant">{f.description}</p>
                  </div>
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
              <div
                key={faq.q}
                className="rounded-lg border border-outline-variant bg-surface-container p-7"
              >
                <h3 className="text-headline-md mb-3 text-on-surface">
                  {faq.q}
                </h3>
                <p className="text-on-surface-variant">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="on-ink bg-ink py-24 text-on-ink">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <h2 className="text-headline-lg text-on-ink mb-4">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-md text-on-ink-variant">
              Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta concreta.
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
