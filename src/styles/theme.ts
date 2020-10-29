import { createMuiTheme } from '@material-ui/core/styles';

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
                color: '#fff'
            }
          },
        },
      },
    palette: {
      primary: {
          main: '#0cfc03'
      },
      secondary: {
          main: '#FC030C'
      }
    },
});
