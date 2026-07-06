import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#2B527A',
        'burgundy': '#AA1F2A',
        'coral-red': '#FF5B5B',
        'graphite': '#999999',
        'soft-white': '#FFFFFF',
        // legacy aliases kept for compat
        'forest-green': '#2B527A',
        'gold-accent': '#AA1F2A',
      },
      fontFamily: {
        'heading': ['Open Sans', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': '72px',
        'hero-tablet': '48px',
        'hero-mobile': '34px',
        'section-desktop': '48px',
        'section-tablet': '34px',
        'section-mobile': '28px',
      },
      borderRadius: {
        'button': '14px',
        'card': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'data-flow': 'dataFlow 3s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        dataFlow: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(28, 52, 78, 0.92) 0%, rgba(170, 31, 42, 0.75) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
