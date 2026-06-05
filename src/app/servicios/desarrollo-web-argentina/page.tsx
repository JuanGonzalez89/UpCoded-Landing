import type { Metadata } from 'next';
import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Desarrollo Web en Argentina | React & Next.js — UpCoded',
  description:
    'Agencia de desarrollo web en Argentina especializada en React y Next.js. Sitios rápidos, escalables y optimizados para conversión. Entrega en semanas, no meses.',
  alternates: {
    canonical: 'https://upcoded.dev/servicios/desarrollo-web-argentina',
  },
  openGraph: {
    title: 'Desarrollo Web en Argentina | UpCoded',
    description:
      'Agencia de desarrollo web en Argentina especializada en React y Next.js. Sitios rápidos, escalables y optimizados.',
    url: 'https://upcoded.dev/servicios/desarrollo-web-argentina',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desarrollo Web en Argentina',
  description:
    'Servicio de desarrollo web profesional en Argentina con React, Next.js y Spring Boot. Sitios rápidos, escalables y optimizados para conversión.',
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

const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'];

const features = [
  {
    icon: 'speed',
    title: 'Performance real',
    description:
      'Sitios con Core Web Vitals en verde. Carga rápida = mejor SEO y más conversiones.',
  },
  {
    icon: 'devices',
    title: 'Responsive de verdad',
    description:
      'Diseño adaptado a mobile, tablet y desktop desde el primer commit. Sin parches.',
  },
  {
    icon: 'search',
    title: 'SEO técnico incluido',
    description:
      'Metadata, schema JSON-LD, sitemap y canonical configurados en cada entrega.',
  },
  {
    icon: 'lock',
    title: 'Seguro y escalable',
    description:
      'Stack moderno con TypeScript estricto. Código que podés mantener y escalar.',
  },
];

const faqs = [
  {
    q: '¿Cuánto tarda el desarrollo de un sitio web en Argentina?',
    a: 'Para una landing page o sitio institucional, entregamos en 2 a 3 semanas. Una aplicación web completa puede tomar entre 4 y 8 semanas dependiendo del alcance.',
  },
  {
    q: '¿Cuánto cuesta hacer un sitio web en Argentina?',
    a: 'Nuestros proyectos arrancan desde USD 300 para una landing page optimizada. El precio final depende del alcance, funcionalidades y nivel de diseño requerido.',
  },
  {
    q: '¿Trabajan con clientes de todo Argentina o solo Buenos Aires?',
    a: 'Trabajamos 100% de forma remota con clientes de todo el país y también del exterior. El trato es siempre directo con el equipo técnico.',
  },
  {
    q: '¿Qué tecnologías usan para el desarrollo web?',
    a: 'Usamos React y Next.js para el frontend, Spring Boot para backends complejos, y desplegamos en Vercel. El mismo stack que usan empresas como Vercel, Airbnb o Netflix.',
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
      <main className="pt-20">

        {/* Hero */}
        <section className="relative mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-primary">Desarrollo Web Argentina</span>
          </nav>

          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-label-caps text-label-caps uppercase text-primary">
              Agencia de Desarrollo Web — Argentina
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              Desarrollo web en Argentina con React y Next.js
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Construimos sitios web y aplicaciones rápidas, limpias y optimizadas para búsqueda. Sin templates genéricos, sin WordPress. Código a medida con el stack que usan las empresas de tecnología más grandes del mundo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
              >
                Pedir presupuesto gratis
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/#portfolio"
                className="glow-hover flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-y border-outline-variant/30 bg-surface-container-low py-8">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="mb-4 text-center font-label-caps text-label-caps uppercase text-on-surface-variant">
              Stack tecnológico
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-outline-variant/30 bg-surface-container px-4 py-2 font-label-caps text-label-caps uppercase text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            Por qué elegir UpCoded para tu proyecto web
          </h2>
          <p className="mb-16 max-w-2xl font-body-md text-body-md text-on-surface-variant">
            No somos una agencia que terceriza o usa templates. Cada proyecto lo construimos desde cero con el stack correcto para tu negocio.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="glow-hover flex gap-4 rounded-lg border border-outline-variant/30 bg-surface-container p-6 transition-colors hover:border-primary/50"
              >
                <span className="material-symbols-outlined mt-1 text-2xl text-primary shrink-0">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                    {f.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">{f.description}</p>
                </div>
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
                <div
                  key={faq.q}
                  className="rounded-lg border border-outline-variant/30 bg-surface p-6"
                >
                  <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">
                    {faq.q}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 text-center md:px-margin-desktop">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-body-md text-body-md text-on-surface-variant">
            Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta concreta.
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
