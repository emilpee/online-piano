import { Button, makeStyles } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import About from '../About'

const useStyles = makeStyles((theme) => ({
  button: {
    background: theme.palette.info.main,
    borderRadius: 3,
    border: 0,
    padding: 12,
    textTransform: 'uppercase',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
  },
  headerItem: {
    padding: 12,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  about: {
    justifyContent: 'flex-end',
  },
  logo: {
    color: '#fff',
    fontFamily: 'Trispace',
    fontSize: 48,
    fontWeight: 700,
    margin: 0,
    textShadow: '3px 3px 0 #222',
  },
}))

const Header: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => setIsModalOpen(!isModalOpen)

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.headerItem}></div>
      <div className={classes.headerItem}>
        <span className={classes.logo}>onlinePiano</span>
      </div>
      <div className={`${classes.headerItem} ${classes.about}`}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleOpenModal}
        >
          About
        </Button>
      </div>
      <About
        isModalOpen={isModalOpen}
        handleModalOpen={handleOpenModal}
      />
    </header>
  )
}

export default Header
