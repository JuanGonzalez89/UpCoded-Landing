import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import { projects } from '@/data/projects';
import { enProjects } from '@/data/project-details';
import { getBlogPosts } from '@/lib/blog';

export type ServiceExtrasContent = {
  audienceTitle: string;
  audience: readonly (readonly [string, string])[];
  stepsTitle: string;
  steps: readonly (readonly [string, string])[];
  fitTitle: string;
  fitText: string;
  /** Servicio alternativo al que se deriva cuando este no es el indicado. */
  fitHref: string;
  fitCta: string;
  casesTitle: string;
  caseSlugs: readonly string[];
  guidesTitle: string;
  /** Slugs de articulos del blog. El blog solo existe en espanol. */
  guideSlugs: readonly string[];
};

type Props = {
  lang: 'es' | 'en';
  content: ServiceExtrasContent;
};

/**
 * Bloques de contenido propio de cada pagina de servicio: para quien es, como se
 * trabaja, cuando conviene otra opcion, casos reales y guias relacionadas.
 * Cada pagina de servicio pasa su propio contenido para que no se solapen entre si.
 */
export default function ServiceExtras({ lang, content }: Props) {
  const base = `/${lang}`;
  const en = lang === 'en';

  const cases = content.caseSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  const posts = lang === 'es' ? getBlogPosts('es') : [];
  const guides = content.guideSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is (typeof posts)[number] => Boolean(p));

  return (
    <>
      <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
        <h2 className="mb-16 text-headline-lg text-on-surface">{content.audienceTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.audience.map(([title, text]) => (
            <div key={title} className="rounded-lg border border-outline-variant bg-surface-container p-7">
              <h3 className="mb-2 text-headline-md text-on-surface">{title}</h3>
              <p className="text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <h2 className="mb-16 text-headline-lg text-on-surface">{content.stepsTitle}</h2>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.steps.map(([title, text], i) => (
              <li key={title} className="rounded-lg border border-outline-variant bg-surface-container p-7">
                <p className="mb-4 font-mono text-label-caps uppercase text-primary">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-2 text-headline-md text-on-surface">{title}</h3>
                <p className="text-on-surface-variant">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
        <div className="max-w-measure">
          <h2 className="mb-4 text-headline-lg text-on-surface">{content.fitTitle}</h2>
          <p className="text-body-md text-on-surface-variant">{content.fitText}</p>
          <Link
            href={`${base}${content.fitHref}`}
            className="mt-6 inline-flex items-center gap-2 text-primary"
          >
            {content.fitCta}
            <PiArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="border-y border-outline-variant bg-surface-container-low py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="mb-16 text-headline-lg text-on-surface">{content.casesTitle}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((project) => {
                const view = en ? { ...project, ...(enProjects[project.slug] ?? {}) } : project;
                return (
                  <Link
                    key={project.slug}
                    href={`${base}/portfolio/${project.slug}`}
                    className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-colors hover:border-outline-strong"
                  >
                    <p className="font-mono text-label-caps uppercase text-on-surface-variant">{view.client}</p>
                    <h3 className="mt-3 text-headline-md text-on-surface">{project.title}</h3>
                    <p className="mt-2 text-on-surface-variant">{view.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {guides.length > 0 && (
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <h2 className="mb-16 text-headline-lg text-on-surface">{content.guidesTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {guides.map((post) => (
              <Link
                key={post.slug}
                href={`${base}/blog/${post.slug}`}
                className="rounded-lg border border-outline-variant bg-surface-container p-7 transition-colors hover:border-outline-strong"
              >
                <p className="font-mono text-label-caps uppercase text-on-surface-variant">{post.category}</p>
                <h3 className="mt-3 text-headline-md text-on-surface">{post.title}</h3>
                <p className="mt-2 text-on-surface-variant">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
