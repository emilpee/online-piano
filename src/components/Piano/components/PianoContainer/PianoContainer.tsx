import React, { FunctionComponent } from 'react'

interface PianoKeysContainerProps {
  children?: React.ReactNode
  className?: string
}

const PianoKeysContainer: FunctionComponent<PianoKeysContainerProps> = (
  props,
) => {
  const { children, className } = props

  return <ul className={className}>{children}</ul>
}

export default PianoKeysContainer
