//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Grid, Stack, Typography, } from "@mui/material";
import { Link as ScrollLink } from 'react-scroll';

const Footer = ({ data }) => {
  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        sx={{ backgroundColor: '#F7F7F7' }}
      >
        <Grid item md={12} sm={12} xs={12} lg={12}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Grid lg={6} xs={12} md={6}>
            <Stack spacing={2}>
              {/* <img src={data?.navbar_icon} alt='logo' width='10%' /> */}
              <Stack direction={{ lg: 'row', sm: 'row', md: 'row', xs: 'column' }} spacing={{ lg: 6, sm: 2, md: 5, xs: 2 }} justifyContent='center'>
                <ScrollLink

                  to="home"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }}>
                    Home
                  </Typography>
                </ScrollLink>

                <ScrollLink
                  to="about"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }} >
                    About
                  </Typography>
                </ScrollLink>

                <ScrollLink
                  to="tickets"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }} >
                    Tickets
                  </Typography>
                </ScrollLink>

                <ScrollLink
                  to="speakers"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }}>
                    Speakers
                  </Typography>
                </ScrollLink>

                <ScrollLink
                  to="workshop"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }}>
                    Workshops
                  </Typography>
                </ScrollLink>

                <ScrollLink
                  to="sponsors"
                  spy
                  smooth
                  offset={-100}
                  duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
                  <Typography variant='body1' sx={{
                    '&:hover': {
                      color: '#572148'
                    }
                  }}>
                    Sponsors
                  </Typography>
                </ScrollLink>
              </Stack>

              <Stack pt={2} direction={{ lg: 'row', sm: 'row', md: 'row', xs: 'row' }} spacing={{ lg: 6, sm: 2, md: 5, xs: 2 }} justifyContent='center'>
                <a href={data.organizer_linkedin_url} target="_blank" rel="noreferrer">
                  <LinkedInIcon sx={{ color: '#572148', fontSize: '26px' }}></LinkedInIcon>
                </a>
                <a href={data.organizer_twitter_url} target="_blank" rel="noreferrer">
                  <XIcon sx={{ color: '#572148', fontSize: '26px' }}></XIcon>
                </a>
                <a href={data.organizer_facebook_url} target="_blank" rel="noreferrer">
                  <FacebookIcon sx={{ color: '#572148', fontSize: '26px' }}></FacebookIcon>
                </a>
                <a href='https://www.youtube.com/c/konfhubtech' target="_blank" rel="noreferrer">
                  <YouTubeIcon sx={{ color: '#572148', fontSize: '30px' }} ></YouTubeIcon>
                </a>
              </Stack>

              <Stack pt={2} justifyContent='center'>
                <Typography>
                  © KonfHub | 2020 - 2024. All Rights Reserved
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;