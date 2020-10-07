import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Piano, Footer } from './components'
import './styles/main.scss'

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Piano />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root'),
)
