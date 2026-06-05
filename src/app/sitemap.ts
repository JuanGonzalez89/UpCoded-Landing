import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getAllPosts } from '@/lib/mdx';

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

  const blogPosts = getAllPosts();
  const blogUrls = blogPosts.map((post) => ({
    url: `https://upcoded.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://upcoded.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://upcoded.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...servicePagesUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}
