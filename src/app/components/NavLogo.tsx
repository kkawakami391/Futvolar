import { IconButton, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useRouter } from "next/navigation";
import React from "react";
import { borderCss } from "../constant/nav";

interface Props {
  // Si es true es Mobile
  isMobile: boolean;
}

export default function NavLogo(props: Props) {
  const { isMobile } = props;
  const router = useRouter();

  return (
    <IconButton size="large" onClick={() => router.push("/")}>
      <SportsSoccerIcon fontSize="large" />
      <Typography
        color="white"
        variant={isMobile ? "h5" : "h4"}
        sx={{ ml: "10px", fontWeight: "bold", textShadow: borderCss }}
      >
        Futv
      </Typography>
      <SportsSoccerIcon
        fontSize={isMobile ? "small" : "medium"}
        sx={{ m: 0, color: "yellow" }}
      />
      <Typography
        color="white"
        variant={isMobile ? "h5" : "h4"}
        sx={{ fontWeight: "bold", flexGrow: "1", textShadow: borderCss }}
      >
        lar
      </Typography>
    </IconButton>
  );
}
