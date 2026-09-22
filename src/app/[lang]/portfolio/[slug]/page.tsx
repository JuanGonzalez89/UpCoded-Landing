import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PiArrowUpRight } from 'react-icons/pi';
import { getProjectBySlug, projects } from '@/data/projects';
import { caseDetails, enProjects, type ServiceSlug } from '@/data/project-details';
import { LOCALES, breadcrumbJsonLd, buildAlternates, localizedUrl, toLocale } from '@/lib/seo';
import { getDictionary } from '@/dictionaries';
import { cn } from '@/lib/utils';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

const serviceNames: Record<ServiceSlug, { es: string; en: string }> = {
  'landing-pages-profesionales': { es: 'Landing pages profesionales', en: 'Professional landing pages' },
  'desarrollo-web-argentina': { es: 'Desarrollo web en Argentina', en: 'Web development in Argentina' },
  'aplicaciones-web-a-medida': { es: 'Aplicaciones web a medida', en: 'Custom web applications' },
};

function imageExists(imagePath: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', imagePath));
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; lang: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Portfolio | UpCoded' };

  const locale = toLocale(params.lang);
  const en = locale === 'en';
  const view = en ? enProjects[project.slug] : project;

  return {
    title: `${project.title} | ${en ? 'Case study' : 'Caso de estudio'} | UpCoded`,
    description: view.summary,
    alternates: buildAlternates(locale, `portfolio/${project.slug}`),
    openGraph: {
      title: `${project.title} | UpCoded Portfolio`,
      description: view.summary,
      url: localizedUrl(locale, `portfolio/${project.slug}`),
    },
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: {
  params: { slug: string; lang: 'es' | 'en' };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const d = await getDictionary(params.lang);
  const en = params.lang === 'en';
  const view = en ? { ...project, ...(enProjects[project.slug] ?? {}) } : project;
  const base = `/${params.lang}`;
  const screenshots = project.images.filter(imageExists);

  const detail = caseDetails[project.slug];
  const localized = detail?.[params.lang];
  const service = detail?.service;

  // Los dos proyectos siguientes en el listado (circular): enlaces internos entre casos.
  const index = projects.findIndex((p) => p.slug === project.slug);
  const related = [1, 2].map((offset) => projects[(index + offset) % projects.length]);

  const testimonial = project.slug === 'havas-argentina' ? d.results : null;

  const labels = en
    ? {
        year: 'Year',
        features: 'What the site includes',
        approach: 'Design and development decisions',
        testimonial: 'What the client said',
        service: 'Service behind this project',
        others: 'More case studies',
        viewCase: 'View case study',
      }
    : {
        year: 'Año',
        features: 'Qué incluye el sitio',
        approach: 'Decisiones de diseño y desarrollo',
        testimonial: 'Lo que dijo el cliente',
        service: 'Servicio detrás de este proyecto',
        others: 'Otros casos de estudio',
        viewCase: 'Ver caso de estudio',
      };

  const breadcrumb = breadcrumbJsonLd(params.lang, [
    { name: d.common.home, path: '' },
    { name: project.title, path: `portfolio/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <NavSection dict={d.nav} lang={params.lang} />
      <main id="contenido" className="pt-[68px]">
        <article>
          <header className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop">
            <nav className="flex items-center gap-2 font-mono text-label-caps uppercase text-on-surface-variant">
              <Link href={base}>{d.common.home}</Link>
              <span>/</span>
              <Link href={`${base}/#portfolio`}>{d.common.work}</Link>
            </nav>
            <p className="mt-10 font-mono text-label-caps uppercase text-on-surface-variant">
              {view.client} · {labels.year} {project.year}
            </p>
            <h1 className="mt-4 max-w-measure text-display-lg text-on-surface">{view.title}</h1>
            <p className="mt-6 max-w-measure text-body-md text-on-surface-variant">{view.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-primary-container px-2.5 py-1.5 font-mono text-label-caps uppercase text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.liveUrl && (
              <a
                className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-md border border-outline-strong px-7 text-base text-on-surface"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {en ? 'Visit website' : 'Visitar el sitio'}
                <PiArrowUpRight size={16} />
              </a>
            )}
          </header>

          <section className="bg-surface-container">
            <div className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-margin-desktop">
              <h2 className="font-mono text-label-caps uppercase text-on-surface-variant">
                {en ? 'Result' : 'Resultado'}
              </h2>
              <p className="mt-4 max-w-measure text-headline-lg text-on-surface">{view.result}</p>
            </div>
          </section>

          <div className="mx-auto max-w-container-max space-y-8 px-margin-mobile py-20 md:px-margin-desktop">
            <div className="rounded-2xl border border-outline bg-surface-container p-8 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-2">
                <section>
                  <p className="font-mono text-label-caps uppercase text-primary">01</p>
                  <h2 className="mt-3 text-headline-md text-on-surface">{en ? 'The challenge' : 'El desafío'}</h2>
                  <p className="mt-4 text-body-md text-on-surface-variant">{view.challenge}</p>
                </section>
                <section>
                  <p className="font-mono text-label-caps uppercase text-primary">02</p>
                  <h2 className="mt-3 text-headline-md text-on-surface">{en ? 'The solution' : 'La solución'}</h2>
                  <p className="mt-4 text-body-md text-on-surface-variant">{view.solution}</p>
                </section>
              </div>
            </div>

            {localized && (
              <div className="rounded-2xl border border-outline bg-surface-container p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:divide-x lg:divide-outline">
                  <div>
                    <h2 className="text-headline-md text-on-surface">{labels.features}</h2>
                    <ul className="mt-6 space-y-4">
                      {localized.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-body-md text-on-surface-variant">
                          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:pl-10">
                    <h2 className="text-headline-md text-on-surface">{labels.approach}</h2>
                    <p className="mt-6 text-body-md text-on-surface-variant">{localized.approach}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {testimonial && (
            <section className="mx-auto max-w-container-max px-margin-mobile pt-20 md:px-margin-desktop">
              <h2 className="font-mono text-label-caps uppercase text-on-surface-variant">{labels.testimonial}</h2>
              <blockquote className="mt-4 max-w-measure text-headline-md text-on-surface">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-4 text-on-surface-variant">{testimonial.quoteBy}</p>
            </section>
          )}

          {screenshots.length > 0 && (
            <section className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop">
              <h2 className="text-headline-md text-on-surface">
                {en ? 'Project screenshots' : 'Capturas del proyecto'}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {screenshots.map((imagePath, i) => (
                  <div
                    key={imagePath}
                    className={cn(
                      'overflow-hidden rounded-2xl border border-outline bg-surface-dim',
                      i === 0 && 'md:col-span-2',
                    )}
                  >
                    <div className="flex items-center gap-1.5 border-b border-outline px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
                      <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
                      <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
                    </div>
                    <Image
                      src={imagePath}
                      alt={`${en ? 'Screenshot' : 'Pantalla'} ${i + 1} ${project.title}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mx-auto max-w-container-max px-margin-mobile pb-20 md:px-margin-desktop">
            {service && (
              <div className="rounded-lg border border-outline-variant bg-surface-container p-7">
                <p className="font-mono text-label-caps uppercase text-on-surface-variant">{labels.service}</p>
                <Link
                  href={`${base}/servicios/${service}`}
                  className="mt-3 inline-flex items-center gap-2 text-headline-md text-on-surface hover:text-primary"
                >
                  {serviceNames[service][params.lang]}
                  <PiArrowUpRight size={18} />
                </Link>
              </div>
            )}

            <h2 className="mt-16 text-headline-md text-on-surface">{labels.others}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((other) => {
                const otherView = en ? { ...other, ...(enProjects[other.slug] ?? {}) } : other;
                return (
                  <Link
                    key={other.slug}
                    href={`${base}/portfolio/${other.slug}`}
                    className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-colors hover:border-outline-strong"
                  >
                    <p className="font-mono text-label-caps uppercase text-on-surface-variant">
                      {otherView.client}
                    </p>
                    <h3 className="mt-3 text-headline-md text-on-surface">{other.title}</h3>
                    <p className="mt-2 text-on-surface-variant">{otherView.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-primary">
                      {labels.viewCase}
                      <PiArrowUpRight size={16} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="on-ink bg-ink px-margin-mobile py-24 text-on-ink md:px-margin-desktop">
            <div className="mx-auto max-w-container-max">
              <h2 className="text-headline-lg">{en ? 'Have a similar project?' : '¿Tenés un proyecto similar?'}</h2>
              <p className="mt-5 max-w-measure text-body-md text-on-ink/70">
                {en
                  ? 'Tell us what you need and we will reply within 24 hours with a concrete proposal.'
                  : 'Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta concreta.'}
              </p>
              <Link
                className="mt-8 inline-flex min-h-[52px] rounded-md bg-on-ink px-7 py-4 text-base text-ink"
                href={`${base}/#contacto`}
              >
                {d.common.contact}
              </Link>
            </div>
          </section>
        </article>
      </main>
      <FooterSection lang={params.lang} dict={d.footer} />
    </>
  );
}
