import React, { FunctionComponent } from 'react'
import {
  Switch,
  FormControl,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core'

interface PianoMenuProps {
  isChecked: boolean
  onChange?: () => void
}

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: '#444',
    minHeight: theme.mixins.toolbar.minHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const PianoMenu: FunctionComponent<PianoMenuProps> = (props) => {
  const { isChecked, onChange } = props
  const classes = useStyles()
  return (
    <main className={classes.menu}>
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
