import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export const metadata: Metadata = {
  title: 'Blog de Desarrollo Web en Argentina | UpCoded',
  description:
    'Artículos sobre desarrollo web, Next.js, React y estrategia digital para empresas argentinas. Tips, costos, comparativas y guías prácticas.',
  alternates: {
    canonical: 'https://upcoded.dev/blog',
  },
  openGraph: {
    title: 'Blog de Desarrollo Web en Argentina | UpCoded',
    description:
      'Artículos sobre desarrollo web, Next.js, React y estrategia digital para empresas argentinas.',
    url: 'https://upcoded.dev/blog',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog UpCoded',
  description: 'Artículos sobre desarrollo web y estrategia digital para empresas en Argentina.',
  url: 'https://upcoded.dev/blog',
  publisher: {
    '@type': 'Organization',
    name: 'UpCoded',
    url: 'https://upcoded.dev',
  },
  inLanguage: 'es-AR',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavSection />
      <main className="pt-20">

        {/* Hero */}
        <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
          <nav className="mb-6 flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary">Blog</span>
          </nav>
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            Blog de desarrollo web
          </h1>
          <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Guías, comparativas y estrategias sobre desarrollo web para empresas en Argentina. Sin paja, solo lo que necesitás saber.
          </p>
        </section>

        {/* Posts grid */}
        <section className="mx-auto max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
          {posts.length === 0 ? (
            <p className="font-body-md text-on-surface-variant">Próximamente...</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glow-hover group flex flex-col rounded-lg border border-outline-variant/30 bg-surface-container p-6 transition-colors hover:border-primary/50"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      {new Date(post.date).toLocaleDateString('es-AR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="font-label-caps text-label-caps uppercase text-primary">
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md mb-3 text-on-surface transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-grow font-body-md text-sm text-on-surface-variant">
                    {post.description}
                  </p>
                  <span className="mt-auto flex items-center gap-2 font-label-caps text-label-caps uppercase text-primary">
                    Leer artículo
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
