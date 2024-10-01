import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { kawakamiName, kawakamiProfileText } from "../constant/profiles";
import TrainerCard from "./TrainerCard";

export default function TrainersList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Box>
          <TrainerCard
            rol={"Director Técnico"}
            name={kawakamiName}
            profileText={kawakamiProfileText}
          />
        </Box>
      ) : (
        <Box display="flex">
          <TrainerCard
            rol={"Director Técnico"}
            name={kawakamiName}
            profileText={kawakamiProfileText}
          />
        </Box>
      )}
    </>
  );
}
