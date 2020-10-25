import React, { FunctionComponent } from 'react'
import Switch from '@bit/mui-org.material-ui.switch'
import FormControlLabel from '@bit/mui-org.material-ui.form-control-label'

interface PianoMenuProps {
  isChecked: boolean
  onChange?: () => void
}

const PianoMenu: FunctionComponent<PianoMenuProps> = (props) => {
  const { isChecked, onChange } = props

  return (
    <main className="piano-menu">
      <FormControlLabel
        control={<Switch size={'medium'} color={'primary'} />}
        label={'Show keyboard'}
        checked={isChecked}
        onChange={onChange}
      />
    </main>
  )
}

export default PianoMenu
