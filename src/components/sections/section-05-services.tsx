import Link from 'next/link';

const services = [
  {
    title: 'Sitios y Landings',
    icon: 'web',
    description: 'Páginas ultrarrápidas optimizadas para conversión. Diseño único, nada de WordPress aburridos.',
    href: '/servicios/landing-pages-profesionales',
  },
  {
    title: 'Aplicaciones Web',
    icon: 'apps',
    description: 'Plataformas completas con lógica compleja, bases de datos y paneles de administración a medida.',
    href: '/servicios/aplicaciones-web-a-medida',
  },
  {
    title: 'Automatizaciones',
    icon: 'autorenew',
    description: 'Conectamos tus herramientas. Menos trabajo manual, más tiempo para hacer crecer tu negocio.',
    href: '/servicios/automatizaciones',
  },
  {
    title: 'Soporte y SEO',
    icon: 'support_agent',
    description: 'Mantenimiento técnico continuo y optimización para que te encuentren primero en Google.',
    href: '/servicios/desarrollo-web-argentina',
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop" id="servicios">
      <div className="mb-16 text-center">
        <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
          Lo que construimos para vos
        </h2>
        <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
          Desde una landing que convierte hasta una plataforma completa con panel de gestión. Sin plantillas genéricas. Sin letra chica.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="glow-hover flex h-full flex-col rounded-lg border border-outline-variant/30 bg-surface-container p-6 transition-colors hover:border-primary/50">
            <span className="material-symbols-outlined mb-4 text-4xl text-primary">{service.icon}</span>
            <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{service.title}</h3>
            <p className="mb-6 flex-grow font-body-md text-on-surface-variant">{service.description}</p>
            {/* TODO: Actualizar los href de "Saber más" cuando haya páginas de detalle */}
            {/* TODO: Cambiar íconos si se reemplaza Material Symbols por otra librería */}
            <Link className="mt-auto flex items-center gap-2 font-label-caps text-label-caps uppercase text-primary transition-colors hover:text-primary-fixed" href={service.href}>
              Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}