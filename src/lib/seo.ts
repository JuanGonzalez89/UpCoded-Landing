import type { Metadata } from 'next';

export const SITE_URL = 'https://upcoded.dev';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** Normaliza cualquier valor de ruta [lang] a un locale valido. */
export function toLocale(value: string | undefined): Locale {
  return LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;
}

/**
 * Construye canonical + hreflang para una ruta con prefijo de idioma.
 *
 * Regla: el canonical de cada pagina apunta a SI MISMA, con su prefijo de idioma
 * incluido. Antes apuntaban a la URL sin prefijo (ej: /servicios/automatizaciones),
 * que no existe y redirige a /es/..., y Google lo marcaba como
 * "Alternate page with proper canonical" y no la indexaba.
 *
 * `path` va sin prefijo de idioma y sin barra inicial. '' es la home.
 */
export function buildAlternates(lang: string, path = ''): Metadata['alternates'] {
  const locale = toLocale(lang);
  const suffix = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';

  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}${suffix}`]),
  ) as Record<Locale, string>;

  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages: {
      ...languages,
      // Sin coincidencia de idioma, Google sirve la version por defecto (es).
      'x-default': `${SITE_URL}/${DEFAULT_LOCALE}${suffix}`,
    },
  };
}

/** URL absoluta con prefijo de idioma, para openGraph.url y JSON-LD. */
export function localizedUrl(lang: string, path = ''): string {
  const locale = toLocale(lang);
  const suffix = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';
  return `${SITE_URL}/${locale}${suffix}`;
}
