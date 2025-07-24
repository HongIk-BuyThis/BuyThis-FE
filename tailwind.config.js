/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        h1: ['36pt', { lineHeight: '1', letterSpacing: '0' }],
        h2: ['32pt', { lineHeight: '1', letterSpacing: '0' }],
        h3: ['24pt', { lineHeight: '1', letterSpacing: '0' }],
        body1: ['16pt', { lineHeight: '1', letterSpacing: '0' }],
        body2: ['20pt', { lineHeight: '1', letterSpacing: '0' }],
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      colors: {
        gray: {
          10: '#EFEFEF',
          20: '#DCDCDC',
          30: '#C8C8C8',
          40: '#ACACAC',
          50: '#939393',
          60: '#777',
          70: '#616161',
          80: '#474747',
          90: '#383838',
          100: '#171717',
        },
        main: {
          default: '#36C9C9',
          dark: '#17756B',
          bright: '#DFF8F5',
        },
      },
    },
  },
  plugins: [],
};
