/** @format */

import { TextField } from '@mui/material'

function MuiInput({ name, label, value, onChange, error = null, ...other }) {
  return (
    <TextField
      className='input'
      color='success'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default MuiInput
