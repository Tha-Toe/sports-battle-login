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
import "./profile.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Input } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Success({ setConfirm, setSuccess, setWrong }) {
  const goWrongPage = () => {
    setWrong(true);
    setSuccess(false);
  };

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
          width: { sm: "673px", xxxs: "90%" },
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
            mt: "26px",
            mb: "18px",
          }}
        >
          <ClearIcon
            onClick={() => setSuccess(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <CheckCircleIcon
          sx={{
            color: "#C8E6CA",
            fontSize: { sm: "60px", xxs: "50px", xxxs: "40px" },
          }}
        />
        <Typography
          sx={{
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "#C8E6CA",
            mt: "16px",
            width: "70%",
            textAlign: "center",
          }}
        >
          Request received. Please allow 1-2 business days for our Compliance
          Team to review and approve the request.{" "}
        </Typography>
        <Button
          sx={{
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 600,
            fontFamily: "poppins",
            color: "white",
            background: "#4831D4",
            py: "14px",
            mt: "25px",
            width: "60%",
            borderRadius: "8px",
            textTransform: "none",
            mb: "48px",

            "&.MuiButtonBase-root:hover": {
              background: "#4831D4",
            },
          }}
          onClick={goWrongPage}
        >
          Okay
        </Button>
      </Box>
    </Box>
  );
}
