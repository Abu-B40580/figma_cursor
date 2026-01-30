/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Noto Sans TC"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#f5b400', // 黃色主色
          dark: '#d99a00',
          light: '#ffe191',
        },
        accent: {
          green: '#5c8a3d',
          brown: '#9b6b34',
        },
        background: {
          DEFAULT: '#faf4e5', // 淡米色背景
          soft: '#f7f1e3',
          footer: '#a46a14',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};


