import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/blog';
import { getDictionary } from '@/dictionaries';
import { PiArrowRight, PiArrowLeft } from 'react-icons/pi';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import type { Metadata } from 'next';
import { buildAlternates, localizedUrl, toLocale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang);
  return { title: locale === 'en' ? 'Web Development Blog | UpCoded' : 'Blog de Desarrollo Web en Argentina | UpCoded', description: locale === 'en' ? 'Articles on web development and digital strategy for growing businesses.' : 'Artículos sobre desarrollo web y estrategia digital para empresas argentinas.', alternates: buildAlternates(locale, 'blog'), openGraph: { url: localizedUrl(locale, 'blog'), type: 'website' } };
}

export default async function BlogIndexPage({ params }: { params: { lang: 'es' | 'en' } }) {
  const posts = getBlogPosts(params.lang);
  const dict = await getDictionary(params.lang);
  const en = params.lang === 'en';
  return <>
    <NavSection dict={dict.nav} lang={params.lang} />
    <main className="min-h-screen bg-background px-margin-mobile pb-24 pt-[120px] md:px-margin-desktop md:pt-32">
      <div className="mx-auto max-w-container-max">
        <Link href={`/${params.lang}`} className="mb-12 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-on-surface-variant hover:text-primary"><PiArrowLeft size={16} />{dict.common.back}</Link>
        <div className="mb-20 max-w-[700px]"><h1 className="mb-6 text-[clamp(40px,6vw,72px)] font-medium leading-none tracking-tight text-on-surface">{en ? 'Insights & technical notes' : 'Insights y notas técnicas'}</h1><p className="text-[1.125rem] leading-relaxed text-on-surface-variant">{en ? 'Articles on custom development, automation, AI and SEO for growing businesses.' : 'Artículos detallados sobre desarrollo a medida, automatización, IA y optimización SEO para empresas.'}</p></div>
        {posts.length > 0 ? <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <Link key={post.slug} href={`/${params.lang}/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-outline bg-surface-container transition-all hover:-translate-y-2 hover:border-primary/50">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-outline bg-surface-dim"><Image src={`/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`} alt={`${en ? 'Cover for' : 'Portada de'} ${post.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
          <div className="flex flex-1 flex-col p-6 lg:p-8"><div className="mb-4 flex items-center gap-3"><span className="rounded-md border border-outline bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">{post.category}</span><span className="font-mono text-[12px] text-on-surface-variant">{new Date(post.date).toLocaleDateString(en ? 'en-US' : 'es-AR', { month: 'short', day: 'numeric', year: 'numeric' })}</span></div><h2 className="mb-4 text-2xl font-medium tracking-tight text-on-surface group-hover:text-primary">{post.title}</h2><p className="mb-8 line-clamp-3 flex-1 text-[1rem] leading-relaxed text-on-surface-variant">{post.description}</p><div className="mt-auto flex items-center gap-2 font-mono text-[13px] font-medium tracking-wide text-primary">{dict.common.read}<PiArrowRight size={16} /></div></div>
        </Link>)}</div> : <div className="rounded-2xl border border-outline bg-surface-dim p-12 text-center"><p className="text-[1.125rem] text-on-surface-variant">{en ? 'Articles in English are coming soon. Explore the Spanish library or contact us to discuss your project.' : 'No hay artículos disponibles en este idioma todavía.'}</p>{en && <Link href="/es/blog" className="mt-6 inline-flex text-primary hover:underline">{en ? 'Browse Spanish articles' : 'Ver artículos'}</Link>}</div>}
      </div>
    </main>
    <FooterSection lang={params.lang} dict={dict.footer} />
  </>;
}
