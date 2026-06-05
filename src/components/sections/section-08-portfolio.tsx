import Image from 'next/image';
import Link from 'next/link';
import { FadeInView } from '@/components/ui/fade-in-view';

import { projects } from '@/data/projects';

export default function PortfolioSection() {
  return (
    <section className="bg-surface-container-low py-24" id="portfolio">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            Proyectos que ya están corriendo
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeInView key={project.slug} delay={i * 80} className="group relative overflow-hidden rounded-lg border border-outline-variant/30 bg-surface">
              <div className="relative overflow-hidden border-b border-outline-variant/30 bg-surface-container-high">
                {project.previewImage || project.images[0] ? (
                  <div className="relative aspect-video">
                    <Image
                      src={project.previewImage ?? project.images[0]}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/15 to-transparent opacity-70" />
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low px-6 text-center">
                    <div className="max-w-xs space-y-3">
                      <span className="material-symbols-outlined text-5xl text-primary">web</span>
                      <p className="font-label-caps text-label-caps uppercase text-primary">Live preview</p>
                      <p className="font-body-md text-sm text-on-surface-variant">{project.summary}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Link className="rounded bg-surface px-6 py-2 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary hover:text-on-primary" href={`/portfolio/${project.slug}`}>
                    Ver caso →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{project.title}</h3>
                <p className="mb-2 font-body-md text-sm text-on-surface-variant">{project.client}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded border border-outline-variant/30 bg-surface-container px-2 py-1 font-label-caps text-xs uppercase text-primary">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface-variant">{project.result}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}