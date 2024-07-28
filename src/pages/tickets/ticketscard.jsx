//@mui
import { Button, Card, Container, Stack, Typography } from "@mui/material";

//icons
import LocationOnIcon from '@mui/icons-material/LocationOn';

//router
import { Link as RouterLink } from 'react-router-dom';

const TicketsCard = ({ ticketName, price, description, buttonText }) => {
  return (
    <>
      <Card sx={{ backgroundColor: '#FFF', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', }}  >
        <Stack p={2} spacing={1.5}>
          <Typography variant="h4">
            {ticketName} : ✨
          </Typography>
          <Container sx={{ backgroundColor: '#F7F7F7', padding: '2px', borderRadius: '4px' }}>
            <Typography variant="h4" sx={{ color: '#572148' }}>
              {price}
            </Typography>
          </Container>
        </Stack>

        <Stack textAlign='start' pl={2} pr={2} spacing={1.5}>
          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
            Ticket Description:
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
        </Stack>

        <Stack textAlign='start' pl={2} pr={2} spacing={1.5} pt={2}>
          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
            Venue details:
          </Typography>
          <Stack direction='row' spacing={0.5}>
            <LocationOnIcon sx={{ color: '#0d6efd' }}   ></LocationOnIcon>
            <Typography variant="body1" sx={{ color: '#0d6efd', textDecoration: 'none' }}>
              <a
                style={{ color: '#0d6efd', textDecoration: 'none' }}
                href="https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer">
                KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India
              </a>
            </Typography>
          </Stack>
        </Stack>

        <Stack textAlign='start' pl={2} pr={2} pt={2} spacing={1.5}>
          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
            Ticket Register Last Date:
          </Typography>
          <Typography variant="body1">
            31st Aug 2034, 06:00 PM IST
          </Typography>
        </Stack>

        <Stack pt={3} pb={2} p={2} textAlign='center' alignItems='center' justifyContent='center'>
          <Button to="/ticket_purchase" size="large" fullWidth variant="logInButton" component={RouterLink} >
            {buttonText}
          </Button>
        </Stack>
      </Card>
    </>
  )
}

export default TicketsCard;