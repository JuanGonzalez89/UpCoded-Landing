import { DottedSurface } from '@/components/ui/dotted-surface';
import { FadeInView } from '@/components/ui/fade-in-view';
import { Typewriter } from '@/components/ui/typewriter';
import WireframeDottedGlobe from '@/components/ui/wireframe-dotted-globe';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[614px] items-center overflow-hidden px-margin-mobile py-16 md:py-24 md:px-margin-desktop">
      <DottedSurface />

      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-2">
        <FadeInView className="flex flex-col gap-6" delay={0}>
          {/* TODO: H1 — ajustar si cambian el copy principal */}
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow md:font-display-lg md:text-display-lg">
            Creamos la{' '}
            <Typewriter
              text={['página web', 'app a medida', 'automatización']}
              speed={70}
              deleteSpeed={40}
              waitTime={2500}
              cursorChar=""
              showCursor={false}
            />
            {' '}que tu negocio necesita en 2 semanas.
          </h1>

          <p className="font-body-md text-body-md max-w-xl text-on-surface-variant">
            Creamos sitios web, sistemas a medida y automatizaciones para tu negocio. El equipo técnico que necesitás, sin los precios de una agencia grande.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim" href="#contacto">
              Hablemos de tu proyecto
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="glow-hover flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10" href="#portfolio">
              Ver nuestro trabajo
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
          </div>
        </FadeInView>

        <FadeInView delay={200} className="flex items-center justify-center">
          <div className="w-full max-w-[380px] aspect-square">
            <WireframeDottedGlobe className="w-full h-full" />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}