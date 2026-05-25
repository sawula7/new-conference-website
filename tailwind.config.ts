import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // Classic Travel Navy Blue
        ct: {
          navy: {
            DEFAULT: '#0b2d59',
            light:   '#1a4a8a',
            dark:    '#071d3a',
            deeper:  '#040e1c',
          },
          gold: {
            DEFAULT: '#c9a84c',
            light:   '#e8c96c',
            dark:    '#a8882c',
            pale:    '#f5e9c8',
          },
          gray: {
            light: '#f5f7fa',
            mid:   '#8a97a8',
            dark:  '#3d4f63',
          },
        },
        // Keep old colors for backward compatibility
        primary: {
          50:  '#f0f9fc',
          100: '#dcf0f7',
          200: '#b9e2f0',
          300: '#85cde4',
          400: '#4ab5d4',
          500: '#259cc0',
          DEFAULT: '#1786a5',
          700: '#137089',
          800: '#0f5a70',
          900: '#0a3d52',
          dark: '#0d5f7e',
          darker: '#0a3d52',
        },
        accent: {
          50:  '#fffef0',
          100: '#fdfad4',
          200: '#fbf2a8',
          300: '#f8e872',
          400: '#f4d83c',
          DEFAULT: '#f0c040',
          600: '#d4a520',
          700: '#a87d15',
          dark: '#c49a10',
          darker: '#a07a0c',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-right':'slideRight 0.5s ease-out forwards',
        'bounce-slow':'bounce 3s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
