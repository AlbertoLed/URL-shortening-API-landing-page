/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          100: 'hsl(257, 7%, 63%)',
          200: 'hsl(257, 27%, 26%)',
          300: 'hsl(260, 8%, 14%)',
        },
        cyan: 'hsl(180, 66%, 49%)',
        'cyan-h': '#71f0f0',
        'cyan-a': '#76e3e3',
        red: 'hsl(0, 87%, 67%)',
        salmon: '#f79494',
        gray: {
          100: 'hsl(230, 25%, 95%)',
          200: 'hsl(0, 0%, 75%)',
        },
        blue: 'hsl(255, 11%, 22%)',
      },
      fontSize: {
        'sm': '.94rem',
        '2xl': '1.4rem',
        '3xl': '1.7rem',
        '5xl': '2.6rem',
        '7xl': '5rem',
        
      },
      width: {
        'nav-76': 'calc(76% - 169px)'
      }
    },
    backgroundSize: {
      'phone-size': '500px',
      'desktop-size': 'min(120%, 750px)',
      'cover': 'cover'
    },
    backgroundPosition: {
      'right-top': 'right calc(-140px + 7%) top',
      'left-top': 'left 80px top',
      'rt': 'right top',
      'center': ' center'
    }
  },
  plugins: [],
}

