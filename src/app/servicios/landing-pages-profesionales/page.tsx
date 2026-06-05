import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Landing Pages Profesionales en Argentina | UpCoded',
  description:
    'Diseño y desarrollo de landing pages profesionales en Argentina. Optimizadas para convertir visitas en clientes. Rápidas, únicas y listas en 2 semanas.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/landing-pages-profesionales',
  },
  openGraph: {
    title: 'Landing Pages Profesionales en Argentina | UpCoded',
    description:
      'Landing pages diseñadas para convertir visitas en clientes. Entrega en 2 semanas.',
    url: 'https://upcoded.dev/servicios/landing-pages-profesionales',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landing Pages Profesionales',
  description:
    'Diseño y desarrollo de landing pages profesionales en Argentina, optimizadas para conversión y posicionamiento en Google.',
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
  { icon: 'trending_up', title: 'Diseñada para vender', description: 'Cada sección, cada botón y cada texto está pensado para que quien entre quiera contactarte.' },
  { icon: 'bolt', title: 'Carga en un abrir y cerrar de ojos', description: 'Un sitio rápido no es un lujo: es lo que Google premia y los usuarios esperan. El nuestro carga en menos de 1 segundo.' },
  { icon: 'palette', title: 'Diseño único, hecho a tu medida', description: 'Nada de plantillas genéricas. Tu identidad, tus colores, tu estilo. Código limpio desde cero.' },
  { icon: 'phone_iphone', title: 'Pensado para celulares primero', description: 'Más del 70% de las visitas llegan desde el teléfono. Diseñamos para que se vea impecable ahí.' },
  { icon: 'search', title: 'Optimizada para Google desde el día 1', description: 'Configuramos todo para que aparezcas en los resultados de búsqueda. Sin pasos extra después.' },
  { icon: 'support_agent', title: 'Acompañamiento post-lanzamiento', description: 'Después de publicar, seguimos ahí. Ajustes rápidos incluidos durante el primer mes.' },
];

const faqs = [
  {
    q: '¿Cuánto cuesta una landing page profesional en Argentina?',
    a: 'Desde USD 300. El precio varía según las secciones, si necesita formularios, integraciones con otras herramientas y el nivel de diseño que quieras.',
  },
  {
    q: '¿En cuánto tiempo la tienen lista?',
    a: 'En promedio 2 semanas desde que arrancamos. Si es más compleja, hasta 3 semanas. Te damos una fecha clara desde el principio.',
  },
  {
    q: '¿Mi landing page va a aparecer en Google?',
    a: 'Sí. Configuramos todo lo necesario para que Google la encuentre y la muestre: estructura, etiquetas, velocidad y contenido optimizado.',
  },
  {
    q: '¿Pueden conectar el formulario con mi WhatsApp o mail?',
    a: 'Sí, podemos enviar los datos del formulario directo a tu WhatsApp, a tu correo, a un Google Sheets o al sistema que uses. Lo configuramos a tu medida.',
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
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Landing pages que convierten visitas en clientes
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Una landing page bien hecha es la diferencia entre un visitante que se va y uno que te escribe. Las nuestras son rápidas, únicas y optimizadas para que Google las encuentre.
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
            <p className="mt-2 font-body-md text-on-surface-variant">Entrega promedio: 2 semanas — Incluye optimización para Google</p>
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
