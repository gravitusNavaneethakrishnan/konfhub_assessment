//@mui
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';

//router
import { Link as RouterLink } from 'react-router-dom';

//icons
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VideocamIcon from '@mui/icons-material/Videocam';

//asets
import facebook_icon from '../../assets/facebook_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import website_icon from '../../assets/website_icon.svg';
import x_icon from '../../assets/x_icon.svg';


const HomePage = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date(data.start_date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [data.start_date]);

  const emailTo = 'mailto:' + data.organiser_email;

  return (
    <Grid container pt={14} pb={{ lg: 16, md: 16, sm: 8, xs: 8, }} sx={{ backgroundColor: '#F7F7F7' }}>
      <Grid item lg={6} sm={12} md={6} xs={12} >
        <Stack spacing={2}
          justifyContent={{ lg: 'start', md: 'start', sm: 'center', xs: 'center', }}
          alignItems={{ lg: 'start', md: 'start', sm: 'center', xs: 'center', }}
          pl={{ lg: 18, md: 8, sm: 4, xs: 4, }}
          pr={{ lg: 0, md: 0, sm: 4, xs: 4, }}
          pt={{ lg: 0, md: 4, sm: 0, xs: 0, }}>
          <Typography variant='h1'>
            Welcome to KonfHub!
          </Typography>
          <Typography variant="h6" color='#572148'>
            Make Your Events Engaging and Effective.
          </Typography>
          <Card sx={{ border: '1px solid #572148', backgroundColor: '#F7F7F7' }} >
            <Stack spacing={2} p={2} pr={4}>
              <Typography variant="h4">
                {data.name} ✨
              </Typography>

              <Stack direction='row' spacing={2}>
                <Stack spacing={2}>
                  <Stack direction='row' spacing={6}>
                    <Stack direction='row' justifyContent='center' spacing={0.8}>
                      <VideocamIcon></VideocamIcon>
                      <Typography variant="subtitle1">
                        Online
                      </Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='center' spacing={0.8}>
                      <ConfirmationNumberIcon></ConfirmationNumberIcon>
                      <Typography variant="subtitle1">
                        Paid
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction='row' spacing={1}>
                    <Typography variant="subtitle1">
                      Event live link : &nbsp;
                      <span>
                        <a href={data.event_website} target="_blank" rel="noreferrer">
                          Open streaming website
                        </a>
                      </span>
                    </Typography>
                  </Stack>

                  <Stack direction='row' spacing={1}>
                    <Typography variant="subtitle1">
                      Date : &nbsp;
                      <span >
                        Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
                      </span>
                    </Typography>

                  </Stack>

                  <Stack direction='row' spacing={1}>
                    <Typography variant="subtitle1">
                      Event starts in : &nbsp;
                      <span style={{ fontSize: '20px' }}>
                        {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={2} direction='row' alignItems='center'>
                <Typography variant="subtitle1">
                  Hosted By :
                </Typography>

                <Stack direction='row' spacing={1} alignItems='center'>
                  <img src={data.organiser_image_url} alt="organiser_image_url"
                    style={{
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      objectFit: 'cover',
                    }}
                  />

                  <Stack spacing={1} textAlign='start'>
                    <Typography variant="body1">
                      {data.organiser_name}
                    </Typography>

                  </Stack>
                </Stack>
                <Stack textAlign='start' spacing={1}>
                  <Stack direction='row' spacing={1.8} justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' spacing={1.8} >
                      <a href={data.organizer_facebook_url}
                        alt='organizer_facebook_url'
                        target="_blank" rel="noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <img src={facebook_icon} alt="facebook_icon" width='24px' />
                      </a>

                      <a href={data.organizer_twitter_url}
                        alt='organizer_twitter_url'
                        target="_blank" rel="noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <img src={x_icon} alt="x_icon" width='24px' />
                      </a>

                      <a href={data.organizer_linkedin_url}
                        alt='organizer_linkedin_url'
                        target="_blank" rel="noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <img src={linkedin_icon} alt="linkedin_icon" width='24px' />
                      </a>

                      <a href={data.organiser_website}
                        alt='organizer_twitter_url'
                        target="_blank" rel="noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <img src={website_icon} alt="website_icon" width='24px' />
                      </a>

                      <a href={emailTo}
                        alt='organiser_email'
                        target="_blank" rel="noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <img src={mail_icon} alt="mail" width='24px' />
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Card>

          <Stack pt={0} direction='row' spacing={2} justifyContent='space-between'>
            <Button to="/signup" size="large" variant="secondaryButton" component={RouterLink} >
              Register
            </Button>

            <Button size="large" variant="primaryButton" >
              <a href={data.event_website} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                Official website &nbsp;
              </a>
              <OpenInNewIcon fontSize="12px" sx={{ color: '#572148' }}></OpenInNewIcon>
            </Button>
          </Stack>

        </Stack>
      </Grid >

      <Grid
        item
        lg={6}
        sm={12}
        md={6}
        xs={12}
        pt={{ lg: 4, md: 16 }}
      >
        <img src={data.poster_thumbnail} alt='event_poster_url' />
      </Grid>
    </Grid >
  );
}
export default HomePage;