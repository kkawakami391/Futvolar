import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { pages } from "../constant/pages";
import { NavSplitTitle } from "../models/Nav";
import splitText from "../utils/formatNaviText";
import { borderCss } from "../constant/nav";

export default function WebNavBar() {
  const router = useRouter();

  // Elementos del nav separados en 3 partes con los path del URL
  const navArray: NavSplitTitle[] = [];
  pages.forEach((page, i) => {
    const navTitle = splitText(page, i);
    navArray.push(navTitle);
  });

  return (
    <Box sx={{ flexGrow: "1", display: "flex", mt: "4px" }}>
      {navArray.map(({ title: { startChar, midChar, endChar }, path }, i) => (
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
      ))}
    </Box>
  );
}
