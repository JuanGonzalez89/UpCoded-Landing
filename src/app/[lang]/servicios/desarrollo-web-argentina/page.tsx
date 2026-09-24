import type { Metadata } from 'next';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { buildAlternates, localizedUrl, toLocale } from '@/lib/seo';
import { getDictionary } from '@/dictionaries';
import ServiceExtras, { type ServiceExtrasContent } from '@/components/sections/service-extras';

const copy = { es: { title: 'Un sitio web que te trae consultas todas las semanas', intro: 'Muchos clientes te buscan en Google antes de escribirte. Armamos tu sitio para que te encuentren, entiendan qué vendés y te contacten.', section: 'Qué cambia cuando tu sitio está bien hecho', faq: 'Preguntas frecuentes', cta: '¿Cuántas consultas estás perdiendo por no tener una buena web?', ctaText: 'Contanos tu proyecto y te enviamos una propuesta en menos de 24 horas.', primary: 'Pedir presupuesto gratis', secondary: 'Ver proyectos', items: [['Nadie se va antes de verlo', 'Si el sitio tarda en cargar, el cliente se va a la competencia. Los nuestros abren al instante, incluso con datos móviles.'], ['Se ve bien desde el celular', 'La mayoría entra desde el teléfono. Lo diseñamos primero para ahí y después para la compu.'], ['Que te encuentren en Google', 'Dejamos todo preparado para que aparezcas cuando busquen lo que vendés.'], ['Que no se caiga', 'Sin plugins raros ni parches: un sitio estable que no te da dolores de cabeza.']], faqs: [['¿Cuánto tarda tener mi sitio listo?', 'Una landing suele estar lista en 2 a 3 semanas. Te damos fechas concretas desde el primer día.'], ['¿Cuánto cuesta un sitio web?', 'Los proyectos arrancan desde USD 300 para una landing optimizada.'], ['¿Trabajan de forma remota?', 'Sí, trabajamos con clientes de toda Argentina y del exterior.']] }, en: { title: 'A website that brings you inquiries every week', intro: 'Many customers look you up on Google before contacting you. We build your site so they find you, understand what you sell and get in touch.', section: 'What changes when your site is done right', faq: 'Frequently asked questions', cta: 'How many inquiries are you losing without a good website?', ctaText: 'Tell us about your project and we will send a proposal within 24 hours.', primary: 'Get a free quote', secondary: 'View projects', items: [['Nobody leaves before seeing it', 'If a site is slow, the customer goes to a competitor. Ours open instantly, even on mobile data.'], ['Looks right on a phone', 'Most people visit from their phone. We design for that first, then for desktop.'], ['Get found on Google', 'We set everything up so you show up when people search for what you sell.'], ['It stays up', 'No odd plugins or patches: a stable site that does not give you headaches.']], faqs: [['How long does a website take?', 'A landing page usually takes 2 to 3 weeks. You get clear dates from day one.'], ['How much does a website cost?', 'Projects start at USD 300 for an optimized landing page.'], ['Do you work remotely?', 'Yes, we work with clients across Argentina and abroad.']] } } as const;

const extras: Record<'es' | 'en', ServiceExtrasContent> = {
  es: {
    audienceTitle: 'Para quién es un sitio web a medida',
    audience: [
      ['Empresas con una web que quedó vieja', 'Si la web no se ve bien en el celular, carga lento o el equipo no puede actualizarla, conviene rehacerla sobre una base moderna en vez de parcharla.'],
      ['Negocios con varias líneas de servicio', 'Cuando hay mucho para explicar (servicios, equipo, casos, preguntas frecuentes), un sitio de varias páginas ordena la información y posiciona cada tema en Google.'],
      ['Marcas que necesitan un portal o un sitio interno', 'Desde plataformas con secciones diferenciadas hasta sitios de uso interno, como el de onboarding que hicimos para Havas Argentina.'],
      ['Quienes ya tienen sitio y quieren evolucionarlo', 'Mantenimiento, mejoras de velocidad y nuevas funciones para que el sitio no quede obsoleto después del lanzamiento.'],
    ],
    stepsTitle: 'Cómo trabajamos un sitio completo',
    steps: [
      ['Relevamiento', 'Entendemos el negocio, el público y qué páginas hacen falta para que te encuentren y te contacten.'],
      ['Arquitectura de contenidos', 'Definimos el mapa del sitio, qué va en cada página y cómo se conectan entre sí.'],
      ['Desarrollo', 'Construimos con Next.js y Tailwind, con entregas parciales para que veas el avance.'],
      ['Lanzamiento y evolución', 'Publicamos y seguimos con soporte: mantenimiento, mejoras de performance y nuevas secciones.'],
    ],
    fitTitle: 'Cuándo conviene otra cosa',
    fitText: 'Si tu objetivo es captar consultas con una sola oferta, una landing page es más directa y más rápida de lanzar. Y si necesitás usuarios con cuenta, paneles de gestión o lógica de negocio propia, ya hablamos de una aplicación web a medida.',
    fitHref: '/servicios/landing-pages-profesionales',
    fitCta: 'Ver landing pages profesionales',
    casesTitle: 'Sitios que hicimos',
    caseSlugs: ['havas-argentina', 'invert-ia', 'ecommerce-mvp'],
    guidesTitle: 'Guías para decidir mejor',
    guideSlugs: ['como-elegir-agencia-desarrollo-web', 'senales-web-necesita-renovarse', 'cuanto-cuesta-pagina-web-argentina'],
  },
  en: {
    audienceTitle: 'Who a custom website is for',
    audience: [
      ['Companies with an outdated website', 'If the site looks bad on phones, loads slowly or your team cannot update it, rebuild it on a modern foundation instead of patching it.'],
      ['Businesses with several service lines', 'When there is a lot to explain (services, team, cases, FAQs), a multi-page site organizes the information and ranks each topic on Google.'],
      ['Brands that need a portal or an internal site', 'From platforms with distinct sections to internal-use sites, like the onboarding site we built for Havas Argentina.'],
      ['Teams with a site that want to evolve it', 'Maintenance, speed improvements and new features so the site does not become obsolete after launch.'],
    ],
    stepsTitle: 'How we build a full website',
    steps: [
      ['Discovery', 'We understand the business, the audience and which pages are needed so people find and contact you.'],
      ['Content architecture', 'We define the sitemap, what goes on each page and how pages connect.'],
      ['Development', 'We build with Next.js and Tailwind, with partial deliveries so you can see progress.'],
      ['Launch and evolution', 'We publish and keep supporting: maintenance, performance improvements and new sections.'],
    ],
    fitTitle: 'When something else fits better',
    fitText: 'If your goal is to capture enquiries with a single offer, a landing page is more direct and faster to launch. And if you need user accounts, management panels or your own business logic, we are talking about a custom web application.',
    fitHref: '/servicios/landing-pages-profesionales',
    fitCta: 'See professional landing pages',
    casesTitle: 'Sites we built',
    caseSlugs: ['havas-argentina', 'invert-ia', 'ecommerce-mvp'],
    guidesTitle: 'Guides to decide better',
    guideSlugs: [],
  },
};

const metaTitle = { es: 'Desarrollo web en Argentina: sitios a medida y soporte | UpCoded', en: 'Web development in Argentina: custom sites and support | UpCoded' } as const;

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> { const locale = toLocale(params.lang); const c = copy[locale]; return { title: metaTitle[locale], description: c.intro, alternates: buildAlternates(locale, 'servicios/desarrollo-web-argentina'), openGraph: { title: c.title, description: c.intro, url: localizedUrl(locale, 'servicios/desarrollo-web-argentina') } }; }
export default async function DesarrolloWebPage({ params }: { params: { lang: 'es' | 'en' } }) { const c = copy[params.lang]; const d = await getDictionary(params.lang); const base = `/${params.lang}`; return <><NavSection dict={d.nav} lang={params.lang} /><main id="contenido" className="pt-[68px]"><section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"><nav className="mb-6 flex gap-2 font-mono text-label-caps uppercase text-on-surface-variant"><Link href={base}>{d.common.home}</Link><span>/</span><Link href={`${base}/#servicios`}>{d.common.services}</Link></nav><h1 className="mb-6 max-w-3xl text-display-lg text-on-surface">{c.title}</h1><p className="mb-8 max-w-2xl text-body-md text-on-surface-variant">{c.intro}</p><div className="flex flex-wrap gap-4"><Link href={`${base}/#contacto`} className="inline-flex min-h-[52px] items-center gap-2 rounded-md bg-primary px-7 text-base text-on-primary">{c.primary}<PiArrowRight size={16} /></Link><Link href={`${base}/#portfolio`} className="inline-flex min-h-[52px] items-center rounded-md border border-outline-strong px-7 text-base text-on-surface">{c.secondary}</Link></div></section><section className="border-y border-outline-variant bg-surface-container-low py-24"><div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop"><h2 className="mb-16 text-headline-lg text-on-surface">{c.section}</h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2">{c.items.map(([t, x]) => <div key={t} className="rounded-lg border border-outline-variant bg-surface-container p-7"><h3 className="mb-2 text-headline-md text-on-surface">{t}</h3><p className="text-on-surface-variant">{x}</p></div>)}</div></div></section><section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"><h2 className="mb-16 text-headline-lg text-on-surface">{c.faq}</h2><div className="grid gap-6 md:grid-cols-2">{c.faqs.map(([q, a]) => <div key={q} className="rounded-lg border border-outline-variant bg-surface-container p-6"><h3 className="mb-3 text-headline-md text-on-surface">{q}</h3><p className="text-on-surface-variant">{a}</p></div>)}</div></section><ServiceExtras lang={params.lang} content={extras[params.lang]} /><section className="on-ink bg-ink py-24 text-center text-on-ink"><h2 className="mb-4 text-headline-lg">{c.cta}</h2><p className="mx-auto mb-8 max-w-xl text-body-md text-on-ink-variant">{c.ctaText}</p><Link href={`${base}/#contacto`} className="inline-flex min-h-[52px] rounded-md bg-on-ink px-7 py-4 text-base text-ink">{d.common.freeProposal}</Link></section></main><FooterSection lang={params.lang} dict={d.footer} /></>; }
