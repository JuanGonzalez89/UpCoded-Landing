import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getAllBlogPosts } from '@/lib/blog';

const baseUrl = 'https://upcoded.dev';

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
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]);

  const servicePagesUrls = serviceUrls.flatMap((slug) => [
    {
      url: `${baseUrl}/es/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...servicePagesUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}
