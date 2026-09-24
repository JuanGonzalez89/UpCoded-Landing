import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { StartProjectForm } from '@/components/start-project/start-project-form';
import { getDictionary } from '@/dictionaries';
import { buildAlternates, SITE_URL, toLocale } from '@/lib/seo';

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang);

  if (locale === 'en') {
    return {
      title: 'Start a project | UpCoded',
      robots: { index: false, follow: false },
      alternates: { canonical: `${SITE_URL}/en/start-project` },
    };
  }

  const dict = await getDictionary(locale);
  return {
    title: dict.startProject.metaTitle,
    description: dict.startProject.metaDescription,
    robots: { index: true, follow: true },
    alternates: buildAlternates(locale, 'iniciar-proyecto'),
  };
}

export default async function IniciarProyectoPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang);

  // El formulario guiado en inglés vive en /en/start-project.
  if (locale === 'en') redirect('/en/start-project');

  const dict = await getDictionary('es');
  return <StartProjectForm dict={dict.startProject} lang="es" />;
}