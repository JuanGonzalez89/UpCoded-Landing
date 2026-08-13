import Link from 'next/link';
import NavSection from '@/components/sections/section-02-nav';
import FooterSection from '@/components/sections/section-12-footer';

export default function NotFound() {
  return (
    <>
      <NavSection />
      <main
        id="contenido"
        className="flex min-h-[70dvh] items-center px-margin-mobile pt-[68px] md:px-margin-desktop"
      >
        <div className="mx-auto w-full max-w-container-max">
          <p className="font-mono text-label-caps uppercase text-on-surface-variant">Error 404</p>
          <h1 className="mt-4 max-w-measure text-display-lg text-on-surface">
            Esta página no existe
          </h1>
          <p className="mt-5 max-w-measure text-body-md text-on-surface-variant">
            Puede que el enlace esté roto o que la página haya cambiado de dirección. Desde acá
            podés seguir a cualquiera de estas secciones.
          </p>

          <ul className="mt-10 grid max-w-2xl grid-cols-1 divide-y divide-outline-variant border-y border-outline-variant sm:grid-cols-2 sm:divide-y-0">
            {[
              { label: 'Inicio', href: '/' },
              { label: 'Servicios', href: '/#servicios' },
              { label: 'Trabajo', href: '/#portfolio' },
              { label: 'Blog', href: '/blog' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  className="flex min-h-[56px] items-center text-body-md text-on-surface transition-colors duration-200 ease-upcoded hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
