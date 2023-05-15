import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';


export const Navbar = () => {
  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          arial-label='logo'
        >
          <AccountCircle />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          DEPACOMP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Nuevo Seguimiento</Button>
          <Button color='inherit'>Cerrar Sesión</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
