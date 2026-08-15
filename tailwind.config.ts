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
        primary: '#EBEBEB',
        'on-primary': '#050505',
        'primary-container': '#1A1A1A',
        'on-primary-container': '#EBEBEB',
        
        // Superficies
        background: '#09090B',
        surface: '#09090B',
        'surface-dim': '#121215',
        'surface-bright': '#18181B',
        'surface-container': '#121215',
        'surface-variant': '#18181B',
        
        // Texto
        'on-background': '#FAFAFA',
        'on-surface': '#FAFAFA',
        'on-surface-variant': '#A1A1AA',
        
        // Bordes (1px lines)
        outline: '#27272A',
        'outline-variant': '#3F3F46',
        'outline-strong': '#52525B',

        // Para retrocompatibilidad y utilidades (ink no se usa más pero lo apuntamos al dark)
        ink: '#FAFAFA',
        'ink-container': '#18181B',
        'on-ink': '#050505',
        'accent-ink': '#EBEBEB',

        // Neutros secundarios
        secondary: '#A1A1AA',
        'secondary-container': '#18181B',
        'on-secondary': '#050505',
        
        error: '#EF4444',
        'on-error': '#FAFAFA',
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
