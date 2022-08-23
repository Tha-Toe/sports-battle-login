import { Box, Button, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
import RemoveIcon from "@mui/icons-material/Remove";
export function AndresCard({
  removeCardIndex,
  e,
  selectCardId,
  setSelectCardId,
}) {
  const handleChangeOverUnder = (type) => {
    let selectCardIdClone = selectCardId.map((each) => {
      if (each.index === e.index) {
        return { index: each.index, type: type };
      } else {
        return each;
      }
    });
    setSelectCardId(selectCardIdClone);
  };
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "7px",
            mb: "7px",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              fontFamily: "poppins",
              ml: "10px",
            }}
          >
            Andres Gimenez
          </Typography>
          <RemoveIcon
            sx={{
              color: "#EA1E63",
              fontSize: "20px",
              borderRadius: "50%",
              border: "2px solid #EA1E63",
              mr: "10px",
              cursor: "pointer",
            }}
            onClick={() => removeCardIndex(e)}
          />
        </Box>
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
            style={{ width: "9px", height: "9px", marginRight: "2px" }}
          />
          <Typography
            sx={{
              fontSize: "8px",
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
              0.5
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
              background: `${e.type === "over" ? "#4831D4" : "transparent"}`,
              width: "50%",
              py: "6px",
              color: "white",
              fontSize: "9px",
              fontFamily: "poppins",
              fontWeigh: 600,
              border: "1px solid #2C2C2C",
              borderRadius: "5px 0px 0px 5px",
              "&.MuiButtonBase-root:hover": {
                background: `${e.type === "over" ? "#4831D4" : "transparent"}`,
              },
            }}
            onClick={() => handleChangeOverUnder("over")}
          >
            OVER
          </Button>
          <Button
            sx={{
              background: `${e.type === "under" ? "#4831D4" : "transparent"}`,
              width: "50%",
              py: "6px",
              color: "white",
              fontSize: "9px",
              fontFamily: "poppins",
              fontWeigh: 600,
              border: "1px solid #2C2C2C",
              borderRadius: "0px 5px 5px 0px",
              "&.MuiButtonBase-root:hover": {
                background: `${e.type === "under" ? "#4831D4" : "transparent"}`,
              },
            }}
            onClick={() => handleChangeOverUnder("under")}
          >
            UNDER
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
