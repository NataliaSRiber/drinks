/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        newblue: {
          950: '#050A30',
          900: '#000C66',
          800: '#0000FF',
          500: '#04F9F2',
        },
        newfuchsia: {
          700: '#FF0080',
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}
