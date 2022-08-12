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
import OverUnderPointSystem from "./OverUnderPointSystem";
import FAQ from "./FAQ";
import OperatingState from "./OperatingState";

export default function KnowMore({ setOpenInviteFriend }) {
  const openShareFriend = () => {
    setOpenInviteFriend(true);
  };
  const [general, setGeneral] = useState([
    { name: "Over-Under Points System", src: "/howto.png" },
    { name: "Frequently Asked Questions", src: "/fps.png" },
    { name: "Sports Battle Operating States", src: "/fps.png" },
    {
      name: "Share your love of Fantasy Sports",
      src: "/fps.png",
      extra: "You and your friend will both receive bonus cash",
      func: openShareFriend,
    },
  ]);
  const [legal, setLegal] = useState([
    { name: "Terms of Service", src: "/howto.png" },
    { name: "Privacy Policy", src: "/rules.png" },
    { name: "Responsible Play", src: "/fps.png" },
  ]);

  const [openTag, setOpenTag] = useState("Over-Under Points System");

  const [overUnderNav, setOverUnderNav] = useState([
    { name: "MLB", active: true, src: "/mlb.png" },
    { name: "PGA", active: false, src: "/pga.png" },
    { name: "GOLF", active: false, src: "/golf.png" },
    { name: "NFL", active: false, src: "/nfl.png" },
    { name: "WNBA", active: false, src: "/wnba.png" },
    { name: "Cricket", active: false, src: "/cricket.png" },
    { name: "CSGO", active: false, src: "/csgo.png" },
    { name: "MMA", active: false, src: "/mma.png" },
    { name: "F1", active: false, src: "/f1.png" },
    { name: "CFL", active: false, src: "/cfl.png" },
    { name: "DOTA2", active: false, src: "/dota2.png" },
    { name: "VAL", active: false, src: "/val.png" },
    { name: "Soccer", active: false, src: "/soccer.png" },
    { name: "NBA", active: false, src: "/nba.png" },
  ]);
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", mt: "10px" }}>
      {openTag === "Over-Under Points System" && (
        <Box
          component="div"
          sx={{
            width: {
              lg: "836px",
              md: "700px",
              sm: "550px",
              xs: "90%",
              xxxs: "95%",
            },
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            mb: "30px",
          }}
        >
          {overUnderNav.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mr: { xxxs: "15px", md: "" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "34px", xxxs: "30px" },
                  width: { xs: "34px", xxxs: "30px" },
                  border: "2px solid white",
                  borderRadius: "50%",
                  mt: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${e.active ? "#4831D4" : "black"}`,
                }}
              >
                <img className="overUnderNavImage" src={e.src} />
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  mt: "5px",
                }}
              >
                {" "}
                {e.name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      <Box
        sx={{
          width: {
            lg: "836px",
            md: "700px",
            sm: "550px",
            xs: "90%",
            xxxs: "95%",
          },
          height: "100vh",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
        }}
        component="div"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "35%", xxxs: "25%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px", xxxs: "12px" },
              fontWeight: 700,
              fontFamily: "poppins",
              width: "100%",
              color: "white",
              mb: "12px",
              ml: { xs: 0, xxxs: "5px" },
            }}
          >
            GENERAL
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              background: "#D9D9D9",
              mb: "12px",
            }}
          ></Box>
          {general.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                mb: "20px",
                cursor: "pointer",
                borderBottom: { xs: "none", xxxs: "1px solid #494949" },
              }}
              onClick={() => {
                setOpenTag(e.name);
                e.func();
              }}
            >
              <img src={e.src} className="know-icon" />
              <Box sx={{ width: "100%", ml: { sm: "8px", xxxs: "2px" } }}>
                <Typography
                  sx={{
                    fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
                    fontWeight: 700,
                    color: `${openTag === e.name ? "#4831D4" : "white"}`,
                  }}
                >
                  {e.name}
                </Typography>
                {e.extra && (
                  <Typography
                    sx={{
                      fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
                      fontWeight: 400,
                    }}
                  >
                    {e.extra}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px", xxxs: "12px" },
              fontWeight: 700,
              fontFamily: "poppins",
              width: "100%",
              color: "white",
              mb: "12px",
              mt: "24px",
              ml: { xs: 0, xxxs: "5px" },
            }}
          >
            LEGAL
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              background: "#D9D9D9",
              mb: "12px",
            }}
          ></Box>
          {legal.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                mb: "20px",
                borderBottom: { xs: "none", xxxs: "1px solid #494949" },
              }}
            >
              <img src={e.src} className="know-icon" />
              <Box sx={{ width: "100%", ml: { sm: "8px", xxxs: "2px" } }}>
                <Typography
                  sx={{
                    fontSize: { lg: "14px", xs: "12px", xxxs: "10px" },
                    fontWeight: 700,
                  }}
                >
                  {e.name}
                </Typography>
                {e.extra && (
                  <Typography
                    sx={{
                      fontSize: { lg: "12px", xs: "10px", xxxs: "8px" },
                      fontWeight: 400,
                    }}
                  >
                    {e.extra}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: { xs: "65%", xxxs: "75%" } }}>
          {openTag === "Over-Under Points System" && <OverUnderPointSystem />}
          {openTag === "Frequently Asked Questions" && <FAQ />}
          {openTag === "Sports Battle Operating States" && <OperatingState />}
        </Box>
      </Box>
    </Box>
  );
}
