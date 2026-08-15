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
              <p className="mb-6 font-mono text-[12px] uppercase tracking-widest text-on-surface-variant">
                — Servicios
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

        <div>
          {services.map((service, i) => (
            <FadeInView key={service.id} delay={i * 100}>
              <Link
                href={service.href}
                className="group grid grid-cols-1 items-start gap-4 border-t border-outline py-7 transition-colors duration-200 hover:border-on-surface md:grid-cols-[48px_1fr_auto] lg:grid-cols-[48px_1fr_1fr_auto] lg:gap-8 lg:py-8"
              >
                <p className="pt-[6px] font-mono text-[12px] tracking-wide text-on-surface-variant leading-none">
                  {service.id}
                </p>
                
                <h3 className="text-[clamp(22px,2.4vw,32px)] font-medium leading-snug tracking-tight text-on-surface transition-colors duration-200 group-hover:text-primary lg:col-span-1">
                  {service.title}
                </h3>
                
                <p className="hidden max-w-[380px] text-[0.9375rem] leading-relaxed text-on-surface-variant lg:block">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline bg-surface-dim px-2.5 py-1 font-mono text-[11px] text-on-surface-variant transition-colors group-hover:border-outline-variant"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-on-surface-variant transition-all duration-200 group-hover:border-outline group-hover:-rotate-45 group-hover:bg-surface-dim group-hover:text-on-surface">
                    <PiArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
          <div className="border-t border-outline"></div>
        </div>
      </div>
    </section>
  );
}
