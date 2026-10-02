import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts, getBlogSeoTitle } from '@/lib/blog';
import Link from 'next/link';
import { PiArrowLeft } from 'react-icons/pi';
import ReactMarkdown from 'react-markdown';

import Image from 'next/image';

import { getDictionary } from '@/dictionaries';
import {
  LOCALES,
  SITE_URL,
  breadcrumbJsonLd,
  buildAlternates,
  localizedUrl,
  toLocale,
} from '@/lib/seo';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
    lang: post.lang,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string, lang: string } }) {
  const post = getBlogPostBySlug(params.slug, params.lang);
  if (!post) return {};
  
  const locale = toLocale(params.lang);
  const availableLocales = LOCALES.filter((lang) => getBlogPostBySlug(params.slug, lang));
  const coverUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`;

  return {
    title: getBlogSeoTitle(post),
    description: post.description,
    keywords: post.keywords,
    alternates: buildAlternates(locale, `blog/${post.slug}`, availableLocales),
    openGraph: {
      title: post.title,
      description: post.description,
      url: localizedUrl(locale, `blog/${post.slug}`),
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: coverUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [coverUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string, lang: 'es' | 'en' } }) {
  const post = getBlogPostBySlug(params.slug, params.lang);
  const dict = await getDictionary(params.lang);

  if (!post) {
    notFound();
  }

  const articleUrl = localizedUrl(params.lang, `blog/${post.slug}`);
  const coverPath = `/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`;
  const coverUrl = `${SITE_URL}${coverPath}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.description,
    image: coverUrl,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'UpCoded',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'UpCoded',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/portfolio/logo_upcoded/Logo_Upcoded_512x512.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    articleSection: post.category,
    keywords: post.keywords?.join(', '),
    inLanguage: params.lang === 'en' ? 'en' : 'es-AR',
  };

  const breadcrumb = breadcrumbJsonLd(params.lang, [
    { name: dict.common.home, path: '' },
    { name: 'Blog', path: 'blog' },
    { name: post.title, path: `blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <NavSection dict={dict.nav} lang={params.lang} />
      <article id="contenido" className="bg-background px-margin-mobile py-24 md:px-margin-desktop md:py-32 min-h-screen pt-[120px]">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 flex items-center gap-6">
            <Link 
              href={`/${params.lang}`}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
            >
              <PiArrowLeft size={16} />
              Inicio
            </Link>
            <span className="text-on-surface-variant/50">/</span>
            <Link 
              href={`/${params.lang}/blog`}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
            >
              Blog
            </Link>
          </div>

          <div className="relative mb-12 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-outline bg-surface-dim shadow-sm">
            <Image
              src={coverPath}
              alt={`Portada de ${post.title}`}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <header className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-md border border-outline bg-surface px-3 py-1.5 font-mono text-[12px] font-medium uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <span className="font-mono text-[13px] text-on-surface-variant">
                {new Date(post.date).toLocaleDateString('es-AR', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h1 className="mb-6 text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-tight text-on-surface">
              {post.title}
            </h1>
            <p className="text-[1.25rem] leading-relaxed text-on-surface-variant">
              {post.description}
            </p>
          </header>

          {/* GEO Optimized Body */}
          <div className="prose-upcoded max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
      <FooterSection lang={params.lang} />
    </>
  );
}
