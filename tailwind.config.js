/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(26, 100%, 55%)',
        'primary-pale': 'hsl(25, 100%, 94%)',
        'neutral-100': 'hsl(223, 64%, 98%)',
        'neutral-200': 'hsl(220, 14%, 75%)',
        'neutral-300': 'hsl(219, 9%, 45%)',
        'neutral-400': 'hsl(220, 13%, 13%)'
      }
    },
  },
  plugins: [],
}
