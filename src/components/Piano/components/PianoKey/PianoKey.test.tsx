import React from 'react'
import { cleanup, render } from '@testing-library/react'
import PianoKey, { PianoKeyProps } from './PianoKey';

const defaultProps: PianoKeyProps = {
    id: '1'
}

test('Renders a piano key', () => {
    const container = render(<PianoKey {...defaultProps} />)
    expect(container).toMatchSnapshot()
})