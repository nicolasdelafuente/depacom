import { InputAdornment, TextField, Stack } from '@mui/material';
import { useState } from 'react';


export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Small secondary'
          size='small'
          color='secondary'
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Form Input'
          required value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : "No muestres tu password a nadie"
          }
        />
        <TextField
          label='Form Input'
          type='password'
          helperText='No muestres tu password a nadie'
          disabled
        />
        <TextField
          label='Read only'
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
        />
        <TextField
          label='Weight'
          InputProps={{ endAdornment: <InputAdornment position='end'>Kg</InputAdornment> }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField;
