import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#afecff',
        'primary-container': '#00d9ff',
        'primary-fixed': '#aeecff',
        'primary-fixed-dim': '#00d9ff',
        'on-primary': '#003641',
        'on-primary-container': '#005b6c',
        'on-primary-fixed': '#001f26',
        'on-primary-fixed-variant': '#004e5d',
        'inverse-primary': '#00687b',
        'surface-tint': '#00d9ff',
        background: '#131314',
        surface: '#131314',
        'surface-dim': '#131314',
        'surface-bright': '#3a393a',
        'surface-container-lowest': '#0e0e0f',
        'surface-container-low': '#1c1b1c',
        'surface-container': '#201f20',
        'surface-container-high': '#2a2a2b',
        'surface-container-highest': '#353436',
        'surface-variant': '#353436',
        'inverse-surface': '#e5e2e3',
        'inverse-on-surface': '#313031',
        'on-background': '#e5e2e3',
        'on-surface': '#e5e2e3',
        'on-surface-variant': '#bbc9ce',
        outline: '#859398',
        'outline-variant': '#3c494d',
        secondary: '#c8c5cb',
        'secondary-fixed': '#e4e1e7',
        'secondary-fixed-dim': '#c8c5cb',
        'secondary-container': '#47464b',
        'on-secondary': '#303034',
        'on-secondary-container': '#b6b4b9',
        'on-secondary-fixed': '#1b1b1f',
        'on-secondary-fixed-variant': '#47464b',
        tertiary: '#e4e2e8',
        'tertiary-fixed': '#e4e1e8',
        'tertiary-fixed-dim': '#c8c5cc',
        'tertiary-container': '#c8c6cc',
        'on-tertiary': '#303035',
        'on-tertiary-container': '#535258',
        'on-tertiary-fixed': '#1b1b20',
        'on-tertiary-fixed-variant': '#46464c',
        error: '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-error-container': '#ffdad6'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      spacing: {
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        base: '8px',
        gutter: '24px',
        'container-max': '1280px'
      },
      fontFamily: {
        'display-lg': ['Inter'],
        'display-lg-mobile': ['Inter'],
        'headline-md': ['Inter'],
        'body-md': ['Inter'],
        'label-caps': ['JetBrains Mono'],
        'code-sm': ['JetBrains Mono']
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'code-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }]
      }
    }
  }
};

export default config;