import { TextField } from '@mui/material';
import React from 'react';

/**
 * TextFieldComponent
 *
 * @param {object} props
 * @returns
 */
function TextFieldComponent({ id, label, value, handleOnChange }) {
  return <TextField
    id={id}
    label={label}
    variant="outlined"
    size='small'
    required
    fullWidth
    sx={{mb: 2}}
    value={value}
    onChange={handleOnChange}
  />
}

export default TextFieldComponent;
