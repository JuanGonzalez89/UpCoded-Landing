'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiListBold, PiXBold, PiSun, PiMoon, PiTranslate } from 'react-icons/pi';

export default function NavSection({ dict, lang }: { dict?: Record<string, string>, lang?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  const fallbackLinks = [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Trabajo', href: '/#portfolio' },
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Precios', href: '/#precios' },
    { label: 'Blog', href: '/blog' },
  ];

  const links = dict ? [
    { label: dict.services, href: `/${lang}/#servicios` },
    { label: dict.work, href: `/${lang}/#portfolio` },
    { label: dict.process, href: `/${lang}/#proceso` },
    { label: dict.pricing, href: `/${lang}/#precios` },
    { label: dict.blog, href: `/${lang}/blog` },
  ] : fallbackLinks;

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

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
            {links.map((link) => {
              const isHashLink = link.href.includes('#');
              const Element = isHashLink ? 'a' : Link;
              
              return (
                <Element
                  key={link.href}
                  className="text-[0.9375rem] text-on-surface-variant transition-colors duration-200 ease-upcoded hover:text-on-surface"
                  href={link.href}
                >
                  {link.label}
                </Element>
              );
            })}
            <a
              className="rounded-full border border-outline bg-surface-dim px-6 py-2.5 text-[0.875rem] font-medium text-on-surface transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] active:scale-[0.98]"
              href={`/${lang ?? 'es'}/#contacto`}
            >
              {dict?.contact ?? 'Hablemos'}
            </a>
            
            <div className="flex items-center gap-1">
              {mounted && (
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-surface-dim text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <PiSun size={20} /> : <PiMoon size={20} />}
                </button>
              )}
              
              <Link
                href={lang === 'es' ? '/en' : '/es'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-surface-dim text-xs font-mono text-on-surface-variant transition-colors hover:border-primary hover:text-primary uppercase"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={lang === 'es' ? '/en' : '/es'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-surface-dim text-xs font-mono text-on-surface-variant transition-colors hover:text-primary uppercase"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </Link>
            {mounted && (
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-surface-dim text-on-surface-variant transition-colors hover:text-primary"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <PiSun size={18} /> : <PiMoon size={18} />}
              </button>
            )}
            <button
              className="-mr-2 ml-1 flex h-11 w-11 items-center justify-center text-on-surface"
              type="button"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <PiXBold size={22} /> : <PiListBold size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[45] bg-background transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-margin-mobile pb-10 pt-[120px]">
          <nav className="flex flex-col gap-6">
            {links.map((link) => {
              const isHashLink = link.href.includes('#');
              const Element = isHashLink ? 'a' : Link;

              return (
                <Element
                  key={link.label}
                  href={link.href}
                  className="text-[2rem] font-medium tracking-tight text-on-surface transition-colors hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Element>
              );
            })}
            <a
              className="mt-8 flex min-h-[52px] items-center justify-center rounded-full border border-outline bg-surface-dim px-6 text-base font-medium text-on-surface transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] active:scale-[0.98]"
              href={`/${lang ?? 'es'}/#contacto`}
              onClick={() => setMenuOpen(false)}
            >
              {dict?.contact ?? 'Hablemos'}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
