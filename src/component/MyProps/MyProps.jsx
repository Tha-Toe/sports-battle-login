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
import MyPropsCardContainer from "./MyPropsCardContainer";
import Detail from "./Detail";

export default function MyProps({ mode }) {
  const [openTag, setOpenTag] = useState("Upcomming");
  const openUpComming = () => {
    setOpenTag("Upcomming");
  };
  const openLive = () => {
    setOpenTag("Live");
  };
  const openCompleted = () => {
    setOpenTag("Completed");
  };
  const [myPropsAppBar, setMyPropsAppBar] = useState([
    { name: "Upcomming", func: openUpComming },
    { name: "Live", func: openLive },
    { name: "Completed", func: openCompleted },
  ]);

  const [upCommingDetail, setUpCommingDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
  ]);
  const [liveDetail, setliveDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/BetFail.png", "/BetSuccess.png"],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
    {
      header: "5 pick to win $50",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: [
        "/NotStartedBlue.png",
        "/BetFail.png",
        "/BetSuccess.png",
        "/Notstarted.png",
        "/Notstarted.png",
      ],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "In progress",

      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/Notstarted.png", "/Notstarted.png", "/Notstarted.png"],
    },
  ]);
  const [completedDetail, setCompletedDetail] = useState([
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "win",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "+$15.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetSuccess.png", "/BetSuccess.png", "/BetFail.png"],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "lose",
      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetFail.png", "/BetFail.png", "/BetFail.png"],
    },
    {
      header: "3 pick to win $11.25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "win",
      src: "/defence-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "+$15.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetSuccess.png", "/BetSuccess.png", "/BetFail.png"],
    },
    {
      header: "3 pick to win $25",
      name: "Mohamed Salah, Sadio Mane, Serge Gnabry",
      condition: "Entry: $5.0",
      win: "lose",
      src: "/attack-play-my-props.png",
      date: "Conf #3 :: 34534, Sun Aug 14, 2022, 11:28 PM",
      amount: "-$5.0",
      sportType: { type: "soccer", src: "/soccer.png" },
      start: ["/BetFail.png", "/BetFail.png", "/BetFail.png"],
    },
  ]);
  const [upCommingDetailData, setUpComminngDetailData] = useState([
    {
      player: { name: "Mohamed Salah", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "Not Started",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
    {
      player: { name: "Sadio Mane", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "Not Started",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
    {
      player: { name: "Gabriel Jesus", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "Not Started",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
  ]);
  const [LiveDetailData, setLiveDetailData] = useState([
    {
      player: { name: "Mohamed Salah", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "Not Started",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
    {
      player: { name: "Sadio Mane", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "In-reivew",
      goal: { amount: "0.5", name: "Goal" },
      actual: "1",
      color: "#459F48",
    },
    {
      player: { name: "Gabriel Jesus", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "Not Started",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
  ]);
  const [CompletedDetailData, setCompletedDetailData] = useState([
    {
      player: { name: "Mohamed Salah", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "won",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
    },
    {
      player: { name: "Sadio Mane", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "won",
      goal: { amount: "0.5", name: "Goal" },
      actual: "1",
      color: "#459F48",
    },
    {
      player: { name: "Gabriel Jesus", forward: "LIV - Forward " },
      game: {
        playType: { type: "soccer", src: "/soccer.png" },
        vs: " LIV vs CRY",
      },
      status: "lost",
      goal: { amount: "0.5", name: "Goal" },
      actual: "0",
      actualBar: "50%",
    },
  ]);
  const [openDetail, setOpenDetail] = useState(null);
  if (openDetail === "Upcomming") {
    return (
      <Detail
        setOpenDetail={setOpenDetail}
        detailData={upCommingDetailData}
        openDetail={openDetail}
      />
    );
  } else if (openDetail === "Live") {
    return (
      <Detail
        setOpenDetail={setOpenDetail}
        detailData={LiveDetailData}
        openDetail={openDetail}
      />
    );
  } else if (openDetail === "Completed") {
    return (
      <Detail
        setOpenDetail={setOpenDetail}
        detailData={CompletedDetailData}
        openDetail={openDetail}
      />
    );
  } else {
    return (
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "10px",
        }}
        component="div"
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", xxs: "14px", xxxs: "12px" },
            fontWeight: 700,
            fontFamily: "poppins",
            color: "secondary.main",
            mt: "23px",
            width: "100%",
          }}
        >
          My Props
        </Typography>
        <Box sx={{ width: "100%", mt: "9px" }}>
          <Box
            sx={{
              width: { xs: "232px", xxs: "170px", xxxs: "130px" },
              height: "2px",
              bgcolor: "secondary.dark",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            mt: "19px",
          }}
        >
          {myPropsAppBar.map((e) => (
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                fontWeight: 600,
                fontFamily: "poppins",
                color: `${e.name === openTag ? "#4831D4" : "secondary.main"}`,
                width: "33%",
                textAlign: "center",
                pb: "10px",
                borderBottom: `${
                  e.name === openTag
                    ? "4px solid #4831D4"
                    : "4px solid transparent"
                }`,
                cursor: "pointer",
              }}
              onClick={e.func}
            >
              {e.name}
            </Typography>
          ))}
        </Box>
        {openTag === "Upcomming" && (
          <MyPropsCardContainer
            mode={mode}
            setOpenDetail={setOpenDetail}
            mainDetail={upCommingDetail}
            openTag={openTag}
          />
        )}
        {openTag === "Live" && (
          <MyPropsCardContainer
            mode={mode}
            setOpenDetail={setOpenDetail}
            mainDetail={liveDetail}
            openTag={openTag}
          />
        )}
        {openTag === "Completed" && (
          <MyPropsCardContainer
            mode={mode}
            setOpenDetail={setOpenDetail}
            mainDetail={completedDetail}
            openTag={openTag}
          />
        )}
      </Box>
    );
  }
}
