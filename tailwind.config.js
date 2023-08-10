/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '2xl': ['0 0 7px #fff'],
        '3xl': ['0 0 7px #ff0dbf', '0 0 10px #ff0dbf', '0 0 21px #ff0dbf'],
        '4xl': [
          '0 0 7px #ff0dbf',
          '0 0 10px #ff0dbf',
          '0 0 21px #ff0dbf',
          '0 0 42px #ff0dbf',
        ],
        '5xl': ['0 0 7px #ccff15', '0 0 10px #ccff15', '0 0 21px #ccff15'],
        '6xl': [
          '0 0 7px #ccff15',
          '0 0 10px #ccff15',
          '0 0 21px #ccff15',
          '0 0 42px #ccff15',
        ],
        '7xl': ['0 0 7px #49fb35', '0 0 10px #49fb35', '0 0 21px #49fb35'],
        '8xl': [
          '0 0 7px #00f9ff',
          '0 0 10px #00f9ff',
          '0 0 21px #00f9ff',
          '0 0 42px #00f9ff',
        ],
        '9xl': ['0 0 7px #7d12ff', '0 0 10px #7d12ff', '0 0 21px #7d12ff'],
      },
      colors: {
        newfuchsia: {
          700: '#FF0080',
        },
        yellowneon: {
          500: '#ccff15',
        },
        greenneon: {
          500: '#49fb35',
        },

        pinkneon: {
          500: '#ff0dbf',
        },
        blueneon: {
          300: '#00f9ff',
          500: '#6699f6',
        },

        purpleneon: {
          500: '#7d12ff',
        },
        newblue: {
          950: '#050A30',
          900: '#000C66',
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
