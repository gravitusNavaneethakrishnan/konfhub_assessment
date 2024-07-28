import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const PaymentScreen = ({ handleBack, handleNext }) => {

  const handleClick = () => {
    handleNext();
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Pay Now
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Complete your payment details below.
            </Typography>
            <Formik
              initialValues={{
                cardholderName: '',
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                submit: null
              }}
              validationSchema={Yup.object({
                cardholderName: Yup.string().required('Cardholder Name is required'),
                cardNumber: Yup.string().required('Card Number is required').matches(/^[0-9]{16}$/, 'Card Number must be 16 digits'),
                expiryDate: Yup.string().required('Expiry Date is required').matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Expiry Date must be MM/YY'),
                cvv: Yup.string().required('CVV is required').matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
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
                  <TextField
                    fullWidth
                    id="cardholderName"
                    name="cardholderName"
                    label="Cardholder Name"
                    margin="normal"
                    variant="outlined"
                    value={values.cardholderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.cardholderName && Boolean(errors.cardholderName)}
                    helperText={touched.cardholderName && errors.cardholderName}
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    id="cardNumber"
                    name="cardNumber"
                    label="Card Number"
                    margin="normal"
                    variant="outlined"
                    type="number"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.cardNumber && Boolean(errors.cardNumber)}
                    helperText={touched.cardNumber && errors.cardNumber}
                    sx={{ mb: 3 }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 3,
                    }}
                  >
                    <TextField
                      id="expiryDate"
                      name="expiryDate"
                      label="Expiry Date"
                      margin="normal"
                      variant="outlined"
                      placeholder="MM/YY"
                      value={values.expiryDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.expiryDate && Boolean(errors.expiryDate)}
                      helperText={touched.expiryDate && errors.expiryDate}
                      sx={{ width: '48%' }}
                    />
                    <TextField
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      margin="normal"
                      variant="outlined"
                      type="number"
                      value={values.cvv}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.cvv && Boolean(errors.cvv)}
                      helperText={touched.cvv && errors.cvv}
                      sx={{ width: '48%' }}
                    />
                  </Box>

                  <Stack spacing={2} pt={2} direction='row'>
                    <Button size="large" fullWidth variant='speakerButton' onClick={handleBack}>
                      Back
                    </Button>
                    <Button size="large" type="submit" disabled={isSubmitting} fullWidth variant='logInButton'>
                      Pay Now
                    </Button>
                  </Stack>
                </form>)}
            </Formik>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PaymentScreen;
