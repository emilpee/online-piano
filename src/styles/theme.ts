import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        },
        body: {
          background: '#eee',
          fontFamily: 'Nunito, Arial, sans-serif',
          fontWeight: 400,
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: 'auto',
        },
        span: {
          color: '#fff',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#10D308',
    },
    secondary: {
      main: '#FC030C',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 950,
      lg: 1024,
      xl: 1200,
    },
  },
})
