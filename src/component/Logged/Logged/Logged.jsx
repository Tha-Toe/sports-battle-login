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
  return (
    <main className="logged-container">
      <Box
        component="div"
        sx={{ position: "relative", width: "100%", height: "10%" }}
      >
        <AppBar
          component="nav"
          sx={{
            borderBottom: "1px solid gray",
            position: "relative",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ background: "black" }}>
            <img src="/sportsbattle.png" className="logoLogged" />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                width: "836px",
                margin: "auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  background: "#fff",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "8px 12px",
                  mr: "12px",
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
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "8px 12px",
                  mr: "12px",
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
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "8px 12px",
                  mr: "12px",
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
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "8px 20px",
                  mr: "12px",
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
          position: "relative",
          height: "90%",
          width: "100%",
        }}
      >
        <AppBar
          component="nav"
          sx={{
            boxShadow: "none",
            outline: "none",
            width: "80px",
            position: "absolute",
            background: "transparent",
            left: 0,
            top: 0,
            height: "100%",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90px",
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              height: "100%",
            }}
          >
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
                  <Typography sx={{ fontFamily: "poppins", fontSize: "10px" }}>
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
