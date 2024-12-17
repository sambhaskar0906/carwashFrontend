import React from 'react'
import { TextField } from '@mui/material';

const Field = ({ label, value, onChange, error, helperText, ...rest }) => {

  return (
       
          <TextField
            variant="outlined"
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            {...rest}
          />      
  )
}

export default Field;