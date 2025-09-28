// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Ana Bordo/Kırmızı Tema
        primary: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7a9b2',
          400: '#f17889',
          500: '#e63f5b',  // Ana bordo
          600: '#d42047',
          700: '#b1173b',
          800: '#931637',
          900: '#7c1635',
          950: '#440618',
        },
        // Nötr Renkler (Stitch tarzı)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent Renkler
        accent: {
          blue: '#3b82f6',
          green: '#10b981',
          amber: '#f59e0b',
          purple: '#8b5cf6',
        },
        // Arka Plan Renkleri
        background: {
          main: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          dark: '#0a0a0a',
        }
      },
      boxShadow: {
        'stitch': '0 0 0 1px rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.05)',
        'stitch-lg': '0 0 0 1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1)',
        'stitch-xl': '0 0 0 1px rgba(0,0,0,0.05), 0 20px 25px -5px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'stitch': '12px',
      }
    },
  },
  plugins: [],
}
