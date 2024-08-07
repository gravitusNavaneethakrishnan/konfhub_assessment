//@mui
import { AppBar, Box, Button, Drawer, IconButton, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

//icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

//import files
import { useState } from 'react';
import { bgBlur } from '../../../utils/cssStyles';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  backgroundColor: '#FFFFFF',
  [theme.breakpoints.up('lg')]: {
    // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

function Header({ data }) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <ListItem>
            <ScrollLink to="home" duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src={data?.navbar_icon} alt='logo' width='80%' />
            </ScrollLink>
          </ListItem>

          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction='row'
            sx={{ display: { xs: 'none', lg: 'flex' } }}
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <ListItem>
              <ScrollLink
                spy
                smooth
                offset={-85}
                to="home"
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  Home
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="about"
                spy
                smooth
                offset={-85}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  About
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="tickets"
                spy
                smooth
                offset={-85}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  Tickets
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="speakers"
                spy
                smooth
                offset={-85}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  Speakers
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="workshop"
                spy
                smooth
                offset={-85}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  Workshops
                </Typography>
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink
                to="sponsors"
                spy
                smooth
                offset={-85}
                duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Typography variant='body1' sx={{ color: '#000' }}>
                  Sponsors
                </Typography>
              </ScrollLink>
            </ListItem>

            <ListItem>
              <Button to='/login' variant='signInButton' size="medium" component={RouterLink}>
                <PermIdentityRoundedIcon></PermIdentityRoundedIcon>
                Sign In
              </Button>
            </ListItem>
          </Stack>

          {/* For mobile view, show a menu icon that opens the drawer */}
          <IconButton
            color="#000"
            edge="end"
            onClick={toggleMobileDrawer}
            sx={{ display: { xs: 'block', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledRoot >

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isMobileDrawerOpen}
        onClose={toggleMobileDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: '#FFFFFFF', // Add the background color here
          },
        }}
      >
        <Stack alignItems='end' pt={2} pr={2}>
          <IconButton
            onClick={toggleMobileDrawer}
            color='#000'
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ mt: '20px', paddingLeft: '12px' }}
        >
          <ListItem>
            <ScrollLink
              to="home"
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                Home
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="about"
              spy
              smooth
              offset={-85}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                About
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="tickets"
              spy
              smooth
              offset={-85}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                Tickets
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="speakers"
              spy
              smooth
              offset={-85}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                Speakers
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="workshop"
              spy
              smooth
              offset={-85}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                workshops
              </Typography>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              to="sponsors"
              spy
              smooth
              offset={-85}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography button onClick={toggleMobileDrawer} variant='body1' sx={{ color: '#000' }}>
                Sponsors
              </Typography>
            </ScrollLink>
          </ListItem>

          <ListItem>
            <Button to="/login" variant='signInButton' size="medium" component={RouterLink}>
              <PermIdentityRoundedIcon></PermIdentityRoundedIcon>
              Sign In
            </Button>
          </ListItem>
        </Stack>
      </Drawer>
    </>
  )
}

export default Header;