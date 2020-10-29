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

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const {
    id,
    keyboardKey,
    onKeyClick,
    className,
    onKeyboardPress,
    isChecked,
  } = props

  return (
    <button
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
