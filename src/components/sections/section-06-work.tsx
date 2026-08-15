import Image from 'next/image';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';
import { projects, type Project } from '@/data/projects';

function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const image = project.previewImage ?? project.images[0];

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block w-full flex-shrink-0"
    >
      {image ? (
        <div className="overflow-hidden rounded-xl border border-outline">
          <Image
            src={image}
            alt={`Captura del sitio de ${project.title}`}
            width={960}
            height={600}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="mt-[22px] flex items-baseline justify-between">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-wide text-on-surface-variant">
            {project.client}
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-on-surface">
            {project.title}
          </h3>
        </div>
        <p className="font-mono text-[12px] uppercase tracking-wide text-on-surface-variant">
          2024
        </p>
      </div>
    </Link>
  );
}

export default function WorkSection() {
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
              <ProjectCard project={project} priority={i < 2} />
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
