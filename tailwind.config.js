/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9df',
          300: '#b8b8c3',
          400: '#9090a0',
          500: '#6f6f82',
          600: '#585869',
          700: '#474755',
          800: '#3c3c47',
          900: '#34343d',
          950: '#18181c',
        },
        sand: {
          50: '#fbf8f4',
          100: '#f5efe4',
          200: '#ebddc8',
          300: '#dcc4a3',
          400: '#cba67a',
          500: '#bf8e5e',
          600: '#b17952',
          700: '#946245',
          800: '#78503e',
          900: '#624335',
          950: '#35221b',
        },
        coral: {
          50: '#fff4f2',
          100: '#ffe7e2',
          200: '#ffd2c8',
          300: '#ffb1a0',
          400: '#ff8368',
          500: '#f95d40',
          600: '#e64022',
          700: '#c13117',
          800: '#9f2c18',
          900: '#84291a',
          950: '#48100a',
        },
        sage: {
          50: '#f4f7f5',
          100: '#e6ede7',
          200: '#cedcd1',
          300: '#a9c3af',
          400: '#7fa388',
          500: '#5e8669',
          600: '#486b53',
          700: '#3b5744',
          800: '#324739',
          900: '#2b3b31',
          950: '#152019',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
      boxShadow: {
        'soft': '0 2px 20px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 20px 50px -20px rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}
