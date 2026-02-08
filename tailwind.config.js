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
        // Waten brand — update with exact hex from waten.com if provided
        waten: {
          dark: '#0D2E24',
          green: '#1B4D3E',
          accent: '#2D6A5C',
          light: '#E8F0EE',
        },
      },
    },
  },
  plugins: [],
}
