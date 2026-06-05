import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Artículo no encontrado | UpCoded' };
  }

  return {
    title: `${post.title} | UpCoded Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://upcoded.dev/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://upcoded.dev/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['UpCoded'],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'UpCoded',
      url: 'https://upcoded.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'UpCoded',
      url: 'https://upcoded.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://upcoded.dev/portfolio/logo_upcoded/Logo_Upcoded_512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://upcoded.dev/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    inLanguage: 'es-AR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavSection />
      <main className="pt-20">
        <article className="mx-auto max-w-[720px] px-margin-mobile py-24 md:px-8">

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-4 font-label-caps text-label-caps uppercase text-on-surface-variant">
              <span>
                {new Date(post.date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-primary">•</span>
              <span className="text-primary">{post.readingTime}</span>
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-6 md:font-display-lg md:text-display-lg">
              {post.title}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {post.description}
            </p>
          </header>

          {/* MDX Content */}
          <div className="prose-upcoded">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA al final del artículo */}
          <div className="mt-16 rounded-xl border border-primary/30 bg-surface-container-high p-8 text-center">
            <h2 className="font-headline-md text-headline-md mb-3 text-primary">
              ¿Necesitás un equipo de desarrollo web en Argentina?
            </h2>
            <p className="mb-6 font-body-md text-on-surface-variant">
              En UpCoded construimos sitios, apps y automatizaciones con React y Next.js. Contanos tu proyecto.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
            >
              Quiero una propuesta gratuita
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="font-label-caps text-label-caps uppercase text-on-surface-variant transition-colors hover:text-primary"
            >
              ← Volver al blog
            </Link>
          </div>

        </article>
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
