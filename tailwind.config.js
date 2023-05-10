/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Satisfy", "cursive"],
      ws: ['Work Sans', "sans-serif"],
      os: ['Open Sans', "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
