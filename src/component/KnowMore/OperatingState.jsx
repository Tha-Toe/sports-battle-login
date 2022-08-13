import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./knowMore.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";

export default function OperatingState() {
  const [operatingState, setOperatingState] = useState([
    { name: "Alabama", condition: false },
    { name: "Alaska", condition: true },
    { name: "Arizona", condition: false },
    { name: "Arkansas", condition: true },
    { name: "California ", condition: true },
    { name: "Colorado", condition: true },
    { name: "Connecticut", condition: false },
    { name: "Delaware", condition: false },
    { name: "Florida", condition: true },
    { name: "Delaware", condition: true },
    { name: "California", condition: true },
    { name: "California", condition: true },
    { name: "California", condition: true },
    { name: "California", condition: true },
    { name: "California", condition: true },
    { name: "California", condition: true },
  ]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        border: "1px solid #494949",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "16px", xs: "14px", xxxs: "12px" },
          fontWeight: 600,
          fontFamily: "poppins",
          color: "secondary.main",
          width: "90%",
          mt: "10px",
        }}
      >
        Sports Battle Operating States
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
          fontWeight: 400,
          fontFamily: "poppins",
          color: "secondary.main",
          width: "90%",
          mt: "9px",
        }}
      >
        US States from where SportsBattle allows users to participate in cash
        contests. Users can however participate in free contests. We are working
        on introducing new States{" "}
      </Typography>
      <Box sx={{ width: "100%", background: "#494949", mb: "9px", mt: "14px" }}>
        <Typography
          sx={{
            width: "90%",
            color: "white",
            fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
            fontWeight: 600,
            fontFamily: "poppins",
            py: "9px",
            margin: "0 auto",
          }}
        >
          About
        </Typography>
      </Box>
      {operatingState.map((e) => (
        <Box
          sx={{
            width: "90%",
            borderBottom: "1px solid #494949",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
              fontWeight: 500,
              fontFamily: "poppins",
              color: "secondary.main",
            }}
          >
            {e.name}
          </Typography>
          {e.condition ? (
            <CheckCircleIcon sx={{ color: "#52C03C" }} />
          ) : (
            <ClearIcon
              sx={{
                background: "#E4313C",
                color: "black",
                borderRadius: "50%",
                fontSize: "22px",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
