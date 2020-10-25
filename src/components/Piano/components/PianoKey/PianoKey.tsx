import React, { FunctionComponent } from 'react'

interface PianoKeyProps {
  id: string
  keyboardKey: string
  onKeyClick: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  onKeyBoardClick?: (e: React.KeyboardEvent<HTMLElement>) => void
  tabIndex?: number
  isChecked?: boolean
}

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const {
    id,
    keyboardKey,
    onKeyClick,
    className,
    onKeyBoardClick,
    isChecked,
  } = props

  return (
    <li
      onClick={onKeyClick}
      onKeyPress={(e) => onKeyBoardClick && onKeyBoardClick(e)}
      id={id}
      className={className}
      tabIndex={0}
    >
      <span className={'piano-keys-keypress'}>
        {isChecked && keyboardKey}
      </span>
    </li>
  )
}

export default PianoKey
