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
  title: 'Automatización de Procesos para Empresas en Argentina | UpCoded',
  description:
    'Automatizamos procesos de tu negocio en Argentina: conectamos herramientas, eliminamos tareas manuales y mejoramos tu productividad. Ahorrá tiempo y recursos.',
  alternates: buildAlternates(locale, 'servicios/automatizaciones'),
  openGraph: {
    title: 'Automatización de Procesos en Argentina | UpCoded',
    description:
      'Conectamos tus herramientas y eliminamos tareas manuales. Menos trabajo repetitivo, más productividad.',
    url: localizedUrl(locale, 'servicios/automatizaciones'),
  },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automatización de Procesos',
  description:
    'Servicio de automatización de procesos de negocio en Argentina: conexión entre herramientas y eliminación de tareas manuales repetitivas.',
  provider: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: 'Automatización de Procesos',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '400',
      priceCurrency: 'USD',
    },
  },
};

const useCases = [
  { title: 'WhatsApp automático', description: 'Que tus clientes reciban respuestas al instante, sin que nadie tenga que escribir. Atención 24/7 sin esfuerzo.' },
  { title: 'Conexión entre herramientas', description: 'Conectamos tu WhatsApp, tu correo, tus redes y tus sistemas para que compartan información automáticamente.' },
  { title: 'Emails que se disparan solos', description: 'Cuando un cliente hace algo (completa un formulario, compra o se registra), recibe el mensaje justo sin que toques nada.' },
  { title: 'Sistemas que hablan entre sí', description: 'Si tenés varias herramientas que no se comunican, las conectamos para que trabajen juntas sin que intervengas.' },
  { title: 'Alertas inteligentes', description: 'Recibí una notificación en tu celular o mail cuando pase algo importante: una venta, un reclamo, un vencimiento.' },
  { title: 'Reportes automáticos', description: 'Todos los números de tu negocio llegan a tu mail o WhatsApp sin que nadie los tenga que armar a mano.' },
];

const faqs = [
  {
    q: '¿Qué procesos se pueden automatizar?',
    a: 'Cualquier tarea que se repita seguido: responder consultas, enviar presupuestos, pasar datos de un sistema a otro, generar reportes, enviar recordatorios. Si lo hacés a mano más de una vez por semana, se puede automatizar.',
  },
  {
    q: '¿Cuánto cuesta una automatización?',
    a: 'Desde USD 400. El precio depende de cuántas herramientas conectemos y la complejidad de lo que necesitás que hagan.',
  },
  {
    q: '¿Necesito saber de tecnología para usarlo?',
    a: 'No. Nosotros lo dejamos todo configurado y funcionando. Si hay algo que tengas que revisar, lo hacemos simple para que lo uses sin ayuda.',
  },
  {
    q: '¿Funciona con las herramientas que ya uso?',
    a: 'Sí. Conectamos WhatsApp, Instagram, Google Sheets, MercadoPago, redes sociales, sistemas de facturación y prácticamente cualquier herramienta que uses en tu negocio.',
  },
];

export default function AutomatizacionesPage() {
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
            <span className="text-primary">Automatizaciones</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-display-lg text-on-surface mb-6">
              Automaticá las tareas repetitivas de tu negocio
            </h1>
            <p className="mb-8 text-body-md text-on-surface-variant max-w-2xl">
              Conectamos tus herramientas para que el trabajo manual desaparezca. Más tiempo para lo importante, menos errores, menos estrés.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-medium text-on-primary transition-colors duration-200 ease-upcoded hover:bg-primary-container active:scale-[0.98]"
              >
                Quiero automatizar mi negocio
              <PiArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="text-headline-lg text-on-surface mb-16">
              Así podemos ayudarte
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-[transform,border-color] duration-200 ease-upcoded hover:-translate-y-[3px] hover:border-primary"
                >
                  <h3 className="text-headline-md mb-2 text-on-surface">{uc.title}</h3>
                  <p className="text-on-surface-variant">{uc.description}</p>
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
              ¿Qué proceso querés dejar de hacer a mano?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-body-md text-on-ink-variant">
              Contanos qué tarea se repite y te mostramos cómo automatizarla.
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
