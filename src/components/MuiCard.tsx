import { Box, Card, CardContent, Typography, CardActions, Button} from '@mui/material';

export const MuiCard = () => {
  return (
    <Box className='content-box'>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt officiis eius dolores quasi earum doloremque dolorum adipisci mollitia rem. Necessitatibus provident quasi qui, quas reiciendis hic nisi tenetur doloribus.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
