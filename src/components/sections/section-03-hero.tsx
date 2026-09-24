import Image from 'next/image';
import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';
import { RotatingWord } from '@/components/ui/rotating-word';
import { startProjectPath } from '@/lib/seo';

type HeroDict = {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  title3Alt?: string[];
  description: string;
  cta_primary: string;
  cta_secondary: string;
};

export default function HeroSection({ dict, lang }: { dict: HeroDict; lang?: string }) {
  const rotatingWords = [dict.title3, ...(dict.title3Alt ?? [])];
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] flex-col items-start justify-center overflow-hidden">

      {/* Glow ambiental: la pantalla como unica fuente de luz. Sin fotos, sin 3D. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Buenos Aires de noche: vista aérea del Obelisco sobre la 9 de Julio.
            Foto: Pexels (licencia libre, id 22718708). Recolorida a tonos fríos para
            que el teal siga siendo el único acento. */}
        <div className="absolute inset-y-0 left-0 w-full [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] lg:left-[22%] lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_30%),linear-gradient(to_bottom,black_90%,transparent_100%)]">
          <Image
            src="/hero-baires-aerea.webp"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="motion-safe:animate-hero-drift object-cover object-[50%_9%] brightness-[1.25] contrast-[1.08]"
          />
        </div>
        {/* Halo teal detrás del Obelisco */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_28%_45%_at_73%_32%,rgb(var(--primary)/0.22),transparent_70%)] max-lg:bg-[radial-gradient(ellipse_60%_35%_at_50%_25%,rgb(var(--primary)/0.2),transparent_70%)]" />
        {/* Velo para que el titular se lea sobre la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="motion-safe:animate-glow-drift-a absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="motion-safe:animate-glow-drift-b absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start px-margin-mobile py-24 text-left md:px-margin-desktop md:py-32">

        <FadeInView delay={0}>
          <span className="mb-8 inline-flex items-center rounded-full border border-outline bg-surface/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
            {dict.badge}
          </span>
        </FadeInView>

        <FadeInView delay={100}>
          <h1 className="m-0 text-[clamp(56px,9vw,130px)] font-medium leading-[1.02] tracking-[-0.04em] text-on-surface">
            {dict.title1}<br /> {dict.title2}<br /> <span className="text-on-surface-variant"><RotatingWord words={rotatingWords} cursorClassName="text-primary animate-cursor-blink" /></span>
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
              href={startProjectPath(lang)}
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

      {/* Marcador de identidad: raices locales, sin iconografia literal. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden items-center justify-between px-margin-desktop pb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant/70 lg:flex"
      >
        <span>[ Buenos Aires, Argentina ]</span>
        <span>[ 34.6037&deg; S, 58.3816&deg; W ]</span>
      </div>
    </section>
  );
}
