'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { PiListBold, PiXBold } from 'react-icons/pi';

const links = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Trabajo', href: '/#portfolio' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Blog', href: '/blog' },
] as const;

export default function NavSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // La regla inferior aparece recien cuando la pagina se movio.
  // IntersectionObserver en vez de listener de scroll: no corre por frame.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Con el menu abierto el fondo no debe scrollear, y Escape lo cierra.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute left-0 top-0 h-px w-px" />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-md transition-colors duration-300 ease-upcoded ${
          scrolled ? 'border-outline-variant' : 'border-transparent'
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex h-[68px] max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop"
        >
          <Link
            className="flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-tight text-on-surface"
            href="/"
          >
            <Image
              src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png"
              alt=""
              width={26}
              height={26}
              className="object-contain grayscale invert"
            />
            UpCoded<span className="font-mono text-[11px] text-on-surface-variant tracking-wide ml-0.5">/dev</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                className="text-[0.9375rem] text-on-surface-variant transition-colors duration-200 ease-upcoded hover:text-on-surface"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="rounded-full bg-primary px-6 py-2.5 text-[0.875rem] font-medium text-on-primary transition-opacity duration-200 ease-upcoded hover:opacity-85 active:scale-[0.98]"
              href="/#contacto"
            >
              Hablemos
            </Link>
          </div>

          <button
            className="-mr-2 flex h-11 w-11 items-center justify-center text-on-surface md:hidden"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <PiXBold size={22} /> : <PiListBold size={22} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background pt-[68px] md:hidden">
          <nav aria-label="Principal móvil" className="flex flex-col px-margin-mobile pt-6">
            {links.map((link, i) => (
              <Link
                key={link.href}
                className="border-b border-outline-variant py-4 text-2xl font-medium tracking-[-0.02em] text-on-surface motion-safe:animate-none"
                href={link.href}
                style={{ transitionDelay: `${i * 40}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-8 flex min-h-[52px] items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-on-primary active:scale-[0.98]"
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
