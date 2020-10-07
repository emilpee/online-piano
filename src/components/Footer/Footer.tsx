import React, { FunctionComponent } from 'react'
import './styles.scss'

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-item"> &copy; {new Date().getFullYear()} Emil Petersson</div>
        </footer>
    )
}

export default Footer
