import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Automatizaciones Web para Empresas en Argentina | UpCoded',
  description:
    'Automatizamos procesos de negocio en Argentina: integraciones de APIs, workflows, WhatsApp Business, webhooks y conexión entre herramientas. Ahorrá tiempo y escalá.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/automatizaciones',
  },
  openGraph: {
    title: 'Automatizaciones Web para Empresas en Argentina | UpCoded',
    description:
      'Integraciones de APIs, workflows, WhatsApp Business y webhooks. Menos trabajo manual, más escala.',
    url: 'https://upcoded.dev/servicios/automatizaciones',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automatizaciones Web para Empresas',
  description:
    'Servicio de automatización de procesos de negocio en Argentina: integraciones de APIs, workflows automatizados y webhooks personalizados.',
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
  { icon: 'whatsapp', title: 'WhatsApp Business API', description: 'Notificaciones automáticas, respuestas programadas y flujos de atención al cliente sin intervención manual.' },
  { icon: 'sync_alt', title: 'Integración entre herramientas', description: 'Conectamos tu CRM, tu tienda online, tu sistema contable y tu equipo en un solo flujo sin trabajo duplicado.' },
  { icon: 'mail', title: 'Email marketing automatizado', description: 'Secuencias de emails disparadas por comportamiento del usuario, integradas con tu stack actual.' },
  { icon: 'webhook', title: 'Webhooks personalizados', description: 'Conectamos cualquier sistema que tenga API. Si tiene endpoints, lo conectamos.' },
  { icon: 'notifications_active', title: 'Alertas y monitoreo', description: 'Notificaciones en Slack, email o Telegram cuando sucede algo importante en tu negocio.' },
  { icon: 'table_chart', title: 'Reportes automáticos', description: 'Datos de tu negocio consolidados y enviados automáticamente en el formato que necesitás.' },
];

const faqs = [
  {
    q: '¿Qué tipo de automatizaciones pueden implementar?',
    a: 'Cualquier proceso que se repita manualmente y tenga una API disponible. Notificaciones por WhatsApp, sincronización entre sistemas, disparadores por eventos, reportes automáticos y más.',
  },
  {
    q: '¿Cuánto cuesta una automatización?',
    a: 'Nuestros proyectos de automatización arrancan desde USD 400. El precio depende de la cantidad de integraciones, la complejidad del flujo y si se requiere infraestructura propia.',
  },
  {
    q: '¿Necesito tener conocimientos técnicos para usar las automatizaciones?',
    a: 'No. Entregamos todo configurado y probado. Si hay un panel de control, lo hacemos simple para que lo puedas operar sin ayuda técnica.',
  },
  {
    q: '¿Pueden automatizar procesos con herramientas como HubSpot, Notion o Google Sheets?',
    a: 'Sí. Trabajamos con las APIs de HubSpot, Notion, Google Sheets, Airtable, Slack, Stripe, MercadoPago y cualquier herramienta que tenga integración disponible.',
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
      <main className="pt-20">

        {/* Hero */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-primary">Automatizaciones</span>
          </nav>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-label-caps text-label-caps uppercase text-primary">
              Servicio — Automatizaciones
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Automatizaciones que le ahorran tiempo a tu equipo
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Conectamos tus herramientas, eliminamos el trabajo manual repetitivo y construimos flujos que funcionan solos. Más tiempo para lo que importa, menos errores humanos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
              >
                Quiero automatizar mi negocio
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-16 md:font-display-lg md:text-display-lg">
              Qué podemos automatizar
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="glow-hover rounded-lg border border-outline-variant/30 bg-surface p-6 transition-colors hover:border-primary/50"
                >
                  <span className="material-symbols-outlined mb-4 text-3xl text-primary block">{uc.icon}</span>
                  <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{uc.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-16 md:font-display-lg md:text-display-lg">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-outline-variant/30 bg-surface-container p-6">
                <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">{faq.q}</h3>
                <p className="font-body-md text-on-surface-variant">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile py-8 text-center md:px-margin-desktop">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
              ¿Qué proceso querés dejar de hacer a mano?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body-md text-body-md text-on-surface-variant">
              Contanos el proceso y te mostramos cómo automatizarlo.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
            >
              Quiero una propuesta gratuita
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>

      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
