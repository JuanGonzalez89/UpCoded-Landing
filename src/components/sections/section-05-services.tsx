import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: '01',
    title: 'Aplicaciones Web',
    description:
      'Sistemas completos que manejan usuarios, datos y lógicas de negocio complejas. Desde la idea hasta el deploy en producción.',
    href: '/servicios/aplicaciones-web-a-medida',
    tags: ['React', 'Next.js', 'Postgres'],
  },
  {
    id: '02',
    title: 'Automatizaciones',
    description:
      'Conectamos tus herramientas para eliminar el trabajo manual. Bots, sincronización de datos y flujos de trabajo autónomos.',
    href: '/servicios/automatizaciones',
    tags: ['Python', 'APIs', 'Workflows'],
  },
  {
    id: '03',
    title: 'Sitios y Landings',
    description:
      'Páginas ultrarrápidas optimizadas para conversión y posicionamiento orgánico. Diseño único e interactivo.',
    href: '/servicios/landing-pages-profesionales',
    tags: ['UX/UI', 'Framer', 'SEO'],
  },
  {
    id: '04',
    title: 'Soporte y Evolución',
    description:
      'Mantenimiento técnico continuo, optimización de performance y nuevas features para que tu plataforma nunca quede obsoleta.',
    href: '/servicios/desarrollo-web-argentina',
    tags: ['Cloud', 'DevOps', 'Scale'],
  },
];

export default function ServicesSection() {
  return (
    <section className="px-margin-mobile py-24 md:px-margin-desktop lg:py-32" id="servicios">
      <div className="mx-auto max-w-container-max">
        <div className="mb-20 grid grid-cols-1 items-end gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <FadeInView>
              <p className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
                // Servicios
              </p>
            </FadeInView>
            <FadeInView delay={100}>
              <h2 className="m-0 text-[clamp(36px,5.4vw,72px)] font-medium leading-none tracking-tighter text-on-surface">
                Tres disciplinas.<br />Un equipo.
              </h2>
            </FadeInView>
          </div>
          <FadeInView delay={200}>
            <p className="m-0 max-w-[480px] text-[1.0625rem] leading-relaxed text-on-surface-variant">
              Desarrollo, automatización y diseño web en un solo lugar. Sin intermediarios, sin perder el hilo. Tu proyecto en manos del mismo equipo de principio a fin.
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeInView key={service.id} delay={i * 100}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline bg-surface-container p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.1)] lg:p-10"
              >
                {/* Giant Outline Number Background */}
                <div className="absolute -right-4 -top-8 select-none text-[180px] font-bold leading-none tracking-tighter text-transparent opacity-10 transition-all duration-500 group-hover:-translate-x-4 group-hover:scale-110 group-hover:opacity-20 group-hover:text-primary" style={{ WebkitTextStroke: '2px currentColor' }}>
                  {service.id}
                </div>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-outline bg-surface px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-on-surface-variant transition-colors group-hover:border-primary/30 group-hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-medium tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  
                  <p className="mb-8 max-w-[400px] text-[1.0625rem] leading-relaxed text-on-surface-variant">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 font-mono text-[13px] font-medium tracking-wide text-primary transition-transform duration-300 group-hover:translate-x-2">
                    Saber más
                    <PiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
