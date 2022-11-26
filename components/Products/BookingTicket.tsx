import { Box, Button, Grid, Select, Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const BookingTicket = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs("2023-04-07"));
  const price = 2500;
  return (
    <Box>
      <Box
        sx={{
          background: "#7c8b4d",
          py: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            pl: 2,
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "24px",
          }}
        >
          Start Booking Now
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#fbf9f5",
        }}
      >
        <Stack sx={{ px: 4, py: 2 }}>
          <Typography variant="h4">
            Number of Participants{" "}
            <Typography component="span" color="#7c8b4d">
              *
            </Typography>{" "}
          </Typography>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Adult</Typography>
                <Typography sx={{ color: "#71747a	" }}>฿2,500.00</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select />
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Child (4-10 yrs)</Typography>
                <Typography sx={{ color: "#71747a	 " }}>฿2,500.00</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select />
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>Infant (Below 4 yrs)</Typography>
                <Typography sx={{ color: "#71747a	 " }}>free</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Select />
            </Grid>
          </Grid>
          <Box>
            <Typography variant="h4">
              Choose a Date{" "}
              <Typography component="span" color="#7c8b4d">
                *
              </Typography>{" "}
            </Typography>
            <Stack sx={{ my: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid
                  item
                  sx={{
                    border: "1px solid #7c8b4d !important",
                    background: "white",
                  }}
                >
                  <CalendarPicker
                    date={date}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </Grid>
              </LocalizationProvider>
            </Stack>
          </Box>

          <Grid container mt={2}>
            <Grid item xs={6} sx={{ display: "flex" }}>
              <Box my="auto">
                <Typography variant="h3">Total Price</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Typography
                color="secondary"
                sx={{ fontSize: "24px", my: "auto" }}
                fontWeight={700}
              >
                {price} THB
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/payment"
              fullWidth
              sx={{ borderRadius: 0, fontSize: "16px" }}
            >
              Book Now
            </Button>
          </Box>
          <Typography variant="h6" sx={{ color: "#71747a	 " }}>
            {""}
            <Typography variant="h6" component="span" fontWeight={700}>
              Please note:
            </Typography>
            {` `} Booking confirmation is issued to you indicating that payment
            is complete
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookingTicket;
