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
          10: '#F5F5F5',
          20: '#E5E5E5',
          30: '#D4D4D4',
          40: '#AFAFAF',
          50: '#999999',
          60: '#7A7A7A',
          70: '#5E5E5E',
          80: '#4B4B4B',
          90: '#2F2F2F',
          100: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
