import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
// @ts-ignore: global CSS is handled by Next.js
import './globals.css';

export const metadata: Metadata = {
  title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
  description:
    'Agencia de desarrollo web en Argentina. Construimos sitios, apps y automatizaciones a medida con React, Next.js y Spring Boot. Rápido, limpio y escalable.',
  keywords: [
    'agencia desarrollo web argentina',
    'desarrollo web react nextjs',
    'aplicaciones web a medida',
    'empresa desarrollo web argentina',
    'diseño web profesional argentina',
    'desarrollo web buenos aires',
    'automatización web argentina',
    'upcoded',
  ],
  metadataBase: new URL('https://upcoded.dev'),
  alternates: {
    canonical: 'https://upcoded.dev',
  },
  openGraph: {
    title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
    description:
      'Construimos sitios, apps y automatizaciones a medida con React, Next.js y Spring Boot. Rápido, limpio y escalable.',
    url: 'https://upcoded.dev',
    siteName: 'UpCoded',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UpCoded - Agencia de Desarrollo Web en Argentina',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
    description:
      'Construimos sitios, apps y automatizaciones a medida con React, Next.js y Spring Boot.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://upcoded.dev/#organization',
      name: 'UpCoded',
      url: 'https://upcoded.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://upcoded.dev/portfolio/logo_upcoded/Logo_Upcoded_512x512.png',
        width: 512,
        height: 512,
      },
      description:
        'Agencia de desarrollo web en Argentina especializada en React, Next.js y Spring Boot. Construimos sitios, apps y automatizaciones a medida.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AR',
        addressLocality: 'Argentina',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'upcodednow@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['Spanish'],
        areaServed: 'AR',
      },
      sameAs: [
        'https://www.instagram.com/upcoded/',
        'https://www.linkedin.com/company/upcoded-desarrollo-web-y-apps-para-negocios/',
        'https://x.com/upcodednow',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Desarrollo Web',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sitios Web y Landing Pages',
              description:
                'Páginas ultrarrápidas optimizadas para conversión. Diseño único con React y Next.js.',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '300',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Aplicaciones Web a Medida',
              description:
                'Plataformas completas con lógica compleja, bases de datos y paneles de administración.',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1200',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automatizaciones',
              description:
                'Integración de APIs, workflows automatizados y webhooks personalizados.',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '400',
              priceCurrency: 'USD',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://upcoded.dev/#website',
      url: 'https://upcoded.dev',
      name: 'UpCoded',
      description: 'Agencia de desarrollo web en Argentina',
      publisher: { '@id': 'https://upcoded.dev/#organization' },
      inLanguage: 'es-AR',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://upcoded.dev/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://upcoded.dev/#webpage',
      url: 'https://upcoded.dev',
      name: 'Agencia de Desarrollo Web en Argentina | UpCoded',
      isPartOf: { '@id': 'https://upcoded.dev/#website' },
      about: { '@id': 'https://upcoded.dev/#organization' },
      inLanguage: 'es-AR',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: 'https://upcoded.dev',
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="es-AR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
