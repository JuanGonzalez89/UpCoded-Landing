import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Automatización de Procesos para Empresas en Argentina | UpCoded',
  description:
    'Automatizamos procesos de tu negocio en Argentina: conectamos herramientas, eliminamos tareas manuales y mejoramos tu productividad. Ahorrá tiempo y recursos.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/automatizaciones',
  },
  openGraph: {
    title: 'Automatización de Procesos en Argentina | UpCoded',
    description:
      'Conectamos tus herramientas y eliminamos tareas manuales. Menos trabajo repetitivo, más productividad.',
    url: 'https://upcoded.dev/servicios/automatizaciones',
  },
};

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
  { icon: 'chat', title: 'WhatsApp automático', description: 'Que tus clientes reciban respuestas al instante, sin que nadie tenga que escribir. Atención 24/7 sin esfuerzo.' },
  { icon: 'sync_alt', title: 'Conexión entre herramientas', description: 'Conectamos tu WhatsApp, tu correo, tus redes y tus sistemas para que compartan información automáticamente.' },
  { icon: 'mail', title: 'Emails que se disparan solos', description: 'Cuando un cliente hace algo —completa un formulario, compra, se registra— recibe el mensaje justo sin que toques nada.' },
  { icon: 'tonality', title: 'Sistemas que hablan entre sí', description: 'Si tenés varias herramientas que no se comunican, las conectamos para que trabajen juntas sin que intervengas.' },
  { icon: 'notifications_active', title: 'Alertas inteligentes', description: 'Recibí una notificación en tu celular o mail cuando pase algo importante: una venta, un reclamo, un vencimiento.' },
  { icon: 'table_chart', title: 'Reportes automáticos', description: 'Todos los números de tu negocio llegan a tu mail o WhatsApp sin que nadie los tenga que armar a mano.' },
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
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Automaticá las tareas repetitivas de tu negocio
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Conectamos tus herramientas para que el trabajo manual desaparezca. Más tiempo para lo importante, menos errores, menos estrés.
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
              Así podemos ayudarte
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
              Contanos qué tarea se repite y te mostramos cómo automatizarla.
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
