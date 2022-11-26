import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Book = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Box>
          <img src="/images/main.jpeg" alt="img" />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Grid container>
            <Grid item lg={3}>
              <img src="/images/main.jpeg" alt="img" width="300px" />
            </Grid>
            <Grid item lg={6} pl={4}>
              <Typography
                variant="h3"
                color="secondary"
                sx={{ fontWeight: 900 }}
              >
                Head
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                You will have the opportunity to get knowledge of Thai
                elephants, learn how to approach them, prepare food for the
                elephants, feed them, give them a mud bath, and take a shower
                with the elephants.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Duration:
                </Typography>
                <Typography variant="h4">3 Hours (approx.)</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} sx={{ textAlign: "end" }}>
              <Typography variant="h4" fontWeight={900}>
                From THB
              </Typography>
              <Typography variant="h3" fontWeight={900} mb={2}>
                ฿ 2,500.00
              </Typography>
              <Button variant="contained" color="primary" size="large" href="/booking">
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Book;
