import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
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
        date: matterResult.data.date,
        description: matterResult.data.description,
        category: matterResult.data.category,
        author: matterResult.data.author,
        content: matterResult.content,
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

export function getAllBlogPosts(): BlogPost[] {
  const esPosts = getBlogPosts('es');
  const enPosts = getBlogPosts('en');
  return [...esPosts, ...enPosts];
}

export function getBlogPostBySlug(slug: string, lang: string): BlogPost | undefined {
  const posts = getBlogPosts(lang);
  return posts.find((post) => post.slug === slug);
}
