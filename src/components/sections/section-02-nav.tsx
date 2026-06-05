'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 transition-all duration-300 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link className="font-display-lg text-headline-md font-bold text-primary flex items-center gap-2 text-glow" href="/">
          <Image 
            src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png" 
            alt="UpCoded Logo" 
            width={48} 
            height={48} 
            className="object-contain"
          />
          UpCoded
        </Link>

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
          <a
            className="rounded bg-primary px-6 py-2 font-label-caps text-label-caps uppercase text-on-primary transition-all duration-200 hover:scale-95"
            href="#contacto"
          >
            Hablemos
          </a>
        </div>

        <button className="text-primary md:hidden" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant/30 bg-surface px-margin-mobile pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a className="font-body-md text-on-surface-variant transition-colors hover:text-primary" href="#servicios" onClick={() => setMenuOpen(false)}>
              Servicios
            </a>
            <a className="font-body-md text-on-surface-variant transition-colors hover:text-primary" href="#proceso" onClick={() => setMenuOpen(false)}>
              Proceso
            </a>
            <a className="font-body-md text-on-surface-variant transition-colors hover:text-primary" href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a className="font-body-md text-on-surface-variant transition-colors hover:text-primary" href="#precios" onClick={() => setMenuOpen(false)}>
              Precios
            </a>
            <a className="mt-2 block rounded bg-primary px-6 py-3 text-center font-label-caps text-label-caps uppercase text-on-primary transition-all duration-200" href="#contacto" onClick={() => setMenuOpen(false)}>
              Hablemos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}