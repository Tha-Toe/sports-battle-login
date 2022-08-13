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

export default function OverUnderPointSystem() {
  const [header, setHeader] = useState([
    { name: "T20/T10" },
    { name: "ODI" },
    { name: "TEST" },
  ]);
  const [openTag, setOpenTag] = useState("T20/T10");

  const [T20T10, setT20T10] = useState([
    {
      name: "Each run scored ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
    {
      name: "Greater than/equal to 30 runs and less than 50 runs ",
      applicable: "Applicable for all profiles.",
      points: "+3",
    },
  ]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        border: "1px solid #494949",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {header.map((e) => (
          <Button
            sx={{
              color: `${openTag === e.name ? "#4831D4" : "secondary.main"}`,
              borderBottom: `${
                openTag === e.name ? "3px solid #4831D4" : "none"
              }`,
              width: "33%",
              display: "flex",
              fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
              py: "10px",
              borderRadius: 0,
            }}
          >
            {e.name}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "#494949",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "white",
              py: "9px",
            }}
          >
            BATTING
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "white",
              py: "9px",
            }}
          >
            POINTS
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {T20T10.map((e) => (
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid #494949",
              mb: "8px",
              mt: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
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
              <Typography
                sx={{
                  fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
                  fontWeight: 500,
                  fontFamily: "poppins",
                  color: "secondary.main",
                }}
              >
                {e.applicable}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
                fontWeight: 500,
                fontFamily: "poppins",
                color: "#52C03C",
              }}
            >
              {e.points}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
