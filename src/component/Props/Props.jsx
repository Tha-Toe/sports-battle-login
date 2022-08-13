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
import "./props.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AndresCard } from "./AndresCard";
import Times from "./TImes";
import Amount from "./Amount";
import ChooseType from "./ChooseType";
import Balance from "./Balance";
import SubmitProjection from "./SubmitProjection";
import GridItemComponent from "./GridItemComponent";
import HowTo from "./HowTo";
import Rule from "./Rule";
import BaseBallPoint from "./BaseBallPoint";

export default function Props({ mode }) {
  const [openHowTo, setOpenHowTo] = useState(false);
  const [openRule, setOpenRule] = useState(false);
  const [openBaseBallPoint, setOpenBaseBallPoint] = useState(false);

  const howToOpen = () => {
    setOpenHowTo(true);
  };
  const rulesOpen = () => {
    setOpenRule(true);
  };

  const baseBallPointOpen = () => {
    setOpenBaseBallPoint(true);
  };
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
    {
      name: "How to",
      src: "/howto.png",
      darkSrc: "/howto-dark.png",
      func: howToOpen,
    },
    {
      name: "Rules",
      src: "/rules.png",
      darkSrc: "/rules-dark.png",
      func: rulesOpen,
    },
    {
      name: "FPS",
      src: "/fps.png",
      darkSrc: "/fps-dark.png",
      func: baseBallPointOpen,
    },
    { name: "Refresh", src: "/refresh.png", darkSrc: "/refresh-dark.png" },
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

  //card
  const [cardInfo, setCardInfo] = useState([
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
    {
      name: "Frank Schwindel",
      cubs: "Chicago Cubs - Batter",
      vs: "vs Miami Marlins",
      time: "09:08",
      last: "0,0,1,0,0",
      avg: "0.20",
      bat: "0.5",
    },
  ]);

  const [selectCardId, setSelectCardId] = useState([]);
  const addCardIndex = (index) => {
    console.log("here");
    setSelectCardId((prev) => [...prev, index]);
    console.log(selectCardId);
  };

  return (
    <main className="props-container">
      <Box
        sx={{
          width: {
            lg: "836px",
            md: "700px",
            sm: "500px",
            xs: "450px",
            xxxs: "90%",
          },
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
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {propsNav.map((e) => (
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
                  bgcolor: `${e.active ? "#4831D4" : "black"}`,
                }}
              >
                <img className="propsNavImg" src={e.src} />
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "poppins",
                  mt: "5px",
                  color: "secondary.main",
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
                  cursor: "pointer",
                  flexWrap: "wrap",
                }}
                onClick={e.func}
              >
                {mode === "dark" ? (
                  <img
                    src={e.src}
                    style={{
                      marginRight: "3px",
                      height: "20px",
                    }}
                  />
                ) : (
                  <img
                    src={e.darkSrc}
                    style={{
                      marginRight: "3px",
                      height: "20px",
                    }}
                  />
                )}

                <Typography
                  sx={{
                    fontSize: { md: "14px", sm: "10px", xxxs: "8px" },
                    fontFamily: "poppins",
                    fontWeight: 500,
                    color: "secondary.main",
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
              bgcolor: "primary.light",
              border: `${mode === "dark" ? "1px solid #2c2c2c" : "none"}`,
              width: {
                md: "324px",
                sm: "250px",
                xs: "200px",
                xxs: "180px",
                xxxs: "160px",
              },
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
              fontSize: { sm: "16px", xxxs: "12px" },
              fontWeight: "400",
              fontFamily: "poppins",
              width: { md: "10%", sm: "50%", xxxs: "70%" },
              color: "secondary.main",
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
                position: "absolute",
                right: 0,
              }}
            ></Box>
            <Box
              sx={{
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
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
            mb: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: "16px", xxxs: "12px" },
              fontWeight: "400",
              fontFamily: "poppins",
              width: { md: "13%", xs: "50%", xxxs: "70%" },
              color: "secondary.main",
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
                borderRadius: "50%",
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
        <Box
          id="grid-container"
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "row", xxxs: "column" },
            justifyContent: "center",
            alignItems: { xs: "flex-start", xxxs: "center" },
          }}
        >
          <Box
            sx={{
              width: { md: "70%", xs: "50%", xxxs: "100%" },
              height: "auto",
              ml: { xs: 0, xxxs: "10px" },
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
              }}
              spacing={"6px"}
            >
              {cardInfo.map((e, index) => (
                <GridItemComponent
                  e={e}
                  key={index}
                  index={index}
                  selectCardId={selectCardId}
                  setSelectCardId={setSelectCardId}
                  addCardIndex={addCardIndex}
                  mode={mode}
                />
              ))}
            </Grid>
          </Box>
          <SubmitProjection selectCardId={selectCardId} mode={mode} />
        </Box>
      </Box>
      {openHowTo && <HowTo setOpenHowTo={setOpenHowTo} />}
      {openRule && <Rule setOpenRule={setOpenRule} />}
      {openBaseBallPoint && (
        <BaseBallPoint setOpenBaseBallPoint={setOpenBaseBallPoint} />
      )}
    </main>
  );
}
