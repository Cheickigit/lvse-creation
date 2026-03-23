/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1A2F',
        secondary: '#1E3A5F',
        accent: '#D4AF37',
        gold: '#D4AF37',
        light: '#F5F7FA',
        dark: '#0A1A2F',
      },
    },
  },
  plugins: [],
}