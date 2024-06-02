import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'border-gray-600',
    'border-red-500',
    'border-blue-500',
    'text-gray-600',
    'text-red-500',
    'text-blue-500',
    'border-blue-1',
    'text-blue-1',
    'opacity-100',
    'opacity-0',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'navbar-bezier': 'cubic-bezier(.4, 0, .2, 1)',
        bezier0021: 'cubic-bezier(0, 0, .2, 1)',
        ease: 'ease',
      },
      flex: {
        navbar: '1 1 0',
        '1-auto': '1 1 auto',
        '0-auto': '0 0 auto',
      },
      screens: {
        navbar: '1024px',
      },
      height: {
        'calc-1': 'calc(24px + 2.25rem)',
      },
      maxHeight: {
        'calc-1': 'calc(100dvh - 61px)',
        'calc-6': 'calc(100vh - 24px)',
      },
      width: {
        'calc-8': 'calc(100% - 32px)',
        'cacl-11':'cacl(100% - 44px)',
      },
      minWidth: {
        auto: 'auto',
        'unset': 'unset',
      },
      maxWidth: {
        'calc-3': 'calc(100% - 24px)',
        'calc-1': 'calc(100vw - 8px)',
        '109': '436px',
        'unset': 'unset',
      },
      backgroundSize: {
        'profile-photo': '32px 32px',
      },
      borderRadius: {
        '2': '0.5rem',
        '1': '4px',
        '0': '0',
        '7': '28px',
        '7.5': '30px',
        'inherit': 'inherit',
        
      },
      borderWidth: {
        '0625': '.0625rem',
      },
      borderColor: {
        gray: 'rgb(128,134,139)',
        'blue-1': 'rgb(26, 115, 232)',
        // 'red': 'red'
      },
      willChange: {
        't-o': 'transform, opacity',
        't-o-c': 'transform, opacity, color',
        opacity: 'opacity',
      },
      boxShadow: {
        custom:
          '0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)',
        'profile-options':
          '0 4px 8px 3px rgba(0,0,0,.15),0 1px 3px rgba(0,0,0,.3)',
      },
      fontSize: {
        '875': '.875rem',
      },
      letterSpacing: {
        sm: '.01785714em',
        'very-sm': '.00625em',
      },
      textColor: {
        'gray-1': '#3c4043',
        'gray-light': 'rgb(95,99,104)',
        'gray-2': 'rgb(60,64,67)',
        'gray-3': '#5f6368',
        'gray-4':'#444746',
        'black-1': 'rgba(0,0,0,.38)',
        'black-2': '#1f1f1f',
        'blue-1': 'rgb(26, 115, 232)',
      },
      caretColor: {
        'blue-1': 'rgb(26,115,232)',
      },
      lineHeight: {
        '875': '.875rem',
        '0': '0',
        '4.5': '18px'
      },
      transitionProperty: {
        background: 'background',
      },
      backgroundColor: {
        'gray-3': '#5f6368',
        'white-1': '#e9eef6',
        'white-2': '#f8fafd',
        
      },
      fill: {
        'black-1': 'rgba(0,0,0,.38)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      padding: {
        '2.5':'10px',
      }
      
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: any
      ) => void;
    }) {
      const newUtilities = {
        '.color-scheme-light': {
          colorScheme: 'light',
        },
        '.color-scheme-dark': {
          colorScheme: 'dark',
        },
        '.scroll-thin': {
          scrollbarWidth: 'thin',
        },
        '.scroll-color': {
          scrollbarColor: '#c4c7c5 transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
