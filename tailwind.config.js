const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SUSE', 'sans-serif'],
      },
      backdropBlur: {
        'lg': '10px',
        'xl': '20px',
      },
      colors: {
        // Light mode - Warm cream/beige palette
        light: {
          bg: '#FDF8F3',
          card: '#FFFFFF',
          cardHover: '#FEF7F0',
          accent: '#E07A5F',
          accentHover: '#C96A52',
          text: '#2D3748',
          textMuted: '#718096',
          border: '#E8DDD4',
        },
        // Dark mode - Deep blue/purple palette
        dark: {
          bg: '#0B1121',
          card: '#151D30',
          cardHover: '#1A2540',
          accent: '#6366F1',
          accentHover: '#818CF8',
          text: '#F1F5F9',
          textMuted: '#94A3B8',
          border: '#2D3A5C',
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      height: {
        '4/5': '80%',
      },
      boxShadow: {
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [flowbite.plugin(), require("@xpd/tailwind-3dtransforms")],
}