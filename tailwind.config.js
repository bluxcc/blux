import { defineConfig } from 'tailwindcss';

export default defineConfig({
  prefix: 'bluxcc:',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--bluxcc-color-primary-50)',
          100: 'var(--bluxcc-color-primary-100)',
          200: 'var(--bluxcc-color-primary-200)',
          500: 'var(--bluxcc-color-primary-500)',
          600: 'var(--bluxcc-color-primary-600)',
          700: 'var(--bluxcc-color-primary-700)',
        },
        'light-red': {
          50: 'var(--bluxcc-color-light-red-50)',
          100: 'var(--bluxcc-color-light-red-100)',
          200: 'var(--bluxcc-color-light-red-200)',
          300: 'var(--bluxcc-color-light-red-300)',
          500: 'var(--bluxcc-color-light-red-500)',
        },
        'light-blue': {
          50: 'var(--bluxcc-color-light-blue-50)',
          100: 'var(--bluxcc-color-light-blue-100)',
          200: 'var(--bluxcc-color-light-blue-200)',
          300: 'var(--bluxcc-color-light-blue-300)',
          500: 'var(--bluxcc-color-light-blue-500)',
          600: 'var(--bluxcc-color-light-blue-600)',
        },
        gray: {
          50: 'var(--bluxcc-color-gray-50)',
          100: 'var(--bluxcc-color-gray-100)',
          200: 'var(--bluxcc-color-gray-200)',
          300: 'var(--bluxcc-color-gray-300)',
          600: 'var(--bluxcc-color-gray-600)',
          700: 'var(--bluxcc-color-gray-700)',
          800: 'var(--bluxcc-color-gray-800)',
          900: 'var(--bluxcc-color-gray-900)',
          950: 'var(--bluxcc-color-gray-950)',
        },
        alert: {
          info: 'var(--bluxcc-color-alert-info)',
          error: 'var(--bluxcc-color-alert-error)',
          success: 'var(--bluxcc-color-alert-success)',
          warning: 'var(--bluxcc-color-alert-warning)',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
});
