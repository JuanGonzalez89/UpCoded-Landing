import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

export default function NotFound() {
  return <><NavSection lang="en" /><main id="contenido" className="flex min-h-[70dvh] items-center px-margin-mobile pt-[68px] md:px-margin-desktop"><div className="mx-auto w-full max-w-container-max"><p className="font-mono text-label-caps uppercase text-on-surface-variant">Error 404</p><h1 className="mt-4 max-w-measure text-display-lg text-on-surface">Page not found / Página no encontrada</h1><p className="mt-5 max-w-measure text-body-md text-on-surface-variant">The link may be broken or the page may have moved. / El enlace puede estar roto o la página cambió de dirección.</p><ul className="mt-10 grid max-w-2xl grid-cols-1 divide-y divide-outline-variant border-y border-outline-variant sm:grid-cols-2 sm:divide-y-0">{[{ label: 'Home / Inicio', href: '/es' }, { label: 'Services / Servicios', href: '/es/#servicios' }, { label: 'Work / Trabajo', href: '/es/#portfolio' }, { label: 'Blog', href: '/es/blog' }].map((item) => <li key={item.href}><Link className="flex min-h-[56px] items-center text-body-md text-on-surface hover:text-primary" href={item.href}>{item.label}</Link></li>)}</ul></div></main><FooterSection lang="en" /></>;
}
