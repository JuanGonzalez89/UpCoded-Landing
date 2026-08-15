import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';

export default function HeroSection({ dict }: { dict: Record<string, string> }) {
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] flex-col items-start justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start px-margin-mobile py-24 text-left md:px-margin-desktop md:py-32">
        
        <FadeInView delay={100}>
          <h1 className="m-0 text-[clamp(56px,9vw,130px)] font-medium leading-[0.9] tracking-[-0.04em] text-on-surface">
            {dict.title1}<br /> {dict.title2}<br /> <span className="text-on-surface-variant">{dict.title3}<span className="text-primary animate-pulse">_</span></span>
          </h1>
        </FadeInView>

        <FadeInView delay={200}>
          <p className="mt-8 max-w-[700px] text-[1.25rem] leading-snug text-on-surface-variant md:text-[1.375rem]">
            {dict.description}
          </p>
        </FadeInView>

        <FadeInView delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
            <Link
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-primary bg-primary/10 px-8 text-[0.9375rem] font-medium text-primary shadow-[0_0_20px_rgba(20,184,166,0.1)] transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] active:scale-[0.98]"
              href="#contacto"
            >
              {dict.cta_primary}
            </Link>
            <Link
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-outline px-8 text-[0.9375rem] font-medium text-on-surface transition-colors duration-200 hover:border-on-surface-variant hover:bg-surface-dim active:scale-[0.98]"
              href="#portfolio"
            >
              {dict.cta_secondary}
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
