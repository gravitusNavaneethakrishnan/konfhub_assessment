import { Link as RouterLink, useNavigate } from 'react-router-dom';

//@mui
import { Button, Divider, FormHelperText, Grid, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';

//formik
import { Formik } from 'formik';
import * as Yup from 'yup';

//icons 
import EmailIcon from '@mui/icons-material/Email';


const ForgetPasswordForm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return (
      navigate('/login')
    );
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(128, 'EmailId must be at most 128 characters').required('Email is required*'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            handleClick();
            setStatus({ success: true });
            setSubmitting(false);
            console.log(values)
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <Stack spacing={1} pt={2}>
                <OutlinedInput
                  id="email"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Email*"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(touched.email && errors.email)}
                  sx={{
                    borderRadius: '10px',
                    color: '#000',
                    fontSize: '24px',
                    fontWeight: 400,
                    height: '53px',
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon sx={{ color: '#572148' }} />
                    </InputAdornment>
                  }
                />
                {touched.email && errors.email && (
                  <FormHelperText error sx={{ color: 'red' }}>
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12} pt={2}>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="logInButton">
                Continue
              </Button>
            </Grid>

            <Grid item xs={12} pt={2}>
              <Divider>
                <Typography variant="body2" sx={{ color: '#999999' }}>OR</Typography>
              </Divider>
            </Grid>

            <Grid item xs={12} pt={2}>
              <Stack direction='row' spacing={1} justifyContent='center'>
                <Typography variant='body1'>
                  Try signing in again?
                </Typography>
                <Typography component={RouterLink} to="/login" color='#FB580'>
                  Sign In
                </Typography>
              </Stack>
            </Grid>
          </form>)}
      </Formik>
    </>
  );
}

export default ForgetPasswordForm;