import { React, useState } from "react";

//@mui
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid, IconButton, Stack,
  Step, StepLabel, Stepper, TextField,
  Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';


//tooltip
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

//icons
import { Check } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

//stepper
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PropTypes from "prop-types";

//router
import { Navigate, useNavigate } from "react-router-dom";

//files
import AttendeeForm from "./attendeeform";
import PaymentScreen from "./payment";

const TicketPurchase = ({ data }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

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

  //
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: '#572148',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#572148'
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#572148',
      zIndex: 1,
      fontSize: 18
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    }
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
      </QontoStepIconRoot>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#572148'
      }
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#572148'
      }
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 4,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1
    }
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#572148'
    }),
    ...(ownerState.completed && {
      backgroundColor: '#572148'
    })
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {completed ? (
          <CheckCircleIcon />
        ) : active ? (
          <RadioButtonUncheckedIcon />
        ) : (
          <HighlightOffIcon />
        )}
      </ColorlibStepIconRoot>
    );
  }

  const [skipped, setSkipped] = useState(new Set());

  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Pick Ticket', 'Attendee Details', 'Payment',];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped.delete(activeStep);
    }

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // ticketpick
  const [ticketCount, setTicketCount] = useState(0);
  const [freeTicketCount, setFreeTicketCount] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [showDonationField, setShowDonationField] = useState(false);
  const [couponTicketCount, setCouponTicketCount] = useState(0);
  const minDonation = 10;
  const maxDonation = 1000;
  const ticketPrice = 1000;
  const couponTicketPrice = 1000;
  const couponDiscount = 0;

  const handleAddTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handleAddFreeTicket = () => {
    setFreeTicketCount(freeTicketCount + 1);
  };

  const handleRemoveFreeTicket = () => {
    if (freeTicketCount > 0) {
      setFreeTicketCount(freeTicketCount - 1);
    }
  };

  const handleAddCouponTicket = () => {
    setCouponTicketCount(couponTicketCount + 1);
  };

  const handleRemoveCouponTicket = () => {
    if (couponTicketCount > 0) {
      setCouponTicketCount(couponTicketCount - 1);
    }
  };

  const handleDonationButtonClick = () => {
    setShowDonationField(true);
  };

  const handleDonationAmountChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= minDonation && value <= maxDonation) {
      setDonationAmount(value);
    } else {
      setDonationAmount();
    }
  };

  const handleRemoveDonation = () => {
    setDonationAmount('');
    setShowDonationField(false);
  };

  const couponTicketTotal = couponTicketCount * couponTicketPrice * (1 - couponDiscount);
  const subtotal = (ticketCount * ticketPrice) + (donationAmount ? parseInt(donationAmount, 10) : 0) + couponTicketTotal;
  const total = subtotal;

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Stack pt={4}>
              <Container>
                <Box my={4}>
                  <Stack spacing={2}>
                    <Card>
                      <CardHeader
                        title="Free Ticket"
                        subheader="This is a free and uncategorised ticket."
                      />
                      <Divider />
                      <CardContent>
                        <Stack textAlign='start' >
                          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
                            Venue details:
                          </Typography>
                          <Stack direction='row' spacing={0.5}>
                            <LocationOnIcon sx={{ color: '#0d6efd' }}   ></LocationOnIcon>
                            <Typography variant="body1" sx={{ color: '#0d6efd', textDecoration: 'none' }}>
                              <a
                                style={{ color: '#0d6efd', textDecoration: 'none' }}
                                href="https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer">
                                KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India
                              </a>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>

                      <CardContent>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Typography variant="body1">Free Tickets:</Typography>
                          </Grid>
                          <Grid spacing={1} item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'center', sm: 'center', md: 'center', xs: 'start' }}>
                            <IconButton onClick={handleRemoveFreeTicket} disabled={freeTicketCount === 0}>
                              <RemoveCircleIcon /> &nbsp;
                            </IconButton>
                            <Typography variant="body1" display="inline" >
                              {freeTicketCount} &nbsp;
                            </Typography>
                            <IconButton onClick={handleAddFreeTicket}>
                              <AddCircleIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'end', sm: 'end', md: 'end', xs: 'start' }}>
                            <Typography variant="body1">
                              Total Price: FREE
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader
                        title="Paid Ticket (₹1,000)"
                        subheader="This is a free and uncategorised ticket."
                      />
                      <Divider />
                      <CardContent>
                        <Stack textAlign='start' >
                          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
                            Venue details:
                          </Typography>
                          <Stack direction='row' spacing={0.5}>
                            <LocationOnIcon sx={{ color: '#0d6efd' }}   ></LocationOnIcon>
                            <Typography variant="body1" sx={{ color: '#0d6efd', textDecoration: 'none' }}>
                              <a
                                style={{ color: '#0d6efd', textDecoration: 'none' }}
                                href="https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer">
                                KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India
                              </a>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>

                      <CardContent>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Typography variant="body1">Paid Tickets:</Typography>
                          </Grid>
                          <Grid spacing={1} item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'center', sm: 'center', md: 'center', xs: 'start' }}>
                            <IconButton onClick={handleRemoveTicket} disabled={ticketCount === 0}>
                              <RemoveCircleIcon /> &nbsp;
                            </IconButton>
                            <Typography variant="body1" display="inline" >
                              {ticketCount} &nbsp;
                            </Typography>
                            <IconButton onClick={handleAddTicket}>
                              <AddCircleIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'end', sm: 'end', md: 'end', xs: 'start' }}>
                            <Typography variant="body1">
                              Total Price: ₹{ticketCount * ticketPrice}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader
                        title="Ticket With Coupon (₹1,000)"
                        subheader="This is a free, uncategorised ticket and also coupon ticket. Buy minimum - 1 and maximum - 1000000 and avail 10% off."
                      />
                      <Divider />
                      <CardContent>
                        <Stack textAlign='start' >
                          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
                            Venue details:
                          </Typography>
                          <Stack direction='row' spacing={0.5}>
                            <LocationOnIcon sx={{ color: '#0d6efd' }}   ></LocationOnIcon>
                            <Typography variant="body1" sx={{ color: '#0d6efd', textDecoration: 'none' }}>
                              <a
                                style={{ color: '#0d6efd', textDecoration: 'none' }}
                                href="https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer">
                                KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India
                              </a>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>

                      <CardContent>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Typography variant="body1">Coupon Tickets:</Typography>
                          </Grid>
                          <Grid spacing={1} item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'center', sm: 'center', md: 'center', xs: 'start' }}>
                            <IconButton onClick={handleRemoveCouponTicket} disabled={couponTicketCount === 0}>
                              <RemoveCircleIcon /> &nbsp;
                            </IconButton>
                            <Typography variant="body1" display="inline" >
                              {couponTicketCount} &nbsp;
                            </Typography>
                            <IconButton onClick={handleAddCouponTicket}>
                              <AddCircleIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12} sm={4} md={4} lg={4} textAlign={{ lg: 'end', sm: 'end', md: 'end', xs: 'start' }}>
                            <Typography variant="body1">
                              Total Price: ₹{couponTicketTotal.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader
                        title="Donation Ticket (Min: ₹10  -  Max: ₹1,000)"
                        subheader="This is a donation and uncategorised ticket."
                      />
                      <Divider />
                      <CardContent>
                        <Stack textAlign='start' >
                          <Typography variant="subtitle1" sx={{ color: '#572148' }}>
                            Venue details:
                          </Typography>
                          <Stack direction='row' spacing={0.5}>
                            <LocationOnIcon sx={{ color: '#0d6efd' }}   ></LocationOnIcon>
                            <Typography variant="body1" sx={{ color: '#0d6efd', textDecoration: 'none' }}>
                              <a
                                style={{ color: '#0d6efd', textDecoration: 'none' }}
                                href="https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu" target="_blank" rel="noreferrer">
                                KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India
                              </a>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>

                      <CardContent>
                        {!showDonationField ? (
                          <Button variant="contained" color="primary" onClick={handleDonationButtonClick}>
                            Donate
                          </Button>
                        ) : (
                          <Box mt={2} display="flex" alignItems="center">
                            <TextField
                              type="number"
                              label="Donation Amount"
                              value={donationAmount}
                              onChange={handleDonationAmountChange}
                              inputProps={{ min: minDonation, max: maxDonation }}
                              fullWidth
                            />
                            <IconButton onClick={handleRemoveDonation}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        )}
                        {donationAmount && (
                          <Typography variant="body2" color="textSecondary" mt={1}>
                            Your donation amount: ₹{donationAmount}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Stack>
                </Box>
              </Container >
            </Stack>
          </>
        );
      case 1:
        return (
          <>
            <Stack pt={4}>
              <Container>
                <Box my={4}>
                  <Typography variant="h6" pb={2}>
                    Please fill the details below :
                  </Typography>
                  <AttendeeForm handleBack={handleBack} handleNext={handleNext} />
                </Box>
              </Container>
            </Stack>
          </>
        );
      case 2:
        return (
          <>
            <Stack pt={2}>
              <Container>
                <Box my={4}>
                  <PaymentScreen handleBack={handleBack} handleNext={handleNext} />
                </Box>
              </Container>
            </Stack>
          </>
        );
      default:
        return <>
          <Navigate to="/" />
        </>;
    }
  };

  const getButtonstep = (step) => {
    switch (step) {
      case 0: return (
        <>
          <Button
            fullWidth
            onClick={handleNext}
            size="large"
            color="primary"
            variant="logInButton"
            disabled={ticketCount === 0 && freeTicketCount === 0 && donationAmount === '' && couponTicketCount === 0}
          >
            Purchase
          </Button>
        </>
      );
      case 1: return (
        <>
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="logInButton"
            disabled
          >
            checkout
          </Button>
        </>
      );
      case 2: return (
        <>
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="logInButton"
            onClick={handleNext}
          >
            Register
          </Button>
        </>
      );
      default:
        return <>
        </>;
    }
  }
  return (
    <>
      <Grid
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
      >
        <Stack direction="row" spacing={0.8} alignItems="start">
          <Stack pt={0.5}>
            <BootstrapTooltip title='Go Back'>
              <IconButton onClick={goBack} disableRipple pt={1}>
                <ArrowBackIosNewIcon
                  sx={{ cursor: 'pointer', color: '#000' }}
                />
              </IconButton>
            </BootstrapTooltip>
          </Stack>

          <Stack>
            <Typography variant="h3" sx={{ color: '#000' }}>
              {data.name}
            </Typography>
            <Stack justifyContent='start' textAlign='start'>
              <Stack direction='row' spacing={1}>
                <CalendarMonthIcon></CalendarMonthIcon>
                <Typography>
                  31st Jul, 2034 at 6:00 AM IST to 31st Aug, 2034 at 6:00 PM IST
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Grid container spacing={0} justifyContent={'space-evenly'}
          pt={4}
          pl={{ xs: 4, sm: 4, md: 4, lg: 4 }}
          pr={{ xs: 4, sm: 4, md: 0, lg: 0 }}>
          <Grid item xs={12} sm={12} md={6} lg={9} >
            <Stack spacing={6} p={2}>
              <Card sx={{ border: '1px solid #572148' }}>
                <Box sx={{ width: '100%' }} p={2} >
                  <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="subtitle1"></Typography>;
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>
                            {label}
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  <>
                    {getStepContent(activeStep)}
                  </>
                </Box>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} sx={{
            position: 'sticky', top: 0
          }}>
            <Stack p={2}>
              <Card sx={{ border: '1px solid #572148' }}>
                <Box sx={{ width: '100%' }} >
                  <CardContent>
                    <Typography variant="h6">Ticket Summary</Typography>
                    {ticketCount > 0 && (
                      <>
                        <Stack direction='row' justifyContent='space-between' pt={1}>
                          <Typography variant="body1">Paid Ticket</Typography>
                          <Typography variant="body2">
                            x {ticketCount}
                          </Typography>
                          <Typography variant="body2">
                            ₹{ticketCount * ticketPrice}
                          </Typography>
                        </Stack>
                      </>
                    )}
                    {freeTicketCount > 0 && (
                      <>
                        <Stack direction='row' justifyContent='space-between' pt={1}>
                          <Typography variant="body1">Free Ticket</Typography>
                          <Typography variant="body2">
                            x {freeTicketCount}
                          </Typography>
                          <Typography variant="body2">
                            FREE
                          </Typography>
                        </Stack>
                      </>
                    )}
                    {donationAmount && (
                      <>
                        <Stack direction='row' justifyContent='space-between' pt={1}>
                          <Typography variant="body1">Donation Ticket</Typography>
                          <Typography variant="body2">
                            ₹{donationAmount}
                          </Typography>
                        </Stack>
                      </>
                    )}
                    {couponTicketCount > 0 && (
                      <>
                        <Stack direction='row' justifyContent='space-between' pt={1}>
                          <Typography variant="body1">Ticket With Coupon</Typography>
                          <Typography variant="body2">
                            x {couponTicketCount}
                          </Typography>
                          <Typography variant="body2">
                            ₹{couponTicketTotal}
                          </Typography>
                        </Stack>
                      </>
                    )}
                    <Divider />
                    <Stack direction='row' justifyContent='space-between' pt={1}>
                      <Typography variant="h6">Subtotal</Typography>
                      <Typography variant="h6">
                        ₹{subtotal.toFixed(2)}
                      </Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between' pt={1}>
                      <Typography variant="h6">Total</Typography>
                      <Typography variant="h6">
                        ₹{total.toFixed(2)}
                      </Typography>
                    </Stack>

                  </CardContent>

                  <Divider />
                  <CardActions>
                    {getButtonstep(activeStep)}

                  </CardActions>
                </Box>
              </Card>
            </Stack>
          </Grid>
        </Grid>

      </Grid >
      <Grid item md={12} sm={12} xs={12} lg={12}
        sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
        pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
      >
        <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <img src={data.ticket_footer_icon} alt="ticket_footer_icon" />
        </Stack>
      </Grid>
    </>
  );
}

export default TicketPurchase;