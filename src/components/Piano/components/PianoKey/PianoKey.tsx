import React, { FunctionComponent } from 'react'

export interface PianoKeyProps { 
    id: string
    onKeyClick?: (event: React.MouseEvent<HTMLElement>) => void
    className?: string
}

const PianoKey: FunctionComponent<PianoKeyProps> = (props) => {
    const { onKeyClick, className, id } = props

    return (
        <li onClick={onKeyClick} id={id} className={className}></li>
    )
}

export default PianoKey