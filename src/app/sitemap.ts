import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const serviceUrls = [
  'servicios/desarrollo-web-argentina',
  'servicios/landing-pages-profesionales',
  'servicios/aplicaciones-web-a-medida',
  'servicios/automatizaciones',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://upcoded.dev/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicePagesUrls = serviceUrls.map((slug) => ({
    url: `https://upcoded.dev/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://upcoded.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...servicePagesUrls,
    ...projectUrls,
  ];
}
