import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import dtImage from "../images/DT.jpg";
import Image from "next/image";

export default function Trainers() {
  return (
    <Box>
      {/* <Image
        fill
        src={dtImage}
        alt="DTimg"
        style={{
          objectFit: "cover", zIndex: "-1", }} /> */}
      <Typography variant="h3" align="center">
        Coach
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: "4px",
          width: "60px",
          mx: "auto",
          pt: "20px",
          borderColor: "red",
        }}
      />
    </Box>
  );
}
