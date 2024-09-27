import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import TrainersList from "../components/TrainersList";

export default function Trainers() {
  return (
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
  );
}
