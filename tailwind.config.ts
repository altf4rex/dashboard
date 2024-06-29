module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#141414',
          text: '#E1E3E6',
          icon: '#E1E3E6',
          border: '#363738',
        },
        secondary: {
          bg: '#232324',
          text: '#B0B1B6',
          icon: '#B0B1B6',
        },
        tertiary: {
          bg: '#202021',
          text: '#76787A',
          icon: '#76787A',
          border: '#202021',
        },
        modal: {
          bg: '#303030',
        },
        accent: {
          bg: '#0047BB',
          text: '#0047BB',
          icon: '#0047BB',
          border: '#0047BB',
        },
        success: {
          bg: '#2E7D32',
          text: '#2E7D32',
          icon: '#2E7D32',
          border: '#2E7D32',
        },
        error: {
          bg: '#D32F2F',
          text: '#D32F2F',
          icon: '#D32F2F',
          border: '#D32F2F',
        },
        state: {
          accentDisabled: '#424242',
          blueHover: '#003182',
          blueFocused: '#4C7ECF',
          transparentBlueHover: 'rgba(0,71,187,0.50)',
          transparentBlueFocused: 'rgba(0,71,187,0.10)',
          errorHover: '#C62828',
          errorFocused: '#E06D6D',
          transparentErrorHover: 'rgba(211,47,47,0.50)',
          transparentErrorFocused: 'rgba(211,47,47,0.10)',
          successHover: '#1B5E20',
          successFocused: '#6CA46F',
          transparentSuccessHover: 'rgba(46,125,50,0.50)',
          transparentSuccessFocused: 'rgba(46,125,50,0.10)',
          transparentContentHover: 'rgba(255,255,255,0.12)',
          transparentContentFocused: 'rgba(255,255,255,0.04)',
        },
        brand: {
          blue: '#0047BB',
          darkBlue: '#001A72',
          orange: '#FA4616',
          white: '#FFFFFF',
          black: '#101820',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', '112px'],
        'h2': ['60px', '72px'],
        'h3': ['48px', '56px'],
        'h4': ['34px', '36px'],
        'h5': ['24px', '32px'],
        'h6': ['20px', '24px'],
        'title3': ['16px', '24px'],
        'subtitle1': ['16px', '24px'],
        'subtitle2': ['14px', '24px'],
        'body1': ['16px', '24px'],
        'body2': ['14px', '20px'],
        'button': ['14px', '20px'],
        'caption': ['12px', '16px'],
        'overline': ['12px', '32px'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
          '2xl': '1494px',
        },
      },

    },
  },
  plugins: [],
}