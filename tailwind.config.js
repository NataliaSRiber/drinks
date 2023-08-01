/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': [
          '0 0 7px #ff0dbf',
          '0 0 10px #ff0dbf',
          '0 0 21px #ff0dbf',
        ],
        '4xl': [
          '0 0 7px #ff0dbf',
          '0 0 10px #ff0dbf',
          '0 0 21px #ff0dbf',
          '0 0 42px #ff0dbf',
        ],
        '5xl': [
          '0 0 7px #ccff15',
          '0 0 10px #ccff15',
          // '0 0 21px #ccff15',
          // '0 0 42px #ccff15',
        ],
        '6xl': [
          '0 0 7px #ccff15',
          '0 0 10px #ccff15',
          '0 0 21px #ccff15',
          '0 0 42px #ccff15',
        ]
    },
      colors: {
        yellowneon: {
          500: '#ccff15'
        },
        greenneon: {
          500: '#49fb35'
        },
        
        pinkneon: {
          500: '#ff0dbf'
        },
        blueneon: {
          500: '#6699f6'
        },
        newblue: {
          950: '#050A30',
          900: '#000C66',
          800: '#0000FF',
          500: '#04F9F2',
        },
        newfuchsia: {
          700: '#FF0080',
        },
        violet: {
          50: '#f1e7ec',
          100: '#eadae2',
          200: '#d4b3c3',
          300: '#750b3c',
          400: '#690a36',
          500:'#5e0930',
          600:'#58082d',
          700:'#460724',
          800:'#35051b',
          900:'#290415',
           },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      hueRotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
}
