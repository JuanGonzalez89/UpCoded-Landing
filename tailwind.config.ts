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
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--on-primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--primary-container) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--on-primary-container) / <alpha-value>)',
        
        // Superficies
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-dim': 'rgb(var(--surface-dim) / <alpha-value>)',
        'surface-bright': 'rgb(var(--surface-bright) / <alpha-value>)',
        'surface-container': 'rgb(var(--surface-container) / <alpha-value>)',
        'surface-variant': 'rgb(var(--surface-variant) / <alpha-value>)',
        
        // Texto
        'on-background': 'rgb(var(--on-background) / <alpha-value>)',
        'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--on-surface-variant) / <alpha-value>)',
        
        // Bordes
        outline: 'rgb(var(--outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--outline-variant) / <alpha-value>)',
        'outline-strong': 'rgb(var(--outline-strong) / <alpha-value>)',

        // Compatibilidad (ink map)
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-container': 'rgb(var(--ink-container) / <alpha-value>)',
        'on-ink': 'rgb(var(--on-ink) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',

        // Neutros secundarios
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-container': 'rgb(var(--secondary-container) / <alpha-value>)',
        'on-secondary': 'rgb(var(--on-secondary) / <alpha-value>)',
        
        error: 'rgb(var(--error) / <alpha-value>)',
        'on-error': 'rgb(var(--on-error) / <alpha-value>)',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
