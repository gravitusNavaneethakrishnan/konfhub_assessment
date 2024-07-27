import { Grid, Stack, Typography } from "@mui/material";

//
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import organiserImg from '../../assets/organiser_batman.jpg';
import SpeakerCard from "../speakers/speakercard";
import WorkshopCard from "./workshopcard";

const WorkShoppage = ({ data }) => {

  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        sx={{ backgroundColor: '#F7F7F7' }}
      >
        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Typography variant='h3'>
            WORKSHOPS
          </Typography>
          <br />
          <Grid container spacing={6} pt={2} justifyContent={'space-evenly'}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
              <Stack spacing={6} p={2}>
                <WorkshopCard
                  workshopimg='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75'
                  workshop_topic='How to make more money?'
                  workshop_date='Jun 11th, 2024 at 10:00 AM (IST)'
                  tooltip_title='Bruce Wayne'
                  organiser_image={data.organiser_image_url}
                  link_icon={
                    <LocationOnIcon sx={{ color: '#0d6efd' }} ></LocationOnIcon>
                  }
                  link='"https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer"'
                  link_content='KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India'
                  speaker='speaker'
                  Speakers={<SpeakerCard
                    organiserImage={data.organiser_image_url}
                    organisername='Bruce Wayne'
                    position='Chairman'
                    company='Wayne Enterprises'
                    facebookUrl={data.organizer_facebook_url}
                    twitterUrl={data.organizer_twitter_url}
                    linkedinUrl={data.organizer_linkedin_url}
                    websiteUrl='https://konfhub.com/'
                  />}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} >
              <Stack spacing={6} p={2}>
                <WorkshopCard
                  workshopimg='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75'
                  workshop_topic='How to fight crime?'
                  workshop_date='Jun 11th, 2024 at 10:00 AM (IST)'
                  tooltip_title='Dark Knight'
                  organiser_image={organiserImg}
                  link_icon={<LanguageIcon></LanguageIcon>}
                  link='https://darkknight.in/'
                  link_content='https://darkknight.in'
                  speaker='speaker'
                  Speakers={<SpeakerCard
                    organiserImage={organiserImg}
                    organisername='Dark Knight'
                    position='Batman'
                    company='Gotham'
                    facebookUrl={data.organizer_facebook_url}
                    twitterUrl={data.organizer_twitter_url}
                    linkedinUrl={data.organizer_linkedin_url}
                    websiteUrl={data.organiser_website}
                  />}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
              <Stack spacing={6} p={2}>
                <WorkshopCard
                  workshopimg='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75'
                  workshop_topic='Workshop ticket'
                  workshop_date='Jun 11th, 2024 at 10:00 AM (IST)'
                  tooltip_title='Dark Knight'
                  organiser_image={organiserImg}
                  organiser_image2={data.organiser_image_url}
                  alt_organiser_image2='alt_organiser_image2'
                  tooltip_title2='Bruce Wayne'
                  imagestyle={{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                  }}
                  link_icon={<LanguageIcon></LanguageIcon>}
                  link={data.event_website}
                  link_content={data.event_website}
                  speaker='Speakers'
                  Speakers={<SpeakerCard
                    organiserImage={data.organiser_image_url}
                    organisername='Bruce Wayne'
                    position='Chairman'
                    company='Wayne Enterprises'
                    facebookUrl={data.organizer_facebook_url}
                    twitterUrl={data.organizer_twitter_url}
                    linkedinUrl={data.organizer_linkedin_url}
                    websiteUrl='https://konfhub.com/'
                  />}
                  Speakers2={<SpeakerCard
                    organiserImage={organiserImg}
                    organisername='Dark Knight'
                    position='Batman'
                    company='Gotham'
                    facebookUrl={data.organizer_facebook_url}
                    twitterUrl={data.organizer_twitter_url}
                    linkedinUrl={data.organizer_linkedin_url}
                    websiteUrl={data.organiser_website}
                  />}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default WorkShoppage;