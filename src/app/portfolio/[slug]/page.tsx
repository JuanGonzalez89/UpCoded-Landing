import fs from 'node:fs';
import path from 'node:path';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProjectBySlug, projects } from '@/data/projects';

type PortfolioPageProps = {
  params: {
    slug: string;
  };
};

function imageExists(imagePath: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', imagePath));
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Portfolio | UpCoded',
      description: 'Proyecto no encontrado.',
    };
  }

  return {
    title: `${project.title} — Caso de Estudio | UpCoded`,
    description: `${project.summary} Desarrollado por UpCoded, agencia de desarrollo web en Argentina.`,
    alternates: {
      canonical: `https://upcoded.dev/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | UpCoded Portfolio`,
      description: project.summary,
      url: `https://upcoded.dev/portfolio/${project.slug}`,
      images: project.previewImage
        ? [{ url: project.previewImage, width: 1200, height: 630 }]
        : [],
    },
  };
}

export default function PortfolioCaseStudyPage({ params }: PortfolioPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: {
      '@type': 'Organization',
      name: 'UpCoded',
      url: 'https://upcoded.dev',
    },
    url: `https://upcoded.dev/portfolio/${project.slug}`,
    ...(project.liveUrl && { sameAs: project.liveUrl }),
  };

  return (
    <main className="bg-background py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Link className="mb-10 inline-flex font-label-caps text-label-caps uppercase text-primary transition-colors hover:text-primary-fixed" href="/#portfolio">
          ← Volver al portfolio
        </Link>

        <section className="mb-16 rounded-xl border border-outline-variant/30 bg-surface-container p-8 md:p-12">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-on-surface-variant">{project.client}</p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
            {project.title}
          </h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-1 font-label-caps text-xs uppercase text-primary">
                {item}
              </span>
            ))}
          </div>
          <p className="max-w-3xl font-body-md text-body-md text-on-surface-variant">{project.summary}</p>
          <div className="mt-8 inline-flex rounded border border-primary bg-primary/10 px-4 py-3 font-label-caps text-label-caps uppercase text-primary">
            {project.result}
          </div>
          {project.liveUrl ? (
            <a
              className="mt-6 flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps uppercase text-primary transition-colors hover:bg-primary/10"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px] leading-none">arrow_outward</span>
              Visitar sitio
            </a>
          ) : null}
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
          <div className="rounded-lg border border-outline-variant/30 bg-surface-container p-8">
            <h2 className="font-headline-md text-headline-md mb-4 text-primary">Challenge</h2>
            <p className="font-body-md text-on-surface-variant">{project.challenge}</p>
          </div>

          <div className="rounded-lg border border-outline-variant/30 bg-surface-container p-8">
            <h2 className="font-headline-md text-headline-md mb-4 text-primary">Solution</h2>
            <p className="font-body-md text-on-surface-variant">{project.solution}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-headline-md text-headline-md mb-6 text-primary">Screenshots</h2>
          {project.images.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.images.map((imagePath) => {
                const alt = `${project.title} screenshot`;
                const exists = imageExists(imagePath);

                return (
                  <div key={imagePath} className="group overflow-hidden rounded-lg border border-outline-variant/30">
                    {exists ? (
                      <Image
                        src={imagePath}
                        alt={alt}
                        width={1200}
                        height={800}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="flex aspect-[3/2] items-center justify-center bg-surface-container px-6 text-center font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Screenshot coming soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container px-6 text-center font-label-caps text-label-caps uppercase text-on-surface-variant">
                Screenshot coming soon
              </div>
              <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container px-6 text-center font-label-caps text-label-caps uppercase text-on-surface-variant">
                Screenshot coming soon
              </div>
            </div>
          )}
        </section>

        <section className="rounded-xl border border-outline-variant/30 bg-surface-container-high p-8 text-center md:p-12">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
            ¿Tenés un proyecto similar?
          </h2>
          <Link className="inline-flex rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim" href="/#contacto">
            Hablemos
          </Link>
        </section>
      </div>
    </main>
  );
}