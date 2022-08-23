import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
export default function ({ setSelectAmount, selectAmount }) {
  return (
    <Box sx={{ mb: "7px" }}>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "8px",
          fontWeight: 400,
          color: "secondary.main",
          mb: "7px",
        }}
      >
        Please choose an entry amount{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: {
            xl: "flex-start",
            xs: "space-between",
            xxxs: "flex-start",
          },
          mb: "4px",
        }}
      >
        <Box
          sx={{
            padding: "8.5px 8px",
            background: `${selectAmount === 5 ? "#4831D4" : "#2E2D2D"}`,
            cursor: "pointer",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: { xl: "7px", xs: 0, xxxs: "7px" },
          }}
          onClick={() => setSelectAmount(5)}
        >
          $5
        </Box>
        <Box
          sx={{
            padding: "8.5px 8px",
            background: `${selectAmount === 10 ? "#4831D4" : "#2E2D2D"}`,
            cursor: "pointer",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: { xl: "7px", xs: 0, xxxs: "7px" },
          }}
          onClick={() => setSelectAmount(10)}
        >
          $10
        </Box>
        <Box
          sx={{
            padding: "8.5px 8px",
            background: `${selectAmount === 25 ? "#4831D4" : "#2E2D2D"}`,
            cursor: "pointer",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: { xl: "7px", xs: 0, xxxs: "7px" },
          }}
          onClick={() => setSelectAmount(25)}
        >
          $25
        </Box>
        <Box
          sx={{
            padding: "8.5px 8px",
            background: `${selectAmount === 50 ? "#4831D4" : "#2E2D2D"}`,
            cursor: "pointer",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: { xl: "7px", xs: 0, xxxs: "7px" },
          }}
          onClick={() => setSelectAmount(50)}
        >
          $50
        </Box>
        <Box
          sx={{
            padding: "8.5px 8px",
            background: `${selectAmount === "other" ? "#4831D4" : "#2E2D2D"}`,
            cursor: "pointer",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
          }}
          onClick={() => setSelectAmount("other")}
        >
          Other
        </Box>
      </Box>
    </Box>
  );
}
