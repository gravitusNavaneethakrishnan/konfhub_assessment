import { Button, Card, CardContent, CardMedia, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

//icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';

const WorkshopCard = ({ workshopimg, workshop_topic, workshop_date, tooltip_title, organiser_image, tooltip_title2, imagestyle, organiser_image2, speaker, Speakers, Speakers2, link, link_content, link_icon }) => {

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip placement="top" {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#572148',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#572148',
    },
  }));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Card sx={{ backgroundColor: '#FFF', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', }}>
        <Stack p={2}>
          <CardMedia
            component="img"
            alt="workshop_img"
            height="180"
            image={workshopimg}
          />

          <CardContent>
            <Stack justifyContent='start' textAlign='start'>
              <Typography gutterBottom variant="h5"  >
                {workshop_topic}
              </Typography>
            </Stack>

            <Typography variant="body2"  >
              <Stack justifyContent='start' textAlign='start'>
                <Stack direction='row' spacing={1}>
                  <CalendarMonthIcon></CalendarMonthIcon>
                  <Typography>
                    {workshop_date}
                  </Typography>
                </Stack>
              </Stack>
            </Typography>
          </CardContent>

          <Stack textAlign='start' spacing={1}>
            <Stack direction='row' spacing={1.8} justifyContent='space-between' alignItems='center'>
              <Stack direction='row'   >
                <BootstrapTooltip title={tooltip_title}>
                  <img src={organiser_image} alt="organiser_image_url"
                    style={{
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title={tooltip_title2}>
                  <img src={organiser_image2}
                    alt="organiser_image_url2"
                    style={
                      imagestyle
                    }
                  />
                </BootstrapTooltip>
              </Stack>

              <Stack justifyContent='end' alignItems='end'>
                <Button fullWidth variant="workshopButton" onClick={toggleDrawer} >
                  View details
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
            width: isMobile ? '70%' : '50%',
            backgroundColor: '#FFFFFF', // Add the background color here
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
            {workshop_topic}
          </Typography>

          <Stack spacing={4} alignItems='start'>
            <Typography>
              Workshop Description :
            </Typography>

            <Stack direction='row' spacing={0.5}>
              {link_icon}
              <Typography variant="body1"  >
                <a
                  style={{ color: '#0d6efd', textDecoration: 'none' }}
                  href={link}
                  target="_blank" rel="noreferrer"
                >
                  {link_content}
                </a>
              </Typography>
            </Stack>

            <Stack justifyContent='start' textAlign='start'>
              <Stack direction='row' spacing={1}>
                <CalendarMonthIcon></CalendarMonthIcon>
                <Typography>
                  {workshop_date}
                </Typography>
              </Stack>
            </Stack>

            <Stack justifyContent='start' textAlign='start' pr={2} spacing={1.5}>
              <Typography variant="h5" color='#572148'>
                {speaker}
              </Typography>
              <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between' spacing={2}>
                {Speakers}
                {Speakers2}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default WorkshopCard;