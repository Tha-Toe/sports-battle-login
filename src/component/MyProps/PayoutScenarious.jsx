import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid, Card } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function PayoutScenarious({ setOpenPayoutScenarious, mode }) {
  const [pays, setPays] = useState([
    "3 considered & 3/3 correct - pays 2.25x",
    "3 considered & 2/3 correct - pays 1.25x",
    "2 considered & 2/3 correct - pays 1.25x",
    "2 considered & 1/3 correct - pays 0.25x",
  ]);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `${
          mode === "dark" ? "rgba(0,0,0,0.9)" : "rgba(115, 115, 115, 0.7)"
        }`,
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          width: { sm: "673px", xs: "400px", xxs: "350px", xxxs: "280px" },
          bgcolor: "primary.dark",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: "16px", xxs: "14px", xxxs: "12px" },
              fontWeight: 700,
              fontFamily: "poppins",
              color: "secondary.dark_gray",
            }}
          >
            Payout Scenarios
          </Typography>
          <ClearIcon
            sx={{ color: "secondary.dark_gray", cursor: "pointer" }}
            onClick={() => setOpenPayoutScenarious(false)}
          />
        </Box>
        <Typography
          sx={{
            width: "95%",
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "secondary.dark_gray",
            mt: "16px",
            pb: "10px",
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          A player is considered if (sohe s not a did Ni not play/ or not a tie
          or not any condition that causes the entry to downgrade depending on
          the sport. Please read the rules for each sport in the props screen.
          In • n event player(s) is not lc • nsideredir th entry is downgraded
          and payouts are adjusted accordingly as per below{" "}
        </Typography>
        {pays.map((e, index) => (
          <Typography
            key={index}
            sx={{
              width: "95%",
              fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
              fontWeight: 400,
              fontFamily: "poppins",
              color: "secondary.dark_gray",
              mt: "4px",
            }}
          >
            {e}
          </Typography>
        ))}
        <Typography
          sx={{
            width: "95%",
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "secondary.dark_gray",
            py: "16px",
            borderBottom: "1px solid #D9D9D9",
            borderTop: "1px solid #D9D9D9",
          }}
        >
          It only 2 players remain, one is a tie and other is green, pays out
          1r25x in an attack entry. Defense entry follows the 2-pick defense
          payout rules.
        </Typography>
        <Typography
          sx={{
            width: "95%",
            fontSize: { sm: "14px", xxs: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "secondary.dark_gray",
            py: "16px",
            mb: "5px",
          }}
        >
          If no valid players remain or all valid players are from same team,
          entry is canceled and refunded
        </Typography>
      </Box>
    </Box>
  );
}
