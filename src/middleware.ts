import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar assets, api, next internals, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/portfolio') || // if serving static images from public/portfolio
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Verificar si ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirigir si no hay locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
