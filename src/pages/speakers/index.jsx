import { Grid, Stack, Typography } from "@mui/material";

//icons
import SpeakerCard from "./speakercard";

import organiserImg from '../../assets/organiser_batman.jpg';

const SpeakersPage = ({ data }) => {
  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
      >
        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Typography variant='h3'>
            SPEAKERS
          </Typography>
          <br />
          <Grid container spacing={6} pt={2} justifyContent={'space-evenly'}>
            <Grid item xs={12} sm={12} md={6} lg={5} >
              <Stack spacing={6} p={2}>
                <SpeakerCard
                  organiserImage={data.organiser_image_url}
                  organisername='Bruce Wayne'
                  position='Chairman'
                  company='Wayne Enterprises'
                  facebookUrl={data.organizer_facebook_url}
                  twitterUrl={data.organizer_twitter_url}
                  linkedinUrl={data.organizer_linkedin_url}
                  websiteUrl='https://konfhub.com/'
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} >
              <Stack spacing={6} p={2}>
                <SpeakerCard
                  organiserImage={organiserImg}
                  organisername='Dark Knight'
                  position='Batman'
                  company='Gotham'
                  facebookUrl={data.organizer_facebook_url}
                  twitterUrl={data.organizer_twitter_url}
                  linkedinUrl={data.organizer_linkedin_url}
                  websiteUrl={data.organiser_website}
                />
              </Stack>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}

export default SpeakersPage;