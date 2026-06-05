import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Aplicaciones Web a Medida en Argentina | UpCoded',
  description:
    'Desarrollo de aplicaciones web a medida en Argentina con React, Next.js y Spring Boot. Plataformas completas con backend, base de datos y panel de administración.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/aplicaciones-web-a-medida',
  },
  openGraph: {
    title: 'Aplicaciones Web a Medida en Argentina | UpCoded',
    description:
      'Plataformas completas con backend, base de datos y panel de administración. Stack: React, Next.js y Spring Boot.',
    url: 'https://upcoded.dev/servicios/aplicaciones-web-a-medida',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aplicaciones Web a Medida',
  description:
    'Desarrollo de aplicaciones web complejas en Argentina con React, Next.js y Spring Boot. Incluye backend, base de datos y panel de administración.',
  provider: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  areaServed: { '@type': 'Country', name: 'Argentina' },
  serviceType: 'Aplicación Web',
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
  { icon: 'storage', title: 'Backend & Base de datos', description: 'APIs REST con Spring Boot, bases de datos relacionales y no relacionales, autenticación JWT.' },
  { icon: 'admin_panel_settings', title: 'Panel de administración', description: 'Dashboard a medida para gestionar tu plataforma sin depender de un técnico.' },
  { icon: 'people', title: 'Autenticación de usuarios', description: 'Login, registro, roles y permisos. OAuth con Google, GitHub o tu propio sistema.' },
  { icon: 'integration_instructions', title: 'Integraciones externas', description: 'Conectamos con Stripe, MercadoPago, WhatsApp Business, HubSpot, Slack y más.' },
  { icon: 'cloud_upload', title: 'Deploy en la nube', description: 'Frontend en Vercel, backend en contenedores Docker. Escalable desde el día 1.' },
  { icon: 'trending_up', title: 'Arquitectura escalable', description: 'Código modular con principios SOLID. Preparado para crecer sin reescribir todo.' },
];

const faqs = [
  {
    q: '¿Qué diferencia hay entre una landing page y una aplicación web?',
    a: 'Una landing page es un sitio estático o semi-estático para presentar tu negocio. Una aplicación web tiene lógica de negocio, usuarios, datos en tiempo real y paneles de administración.',
  },
  {
    q: '¿Cuánto cuesta desarrollar una aplicación web en Argentina?',
    a: 'Nuestras aplicaciones web arrancan desde USD 1.200 para un MVP funcional. El precio final depende de la complejidad del backend, cantidad de integraciones y funcionalidades requeridas.',
  },
  {
    q: '¿Usan React o Next.js para aplicaciones web complejas?',
    a: 'Sí. Next.js es ideal tanto para sitios de marketing como para aplicaciones complejas gracias a su arquitectura híbrida. Para el backend usamos Spring Boot con Java cuando se requiere robustez empresarial.',
  },
  {
    q: '¿Me entregan el código fuente?',
    a: 'Sí, el código es tuyo al 100%. Te entregamos el repositorio completo con documentación técnica y acceso a todos los servicios configurados.',
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
      <main className="pt-20">

        {/* Hero */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-primary">Aplicaciones Web</span>
          </nav>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-label-caps text-label-caps uppercase text-primary">
              Servicio — Aplicaciones Web
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Aplicaciones web a medida con React y Spring Boot
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Plataformas completas con frontend moderno, backend robusto y base de datos. Si tu negocio necesita más que un sitio web, acá construimos la solución técnica exacta que necesitás.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
              >
                Discutir mi proyecto
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/#portfolio"
                className="glow-hover flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10"
              >
                Ver casos reales
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-16 md:font-display-lg md:text-display-lg">
              Qué podemos construir para vos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="glow-hover rounded-lg border border-outline-variant/30 bg-surface p-6 transition-colors hover:border-primary/50"
                >
                  <span className="material-symbols-outlined mb-4 text-3xl text-primary block">{c.icon}</span>
                  <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{c.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{c.description}</p>
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
              ¿Tenés una idea que necesita backend?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body-md text-body-md text-on-surface-variant">
              Contanos qué necesitás construir. Te damos una propuesta técnica concreta en menos de 24 horas.
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
