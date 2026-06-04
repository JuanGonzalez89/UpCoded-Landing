import Image from 'next/image';

export default function NavSection() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 transition-all duration-300 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a className="font-display-lg text-headline-md font-bold text-primary flex items-center gap-2 text-glow" href="#">
          <Image 
            src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png" 
            alt="UpCoded Logo" 
            width={48} 
            height={48} 
            className="object-contain"
          />
          UpCoded
        </a>

        <div className="hidden items-center gap-gutter font-body-md text-body-md md:flex">
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#servicios">
            Servicios
          </a>
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#proceso">
            Proceso
          </a>
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#portfolio">
            Portfolio
          </a>
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#precios">
            Precios
          </a>
          {/* CTA nav */}
          <a
            className="rounded bg-primary px-6 py-2 font-label-caps text-label-caps uppercase text-on-primary transition-all duration-200 hover:scale-95"
            href="#contacto"
          >
            Hablemos
          </a>
        </div>

        {/* Hamburger mobile (TODO: agregar JS toggle para menú móvil) */}
        <button className="text-primary md:hidden" type="button" aria-label="Abrir menú">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}