import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import './globals.css';

export const metadata: Metadata = {
  title: 'UpCoded | Tu negocio merece un equipo técnico de verdad.',
  description: 'Agencia de desarrollo web en Argentina. React, Next.js y Spring Boot. Entregamos rápido, construimos bien.'
};

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