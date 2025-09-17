/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      noto: ['"Noto Sans TC"', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      custom: ['YourCustomFont', 'sans-serif'],
    },
    extend: {
      colors: {
        base: 'var(--color-base, #3C4753)',
        card: 'var(--color-card, #171E26)',
        text: 'var(--color-text, #FCECFF)',
        button: 'var(--color-button, #CFE6FD)',
        'button-text': 'var(--color-button-text, #3C4753)',
        danger: 'var(--color-danger, #FF6B6D)',
        success: 'var(--color-success, #5EFFB1)',
        warning: 'var(--color-warning, #FFE75E)',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
