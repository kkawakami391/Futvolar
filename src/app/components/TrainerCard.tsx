import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import React from "react";
import kawakamiImage from "../images/DT.jpg";

type Props = {
  rol: string;
  name: string;
  profileText: string;
};

export default function TrainerCard(props: Props) {
  const { rol, name, profileText } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <>
          <Avatar sx={{ width: 250, height: 250, mr: 3, mt: 2, mx: "auto" }}>
            <Image alt="Trainer Kawakami" src={kawakamiImage} height={250} />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ mb: 1, textAlign: "center", mt: 2 }}>
              <u>{rol}</u>
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
            >
              <u>{name}</u>
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
              {profileText}
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Avatar sx={{ width: 200, height: 200, mr: 3, mt: 2 }}>
            <Image alt="Trainer Kawakami" src={kawakamiImage} />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <u>{rol}</u>
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
              <u>{name}</u>
            </Typography>
            <Typography>{profileText}</Typography>
          </Box>
        </>
      )}
    </>
  );
}
