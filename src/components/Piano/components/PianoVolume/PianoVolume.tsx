import { Button, makeStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

interface PianoVolumeProps {
  id: string
  handlePianoVolume: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void
  children?: React.ReactNode | React.ReactText
  color?: string
}

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius * 4,
    color: '#eee',
    fontSize: 32,
    minHeight: 60,
    outline: 'none',
    width: '100%',
  },
}))

const PianoVolume: FunctionComponent<PianoVolumeProps> = (props) => {
  const { handlePianoVolume, children, id, color } = props

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Button
        color={color === 'primary' ? 'primary' : 'secondary'}
        variant="contained"
        className={classes.button}
        id={id}
        onClick={handlePianoVolume}
      >
        {children}
      </Button>
    </div>
  )
}

export default PianoVolume
