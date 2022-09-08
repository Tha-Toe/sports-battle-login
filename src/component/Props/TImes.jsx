import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";

export default function Times({ selectCardId }) {
  return (
    <Box sx={{ borderBottom: "1px solid #2c2c2c", mb: "16px" }}>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: { xl: "12px", md: "10px", xxxs: "8px" },
          fontWeight: 400,
          color: "secondary.dark_gray",
          mb: "7px",
        }}
      >
        Props Cart : : {selectCardId.length} Player
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
            bgcolor: "primary.gray",
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
            color: `${
              selectCardId.length === 1 ? "white" : "secondary.dark_gray"
            }`,
          }}
        >
          1
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: `${
              selectCardId.length === 2 ? "#439F48" : "primary.gray"
            }`,
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
            color: `${
              selectCardId.length === 2 ? "white" : "secondary.dark_gray"
            }`,
          }}
        >
          {selectCardId.length === 2 ? "2.6x" : "2"}
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: `${
              selectCardId.length === 3 ? "#439F48" : "primary.gray"
            }`,
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
            color: `${
              selectCardId.length === 3 ? "white" : "secondary.dark_gray"
            }`,
          }}
        >
          {selectCardId.length === 3 ? "3.6x" : "3"}
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: `${
              selectCardId.length === 4 ? "#439F48" : "primary.gray"
            }`,
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
            color: `${
              selectCardId.length === 4 ? "white" : "secondary.dark_gray"
            }`,
          }}
        >
          {selectCardId.length === 4 ? "4.6x" : "4"}
        </Box>
        <Box
          sx={{
            padding: "5px 8px",
            bgcolor: `${selectCardId.length > 4 ? "#439F48" : "primary.gray"}`,
            borderRadius: "4px",
            fontFamily: "poppins",
            fontWeight: 500,
            fontSize: "10px",
            mr: "4px",
            color: `${
              selectCardId.length > 4 ? "white" : "secondary.dark_gray"
            }`,
          }}
        >
          {selectCardId.length > 4 ? "5.6x" : "5"}
        </Box>
      </Box>
    </Box>
  );
}
