import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

interface PianoVolumeDisplayProps {
  volume: number
}

const useStyles = makeStyles((theme) => ({
  pianoVolumeDisplay: {
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid #555',
    margin: 0,
  },
  pianoVolumeTitle: {
    fontFamily: 'Trispace',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 10,
  },
}))

const PianoVolumeDisplay: FunctionComponent<PianoVolumeDisplayProps> = (
  props,
) => {
  const { volume } = props
  const volumeInPercent = (volume * 100).toFixed()
  const classes = useStyles()

  return (
    <>
      <span className={classes.pianoVolumeTitle}>Volume</span>
      <div className={classes.pianoVolumeDisplay}>
        <span>{volumeInPercent} %</span>
      </div>
    </>
  )
}

export default PianoVolumeDisplay
