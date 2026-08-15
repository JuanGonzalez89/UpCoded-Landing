import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/blog';
import { getDictionary } from '@/dictionaries';
import { PiArrowRight, PiArrowLeft } from 'react-icons/pi';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

export default async function BlogIndexPage({ params }: { params: { lang: 'es' | 'en' } }) {
  const posts = getBlogPosts(params.lang);
  const dict = await getDictionary(params.lang);

  return (
    <>
      <NavSection dict={dict.nav} lang={params.lang} />
      <div className="bg-background px-margin-mobile py-24 md:px-margin-desktop md:py-32 min-h-screen pt-[120px]">
        <div className="mx-auto max-w-container-max">
          
          <Link 
            href={`/${params.lang}`}
            className="mb-12 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
          >
            <PiArrowLeft size={16} />
            Volver al Inicio
          </Link>

        <div className="mb-20 max-w-[700px]">
          <h1 className="mb-6 text-[clamp(40px,6vw,72px)] font-medium leading-none tracking-tight text-on-surface">
            Insights & Notas Técnicas
          </h1>
          <p className="text-[1.125rem] leading-relaxed text-on-surface-variant">
            Artículos detallados sobre desarrollo a medida, automatización, IA y optimización SEO para empresas.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${params.lang}/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-outline bg-surface-container transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)]"
            >
              <div className="relative aspect-[16/9] w-full border-b border-outline overflow-hidden bg-surface-dim">
                <Image 
                  src={`/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`}
                  alt={`Portada de ${post.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-8 transition-transform duration-500 ease-out group-hover:translate-x-1">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-md border border-outline bg-surface px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-on-surface-variant transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    {post.category}
                  </span>
                  <span className="font-mono text-[12px] text-on-surface-variant">
                    {new Date(post.date).toLocaleDateString('es-AR', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="mb-4 text-2xl font-medium tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                  {post.title}
                </h2>
                
                <p className="mb-8 flex-1 text-[1rem] leading-relaxed text-on-surface-variant line-clamp-3">
                  {post.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 font-mono text-[13px] font-medium tracking-wide text-primary transition-transform group-hover:translate-x-2">
                  Leer artículo
                  <PiArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-outline bg-surface-dim p-12 text-center">
            <p className="text-[1.125rem] text-on-surface-variant">No hay artículos disponibles en este idioma todavía.</p>
          </div>
        )}
      </div>
      </div>
      <FooterSection />
    </>
  );
}
