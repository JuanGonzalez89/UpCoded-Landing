import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
