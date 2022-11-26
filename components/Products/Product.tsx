import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import BookingTicket from "./BookingTicket";
import BoxProgram from "./BoxProgram";
import Detail from "./Detail";
import Gallery from "./Gallery";
import PickUp from "./PickUp";

const Product = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box>
        {/* <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: "#C29E75", fontWeight: 700 }}>
            Products
          </Typography>
        </Box> */}
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Stack>
                <Box>
                  {/* <Box minHeight='720px' >
                  <Gallery />
                </Box> */}
                  <Box>
                    <Detail />
                  </Box>
                  <Box>
                    <BoxProgram />
                  </Box>
                  <Box>
                    <PickUp />
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ [theme.breakpoints.up("lg")]: { ml: 2 } }}>
                <BookingTicket />
              </Box>
            </Grid>
          </Grid>
          {/* <Box sx={{width:'60%'}}>
              
            </Box> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
