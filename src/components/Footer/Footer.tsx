import React, { FunctionComponent } from 'react'
import './styles.scss'

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        {' '}
        <span>&copy; {new Date().getFullYear()} Emil Petersson</span>
      </div>
    </footer>
  )
}

export default Footer
