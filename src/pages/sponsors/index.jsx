import { Card, Grid, Stack, Typography } from "@mui/material";

const SponsorsPage = ({ data }) => {
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
            EVENT SPONSORS
          </Typography>
          <br />
          <Grid container spacing={6} pt={2} justifyContent={'space-evenly'}>
            <Grid item xs={12} sm={12} md={6} lg={5} >
              <Stack spacing={6} p={2}>
                <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', border: '1px solid #572148' }}>
                  <Stack p={0.2}>
                    <a href="https://konfhub.com/" target="_blank" rel="noreferrer">
                      <img src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
                        alt="" />
                    </a>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} >
              <Stack spacing={6} p={2}  >
                <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', border: '1px solid #572148' }}>
                  <Stack>
                    <a href="https://darkknight.in/" target="_blank" rel="noreferrer">
                      <img src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
                        alt="" />
                    </a>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}

export default SponsorsPage;