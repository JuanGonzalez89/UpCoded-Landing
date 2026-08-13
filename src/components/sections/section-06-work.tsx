import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';
import { projects, type Project } from '@/data/projects';

const [featured, ...rest] = projects;

function ProjectCard({
  project,
  featured: isFeatured = false,
  priority = false,
}: {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}) {
  const image = project.previewImage ?? project.images[0];

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-[transform,border-color] duration-200 ease-upcoded hover:-translate-y-[3px] hover:border-primary active:scale-[0.99]"
    >
      {image ? (
        <div className={`relative ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'} overflow-hidden border-b border-outline-variant bg-surface-container-low`}>
          <Image
            src={image}
            alt={`Captura del sitio de ${project.title}`}
            fill
            priority={priority}
            sizes={isFeatured ? '(min-width: 1024px) 62vw, 100vw' : '(min-width: 1024px) 31vw, 100vw'}
            className="object-cover object-top"
          />
        </div>
      ) : null}

      <div className={isFeatured ? 'p-7 lg:p-8' : 'p-6'}>
        <p className="font-mono text-label-caps uppercase text-on-surface-variant">
          {project.client}
        </p>
        <h3
          className={`mt-3 text-on-surface ${
            isFeatured ? 'text-headline-lg' : 'text-headline-md'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2.5 max-w-[52ch] text-body-sm text-on-surface-variant">
          {project.result}
        </p>
        <span className="mt-6 flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary">
          Ver caso
          <PiArrowUpRight
            aria-hidden
            size={15}
            className="transition-transform duration-200 ease-upcoded group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default function WorkSection() {
  return (
    <section
      className="border-t border-outline-variant bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop lg:py-32"
      id="portfolio"
    >
      <div className="mx-auto max-w-container-max">
        <h2 className="max-w-measure text-headline-lg text-on-surface">
          Proyectos que ya están corriendo
        </h2>

        {/* Bento de 6 celdas exactas: 2+1 / 1+1+1 / 3. Sin huecos. */}
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <FadeInView className="lg:col-span-2">
            <ProjectCard project={featured} featured />
          </FadeInView>

          {rest.map((project, i) => (
            <FadeInView key={project.slug} delay={(i + 1) * 60}>
              <ProjectCard project={project} />
            </FadeInView>
          ))}

          <FadeInView delay={300} className="lg:col-span-3">
            <div className="flex flex-col items-start gap-6 rounded-lg bg-primary p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
              <div>
                <p className="text-headline-md text-on-primary">
                  El próximo caso puede ser el tuyo.
                </p>
                <p className="mt-2 max-w-[54ch] text-body-sm text-on-primary-fixed-variant">
                  Contanos qué necesitás y te decimos si podemos hacerlo, en cuánto tiempo y
                  a qué precio.
                </p>
              </div>
              <Link
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-md bg-on-primary px-7 text-base font-medium text-primary transition-colors duration-200 ease-upcoded hover:bg-on-primary-fixed-variant active:scale-[0.98]"
                href="#contacto"
              >
                Hablemos
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
