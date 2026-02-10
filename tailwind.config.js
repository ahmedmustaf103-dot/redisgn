/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F5F1E8',
        charcoal: '#111111',
        muted: '#6B6B6B',
        // Waten brand — signature palette (warm sand, black, luxury brown)
        waten: {
          bg: '#E9E1D2',      // Primary background — warm sand/beige
          card: '#F5F1E8',    // Secondary neutral — cards, alternate sections
          stone: '#D4CFC8',   // Borders / subtle dividers
          ink: '#111111',     // Primary text / headings
          muted: '#5C5C5C',   // Secondary text
          accent: '#3A332A',  // Deep brown — buttons, hover, footer
          'accent-hover': '#2d2822',  // Slight darken for button hover
        },
      },
      lineHeight: {
        body: '1.75',
      },
    },
  },
  plugins: [],
}
