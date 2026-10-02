import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  updated?: string;
  description: string;
  category: string;
  author: string;
  keywords?: string[];
  content: string;
  lang: string;
};

const baseBlogsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getBlogPosts(lang: string): BlogPost[] {
  const langDirectory = path.join(baseBlogsDirectory, lang);

  // Verificamos si existe el directorio para evitar errores de despliegue si está vacío
  if (!fs.existsSync(langDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(langDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(langDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        seoTitle: matterResult.data.seoTitle,
        date: matterResult.data.date,
        updated: matterResult.data.updated,
        description: matterResult.data.description,
        category: matterResult.data.category,
        author: matterResult.data.author,
        keywords: matterResult.data.keywords,
        // El titulo ya se muestra como <h1> en la cabecera del articulo. Algunos
        // archivos historicos repetian el mismo titulo como primer "#" del cuerpo,
        // lo que generaba dos H1 en la pagina. Lo normalizamos en una sola fuente.
        content: matterResult.content.replace(/^\s*#\s+[^\r\n]+\r?\n+/, ''),
        lang,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Mantiene el title de Google dentro de ~60 caracteres sin tocar el H1 editorial.
 * Se puede fijar manualmente con `seoTitle` cuando una nota lo necesite.
 */
export function getBlogSeoTitle(post: Pick<BlogPost, 'title' | 'seoTitle'>): string {
  const title = post.seoTitle?.trim() || post.title.trim();
  const brand = ' | UpCoded';

  if (`${title}${brand}`.length <= 60) return `${title}${brand}`;

  const colon = title.indexOf(':');
  const primaryTopic = colon >= 25 ? title.slice(0, colon).trim() : '';
  if (primaryTopic && `${primaryTopic}${brand}`.length <= 60) {
    return `${primaryTopic}${brand}`;
  }

  const shortened = title.slice(0, 60).replace(/\s+\S*$/, '').replace(/[,:;\-\s]+$/, '');
  return shortened || title.slice(0, 60);
}

export function getAllBlogPosts(): BlogPost[] {
  const esPosts = getBlogPosts('es');
  const enPosts = getBlogPosts('en');
  return [...esPosts, ...enPosts];
}

export function getBlogPostBySlug(slug: string, lang: string): BlogPost | undefined {
  const posts = getBlogPosts(lang);
  return posts.find((post) => post.slug === slug);
}
