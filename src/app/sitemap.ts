import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getAllBlogPosts } from '@/lib/blog';

const baseUrl = 'https://upcoded.dev';
// No usar `new Date()` en cada build: Google interpreta lastmod como una señal
// de contenido y deja de confiar en ella si todas las URLs "cambian" al desplegar.
const siteLastModified = new Date('2026-10-02T00:00:00.000Z');

function languageAlternates(path = '') {
  const suffix = path ? `/${path}` : '';
  return {
    languages: {
      es: `${baseUrl}/es${suffix}`,
      en: `${baseUrl}/en${suffix}`,
      'x-default': `${baseUrl}/es${suffix}`,
    },
  };
}

const serviceUrls = [
  'servicios/desarrollo-web-argentina',
  'servicios/landing-pages-profesionales',
  'servicios/aplicaciones-web-a-medida',
  'servicios/automatizaciones',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.flatMap((project) => [
    {
      url: `${baseUrl}/es/portfolio/${project.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: languageAlternates(`portfolio/${project.slug}`),
    },
    {
      url: `${baseUrl}/en/portfolio/${project.slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: languageAlternates(`portfolio/${project.slug}`),
    }
  ]);

  const servicePagesUrls = serviceUrls.flatMap((slug) => [
    {
      url: `${baseUrl}/es/${slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: languageAlternates(slug),
    },
    {
      url: `${baseUrl}/en/${slug}`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: languageAlternates(slug),
    }
  ]);

  const blogPosts = getAllBlogPosts();
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/${post.lang}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/es`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: languageAlternates(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: languageAlternates(),
    },
    {
      url: `${baseUrl}/es/iniciar-proyecto`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/iniciar-proyecto`,
          en: `${baseUrl}/en/start-project`,
          'x-default': `${baseUrl}/es/iniciar-proyecto`,
        },
      },
    },
    {
      url: `${baseUrl}/en/start-project`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/iniciar-proyecto`,
          en: `${baseUrl}/en/start-project`,
          'x-default': `${baseUrl}/es/iniciar-proyecto`,
        },
      },
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: languageAlternates('blog'),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: languageAlternates('blog'),
    },
    ...servicePagesUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}
