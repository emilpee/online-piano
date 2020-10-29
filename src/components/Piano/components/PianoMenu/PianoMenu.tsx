import React, { FunctionComponent } from 'react'
import {
  Switch,
  FormControl,
  FormControlLabel,
} from '@material-ui/core'

interface PianoMenuProps {
  isChecked: boolean
  onChange?: () => void
}

const PianoMenu: FunctionComponent<PianoMenuProps> = (props) => {
  const { isChecked, onChange } = props

  return (
    <main className="piano-menu">
      <FormControl>
        <FormControlLabel
          control={<Switch size="medium" color="primary" />}
          label="Show keyboard"
          checked={isChecked}
          onChange={onChange}
        />
      </FormControl>
    </main>
  )
}

export default PianoMenu
