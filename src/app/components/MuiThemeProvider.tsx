"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    brown: Palette["secondary"];
    red: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    blueLight?: PaletteOptions["primary"];
    brown?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
  }
}

export default function MuiThemeProvider({ children }: Props) {
  const theme = createTheme({
    palette: {
      blue: {
        main: "#2B3467",
        contrastText: "#FFFFFF",
      },
      blueLight: {
        main: "#BAD7E9",
        contrastText: "#FFFFFF",
      },
      brown: {
        main: "#FCFFE7",
        contrastText: "#FFFFFF",
      },
      red: {
        main: "#EB455F",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "white",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            marginLeft: 50,
            marginTop: 80,
            marginRight: 50,
            marginBottom: 60,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}