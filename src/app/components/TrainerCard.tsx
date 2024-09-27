import { Avatar, Box, Typography } from "@mui/material";
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
  return (
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
  );
}
