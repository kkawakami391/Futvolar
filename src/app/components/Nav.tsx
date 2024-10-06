"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import React, { useState } from "react";
import { pages } from "../constant/pages";
import splitText from "../utils/formatNaviText";
import { NavSplitTitle } from "../models/Nav";
import { useRouter } from "next/navigation";

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    blueLight: true;
  }
}

export default function Nav() {
  const router = useRouter();

  // Css de los bordes de las letras de los items del Nav
  const borderCss =
    "1px 0 grey, -1px 0 grey, 1px 0 grey, -1px 0 grey, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black";

  // Datos para el responsive
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Estado para manejar el Drawer
  const [open, setOpen] = useState(false);
  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  // Elementos del nav separados en 3 partes con los path del URL
  const navArray: NavSplitTitle[] = [];
  pages.forEach((page, i) => {
    const navTitle = splitText(page, i);
    navArray.push(navTitle);
  });

  return (
    <AppBar position="fixed" color="blueLight">
      {isMobile ? (
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton size="large" onClick={() => router.push("/")}>
            <SportsSoccerIcon fontSize="large" />
            <Typography
              color="white"
              variant="h5"
              sx={{ ml: "10px", fontWeight: "bold", textShadow: borderCss }}
            >
              Futv
            </Typography>
            <SportsSoccerIcon fontSize="small" sx={{ m: 0, color: "yellow" }} />
            <Typography
              color="white"
              variant="h5"
              sx={{ fontWeight: "bold", flexGrow: "1", textShadow: borderCss }}
            >
              lar
            </Typography>
          </IconButton>
          <Box sx={{ flexGrow: "1", display: "flex", mt: "4px" }}>
            {navArray.map(
              ({ title: { startChar, midChar, endChar }, path }, i) => (
                <Button
                  onClick={() => router.push(path)}
                  key={i}
                  sx={{
                    "&:hover": {
                      "& #center_color": {
                        color: "yellow",
                      },
                    },
                  }}
                >
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {startChar}
                  </Typography>
                  <Typography
                    id="center_color"
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {midChar}
                  </Typography>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {endChar}
                  </Typography>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      ) : (
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton size="large" onClick={() => router.push("/")}>
            <SportsSoccerIcon fontSize="large" />
            <Typography
              color="white"
              variant="h5"
              sx={{ ml: "10px", fontWeight: "bold", textShadow: borderCss }}
            >
              Futv
            </Typography>
            <SportsSoccerIcon fontSize="small" sx={{ m: 0, color: "yellow" }} />
            <Typography
              color="white"
              variant="h5"
              sx={{ fontWeight: "bold", flexGrow: "1", textShadow: borderCss }}
            >
              lar
            </Typography>
          </IconButton>
          <Box sx={{ flexGrow: "1", display: "flex", mt: "4px" }}>
            {navArray.map(
              ({ title: { startChar, midChar, endChar }, path }, i) => (
                <Button
                  onClick={() => router.push(path)}
                  key={i}
                  sx={{
                    "&:hover": {
                      "& #center_color": {
                        color: "yellow",
                      },
                    },
                  }}
                >
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {startChar}
                  </Typography>
                  <Typography
                    id="center_color"
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {midChar}
                  </Typography>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    {endChar}
                  </Typography>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
}
