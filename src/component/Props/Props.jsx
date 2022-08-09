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

const GridItemComponent = ({ e }) => {
  return (
    <Grid item xxxs={4}>
      <Card
        sx={{
          background: "#242424",
          borderRadius: "10px",
          width: "100%",
          pb: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mb: "0px",
            pb: "8px",
            pt: "16px",
            px: 0,
          }}
        >
          <img
            src={e.src}
            style={{
              border: "1px solid #494949",
              borderRadius: "50%",
              marginRight: "8px",
              height: "62px",
              width: "62px",
            }}
          />
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "poppins",
                mb: "2px",
              }}
            >
              {e.name}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "poppins",
              }}
            >
              {e.code}
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "85%",
            mx: "auto",
            pb: "8px",
            pt: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: "0 auto",
              pb: "7px",
              borderBottom: "1px solid #494949",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#a3a3a3",
                fontFamily: "poppins",
                width: "30%",
              }}
            >
              vs {e.vs}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "70%",
              }}
            >
              <img src="/clock.png" />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  fontFamily: "poppins",
                  ml: "7px",
                }}
              >
                {e.time}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid #494949",
              width: "100%",
              mb: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                margin: "0 auto",
                pt: "8px",
                pb: "2px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  fontFamily: "poppins",
                }}
              >
                Last 5
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#459F48",
                  fontFamily: "poppins",
                }}
              >
                {e.last}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                margin: "0 auto",
                pb: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  fontFamily: "poppins",
                }}
              >
                AVG
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#459F48",
                  fontFamily: "poppins",
                }}
              >
                {e.avg}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#111111",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 400,
                mt: "5px",
                mb: "4px",
              }}
            >
              Batting.Runs + RBIs
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "poppins",
                fontSize: "22px",
                fontWeight: 600,
                mb: "4px",
              }}
            >
              {e.batting}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

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

  //card
  const [cardInfo, setCardInfo] = useState([
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
    {
      name: "Justin Steele",
      src: "/cardProfile.png",
      code: "CHP-P",
      vs: "MIA",
      time: "12h:11m",
      last: "1,0,1,0,0",
      avg: "0.40",
      batting: "0.5",
    },
  ]);
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
            mb: "20px",
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
        <Box id="grid-container" component="div" sx={{ width: "100%" }}>
          <Grid
            container
            xxxs={14}
            sx={{
              width: "75%",
              display: "flex",
              justifyContent: "space-between",
            }}
            spacing={"6px"}
          >
            {cardInfo.map((e) => (
              <GridItemComponent e={e} />
            ))}
          </Grid>
        </Box>
      </Box>
    </main>
  );
}
