import { makeStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#333',
    color: '#fff',
    flex: 1,
  },
  footerItem: {
    padding: 12,
  },
}))

const Footer: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem}>
        <span>&copy; {new Date().getFullYear()} Emil Petersson</span>
      </div>
    </footer>
  )
}

export default Footer
