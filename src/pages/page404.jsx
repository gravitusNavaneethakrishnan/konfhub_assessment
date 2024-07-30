import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//image import
import page404 from '../assets/page404.png';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  backgroundColor: '#fff'
}));

// ----------------------------------------------------------------------
function Page404() {
  return (
    <>
      <Grid sx={{ color: '#000' }}>

        <Container>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h1" paragraph sx={{ color: '#000' }}>
              Sorry, page not found!
            </Typography>

            <Typography variant='body1' sx={{ color: '#000' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
              spelling.
            </Typography>

            <img src={page404} alt='page404' width='35%' height='35%' />


            <Button to="/" size="large" variant="page404Button" component={RouterLink}>
              Go to Home
            </Button>
          </StyledContent>
        </Container>
      </Grid>

    </>
  );
}

export default Page404;
