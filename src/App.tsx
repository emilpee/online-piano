import React, { FunctionComponent } from 'react'
import { Header, Piano, Footer } from './components'
import './styles/main.scss'

const App: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Piano />
            <Footer />
        </>
    )
}

export default App
