import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Piano, Footer } from './components'
import './styles/main.scss'
import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Piano />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
