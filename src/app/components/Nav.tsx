"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import React from "react";
import { pages } from "../constant/pages";
import splitText from "../utils/formatNaviText";
import { NavSplitTitle } from "../models/Nav";

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    blueLight: true;
  }
}

export default function Nav() {
  const borderCss =
    "1px 0 grey, -1px 0 grey, 1px 0 grey, -1px 0 grey, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black";

  const navArray: NavSplitTitle[] = [];
  pages.forEach((page) => {
    const array = splitText(page);
    navArray.push(array);
  });

  return (
    <AppBar position="fixed" color="blueLight">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <IconButton size="large">
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
          {navArray.map(({ title: { startChar, midChar, endChar } }, i) => (
            <Button
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
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
