import { Card, Grid, Stack, Typography } from "@mui/material";
import SignUpform from "./signupform";

const SignUp = () => {
  return (
    <>
      <Grid container backgroundColor='#FFDBA6' >
        <Grid item lg={6} sm={6} md={12} xs={12} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }} >
          <Stack justifyContent='center' alignItems='center' textAlign='center'>
            <img src="https://accounts.konfhub.com/static/media/Logo.3a3466f7.svg" alt="SignUpimg" width='70%' />
          </Stack>
        </Grid>

        <Grid
          item
          lg={6}
          sm={12}
          md={12}
          xs={12}
          justifyContent='center' alignItems='center' textAlign='center'
          display={{ xs: 'block', sm: 'block', md: 'block', lg: 'block' }}
        >
          <Stack pr={{ lg: 12, md: 12, sm: 4, xs: 2, }}
            pl={{ lg: 12, md: 12, sm: 4, xs: 2, }} pt={4} pb={4}>
            <Card sx={{ backgroundColor: '#F7F7F7' }}  >
              <Stack p={4} >
                <Typography variant="h4" color='#572148'>
                  Sign Up
                </Typography>
                <Stack pt={1}>
                  <SignUpform />
                </Stack>
              </Stack>
            </Card>
          </Stack>

        </Grid>
      </Grid >
    </>
  );
}

export default SignUp;