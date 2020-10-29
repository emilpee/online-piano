import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

interface PianoVolumeProps {
  id: string
  handlePianoVolume: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void
  children?: React.ReactNode | React.ReactText
  color?: string
}

const PianoVolume: FunctionComponent<PianoVolumeProps> = (props) => {
  const { handlePianoVolume, children, id, color } = props

  return (
    <div className="piano-volumes-container">
      <Button
        color={color === 'primary' ? 'primary' : 'secondary'}
        variant="contained"
        className="piano-volumes-button"
        id={id}
        onClick={handlePianoVolume}
      >
        {children}
      </Button>
    </div>
  )
}

export default PianoVolume
