module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './src/components/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xm: '320px',
      },
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '225px': '14.063rem',
        '338px': '21.125rem',
      },
      width: {
        '400px': '25rem',
        '600px': '37.5rem',
      },
      minHeight: {
        'almost-screen': 'calc(-19.5rem + 100vh)',
        '42px': '2.625rem',

      },
      maxHeight: {
        'almost-screen': '82vh',
        '42px': '2.625rem',

      },
      boxShadow: {
        'box-shadow-custom': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
    require('@tailwindcss/typography'),
    require("flowbite/plugin")
  ],
};