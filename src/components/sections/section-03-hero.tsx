import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] flex-col overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-container-max flex-1 flex-col justify-between px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        
        <div className="mt-10 flex flex-col gap-8 md:mt-16">
          <FadeInView>
            <h1 className="m-0 max-w-[900px] text-[clamp(52px,8.5vw,122px)] font-medium leading-[0.92] tracking-tighter text-on-surface">
              Software a medida para empresas que <span className="text-on-surface-variant">no improvisan.</span>
            </h1>
          </FadeInView>

          <FadeInView delay={100}>
            <p className="max-w-[480px] text-[1.0625rem] leading-relaxed text-on-surface-variant">
              Diseñamos y desarrollamos aplicaciones, automatizaciones y plataformas web para organizaciones que necesitan resultados reales, no demos. 
            </p>
          </FadeInView>

          <FadeInView delay={200}>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-primary px-8 text-[0.9375rem] font-medium text-on-primary transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
                href="#contacto"
              >
                Iniciar proyecto &rarr;
              </Link>
              <Link
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-outline px-8 text-[0.9375rem] font-medium text-on-surface transition-colors duration-200 hover:border-primary active:scale-[0.98]"
                href="#portfolio"
              >
                Ver casos
              </Link>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={300}>
          <div className="mt-24 grid grid-cols-2 gap-6 border-t border-outline pt-8 md:grid-cols-4">
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Fundación</p>
              <p className="text-2xl font-medium tracking-tight text-on-surface">2024</p>
            </div>
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Proyectos</p>
              <p className="text-2xl font-medium tracking-tight text-on-surface">+20</p>
            </div>
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Stack</p>
              <p className="text-2xl font-medium tracking-tight text-on-surface">Next.js / Node</p>
            </div>
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Operaciones</p>
              <p className="text-2xl font-medium tracking-tight text-on-surface">Argentina / Global</p>
            </div>
          </div>
        </FadeInView>

      </div>
    </section>
  );
}
