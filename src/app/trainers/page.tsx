"use client";

import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import TrainersList from "../components/TrainersList";

export default function Trainers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Box>
          <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
            Coach
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "6px",
              width: "80px",
              mx: "auto",
              mb: "50px",
              pt: "20px",
              borderColor: "red",
            }}
          />
          <TrainersList />
        </Box>
      ) : (
        <Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
            Coach
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "4px",
              width: "60px",
              mx: "auto",
              mb: "50px",
              pt: "20px",
              borderColor: "red",
            }}
          />
          <TrainersList />
        </Box>
      )}
    </>
  );
}
