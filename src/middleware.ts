import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

// URL publicada por una versión anterior del blog. No tiene una pieza de
// contenido equivalente en el sitio actual, por lo que no la redirigimos a
// una página genérica: 410 le indica a Google que debe retirarla del índice.
const retiredPaths = new Set(['/blog/que-es-landing-page-negocio']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (retiredPaths.has(pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: { 'X-Robots-Tag': 'noindex' },
    });
  }

  // El formulario guiado (UC-01) usa slug por idioma: /es/iniciar-proyecto y
  // /en/start-project. Normalizamos la variante cruzada con un 308.
  if (pathname === '/en/iniciar-proyecto' || pathname === '/es/start-project') {
    const target = pathname === '/en/iniciar-proyecto' ? '/en/start-project' : '/es/iniciar-proyecto';
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  // Assets, api e internals de Next no llevan prefijo de idioma.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // "/es/" con barra final no matcheaba `pathname === '/es'` ni `startsWith('/es/')`
  // de forma util: caia al redirect y quedaba /es/es/. Normalizamos primero.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    request.nextUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(request.nextUrl, 308);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  // 308 en vez del 307 por defecto: la ausencia de prefijo es permanente,
  // asi Google consolida el enlace hacia la version con idioma.
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl, 308);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
