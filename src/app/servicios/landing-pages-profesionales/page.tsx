import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Landing Pages Profesionales en Argentina | UpCoded',
  description:
    'Diseño y desarrollo de landing pages profesionales en Argentina. Optimizadas para conversión, velocidad y SEO. Entrega en 2 semanas con React y Next.js.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/landing-pages-profesionales',
  },
  openGraph: {
    title: 'Landing Pages Profesionales en Argentina | UpCoded',
    description:
      'Landing pages optimizadas para conversión, velocidad y SEO. Entrega en 2 semanas.',
    url: 'https://upcoded.dev/servicios/landing-pages-profesionales',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landing Pages Profesionales',
  description:
    'Diseño y desarrollo de landing pages profesionales en Argentina, optimizadas para conversión y SEO con React y Next.js.',
  provider: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: 'Landing Page',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '300',
      priceCurrency: 'USD',
    },
  },
};

const benefits = [
  { icon: 'trending_up', title: 'Optimizada para conversión', description: 'Estructura, copy y CTAs diseñados para convertir visitantes en leads o clientes.' },
  { icon: 'bolt', title: 'Carga en menos de 1 segundo', description: 'Next.js + Vercel Edge Network. Puntuación 90+ en Google PageSpeed garantizada.' },
  { icon: 'palette', title: 'Diseño único a medida', description: 'Sin templates de Wix o WordPress. Tu marca, tu identidad, código limpio.' },
  { icon: 'phone_iphone', title: 'Mobile-first', description: 'Más del 70% del tráfico viene de mobile. Diseñamos para ese usuario primero.' },
  { icon: 'search', title: 'SEO desde el día 1', description: 'Schema, meta tags, canonical y sitemap configurados en la entrega.' },
  { icon: 'support_agent', title: 'Soporte post-lanzamiento', description: 'Te acompañamos después del deploy. Ajustes rápidos incluidos el primer mes.' },
];

const faqs = [
  {
    q: '¿Cuánto cuesta una landing page profesional en Argentina?',
    a: 'Nuestras landing pages arrancan desde USD 300. El precio varía según la cantidad de secciones, integraciones (formularios, CRM, analytics) y nivel de diseño requerido.',
  },
  {
    q: '¿En cuánto tiempo entregan una landing page?',
    a: 'El tiempo promedio de entrega es de 2 semanas desde el kickoff. Proyectos más complejos con integraciones pueden tomar hasta 3 semanas.',
  },
  {
    q: '¿La landing page va a aparecer en Google?',
    a: 'Sí. Configuramos SEO técnico completo: metadata, schema JSON-LD, sitemap y velocidad optimizada, que son los factores técnicos más importantes para posicionarse.',
  },
  {
    q: '¿Pueden integrar el formulario con mi CRM o WhatsApp?',
    a: 'Sí, integramos formularios con Resend, HubSpot, Notion, Google Sheets o redirigimos directamente a WhatsApp Business según lo que necesites.',
  },
];

export default function LandingPagesProfesionalesPage() {
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
            <span className="text-primary">Landing Pages</span>
          </nav>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-label-caps text-label-caps uppercase text-primary">
              Servicio — Landing Pages
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Landing pages que convierten visitas en clientes
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Diseñamos y desarrollamos landing pages profesionales en Argentina con React y Next.js. Rápidas, únicas y optimizadas para que Google las encuentre y los usuarios actúen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
              >
                Quiero mi landing page
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/#portfolio"
                className="glow-hover flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10"
              >
                Ver ejemplos reales
              </Link>
            </div>
          </div>
        </section>

        {/* Precio destacado */}
        <section className="border-y border-outline-variant/30 bg-surface-container-low py-10">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <p className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2">Precio</p>
            <p className="font-display-lg text-display-lg text-primary">
              Desde USD 300
            </p>
            <p className="mt-2 font-body-md text-on-surface-variant">Entrega promedio: 2 semanas — Incluye SEO técnico</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-16 md:font-display-lg md:text-display-lg">
            Qué incluye cada landing page
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glow-hover rounded-lg border border-outline-variant/30 bg-surface-container p-6 transition-colors hover:border-primary/50"
              >
                <span className="material-symbols-outlined mb-4 text-3xl text-primary block">{b.icon}</span>
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{b.title}</h3>
                <p className="font-body-md text-on-surface-variant">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-16 md:font-display-lg md:text-display-lg">
              Preguntas frecuentes
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg border border-outline-variant/30 bg-surface p-6">
                  <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">{faq.q}</h3>
                  <p className="font-body-md text-on-surface-variant">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 text-center md:px-margin-desktop">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            ¿Listo para tener una landing que venda?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-body-md text-body-md text-on-surface-variant">
            Contanos tu proyecto y te enviamos una propuesta en menos de 24 horas.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
          >
            Quiero una propuesta gratuita
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </section>

      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
