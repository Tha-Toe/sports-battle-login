import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./props.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function SuccessSubmit({ setSuccessSubmit, setErrorSubmit }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.9)",
        zIndex: "20",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { sm: "444px", xxxs: "90%" },
          background: "#2A2A2A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            mt: "12px",
          }}
        >
          <ClearIcon
            sx={{ color: "secondary.main", cursor: "pointer" }}
            onClick={() => setSuccessSubmit(false)}
          />
        </Box>
        <CheckCircleIcon sx={{ color: "#52C03C", fontSize: "40px" }} />
        <Typography
          sx={{
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "secondary.main",
            mt: "8px",
            textAlign: "center",
            width: "75%",
          }}
        >
          Successfully submitted your props. You can withdraw until 2 minutes
          from now.
        </Typography>
        <Button
          sx={{
            padding: "12px 87px",
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeigh: 500,
            fontFamily: "poppins",
            color: "secondary.main",
            background: "#4831D4",
            mt: "24px",
            mb: "32px",
            borderRadius: "8px",
            textTransform: "none",
            "&.MuiButtonBase-root:hover": {
              background: "#4831D4",
            },
          }}
          onClick={() => {
            setErrorSubmit(true);
            setSuccessSubmit(false);
          }}
        >
          Okay{" "}
        </Button>
      </Box>
    </Box>
  );
}
