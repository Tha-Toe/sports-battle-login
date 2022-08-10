import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ({ setPickPlayType, pickPlayType }) {
  return (
    <>
      <Typography
        sx={{
          fontSize: "8px",
          fontFamily: "poppins",
          fontWeight: 600,
          color: "white",
          mb: "2px",
        }}
      >
        Next, Choose a play type
      </Typography>
      <Typography
        sx={{
          fontSize: "6px",
          fontFamily: "poppins",
          fontWeight: 400,
          color: "#FFCED6",
        }}
      >
        This entry can only be attack
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mb: "8px",
        }}
      >
        <Box sx={{ width: "47%" }}>
          <img src="/DEFENCE PLAY.png" />
          <Box
            sx={{
              display: "flex",
              background: "#2E2D2D",
              alignItems: "center",
              mt: "5px",
              p: "8px 4px",
              border: `${
                pickPlayType === "defence" ? "1px solid #4831D4" : "none"
              }`,
              borderRadius: "1px",
              cursor: "pointer",
            }}
            onClick={() => setPickPlayType("defence")}
          >
            {pickPlayType === "defence" && (
              <CheckCircleIcon
                sx={{ color: "#52C03C", fontSize: "12px", mr: "6px" }}
              />
            )}
            <Box>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                2 correct pays 2x
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                1 correct pays 0.5x{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "47%" }}>
          <img src="/ATTACK PLAY.png" />
          <Box
            sx={{
              display: "flex",
              background: "#2E2D2D",
              alignItems: "center",
              mt: "5px",
              p: "8px 4px",
              borderRadius: "1px",
              border: `${
                pickPlayType === "attack" ? "1px solid #4831D4" : "none"
              }`,
              cursor: "pointer",
            }}
            onClick={() => setPickPlayType("attack")}
          >
            {pickPlayType === "attack" && (
              <CheckCircleIcon
                sx={{ color: "#52C03C", fontSize: "12px", mr: "6px" }}
              />
            )}
            <Box>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                2 correct pays{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                2.6x{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
