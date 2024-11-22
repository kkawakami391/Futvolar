"use client";

import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { pages } from "../constant/pages";
import splitText from "../utils/formatNaviText";
import { NavSplitTitle } from "../models/Nav";
import NavLogo from "./NavLogo";
import MobileNavDrawer from "./MobileNavDrawer";
import WebNavBar from "./WebNavBar";

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    blueLight: true;
  }
}

export default function Nav() {
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
        <Toolbar>
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <NavLogo isMobile={isMobile} />
          <MobileNavDrawer open={open} setOpen={setOpen} />
        </Toolbar>
      ) : (
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <NavLogo isMobile={isMobile} />
          <WebNavBar />
        </Toolbar>
      )}
    </AppBar>
  );
}
