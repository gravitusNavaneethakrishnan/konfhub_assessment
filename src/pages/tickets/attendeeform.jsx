
//@mui
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';

//formik
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

//icons 
const AttendeeForm = ({ handleBack, handleNext }) => {
  const options = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const [value, setValue] = useState('');

  const valuehandleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    return (
      handleNext()
    );
  }
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          customname: '',
          phone: '',
          something: '',
          linkedinurl: '',
          organsation: '',
          designation: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(128, 'EmailId must be at most 128 characters').required('Please enter your eamail*'),
          customname: Yup.string().required('Please enter your Custom Name*'),
          phone: Yup.number().required('Please enter your Phone Number*'),
          something: Yup.string().required('Please do not leave empty*'),
          linkedinurl: Yup.string().required('Please do not leave empty*'),
          organsation: Yup.string().required('Please do not leave empty*'),
          designation: Yup.string().required('Please do not leave empty*'),
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
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1} pt={0}>
                  <OutlinedInput
                    id="customname"
                    type="customname"
                    value={values.customname}
                    name="customname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Custom Name*"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.customname && errors.customname)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}

                  />
                  {touched.customname && errors.customname && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.customname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}  >
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
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
            </Grid>

            <Grid container spacing={2} pt={2}>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1} >
                  <OutlinedInput
                    id="phone"
                    type="phone"
                    value={values.phone}
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.phone && errors.phone)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}
                  />
                  {touched.phone && errors.phone && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.phone}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <OutlinedInput
                    id="something"
                    type="something"
                    value={values.something}
                    name="something"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Something"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.something && errors.something)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}

                  />
                  {touched.something && errors.something && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.something}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
            </Grid>

            <Grid container spacing={2} pt={2}>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1} >
                  <OutlinedInput
                    id="linkedinurl"
                    type="linkedinurl"
                    value={values.linkedinurl}
                    name="linkedinurl"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="linkedin URL"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.linkedinurl && errors.linkedinurl)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}

                  />
                  {touched.linkedinurl && errors.linkedinurl && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.linkedinurl}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Stack spacing={1}  >
                  <OutlinedInput
                    id="organsation"
                    type="organsation"
                    value={values.organsation}
                    name="organsation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Organsation"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.organsation && errors.organsation)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}

                  />
                  {touched.organsation && errors.organsation && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.organsation}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={2}>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <OutlinedInput
                    id="designation"
                    type="designation"
                    value={values.designation}
                    name="designation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Designation"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(touched.designation && errors.designation)}
                    sx={{
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '24px',
                      fontWeight: 400,
                      height: '53px',
                    }}

                  />
                  {touched.designation && errors.designation && (
                    <FormHelperText error sx={{ color: 'red' }}>
                      {errors.designation}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Stack spacing={1} >
                  <FormControl >
                    <InputLabel id="demo-simple-select-label">T-shirt Size</InputLabel>
                    <Select
                      labelId="dropdown-label"
                      id="dropdown"
                      value={value}
                      onChange={valuehandleChange}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
            <Stack spacing={2} pt={2} direction='row'>
              <Button size="large" fullWidth variant='speakerButton' onClick={handleBack}>
                Back
              </Button>
              <Button disabled={isSubmitting} size="large" type="submit" fullWidth variant='logInButton'>
                Submit
              </Button>
            </Stack>

          </form>)}
      </Formik>
    </>
  );
}

export default AttendeeForm; 