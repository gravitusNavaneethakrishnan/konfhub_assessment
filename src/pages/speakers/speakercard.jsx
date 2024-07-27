import { Button, Card, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';

//asets
import facebook_icon from '../../assets/facebook_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import website_icon from '../../assets/website_icon.svg';
import x_icon from '../../assets/x_icon.svg';

//icons
import CloseIcon from '@mui/icons-material/Close';
const SpeakerCard = ({ organiserImage, organisername, position, company, facebookUrl, twitterUrl, linkedinUrl, websiteUrl }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Card p={2} sx={{ backgroundColor: '#F7F7F7', border: '.8px solid #cacaca' }}>
        <Stack p={3} spacing={4}>
          <Stack direction='row' spacing={4} alignItems='center'>
            <img src={organiserImage} alt="organiser_image_url"
              style={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                objectFit: 'cover',
              }}
            />

            <Stack spacing={1} textAlign='start'>
              <Typography variant="subtitle1">
                {organisername}
              </Typography>
              <Typography>
                {position}
              </Typography>
              <Typography>
                {company}
              </Typography>
            </Stack>
          </Stack>

          <Stack textAlign='start' spacing={1}>
            <Typography>
              Follow us :
            </Typography>
            <Stack direction='row' spacing={1.8} justifyContent='space-between' alignItems='center'>
              <Stack direction='row' spacing={1.8} >
                <a href={facebookUrl}
                  alt='organizer_facebook_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={facebook_icon} alt="facebook_icon" width='24px' />
                </a>

                <a href={twitterUrl}
                  alt='organizer_twitter_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={x_icon} alt="x_icon" width='24px' />
                </a>

                <a href={linkedinUrl}
                  alt='organizer_linkedin_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={linkedin_icon} alt="linkedin_icon" width='24px' />
                </a>

                <a href={websiteUrl}
                  alt='organizer_twitter_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={website_icon} alt="website_icon" width='24px' />
                </a>
              </Stack>


              <Stack justifyContent='end' alignItems='end'>
                <Button fullWidth variant="speakerButton" onClick={toggleDrawer}>
                  View more
                </Button>
              </Stack>

            </Stack>

          </Stack>
        </Stack>
      </Card>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: isMobile ? '70%' : '40%',
            backgroundColor: '#FFFFFFF', // Add the background color here
          },
        }}
      >
        <Stack alignItems='end' pt={2} pr={2}>
          <IconButton
            onClick={toggleDrawer}
            color='#000'
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack pl={4} pt={4} spacing={4}>
          <Typography variant="h5" color='#572148'>
            Speaker Description :
          </Typography>

          <Stack direction='row' spacing={4} alignItems='center'>
            <img src={organiserImage} alt="organiser_image_url"
              style={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                objectFit: 'cover',
              }}
            />

            <Stack spacing={1} textAlign='start'>
              <Typography variant="subtitle1">
                {organisername}
              </Typography>
              <Typography>
                {position}
              </Typography>
              <Typography>
                {company}
              </Typography>
            </Stack>
          </Stack>

          <Stack textAlign='start' spacing={2}>
            <Typography>
              Follow us :
            </Typography>
            <Stack direction='row' spacing={1.8} justifyContent='space-between' alignItems='center'>
              <Stack direction='row' spacing={1.8} >
                <a href={facebookUrl}
                  alt='organizer_facebook_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={facebook_icon} alt="facebook_icon" width='24px' />
                </a>

                <a href={twitterUrl}
                  alt='organizer_twitter_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={x_icon} alt="x_icon" width='24px' />
                </a>

                <a href={linkedinUrl}
                  alt='organizer_linkedin_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={linkedin_icon} alt="linkedin_icon" width='24px' />
                </a>

                <a href={websiteUrl}
                  alt='organizer_twitter_url'
                  target="_blank" rel="noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <img src={website_icon} alt="website_icon" width='24px' />
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default SpeakerCard;