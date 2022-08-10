import { Box, Button, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
export function AndresCard() {
  return (
    <Box
      id="Andress-container"
      component="div"
      sx={{
        width: "95%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        background: "#1E1E1E",
        borderRadius: "4px",
        mb: "8px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 600,
            fontFamily: "poppins",
            mt: "7px",
            ml: "6px",
            mb: "7px",
          }}
        >
          Andres Gimenez
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "#4831D4",
            borderRadius: "4px",
            padding: "5px",
            width: "auto",
            mt: "7px",
            ml: "6px",
            width: "50%",
            mb: "7px",
          }}
        >
          <img
            src="/mlb.png"
            style={{ width: "7px", height: "7px", marginRight: "2px" }}
          />
          <Typography
            sx={{
              fontSize: "6px",
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            MLB: CLE - Batter vs HOU
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "6px",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", mt: "5px" }}
            >
              <Typography
                sx={{
                  fontSize: "6px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                Last 5
              </Typography>
              <Typography
                sx={{
                  fontSize: "6px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: " #459F48",
                  ml: "6px",
                }}
              >
                0,0,1,0,0
              </Typography>
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", mb: "5px" }}
            >
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: "white",
                }}
              >
                Avg
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  color: " #459F48",
                  ml: "6px",
                }}
              >
                1.0
              </Typography>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <img src="/clock.png" style={{ width: "10px", height: "10px" }} />
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: 600,
                  fontFamily: "poppins",
                  color: " white",
                  ml: "6px",
                }}
              >
                12h:11m
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#161616",
              display: "flex",
              alignItems: "center",
              width: "40%",
              p: "10px",
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "8px",
                fontWeight: 400,
                color: "white",
              }}
            >
              Bat.Runs + RBIs
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "18px",
                fontWeight: 600,
                color: "white",
                ml: "6px",
              }}
            >
              5.0
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            margin: "0 auto",
            mb: "10px",
          }}
        >
          <Button
            sx={{
              background: "#4831D4",
              width: "50%",
              py: "6px",
              color: "white",
              fontSize: "9px",
              fontFamily: "poppins",
              fontWeigh: 600,
              border: "1px solid #2C2C2C",
              borderRadius: "5px 0px 0px 5px",
              "&.MuiButtonBase-root:hover": {
                background: "#4831D4",
              },
            }}
          >
            OVER
          </Button>
          <Button
            sx={{
              background: "transparent",
              width: "50%",
              py: "6px",
              color: "white",
              fontSize: "9px",
              fontFamily: "poppins",
              fontWeigh: 600,
              border: "1px solid #2C2C2C",
              borderRadius: "0px 5px 5px 0px",
              "&.MuiButtonBase-root:hover": {
                background: "transparent",
              },
            }}
          >
            UNDER
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
