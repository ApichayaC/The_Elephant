/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";

export const detailProgram = [
  `Pick up from you accommodation by minivan`,
  `Drive approximately 30 minutes from your accommodation to our sanctuary`,
  `Arrive at Aonang Elephant Sanctuary and meet with our tour guide who will provide you introduction of Aonang Elephant Sanctuary`,
  `Meet, get to know, interact, cook protein ball and feed the elephants and get muddy with elephant in mud spa pond surrounded by mountain and forest view at our sanctuary`,
  `When it's time to bathe the elephants, you will walk together and lead them alongside the river to the larger manmade pool-and if you're lucky you might even get splashed with their trunks`,
  `Take photos group with elephants and get some seasonal fruit, coffee or tea then say good bye to the elephants`,
  `Leave Aonang Elephant Sanctuary with pleasure to your accommodation safely`,
];

const Detail = () => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Morning Program
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 4 }}>
          <Typography sx={{ color: "#71747a" }}> Aonang, Krabi</Typography>
        </Box>
      </Box>
      <Box mt={6}>
        <Typography
          sx={{ fontWeight: 900, fontSize: "24px", textTransform: "uppercase" }}
        >
          itinerary
        </Typography>
        <Box sx={{ my: 2 }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {detailProgram.map((item) => (
              <TimelineItem key={item} sx={{ mb: 1 }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector sx={{ backgroundColor: "#9DAC6E" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>11.30</Typography>
                  <Typography>{item}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
