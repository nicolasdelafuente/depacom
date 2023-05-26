import { Box, MenuItem, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<String[]>([]);

  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  const handleChangeContries = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (

    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>

        <Box width='250px' >
          <TextField
            label='Select country'
            select value={country}
            onChange={handleChangeCountry}
            fullWidth
            >
            <MenuItem value='AR'>Argentina</MenuItem>
            <MenuItem value='BR'>Brasil</MenuItem>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
          </TextField>
        </Box>

        <Box width='250px' >
          <TextField
            label='Select country'
            select value={countries}
            onChange={handleChangeContries}
            fullWidth SelectProps={{ multiple: true }}
            size='small'
            color='secondary'
            helperText='Por favor seleccionar tu país'
            error
          >

            <MenuItem value='AR'>Argentina</MenuItem>
            <MenuItem value='BR'>Brasil</MenuItem>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>

          </TextField>
        </Box>
      </Stack>
    </Stack>
  )
}
