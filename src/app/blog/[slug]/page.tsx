import type { Metadata } from 'next';
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

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
      <main id="contenido" className="pt-[68px]">
        <article className="mx-auto max-w-[720px] px-margin-mobile py-24 md:px-8">

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 font-mono text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-4 font-mono text-label-caps uppercase text-on-surface-variant">
              <span>
                {new Date(post.date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-display-lg text-on-surface mb-6">
              {post.title}
            </h1>
            <p className="text-body-md text-on-surface-variant">
              {post.description}
            </p>
          </header>

          {/* MDX Content */}
          <div className="prose-upcoded">
            <MDXRemote source={post.content} />
          </div>

          {/* Back to blog */}
          <div className="mt-16 border-t border-outline-variant pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-primary transition-colors duration-200 ease-upcoded hover:text-primary-container"
            >
              <PiArrowLeft aria-hidden size={15} />
              Volver al blog
            </Link>
          </div>

        </article>

        {/* Cierre en tinta, igual que en el resto del sitio: se funde con el footer. */}
        <section className="on-ink bg-ink px-margin-mobile py-20 text-on-ink md:px-margin-desktop">
          <div className="mx-auto max-w-container-max">
            <h2 className="max-w-measure text-headline-lg text-on-ink">
              ¿Necesitás un equipo de desarrollo web en Argentina?
            </h2>
            <p className="mt-5 max-w-measure text-body-md text-on-ink-variant">
              En UpCoded construimos sitios, apps y automatizaciones con lo último en tecnología
              web. Contanos tu proyecto.
            </p>
            <Link
              href="/#contacto"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-on-ink px-7 text-base font-medium text-ink transition-colors duration-200 ease-upcoded hover:bg-accent-ink active:scale-[0.98]"
            >
              Quiero una propuesta gratuita
              <PiArrowRight aria-hidden size={16} />
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
