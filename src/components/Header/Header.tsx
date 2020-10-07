import React, { FunctionComponent } from 'react'
import './styles.scss'

const Header: FunctionComponent = () => {
    return (
        <header className="header">
            <div className="header-item"></div>
            <div className="header-item">onlinePiano</div>
            <div className="header-item">About</div>
        </header>
    )
}

export default Header
