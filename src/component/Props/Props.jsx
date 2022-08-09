import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

export default function Props() {
  const [propsNav, setPropsNav] = useState([
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

  const [propsGuide, setPropsGuide] = useState([
    { name: "How to", src: "/howto.png" },
    { name: "Rules", src: "/rules.png" },
    { name: "FPS", src: "/fps.png" },
    { name: "Refresh", src: "/refresh.png" },
  ]);
  const [stats, setStats] = useState([
    { name: "Bat.Runs + RBIs", bg: "#4831D4", color: "white" },
    { name: "Fantasy Score (77)", bg: " #459F48", color: "black" },
    { name: "Hits Allowed", bg: "#4831D4", color: "white" },
    { name: "Num. of Pitches", bg: "#4831D4", color: "white" },
    { name: "Pitch Outs", bg: "#4831D4", color: "white" },
    { name: "Strike Outs", bg: "#4831D4", color: "white" },
    { name: "Bat.Runs + RBIs", bg: "#4831D4", color: "white" },
    { name: "Hits Allowed", bg: "#4831D4", color: "white" },
    { name: "Num. of Pitches", bg: "#4831D4", color: "white" },
  ]);
  const [matches, setMatches] = useState([
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
    { name: "PHI vs WSH", time: "13h 48m" },
  ]);
  const [width, setWidth] = useState();
  const [matchesWidth, setMatchesWidth] = useState();
  const parentRef = useRef();
  const matchesRef = useRef();
  useEffect(() => {
    const total =
      parentRef.current.scrollWidth - parentRef.current.offsetWidth + 50;
    const matchesTotal =
      matchesRef.current.scrollWidth - matchesRef.current.offsetWidth + 50;
    setWidth(total);
    setMatchesWidth(matchesTotal);
  }, []);

  return (
    <main className="props-container">
      <Box
        sx={{
          width: "836px",
          height: "100vh",
          margin: "auto",
        }}
        component="div"
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {propsNav.map((e) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "34px",
                  width: "34px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  mt: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={e.src}
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "rows",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: "16px",
            borderBottom: "2px solid #494949",
            pb: "10px",
            mb: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "rows",
              alignItems: "center",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            {propsGuide.map((e) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "rows",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={e.src} style={{ marginRight: "3px" }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "poppins",
                    fontWeight: 500,
                  }}
                >
                  {e.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Input
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  sx={{
                    color: "#494949",
                    fontSize: "25px",
                    mr: "7px",
                  }}
                />
              </InputAdornment>
            }
            placeholder="Search"
            disableUnderline
            sx={{
              background: "#161616",
              border: "1px solid #2c2c2c",
              width: "324px",
              color: "white",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "poppins",
              height: "32px",
              borderRadius: "4px",
              pt: "3px",
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "30px",
            position: "relative",
            mb: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16",
              fontWeight: "400",
              fontFamily: "poppins",
              width: "10%",
            }}
          >
            9 Stats
          </Typography>
          <motion.div className="statsContainer" ref={parentRef}>
            <motion.div
              className="statsChild"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {stats.map((e) => (
                <button
                  style={{ color: `${e.color}`, background: `${e.bg}` }}
                  className="statsButton"
                >
                  {e.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
              position: "absolute",
              right: 0,
            }}
          >
            <Box
              component="div"
              sx={{
                height: "100%",
                width: "80px",
                background:
                  "linear-gradient(to right, transparent, rgba(0,0,0,0.6))",
              }}
            ></Box>
            <Box
              sx={{
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "30px",
                borderRadius: "4px",
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "48px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "16",
              fontWeight: "400",
              fontFamily: "poppins",
              width: "15%",
            }}
          >
            5 Matches
          </Typography>
          <motion.div className="matchesContainer" ref={matchesRef}>
            <motion.div
              className="matchesChild"
              drag="x"
              dragConstraints={{ right: 0, left: -matchesWidth }}
            >
              {matches.map((e) => (
                <div className="matchesButton">
                  <div className="matchesName">{e.name}</div>
                  <div className="matchesTime">{e.time}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "48px",
              position: "absolute",
              right: 0,
            }}
          >
            <Box
              component="div"
              sx={{
                height: "100%",
                width: "100px",
                background:
                  "linear-gradient(to right, transparent, rgba(0,0,0,0.6))",
                position: "absolute",
                right: 0,
              }}
            ></Box>
            <Box
              sx={{
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "30px",
                borderRadius: "4px",
                position: "absolute",
                right: 0,
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
