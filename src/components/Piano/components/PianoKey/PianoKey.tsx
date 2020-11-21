import { makeStyles } from '@material-ui/core'
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
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
}

const useStyles = makeStyles((theme) => ({
  keypress: {
    background:
      'linear-gradient(to bottom, #fff 0%, #e6e6e6 100%) !important',
  },
  keyboardKey: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.action.focus,
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
    isChecked,
  } = props

  const pianoKeyRef = useRef(null)

  const classes = useStyles()

  useEffect(() => {
    const currentSelectedKey = pianoKeyRef.current

    if (focus && currentSelectedKey) {
      currentSelectedKey.focus()
      currentSelectedKey.classList.add(classes.keypress)

      setTimeout(
        () => currentSelectedKey.classList.remove(classes.keypress),
        200,
      )
    }
  }, [focus, pianoKeyRef, classes.keypress])

  const handleFocus = useCallback(() => {
    setFocus(index)
  }, [index, setFocus])

  return (
    <button
      tabIndex={focus ? 0 : -1}
      onClick={onKeyClick}
      onKeyDown={handleFocus}
      id={id}
      className={className}
      ref={pianoKeyRef}
    >
      <span className={classes.keyboardKey}>
        {isChecked && keyboardKey}
      </span>
    </button>
  )
}

export default PianoKey
