import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import { LOCALES, SITE_URL, buildAlternates, localizedUrl, toLocale } from '@/lib/seo';
// @ts-ignore: global CSS is handled by Next.js
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans', // Keeping the variable name so we don't break tailwind classes
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
  themeColor: '#09090B',
  colorScheme: 'dark',
};

/** Prerenderiza /es y /en en el build en vez de resolverlos on-demand. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const locale = toLocale(params.lang);

  return {
  title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
  description:
    'Agencia de desarrollo web en Argentina. Sitios, sistemas y automatizaciones a medida para que tu negocio consiga más clientes y trabaje menos a mano.',
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
  metadataBase: new URL(SITE_URL),
  alternates: buildAlternates(locale),
  openGraph: {
    title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
    description:
      'Sitios, sistemas y automatizaciones a medida para conseguir más clientes y trabajar menos a mano.',
    url: localizedUrl(locale),
    siteName: 'UpCoded',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UpCoded - Agencia de Desarrollo Web en Argentina',
      },
    ],
    locale: locale === 'en' ? 'en_US' : 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Desarrollo Web en Argentina | UpCoded',
    description:
      'Sitios, sistemas y automatizaciones para conseguir más clientes.',
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
}

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
        'Agencia de desarrollo web en Argentina. Sitios, sistemas y automatizaciones a medida para que tu negocio consiga más clientes.',
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
                'Páginas que aparecen en Google y convierten visitas en consultas.',
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
                'Sistemas a medida para ordenar clientes, ventas y stock en un solo lugar.',
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
                'Bots y conexiones entre tus herramientas para dejar de hacer tareas repetitivas a mano.',
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
      url: 'https://upcoded.dev/es',
      name: 'UpCoded',
      description: 'Agencia de desarrollo web en Argentina',
      publisher: { '@id': 'https://upcoded.dev/#organization' },
      inLanguage: ['es-AR', 'en'],
      // Sin SearchAction: el sitio no tiene buscador interno, y la plantilla
      // /?q={search_term_string} terminaba siendo rastreada como URL literal.
    },
  ],
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  return (
    <html lang={lang} className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-sans text-body-md text-on-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          <a className="skip-link" href="#contenido">
            Ir al contenido
          </a>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
