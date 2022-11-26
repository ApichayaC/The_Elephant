import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];
const PickUp = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", my: 6 }}>
        <Typography
          sx={{ fontWeight: 900, fontSize: "24px", textTransform: "uppercase" }}
        >
          Pick Up Times
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel> {label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default PickUp;
