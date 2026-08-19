import fs from 'node:fs';
import { PiArrowUpRight } from 'react-icons/pi';
import path from 'node:path';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProjectBySlug, projects } from '@/data/projects';
import { LOCALES, buildAlternates, localizedUrl, toLocale } from '@/lib/seo';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

type PortfolioPageProps = {
  params: {
    slug: string;
    lang: string;
  };
};

function imageExists(imagePath: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', imagePath));
}

export function generateStaticParams() {
  // Un caso de estudio por idioma: sin esto solo se prerenderiza una variante
  // y la otra queda fuera del build estatico.
  return LOCALES.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Portfolio | UpCoded',
      description: 'Proyecto no encontrado.',
    };
  }

  const locale = toLocale(params.lang);

  return {
    title: `${project.title} | Caso de estudio | UpCoded`,
    description: `${project.summary} Desarrollado por UpCoded, agencia de desarrollo web en Argentina.`,
    alternates: buildAlternates(locale, `portfolio/${project.slug}`),
    openGraph: {
      title: `${project.title} | UpCoded Portfolio`,
      description: project.summary,
      url: localizedUrl(locale, `portfolio/${project.slug}`),
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

  const screenshots = project.images.filter(imageExists);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <NavSection />

      <main id="contenido" className="pt-[68px]">
        <article>
          <header className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop lg:py-24">
            <nav
              aria-label="Miga de pan"
              className="flex items-center gap-2 font-mono text-label-caps uppercase text-on-surface-variant"
            >
              <Link className="transition-colors duration-200 ease-upcoded hover:text-primary" href="/">
                Inicio
              </Link>
              <span aria-hidden>/</span>
              <Link
                className="transition-colors duration-200 ease-upcoded hover:text-primary"
                href="/#portfolio"
              >
                Trabajo
              </Link>
            </nav>

            <p className="mt-10 font-mono text-label-caps uppercase text-on-surface-variant">
              {project.client}
            </p>
            <h1 className="mt-4 max-w-measure text-display-lg text-on-surface">{project.title}</h1>
            <p className="mt-6 max-w-measure text-body-md text-on-surface-variant">
              {project.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-primary-tint px-2.5 py-1.5 font-mono text-label-caps uppercase text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <a
                className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-outline-strong px-7 text-base font-medium text-on-surface transition-colors duration-200 ease-upcoded hover:border-primary hover:text-primary active:scale-[0.98]"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar el sitio
                <PiArrowUpRight aria-hidden size={16} />
              </a>
            ) : null}
          </header>

          <section className="border-y border-outline-variant bg-surface-container-low">
            <div className="mx-auto max-w-container-max px-margin-mobile py-10 md:px-margin-desktop lg:py-12">
              <h2 className="font-mono text-label-caps uppercase text-on-surface-variant">
                Resultado
              </h2>
              <p className="mt-3 max-w-measure text-headline-md text-on-surface">{project.result}</p>
            </div>
          </section>

          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 px-margin-mobile py-20 md:px-margin-desktop lg:grid-cols-2 lg:gap-14 lg:py-24">
            <section>
              <h2 className="text-headline-md text-on-surface">El desafío</h2>
              <p className="mt-4 max-w-measure text-body-md text-on-surface-variant">
                {project.challenge}
              </p>
            </section>
            <section>
              <h2 className="text-headline-md text-on-surface">La solución</h2>
              <p className="mt-4 max-w-measure text-body-md text-on-surface-variant">
                {project.solution}
              </p>
            </section>
          </div>

          {screenshots.length > 0 ? (
            <section className="mx-auto max-w-container-max px-margin-mobile pb-20 md:px-margin-desktop lg:pb-24">
              <h2 className="text-headline-md text-on-surface">Capturas del proyecto</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {screenshots.map((imagePath, i) => (
                  <div
                    key={imagePath}
                    className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container"
                  >
                    <Image
                      src={imagePath}
                      alt={`Pantalla ${i + 1} del sitio de ${project.title}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="on-ink bg-ink px-margin-mobile py-24 text-on-ink md:px-margin-desktop">
            <div className="mx-auto max-w-container-max">
              <h2 className="max-w-measure text-headline-lg text-on-ink">
                ¿Tenés un proyecto similar?
              </h2>
              <p className="mt-5 max-w-measure text-body-md text-on-ink-variant">
                Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta
                concreta.
              </p>
              <Link
                className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-md bg-on-ink px-7 text-base font-medium text-ink transition-colors duration-200 ease-upcoded hover:bg-accent-ink active:scale-[0.98]"
                href="/#contacto"
              >
                Hablemos
              </Link>
            </div>
          </section>
        </article>
      </main>

      <FooterSection />
    </>
  );
}