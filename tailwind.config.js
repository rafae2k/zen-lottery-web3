/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0D402F',
          50: '#7CE4C2',
          100: '#63DFB6',
          200: '#30D59E',
          300: '#22A67A',
          400: '#177354',
          500: '#0D402F',
          600: '#092B1F',
          700: '#041610',
          800: '#000000',
          900: '#000000'
        }
      }
    }
  },
  plugins: []
}
