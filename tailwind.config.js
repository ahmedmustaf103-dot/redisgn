/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F8F6F3',
        charcoal: '#1A1A1A',
        muted: '#6B6B6B',
        // Waten brand — neutral palette from official waten.com (beige, tan, black)
        waten: {
          bg: '#F8F6F3',
          tan: '#E8E4DF',
          stone: '#D4CFC8',
          ink: '#1A1A1A',
          muted: '#5C5C5C',
        },
      },
    },
  },
  plugins: [],
}
