import { projects } from '@/data/projects';
import { getAllBlogPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllBlogPosts();
  const lines = [
    '# UpCoded',
    '',
    '> Agencia argentina de desarrollo web, aplicaciones a medida y automatizaciones para negocios.',
    '',
    'UpCoded diseña y desarrolla sitios web, sistemas internos, productos digitales y automatizaciones. Trabaja con empresas y profesionales de Argentina, con proyectos desde USD 300.',
    '',
    '## Servicios',
    `- [Desarrollo web en Argentina](${SITE_URL}/es/servicios/desarrollo-web-argentina)`,
    `- [Landing pages profesionales](${SITE_URL}/es/servicios/landing-pages-profesionales)`,
    `- [Aplicaciones web a medida](${SITE_URL}/es/servicios/aplicaciones-web-a-medida)`,
    `- [Automatizaciones](${SITE_URL}/es/servicios/automatizaciones)`,
    '',
    '## Casos de estudio',
    ...projects.map(
      (project) =>
        `- [${project.title}](${SITE_URL}/es/portfolio/${project.slug}): ${project.summary}`,
    ),
    '',
    '## Blog',
    ...posts.map(
      (post) =>
        `- [${post.title}](${SITE_URL}/${post.lang}/blog/${post.slug}): ${post.description}`,
    ),
    '',
    '## Contacto y recursos para agentes',
    `- [Iniciar un proyecto](${SITE_URL}/es/iniciar-proyecto)`,
    `- [Catálogo de API](${SITE_URL}/.well-known/api-catalog)`,
    `- [OpenAPI](${SITE_URL}/openapi.json)`,
    `- [Catálogo de IA](${SITE_URL}/.well-known/ai-catalog.json)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
