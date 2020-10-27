import React, { FunctionComponent, useEffect, useRef } from 'react'

interface PianoKeyProps {
  id: string
  keyboardKey: string
  onKeyClick: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  onKeyboardPress?: (e: React.KeyboardEvent<HTMLElement>) => void
  tabIndex?: number
  isChecked?: boolean
}

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const pianoKey = useRef(null)

  const {
    id,
    keyboardKey,
    onKeyClick,
    className,
    onKeyboardPress,
    isChecked,
  } = props

  useEffect(() => {
    pianoKey.current.focus()
  })

  return (
    <button
      ref={pianoKey}
      onClick={onKeyClick}
      onKeyPress={onKeyboardPress}
      id={id}
      className={className}
      tabIndex={0}
      autoFocus
    >
      <span className={'piano-keys-keypress'}>
        {isChecked && keyboardKey}
      </span>
    </button>
  )
}

export default PianoKey
