import { makeStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

interface PianoKeyProps {
  id: string
  keyboardKey: string
  onKeyClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  onKeyboardPress?: (
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => void
  tabIndex?: number
  isChecked?: boolean
}

const useStyles = makeStyles((theme) => ({
  keypress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#777',
  },
}))

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const {
    id,
    keyboardKey,
    onKeyClick,
    className,
    onKeyboardPress,
    isChecked,
  } = props

  const classes = useStyles()

  return (
    <button
      onClick={onKeyClick}
      onKeyPress={onKeyboardPress}
      id={id}
      className={className}
      tabIndex={0}
      autoFocus
    >
      <span className={classes.keypress}>
        {isChecked && keyboardKey}
      </span>
    </button>
  )
}

export default PianoKey
