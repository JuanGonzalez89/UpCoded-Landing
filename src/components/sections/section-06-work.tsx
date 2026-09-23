import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';
import { ProjectSelector } from '@/components/sections/project-selector';
import { projects } from '@/data/projects';

export default function WorkSection({
  lang,
  dict,
}: {
  lang: string;
  dict?: {
    eyebrow?: string;
    title?: string;
    next?: string;
    description?: string;
    cta?: string;
    imageAlt?: string;
    year?: string;
    result?: string;
    viewProject?: string;
  };
}) {
  return (
    <section className="border-t border-outline py-24 md:py-32" id="portfolio">
      <div className="mx-auto max-w-[1240px] px-8 max-[720px]:px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <FadeInView>
              <p className="mb-6 font-mono text-[12px] uppercase tracking-widest text-on-surface-variant">
                {dict?.eyebrow ?? '— Proyectos'}
              </p>
            </FadeInView>
            <FadeInView delay={100}>
              <h2 className="m-0 max-w-[760px] text-balance text-[clamp(36px,5.4vw,72px)] font-medium leading-none tracking-tighter text-on-surface">
                {dict?.title ?? 'Trabajo seleccionado.'}
              </h2>
            </FadeInView>
          </div>
        </div>

        <FadeInView delay={100} className="mt-14">
          <ProjectSelector projects={projects} lang={lang} dict={dict} />
        </FadeInView>

        <FadeInView delay={200} className="mt-24">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-outline bg-surface-dim p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
            <div>
              <p className="text-[clamp(22px,2.4vw,32px)] font-medium leading-snug tracking-tight text-on-surface">
                {dict?.next ?? 'El próximo caso puede ser el tuyo.'}
              </p>
              <p className="mt-2 max-w-[54ch] text-[1.0625rem] leading-relaxed text-on-surface-variant">
                {dict?.description ?? 'Contanos qué necesitás y te decimos si podemos hacerlo, en cuánto tiempo y a qué precio. Sin vueltas.'}
              </p>
            </div>
            <Link
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-on-primary transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
              href="#contacto"
            >
              {dict?.cta ?? 'Hablemos'}
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
