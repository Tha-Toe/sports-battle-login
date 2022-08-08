import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./logged.css";
export function Logged() {
  return (
    <>
      <AppBar component="nav" sx={{ borderBottom: "1px solid gray" }}>
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
                padding: "8px 12px",
                mr: "12px",
              }}
            >
              Deposit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
