// @mui
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

//image import

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
function ErrorPage() {
  return (
    <>
      <Grid sx={{ color: '#000' }}>

        <Container>
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h1" paragraph sx={{ color: '#000' }}>
              Aaaah! Something went wrong
            </Typography>

            <Typography variant='body1' sx={{ color: '#000' }}>
              Brace yourself till we get the error fixed. You may also refresh the page or try again later
            </Typography>

            <img src='https://dev.konfhub.com/img/owlerror.svg' alt='wentwrong' width='35%' height='35%' />

          </StyledContent>
        </Container>
      </Grid>
    </>
  );
}

export default ErrorPage;
