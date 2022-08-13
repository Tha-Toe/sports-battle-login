import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";

export default function Times() {
  return (
    <Box sx={{ borderBottom: "1px solid #2c2c2c", mb: "16px" }}>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "8px",
          fontWeight: 400,
          color: "secondary.main",
          mb: "7px",
        }}
      >
        Props Cart : : 2 Player
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: "3px",
        }}
      >
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: "#2E2D2D",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
          }}
        >
          1
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            background: "#439F48",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
          }}
        >
          2.6x
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: "#2E2D2D",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
          }}
        >
          3
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: "#2E2D2D",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
          }}
        >
          4
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: "#2E2D2D",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
          }}
        >
          5
        </Box>
      </Box>
    </Box>
  );
}
