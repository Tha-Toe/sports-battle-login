import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./logged.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Props from "../../Props/Props";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

export function Logged() {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/", { replace: true });
  };
  const [sideBar, setSideBar] = useState([
    {
      name: "Props",
      activeSrc: "/props-active.png",
      unactiveSrc: "/props-unactive.png",
      active: true,
    },
    {
      name: "My Props",
      activeSrc: "/my-props-active.png",
      unactiveSrc: "/my-prop-unactive.png",
      active: false,
    },
    {
      name: "My Games",
      activeSrc: "/my-game-active.png",
      unactiveSrc: "/my-game-unactive.png",
      active: false,
    },
    {
      name: "Transition History",
      activeSrc: "/transcation-active.png",
      unactiveSrc: "/transcation-unactive.png",
      active: false,
    },
    {
      name: "Settings",
      activeSrc: "/setting-active.png",
      unactiveSrc: "/setting-unactive.png",
      active: false,
    },
  ]);

  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <main className="logged-container">
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "10%",
        }}
      >
        <AppBar
          component="nav"
          sx={{
            borderBottom: "1px solid gray",
            position: "relative",
            boxShadow: "none",
            zIndex: { sm: 4, xxxs: 3 },
            background: "black",
          }}
        >
          <Toolbar
            sx={{
              background: "black",
              display: { xxxs: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <img src="/sportsbattle.png" className="logoLogged" />
            <Box
              sx={{
                width: {
                  lg: "836px",
                  md: "700px",
                  sm: "500px",
                  xs: "450px",
                  xxs: "100%",
                  xxxs: "280px",
                },
                margin: "0 auto",
                display: "flex",
                justifyContent: { xs: "flex-end", xxxs: "center" },
                alignItems: "center",
                mb: { xs: 0, xxxs: "10px" },
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  background: "#fff",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: { sm: "10px", xs: "10px", xxs: "8px", xxxs: "6px" },
                  fontWeight: 700,
                  padding: { xs: "8px 12px", xxs: "4px 6px" },
                  maxWidth: { xs: "auto", xxs: "22%", xxxs: "21%" },
                  minWidth: { xs: "25%", xxs: "22%", xxxs: "21%" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "#fff",
                  },
                }}
              >
                Invite Friends
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "rgba(36, 36, 35, 1)",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: { sm: "10px", xs: "10px", xxs: "8px", xxxs: "6px" },
                  fontWeight: 700,
                  maxWidth: { xs: "auto", xxs: "20%", xxxs: "21%" },
                  minWidth: { xs: "auto", xxs: "20%", xxxs: "21%" },
                  padding: { xs: "8px 12px", xxxs: "4px 6px" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "rgba(36, 36, 35, 1)",
                  },
                }}
              >
                Bonus: $0.00
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "rgba(36, 36, 35, 1)",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: { sm: "10px", xs: "10px", xxs: "8px", xxxs: "6px" },
                  fontWeight: 700,
                  maxWidth: { xs: "auto", xxs: "19%", xxxs: "21%" },
                  minWidth: { xs: "auto", xxs: "19%", xxxs: "21%" },
                  padding: { xs: "8px 12px", xxxs: "4px 6px" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "rgba(36, 36, 35, 1)",
                  },
                }}
              >
                Cash: $0.00
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "#4831D4",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: { sm: "10px", xs: "10px", xxs: "8px", xxxs: "6px" },
                  fontWeight: 700,
                  padding: { xs: "8px 12px", xxxs: "4px 6px" },
                  maxWidth: { xs: "auto", xxs: "19%", xxxs: "21%" },
                  minWidth: { xs: "auto", xxs: "19%", xxxs: "21%" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "#4831D4",
                  },
                }}
              >
                Deposit
              </Button>
              <Box
                component="div"
                sx={{
                  background: "transparent",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/profile.png"
                  style={{ width: "31px", height: "31px" }}
                />
                <KeyboardArrowDownIcon
                  sx={{ color: "#494949", fontSize: "25px" }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="div"
        sx={{
          position: { sm: "relative", xxxs: "relative" },
          height: { sm: "90%", xxxs: "90%" },
          width: "100%",
        }}
      >
        <AppBar
          component="nav"
          sx={{
            boxShadow: "none",
            outline: "none",
            width: { lg: "80px", md: "50px", sm: "30px", xxxs: "80px" },
            position: "absolute",
            background: "transparent",
            left: { sm: 0, xxxs: `${openSideNav ? 0 : "-114px"}` },
            top: 0,
            height: "100%",
            zIndex: 3,
            transition: "all .5s ease-in",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: { lg: "80px", md: "50px", sm: "30px", xxxs: "80px" },
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              height: "100%",
              background: "black",
              position: "relative",
            }}
          >
            <MenuIcon
              sx={{
                position: "fixed",
                width: "30px",
                height: "30px",
                background: "black",
                color: "white",
                left: `${openSideNav ? "115px" : "5px"}`,
                top: "10px",
                display: { sm: "none", xxxs: "block" },
                borderRadius: "0 4px 4px 0",
                zIndex: 4,
                transition: "all .5s ease-in",
              }}
              onClick={() => setOpenSideNav(!openSideNav)}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "53%",
                borderBottom: "1px solid #494949",
              }}
            >
              {sideBar.map((e) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "20%",
                  }}
                >
                  <img
                    src={e.active ? e.activeSrc : e.unactiveSrc}
                    style={{ height: "27px", width: "27px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: { md: "10px", xxxs: "8px" },
                    }}
                  >
                    {e.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "13%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "10px",
                  mb: "12px",
                }}
              >
                Switch Theme
              </Typography>
              <Box
                sx={{
                  width: "34px",
                  height: "16px",
                  background: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "2px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "18px",
                    height: "18px",
                    background: "#494949",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "20%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "10px",
                  mb: "12px",
                }}
              >
                Join our Social
              </Typography>
              <img src="/discord.png" className="discord-logo" />
              <img src="/twitter.png" className="twitter-logo" />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "15%",
              }}
              onClick={handleLogout}
            >
              <img src="/exit.png" className="exit-image" />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Props></Props>
        </Box>
      </Box>
    </main>
  );
}
