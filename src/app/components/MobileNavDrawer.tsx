import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import React from "react";
import { borderCss } from "../constant/nav";
import { pages } from "../constant/pages";
import { NavSplitTitle } from "../models/Nav";
import splitText from "../utils/formatNaviText";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavDrawer(props: Props) {
  const { open, setOpen } = props;
  const theme = useTheme();
  const router = useRouter();

  const navArray: NavSplitTitle[] = [];
  pages.forEach((page, i) => {
    const navTitle = splitText(page, i);
    navArray.push(navTitle);
  });

  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  return (
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
  );
}
