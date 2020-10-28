import React, { FunctionComponent, useState } from 'react'
import About from '../About'
import './styles.scss'

const Header: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => setIsModalOpen(!isModalOpen)

  return (
    <header className="header">
      <div className="header-item"></div>
      <div className="header-item">
        <span className="header-item-logo">onlinePiano</span>
      </div>
      <div className="header-item">
        <div style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
          About
        </div>
      </div>
      <About
        isModalOpen={isModalOpen}
        handleModalOpen={handleOpenModal}
      />
    </header>
  )
}

export default Header
