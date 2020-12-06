import { makeStyles } from '@material-ui/core'
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
} from 'react'

interface PianoKeyProps {
  id: string
  keyboardKey: string
  onKeyClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  tabIndex?: number
  isChecked?: boolean
  focus?: boolean
  setFocus?: Dispatch<SetStateAction<number>>
  index?: number
  value?: (el: HTMLButtonElement) => HTMLButtonElement
}

const useStyles = makeStyles((theme) => ({
  keyboardKey: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.info.light,
  },
}))

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const {
    id,
    index,
    focus,
    setFocus,
    keyboardKey,
    onKeyClick,
    className,
    value,
    isChecked,
  } = props

  const classes = useStyles()

  const handleFocus = useCallback(() => {
    setFocus(index)
  }, [index, setFocus])

  return (
    <button
      tabIndex={focus ? 0 : -1}
      onClick={onKeyClick}
      onKeyDown={handleFocus}
      id={id}
      ref={value}
      className={className}
    >
      <span className={classes.keyboardKey}>
        {isChecked ? keyboardKey : null}
      </span>
    </button>
  )
}

export default PianoKey
