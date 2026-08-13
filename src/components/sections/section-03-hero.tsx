import Image from 'next/image';
import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';

export default function HeroSection() {
  return (
    <section className="px-margin-mobile pb-20 pt-[104px] md:px-margin-desktop lg:pb-28 lg:pt-[132px]">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <FadeInView className="lg:col-span-7">
          <h1 className="text-display-lg text-on-surface">
            La web que tu negocio necesita, en 2 semanas.
          </h1>

          <p className="mt-6 max-w-measure text-body-md text-on-surface-variant">
            Sitios, sistemas a medida y automatizaciones. El equipo técnico que necesitás, sin
            los precios de una agencia grande.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-on-primary transition-colors duration-200 ease-upcoded hover:bg-primary-container active:scale-[0.98]"
              href="#contacto"
            >
              Hablemos
            </Link>
            <Link
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-outline-strong px-7 text-base font-medium text-on-surface transition-colors duration-200 ease-upcoded hover:border-primary hover:text-primary active:scale-[0.98]"
              href="#portfolio"
            >
              Ver nuestro trabajo
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={120} className="lg:col-span-5">
          <figure className="m-0">
            <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
              <Image
                src="/portfolio/Patagonia_Motors/Preview_Patagonia_Motors.png"
                alt="Sitio de Patagonia Motors con el catálogo de vehículos en pantalla"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-code-sm text-on-surface-variant">
              <Link
                className="underline decoration-outline-strong underline-offset-4 transition-colors duration-200 ease-upcoded hover:text-primary hover:decoration-primary"
                href="/portfolio/patagonia-motors"
              >
                Patagonia Motors
              </Link>
              , entregado en 2 semanas
            </figcaption>
          </figure>
        </FadeInView>
      </div>
    </section>
  );
}
