import type { Config } from 'tailwindcss';

/**
 * UpCoded design tokens.
 *
 * Tema unico: claro (papel calido) con acento verde petroleo profundo.
 * Los nombres semanticos (surface / on-surface / primary / outline) se mantienen
 * respecto del sistema anterior para que blog, portfolio y servicios hereden la
 * paleta sin tocar cada archivo.
 *
 * La familia `ink-*` es el unico contrapunto oscuro y se usa solo en dos bloques
 * deliberados de la home (Resultados y Contacto + Footer). No es un modo oscuro.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Acento
        primary: '#0F4C4A',
        'primary-container': '#0A3735',
        'primary-fixed': '#0A3735',
        'primary-fixed-dim': '#0A3735',
        'on-primary': '#FBF9F6',
        'on-primary-container': '#FBF9F6',
        'on-primary-fixed': '#FBF9F6',
        'on-primary-fixed-variant': '#DCEAE7',
        'primary-tint': '#EDF2F1',
        'surface-tint': '#0F4C4A',
        'inverse-primary': '#8FC9C1',

        // Superficies claras
        background: '#FBF9F6',
        surface: '#FBF9F6',
        'surface-dim': '#F3EFE9',
        'surface-bright': '#FFFFFF',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#F3EFE9',
        'surface-container': '#FFFFFF',
        'surface-container-high': '#FFFFFF',
        'surface-container-highest': '#F3EFE9',
        'surface-variant': '#F3EFE9',

        // Tinta / texto
        'on-background': '#191713',
        'on-surface': '#191713',
        'on-surface-variant': '#6C665C',
        outline: '#8E877B',
        'outline-variant': '#E3DDD3',
        'outline-strong': '#D8D1C6',

        // Bloques oscuros deliberados
        ink: '#191713',
        'ink-container': '#211E19',
        'ink-outline': '#38342D',
        'on-ink': '#FBF9F6',
        'on-ink-variant': '#A8A196',
        'accent-ink': '#8FC9C1',
        'inverse-surface': '#191713',
        'inverse-on-surface': '#FBF9F6',

        // Neutros secundarios (compatibilidad con el sistema anterior)
        secondary: '#6C665C',
        'secondary-container': '#F3EFE9',
        'on-secondary': '#FBF9F6',
        'on-secondary-container': '#191713',
        tertiary: '#8E877B',
        'tertiary-container': '#F3EFE9',
        'on-tertiary': '#FBF9F6',
        'on-tertiary-container': '#191713',

        error: '#9B2C1C',
        'error-container': '#F7E4E0',
        'on-error': '#FBF9F6',
        'on-error-container': '#6B1E13',
      },

      /**
       * Shape lock: 6px en controles (boton, input, badge), 10px en cards,
       * 14px en contenedores grandes. `full` vuelve a ser circulo real.
       */
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '10px',
        xl: '14px',
        '2xl': '18px',
        full: '9999px',
      },

      spacing: {
        'margin-mobile': '20px',
        'margin-desktop': '48px',
        base: '8px',
        gutter: '24px',
        'container-max': '1220px',
      },

      maxWidth: {
        'container-max': '1220px',
        measure: '65ch',
      },

      fontFamily: {
        sans: ['var(--font-instrument-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Aliases del sistema anterior, ahora todos apuntan a las dos familias reales.
        'display-lg': ['var(--font-instrument-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display-lg-mobile': ['var(--font-instrument-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'headline-md': ['var(--font-instrument-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body-md': ['var(--font-instrument-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'label-caps': ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
        'code-sm': ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },

      /** Escala fluida. Los pares mobile/desktop colapsan al mismo clamp. */
      fontSize: {
        'display-lg': [
          'clamp(2.125rem, 1.35rem + 3.9vw, 3.75rem)',
          { lineHeight: '1.03', letterSpacing: '-0.032em', fontWeight: '600' },
        ],
        'display-lg-mobile': [
          'clamp(2.125rem, 1.35rem + 3.9vw, 3.75rem)',
          { lineHeight: '1.03', letterSpacing: '-0.032em', fontWeight: '600' },
        ],
        'headline-lg': [
          'clamp(1.6875rem, 1.25rem + 2.2vw, 2.5rem)',
          { lineHeight: '1.08', letterSpacing: '-0.028em', fontWeight: '600' },
        ],
        'headline-md': [
          'clamp(1.1875rem, 1.1rem + 0.45vw, 1.375rem)',
          { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' },
        ],
        'body-md': [
          'clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)',
          { lineHeight: '1.6', letterSpacing: '-0.005em', fontWeight: '400' },
        ],
        'body-sm': ['0.9375rem', { lineHeight: '1.55', fontWeight: '400' }],
        'label-caps': [
          '0.6875rem',
          { lineHeight: '1.2', letterSpacing: '0.14em', fontWeight: '500' },
        ],
        'code-sm': ['0.8125rem', { lineHeight: '1.45', fontWeight: '400' }],
        figure: [
          'clamp(2.75rem, 1.9rem + 4.2vw, 4.5rem)',
          { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '500' },
        ],
      },

      transitionTimingFunction: {
        // Curva unica del sitio. Sin ease-in-out por defecto.
        upcoded: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
};

export default config;
