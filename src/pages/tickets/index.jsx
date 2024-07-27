//@mui
import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography } from "@mui/material";

//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//router
import TicketsCard from "./ticketscard";
const TicketsPage = ({ data }) => {

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
            TICKETS
          </Typography>

          <br />

          <Grid container spacing={6} pt={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Stack spacing={6} >
                <TicketsCard ticketName='Free Ticket' price='FREE' description='This is a free and uncategorised ticket.' buttonText='Register' />
                <TicketsCard ticketName='Donation Ticket' price='Min ₹10 - Max ₹1,000' description='This is a donation and uncategorised ticket.' buttonText='Donate' />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Stack spacing={6} >
                <TicketsCard ticketName='Paid Ticket' price='₹1,000' description='This is a free and uncategorised ticket.' buttonText='Register' />
                <TicketsCard ticketName='Ticket With Coupon' price='₹1,000' description='This is a free, uncategorised ticket and also coupon ticket.' buttonText='Register' />
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={6} pt={12}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Stack spacing={6} >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant="h4">
                      This is a Category (Accordion)
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1">
                      Category description: This category is collapsed by default.
                    </Typography>
                    <Grid container spacing={6} pt={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Stack spacing={6} >
                          <TicketsCard ticketName='Free Ticket in Category1' price='FREE' description='This is a free and uncategorised ticket.' buttonText='Register' />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Stack spacing={6} >
                          <TicketsCard ticketName='Paid Ticket in Category1' price='₹1,000' description='This is a paid and categorised ticket.' buttonText='Register' />
                        </Stack>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Stack spacing={6} >
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Stack textAlign='start'>
                      <Typography variant="h4">
                        This is also a category. But with a little longer name. Also note, this category expanded by default.
                        (Default Expanded Accordion)
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1">
                      Category description: This category is expanded by default. This is a little longer description. Adding more content to make the description look longer.
                    </Typography>
                    <Grid container spacing={6} pt={4}>
                      <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Stack spacing={6} >
                          <TicketsCard ticketName='Free Ticket in Category2' price='FREE' description='This is a free and uncategorised ticket.' buttonText='Register' />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Stack spacing={6} >
                          <TicketsCard ticketName='Paid Ticket in Category2' price='₹1,000' description='This is a paid and categorised ticket.' buttonText='Register' />
                        </Stack>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Grid>
          </Grid>

        </Grid>
      </Grid >
    </>
  );
}

export default TicketsPage;