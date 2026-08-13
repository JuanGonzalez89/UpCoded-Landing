import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';

type Service = {
  title: string;
  description: string;
  price?: string;
  href: string;
  /** Celda ancha del bento. Exactamente dos de las cuatro la usan. */
  wide?: boolean;
  /** Unica celda en tinta clara de acento, para romper el blanco sobre blanco. */
  tinted?: boolean;
  image?: { src: string; alt: string };
};

const services: Service[] = [
  {
    title: 'Sitios y Landings',
    description:
      'Páginas ultrarrápidas optimizadas para conversión. Diseño único, nada de WordPress aburridos.',
    price: 'Desde USD 300',
    href: '/servicios/landing-pages-profesionales',
    wide: true,
    image: {
      src: '/portfolio/JaraYAsociados/JaraYAsociados_Preview.png',
      alt: 'Landing institucional del estudio jurídico Jara y Asociados',
    },
  },
  {
    title: 'Aplicaciones Web',
    description:
      'Sistemas completos que manejan usuarios, datos y procesos complejos para tu negocio.',
    price: 'Desde USD 1.200',
    href: '/servicios/aplicaciones-web-a-medida',
    tinted: true,
  },
  {
    title: 'Automatizaciones',
    description:
      'Conectamos tus herramientas. Menos trabajo manual, más tiempo para hacer crecer tu negocio.',
    price: 'Desde USD 400',
    href: '/servicios/automatizaciones',
  },
  {
    title: 'Soporte y SEO',
    description:
      'Mantenimiento técnico continuo y optimización para que te encuentren primero en Google.',
    href: '/servicios/desarrollo-web-argentina',
    wide: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="px-margin-mobile py-24 md:px-margin-desktop lg:py-32" id="servicios">
      <div className="mx-auto max-w-container-max">
        <div className="max-w-measure">
          <h2 className="text-headline-lg text-on-surface">Lo que construimos para vos</h2>
          <p className="mt-5 text-body-md text-on-surface-variant">
            Desde una landing que convierte hasta una plataforma completa con panel de gestión.
            Sin plantillas genéricas. Sin letra chica.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeInView
              key={service.title}
              delay={i * 70}
              className={service.wide ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <Link
                href={service.href}
                className={`group flex h-full flex-col rounded-lg border p-7 transition-[transform,border-color] duration-200 ease-upcoded hover:-translate-y-[3px] hover:border-primary active:scale-[0.99] ${
                  service.tinted
                    ? 'border-transparent bg-primary-tint'
                    : 'border-outline-variant bg-surface-container'
                }`}
              >
                {service.price ? (
                  <p className="font-mono text-label-caps uppercase text-primary">
                    {service.price}
                  </p>
                ) : null}

                <h3 className="mt-3 text-headline-md text-on-surface">{service.title}</h3>

                <p className="mt-2.5 max-w-[46ch] text-body-sm text-on-surface-variant">
                  {service.description}
                </p>

                {/* Las capturas son de pagina completa, muy altas. Se recortan a 16/9
                    desde arriba para que la celda ancha no desbalancee el bento. */}
                {service.image ? (
                  <div className="relative mt-7 aspect-[16/9] overflow-hidden rounded-md border border-outline-variant">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}

                <span className="mt-auto flex items-center gap-1.5 pt-7 text-[0.9375rem] font-medium text-primary">
                  Saber más
                  <PiArrowUpRight
                    aria-hidden
                    size={15}
                    className="transition-transform duration-200 ease-upcoded group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
