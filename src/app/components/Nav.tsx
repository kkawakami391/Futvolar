"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
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
        <Toolbar>
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
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
          <Drawer
            open={open}
            onClose={() => toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.blueLight.main,
              },
            }}
          >
            <Box onClick={() => toggleDrawer(false)}>
              <List sx={{ py: 0 }}>
                <ListItemButton
                  onClick={() => router.push("/")}
                  sx={{
                    backgroundColor: theme.palette.blueLight.main,
                    borderRadius: 0,
                    mx: 0,
                  }}
                >
                  <SportsSoccerIcon fontSize="large" />
                  <Typography
                    color="white"
                    variant="h4"
                    sx={{
                      ml: "10px",
                      fontWeight: "bold",
                      textShadow: borderCss,
                    }}
                  >
                    Futv
                  </Typography>
                  <SportsSoccerIcon
                    fontSize="medium"
                    sx={{ m: 0, color: "yellow" }}
                  />
                  <Typography
                    color="white"
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      flexGrow: "1",
                      textShadow: borderCss,
                    }}
                  >
                    lar
                  </Typography>
                </ListItemButton>
                {navArray.map(
                  ({ title: { startChar, midChar, endChar }, path }, i) => (
                    <ListItem
                      key={i}
                      sx={{
                        backgroundColor: theme.palette.blueLight.main,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: "0",
                      }}
                    >
                      <Box>
                        <Button
                          onClick={() => router.push(path)}
                          sx={{
                            ":hover": {
                              "& #center_color": {
                                color: "yellow",
                              },
                              borderBottom: "3px solid white",
                            },
                            pt: 2,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              textShadow: borderCss,
                              color: "white",
                              textTransform: "capitalize",
                            }}
                          >
                            {startChar}
                          </Typography>
                          <Typography
                            variant="h6"
                            id="center_color"
                            sx={{
                              fontWeight: "bold",
                              textShadow: borderCss,
                              color: "white",
                              textTransform: "lowercase",
                            }}
                          >
                            {midChar}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="white"
                            sx={{
                              fontWeight: "bold",
                              textShadow: borderCss,
                              color: "white",
                              textTransform: "lowercase",
                            }}
                          >
                            {endChar}
                          </Typography>
                        </Button>
                      </Box>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Drawer>
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
              variant="h4"
              sx={{ ml: "10px", fontWeight: "bold", textShadow: borderCss }}
            >
              Futv
            </Typography>
            <SportsSoccerIcon
              fontSize="medium"
              sx={{ m: 0, color: "yellow" }}
            />
            <Typography
              color="white"
              variant="h4"
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
                      borderBottom: "3px solid white",
                      pb: "0",
                    },
                  }}
                >
                  <Typography
                    color="white"
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                      textTransform: "capitalize",
                    }}
                  >
                    {startChar}
                  </Typography>
                  <Typography
                    id="center_color"
                    color="white"
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                      textTransform: "lowercase",
                    }}
                  >
                    {midChar}
                  </Typography>
                  <Typography
                    color="white"
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textShadow: borderCss,
                      textTransform: "lowercase",
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
