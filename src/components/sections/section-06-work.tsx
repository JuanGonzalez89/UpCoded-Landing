import Image from 'next/image';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';
import { projects, type Project } from '@/data/projects';

function ProjectCard({
  project,
  priority = false,
  lang,
}: {
  project: Project;
  priority?: boolean;
  lang: string;
}) {
  const image = project.previewImage ?? project.images[0];

  return (
    <Link
      href={`/${lang}/portfolio/${project.slug}`}
      className="group block w-full flex-shrink-0"
    >
      <div className="overflow-hidden rounded-2xl border border-outline bg-surface-dim transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/30 group-hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)]">
        {image ? (
          <Image
            src={image}
            alt={`Captura del sitio de ${project.title}`}
            width={960}
            height={600}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={`/api/og?title=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.client)}`}
            alt={`Captura del sitio de ${project.title}`}
            width={960}
            height={600}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
          />
        )}
      </div>

      <div className="mt-6 flex items-baseline justify-between transition-transform duration-500 ease-out group-hover:translate-x-1">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-wide text-on-surface-variant transition-colors duration-300 group-hover:text-primary">
            {project.client}
          </p>
          <h3 className="mt-2 flex items-center gap-2 text-2xl font-medium tracking-tight text-on-surface">
            {project.title}
            <PiArrowRight className="text-primary opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" size={20} />
          </h3>
        </div>
        <p className="font-mono text-[12px] uppercase tracking-wide text-on-surface-variant">
          2024
        </p>
      </div>
    </Link>
  );
}

export default function WorkSection({ lang }: { lang: string }) {
  return (
    <section className="border-t border-outline py-24 md:py-32" id="portfolio">
      <div className="mx-auto max-w-[1240px] px-8 max-[720px]:px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <FadeInView>
              <p className="mb-6 font-mono text-[12px] uppercase tracking-widest text-on-surface-variant">
                — Proyectos
              </p>
            </FadeInView>
            <FadeInView delay={100}>
              <h2 className="m-0 max-w-[760px] text-[clamp(36px,5.4vw,72px)] font-medium leading-none tracking-tighter text-on-surface">
                Trabajo seleccionado.
              </h2>
            </FadeInView>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <FadeInView key={project.slug} delay={(i % 2) * 100}>
              <ProjectCard project={project} priority={i < 2} lang={lang} />
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={200} className="mt-24">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-outline bg-surface-dim p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
            <div>
              <p className="text-[clamp(22px,2.4vw,32px)] font-medium leading-snug tracking-tight text-on-surface">
                El próximo caso puede ser el tuyo.
              </p>
              <p className="mt-2 max-w-[54ch] text-[1.0625rem] leading-relaxed text-on-surface-variant">
                Contanos qué necesitás y te decimos si podemos hacerlo, en cuánto tiempo y a qué precio. Sin vueltas.
              </p>
            </div>
            <Link
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-on-primary transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
              href="#contacto"
            >
              Hablemos
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
