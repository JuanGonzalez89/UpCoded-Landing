import type { Metadata } from 'next';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';
import { buildAlternates, localizedUrl, toLocale } from '@/lib/seo';
import { getDictionary } from '@/dictionaries';
import ServiceExtras, { type ServiceExtrasContent } from '@/components/sections/service-extras';

const copy = { es: { title: 'Landing pages que convierten visitas en clientes', intro: 'Una landing bien hecha es la diferencia entre un visitante que se va y uno que te escribe. Cada una tiene un solo objetivo: que te contacten.', price: 'Precio', priceText: 'Desde USD 300', delivery: 'Entrega promedio: 2 semanas. Incluye optimización para Google', section: 'Qué incluye cada landing page', faq: 'Preguntas frecuentes', cta: '¿Tenés visitas pero pocas consultas?', ctaText: 'Contanos tu proyecto y te enviamos una propuesta en menos de 24 horas.', primary: 'Quiero mi landing page', secondary: 'Ver nuestro trabajo', items: [['Diseño hecho para tu negocio', 'Sin plantillas: cada sección está pensada para que el visitante te escriba.'], ['Abre rápido', 'Se carga al instante desde el celular, que es desde donde entra la mayoría.'], ['Preparada para Google', 'Estructura y textos ordenados para que Google entienda qué ofrecés.'], ['Formulario de contacto', 'Recibí consultas relevantes directamente en tu correo.'], ['Responsive', 'Tu página se adapta a cualquier pantalla.'], ['Medición de resultados', 'Dejamos el seguimiento listo para que veas cuántas visitas se convierten en consultas.']], faqs: [['¿Cuánto cuesta una landing?', 'Los proyectos arrancan desde USD 300, según alcance y contenido.'], ['¿Cuánto tarda?', 'La entrega promedio es de dos semanas con materiales disponibles.'], ['¿Puedo editarla después?', 'Sí. Te explicamos el sistema o dejamos un panel según tus necesidades.']] }, en: { title: 'Landing pages that turn visits into customers', intro: 'A well-built landing page turns a visitor into a conversation. Each one has a single goal: getting people to contact you.', price: 'Price', priceText: 'From USD 300', delivery: 'Average delivery: 2 weeks. Includes Google optimization', section: 'What every landing page includes', faq: 'Frequently asked questions', cta: 'Getting visits but few inquiries?', ctaText: 'Tell us about your project and we will send a proposal within 24 hours.', primary: 'I want my landing page', secondary: 'View our work', items: [['Design made for your business', 'No templates: every section is built to get the visitor to write to you.'], ['Opens fast', 'It loads instantly on a phone, where most people visit from.'], ['Ready for Google', 'Structure and copy organized so Google understands what you offer.'], ['Contact form', 'Receive relevant enquiries directly by email.'], ['Responsive layout', 'Your page adapts to every screen.'], ['Results tracking', 'Tracking set up so you can see how many visits turn into inquiries.']], faqs: [['How much does a landing page cost?', 'Projects start at USD 300 depending on scope and content.'], ['How long does it take?', 'Average delivery is two weeks when materials are ready.'], ['Can I edit it later?', 'Yes. We explain the system or include a panel for your needs.']] } } as const;
const extras: Record<'es' | 'en', ServiceExtrasContent> = {
  es: {
    audienceTitle: 'Para quién es una landing page',
    audience: [
      ['Profesionales y consultorios', 'Odontólogos, abogados, administradores o contadores que necesitan una presencia clara para que pacientes y clientes los encuentren y consulten.'],
      ['Negocios que lanzan un servicio', 'Una página con un solo objetivo (consultas, turnos, presupuestos) es más fácil de entender y de medir que un sitio con muchas secciones.'],
      ['Campañas de anuncios', 'Si vas a pagar por tráfico en Google o redes, conviene mandarlo a una página pensada para esa oferta y no a una home genérica.'],
      ['Emprendimientos que recién empiezan', 'Es una forma rápida de salir a internet con imagen profesional, y se puede ampliar a un sitio completo más adelante.'],
    ],
    stepsTitle: 'Cómo trabajamos una landing',
    steps: [
      ['Objetivo y mensaje', 'Definimos qué acción querés que haga el visitante y qué necesita saber para decidirse.'],
      ['Estructura y textos', 'Ordenamos las secciones y escribimos el contenido para que cada bloque empuje hacia esa acción.'],
      ['Diseño y desarrollo', 'Diseñamos a medida y programamos con Next.js, con actualizaciones semanales de avance.'],
      ['Publicación y medición', 'Publicamos en producción y dejamos listos el formulario y el seguimiento para que veas qué funciona.'],
    ],
    fitTitle: 'Cuándo una landing no alcanza',
    fitText: 'Si necesitás varias páginas con contenido extenso, un blog, un catálogo grande o usuarios que inicien sesión, una sola página se queda corta. En ese caso conviene pensar en un sitio completo o en una aplicación a medida, y la landing puede ser el primer paso.',
    fitHref: '/servicios/desarrollo-web-argentina',
    fitCta: 'Ver desarrollo web a medida',
    casesTitle: 'Landings que hicimos',
    caseSlugs: ['odontologia-santiago', 'jara-asociados', 'patagonia-motors'],
    guidesTitle: 'Guías para decidir mejor',
    guideSlugs: ['crear-pagina-web-para-vender-mas', 'cuanto-cuesta-pagina-web-argentina'],
  },
  en: {
    audienceTitle: 'Who a landing page is for',
    audience: [
      ['Professionals and practices', 'Dentists, lawyers, property managers or accountants who need a clear presence so patients and clients can find and contact them.'],
      ['Businesses launching a service', 'A page with a single goal (enquiries, appointments, quotes) is easier to understand and measure than a site with many sections.'],
      ['Ad campaigns', 'If you pay for traffic on Google or social media, send it to a page built for that offer instead of a generic home page.'],
      ['Early-stage ventures', 'A fast way to get online with a professional image, and it can grow into a full website later.'],
    ],
    stepsTitle: 'How we build a landing page',
    steps: [
      ['Goal and message', 'We define the action you want visitors to take and what they need to know to decide.'],
      ['Structure and copy', 'We order the sections and write the content so every block pushes toward that action.'],
      ['Design and development', 'We design from scratch and build with Next.js, with weekly progress updates.'],
      ['Launch and measurement', 'We publish to production and leave the form and tracking ready so you can see what works.'],
    ],
    fitTitle: 'When a landing page is not enough',
    fitText: 'If you need several pages with extensive content, a blog, a large catalog or users who sign in, a single page falls short. In that case consider a full website or a custom application, and the landing page can be the first step.',
    fitHref: '/servicios/desarrollo-web-argentina',
    fitCta: 'See custom web development',
    casesTitle: 'Landing pages we built',
    caseSlugs: ['odontologia-santiago', 'jara-asociados', 'patagonia-motors'],
    guidesTitle: 'Guides to decide better',
    guideSlugs: [],
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> { const locale = toLocale(params.lang); const c = copy[locale]; return { title: `${c.title} | UpCoded`, description: c.intro, alternates: buildAlternates(locale, 'servicios/landing-pages-profesionales'), openGraph: { title: c.title, description: c.intro, url: localizedUrl(locale, 'servicios/landing-pages-profesionales') } }; }
export default async function LandingPage({ params }: { params: { lang: 'es' | 'en' } }) { const c = copy[params.lang]; const d = await getDictionary(params.lang); const base = `/${params.lang}`; return <><NavSection dict={d.nav} lang={params.lang} /><main id="contenido" className="pt-[68px]"><section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"><nav className="mb-6 flex gap-2 font-mono text-label-caps uppercase text-on-surface-variant"><Link href={base}>{d.common.home}</Link><span>/</span><Link href={`${base}/#servicios`}>{d.common.services}</Link></nav><h1 className="mb-6 max-w-3xl text-display-lg text-on-surface">{c.title}</h1><p className="mb-8 max-w-2xl text-body-md text-on-surface-variant">{c.intro}</p><div className="flex flex-wrap gap-4"><Link href={`${base}/${params.lang === 'en' ? 'start-project' : 'iniciar-proyecto'}`} className="inline-flex min-h-[52px] items-center gap-2 rounded-md bg-primary px-7 text-base text-on-primary">{c.primary}<PiArrowRight size={16} /></Link><Link href={`${base}/#portfolio`} className="inline-flex min-h-[52px] items-center rounded-md border border-outline-strong px-7 text-base text-on-surface">{c.secondary}</Link></div></section><section className="border-y border-outline-variant bg-surface-container-low py-10 text-center"><p className="font-mono text-label-caps uppercase text-on-surface-variant">{c.price}</p><p className="font-mono text-[2rem] text-primary">{c.priceText}</p><p className="mt-2 text-on-surface-variant">{c.delivery}</p></section><section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"><h2 className="mb-16 text-headline-lg text-on-surface">{c.section}</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{c.items.map(([t, x]) => <div key={t} className="rounded-lg border border-outline-variant bg-surface-container p-7"><h3 className="mb-2 text-headline-md text-on-surface">{t}</h3><p className="text-on-surface-variant">{x}</p></div>)}</div></section><section className="bg-surface-container-low py-24"><div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop"><h2 className="mb-16 text-headline-lg text-on-surface">{c.faq}</h2><div className="grid gap-6 md:grid-cols-2">{c.faqs.map(([q, a]) => <div key={q} className="rounded-lg border border-outline-variant bg-surface-container p-6"><h3 className="mb-3 text-headline-md text-on-surface">{q}</h3><p className="text-on-surface-variant">{a}</p></div>)}</div></div></section><ServiceExtras lang={params.lang} content={extras[params.lang]} /><section className="on-ink bg-ink py-24 text-center text-on-ink"><h2 className="mb-4 text-headline-lg">{c.cta}</h2><p className="mx-auto mb-8 max-w-xl text-body-md text-on-ink-variant">{c.ctaText}</p><Link href={`${base}/${params.lang === 'en' ? 'start-project' : 'iniciar-proyecto'}`} className="inline-flex min-h-[52px] rounded-md bg-on-ink px-7 py-4 text-base text-ink">{d.common.freeProposal}</Link></section></main><FooterSection lang={params.lang} dict={d.footer} /></>; }
