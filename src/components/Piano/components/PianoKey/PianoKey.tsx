import React, { FunctionComponent } from 'react'

interface PianoKeyProps {
  id: string
  onKeyClick: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  onKeyBoardClick?: (e: React.KeyboardEvent<HTMLElement>) => void
  tabIndex?: number
}

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
  const { onKeyClick, onKeyBoardClick, className, id } = props

  return (
    <li
      onClick={onKeyClick}
      onKeyPress={(e) => onKeyBoardClick && onKeyBoardClick(e)}
      id={id}
      className={className}
      tabIndex={0}
    ></li>
  )
}

export default PianoKey
