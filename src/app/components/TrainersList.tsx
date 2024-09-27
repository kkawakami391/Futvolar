import { Box } from "@mui/material";
import React from "react";
import { kawakamiName, kawakamiProfileText } from "../constant/profiles";
import TrainerCard from "./TrainerCard";

export default function TrainersList() {
  return (
    <Box display="flex">
      <TrainerCard
        rol={"Director Técnico"}
        name={kawakamiName}
        profileText={kawakamiProfileText}
      />
    </Box>
  );
}
