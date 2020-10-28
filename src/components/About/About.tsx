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
  isModalOpen: boolean
  handleModalOpen: () => void
}

const About: FunctionComponent<AboutModalProps> = (props) => {
  const { isModalOpen, handleModalOpen } = props
  return (
    <Dialog open={isModalOpen} onClose={handleModalOpen}>
      <DialogTitle>About onlinePiano</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is a hobby project created by Emil Petersson.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleModalOpen}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default About
