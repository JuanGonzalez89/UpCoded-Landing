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

  if (locale === 'es') {
    return {
      title: 'Iniciar proyecto | UpCoded',
      robots: { index: false, follow: false },
      alternates: { canonical: `${SITE_URL}/es/iniciar-proyecto` },
    };
  }

  const dict = await getDictionary(locale);
  return {
    title: dict.startProject.metaTitle,
    description: dict.startProject.metaDescription,
    robots: { index: true, follow: true },
    alternates: buildAlternates(locale, 'start-project'),
  };
}

export default async function StartProjectPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang);

  // El formulario guiado en español vive en /es/iniciar-proyecto.
  if (locale === 'es') redirect('/es/iniciar-proyecto');

  const dict = await getDictionary('en');
  return <StartProjectForm dict={dict.startProject} lang="en" />;
}