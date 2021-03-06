import React, { FunctionComponent } from 'react'
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
} from '@material-ui/core'

interface AboutModalProps {
  isModalOpen?: boolean
  handleModalOpen: () => void
}

const About: FunctionComponent<AboutModalProps> = (props) => {
  const { isModalOpen, handleModalOpen } = props
  return (
    <Dialog open={isModalOpen} onClose={handleModalOpen}>
      <DialogTitle>About onlinePiano</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is a hobby project just for fun, created by Emil
          Petersson.
        </DialogContentText>
        <DialogContentText>
          The project is available on{' '}
          <a href="https://github.com/emilpee/online-piano">GitHub</a>
          . Pull requests are welcome.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleModalOpen}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default About
