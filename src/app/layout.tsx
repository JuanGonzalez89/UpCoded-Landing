import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
// @ts-ignore: global CSS is handled by Next.js
import './globals.css';

export const metadata: Metadata = {
  title: 'UpCoded | Agencia de Desarrollo Web — React, Next.js y Spring Boot',
  description:
    'Agencia de desarrollo web en Argentina. Construimos sitios, apps y automatizaciones con React, Next.js y Spring Boot. Rápido, limpio y sin los precios de una agencia grande.',
  keywords: [
    'agencia desarrollo web argentina',
    'desarrollo web react nextjs',
    'aplicaciones web a medida',
    'automatización whatsapp instagram',
    'diseño web profesional argentina',
    'upcoded',
  ],
  metadataBase: new URL('https://upcoded.dev'),
  openGraph: {
    title: 'UpCoded | Agencia de Desarrollo Web',
    description:
      'Sitios, apps y automatizaciones con React y Next.js. Entrega real, precio justo.',
    url: 'https://upcoded.dev',
    siteName: 'UpCoded',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpCoded | Agencia de Desarrollo Web',
    description: 'Sitios, apps y automatizaciones con React y Next.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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