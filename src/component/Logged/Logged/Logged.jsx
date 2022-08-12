import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./logged.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Props from "../../Props/Props";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import AddCash from "../../AddCash/AddCash";
import NewAddCashVerify from "../../AddCash/NewAddCashVerify";
import NewAddCashForm from "../../AddCash/NewAddCashForm";
import Address from "../../AddCash/Address";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RefralBonusCashRandoom from "../../Refral/RefralBonusCashRandoom";
import VerifyPhoneNumberCode from "../../Refral/VerifyPhoneNumberCode";
import RefralBonusCashCode from "../../Refral/RefralBonusCashCode";

export function Logged() {
  let navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const propsOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
  };
  const goDepositNewUser = () => {
    navigate("/logged?deposit=new&page=verify", { replace: true });
  };
  const goRefralBonusCashRadeem = () => {
    navigate("/logged?deposit=go-refral-bonus-cash-randoom", { replace: true });
  };
  const goVerifyPhoneNumberCode = () => {
    navigate("/logged?deposit=verify-phone-number-code", { replace: true });
  };
  const [activeTag, setActiveTag] = useState("props");
  const [number, setNumber] = useState(null);

  const [sideBar, setSideBar] = useState([
    {
      name: "Props",
      activeSrc: "/props-active.png",
      unactiveSrc: "/props-unactive.png",
      activeName: "props",
      func: propsOpen,
    },
    {
      name: "My Props",
      activeSrc: "/my-props-active.png",
      unactiveSrc: "/my-prop-unactive.png",
      activeName: "my-props",
    },
    {
      name: "My Games",
      activeSrc: "/my-game-active.png",
      unactiveSrc: "/my-game-unactive.png",
      activeName: "my-games",
    },
    {
      name: "Transition History",
      activeSrc: "/transcation-active.png",
      unactiveSrc: "/transcation-unactive.png",
      activeName: "transition-history",
    },
    {
      name: "Know More",
      activeSrc: "/nomore-active.png",
      unactiveSrc: "/nomore-unactive.png",
      activeName: "know-more",
    },
  ]);

  const [openSideNav, setOpenSideNav] = useState(false);
  const [openTag, setOpenTag] = useState("props");
  const [address, setAddress] = useState(null);

  const [openReferTag, setOpenReferTag] = useState(true);
  const [referNote, setReferNote] = useState([
    { note: "Refer a friend and give them your referral code" },
    {
      note: "Your friend must deposit and play in at least one paid game formats",
    },
    {
      note: "We will give you both bonus cash that can be used 100% for over-unde & player -battle to win real money, when your friend enters your referral code in REFERRAL BONUS screen in Lobby",
    },
  ]);
  return (
    <main className="logged-container">
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "10%",
        }}
      >
        <AppBar
          component="nav"
          sx={{
            borderBottom: "1px solid gray",
            position: "relative",
            boxShadow: "none",
            zIndex: { sm: 4, xxxs: 3 },
            background: "black",
            mt: "10px",
            pb: { sm: 0, xxxs: "5px" },
          }}
        >
          <Toolbar
            sx={{
              background: "black",
              display: { xxxs: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <img src="/sportsbattle.png" className="logoLogged" />
            <Box
              sx={{
                width: {
                  lg: "836px",
                  md: "700px",
                  sm: "500px",
                  xs: "450px",
                  xxs: "100%",
                  xxxs: "280px",
                },
                margin: "0 auto",
                display: "flex",
                justifyContent: { sm: "flex-end", xxxs: "center" },
                alignItems: "center",
                mb: { xs: 0, xxxs: "10px" },
                mt: { sm: 0, xxxs: "10px" },
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  background: "#fff",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    xxs: "8px",
                    xxxs: "8px",
                  },
                  fontWeight: 700,
                  padding: { xs: "8px 12px", xxxs: "6px 6px" },
                  maxWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  minWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "#fff",
                  },
                }}
              >
                Invite Friends
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "rgba(36, 36, 35, 1)",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    xxs: "8px",
                    xxxs: "8px",
                  },
                  fontWeight: 700,
                  maxWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  minWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  padding: { xs: "8px 12px", xxxs: "6px 6px" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "rgba(36, 36, 35, 1)",
                  },
                }}
              >
                Bonus: $0.00
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "rgba(36, 36, 35, 1)",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    xxs: "8px",
                    xxxs: "8px",
                  },
                  fontWeight: 700,
                  maxWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  minWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  padding: { xs: "8px 12px", xxxs: "6px 6px" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "rgba(36, 36, 35, 1)",
                  },
                  cursor: "pointer",
                }}
              >
                Cash: $0.00
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "#4831D4",
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: {
                    sm: "10px",
                    xs: "10px",
                    xxs: "8px",
                    xxxs: "8px",
                  },
                  fontWeight: 700,
                  padding: { xs: "8px 12px", xxxs: "6px 6px" },
                  maxWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  minWidth: { sm: "auto", xxs: "22%", xxxs: "25%" },
                  mr: { sm: "12px", xs: "8px", xxxs: "2px" },
                  "&.MuiButtonBase-root:hover": {
                    background: "#4831D4",
                  },
                }}
                onClick={() => {
                  setOpenTag("addCash");
                  goDepositNewUser();
                }}
              >
                Deposit
              </Button>
              <Box
                component="div"
                sx={{
                  background: "transparent",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  position: { sm: "static", xxxs: "absolute" },
                  top: 0,
                  right: "10px",
                }}
              >
                <img src="/profile.png" className="profileImage" />
                <KeyboardArrowDownIcon
                  sx={{ color: "#494949", fontSize: "25px" }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="div"
        sx={{
          position: "relative",
          height: { sm: "90%", xxxs: "90%" },
          width: "100%",
          mt: { sm: 0, xxxs: "30px" },
        }}
      >
        <AppBar
          component="nav"
          sx={{
            boxShadow: "none",
            outline: "none",
            width: { lg: "80px", md: "50px", sm: "30px", xxxs: "80px" },
            position: { sm: "absolute", xxxs: "fixed" },
            background: "transparent",
            left: { sm: 0, xxxs: `${openSideNav ? 0 : "-114px"}` },
            top: 0,
            height: "100%",
            zIndex: 3,
            transition: "all .5s ease-in",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: { lg: "80px", md: "50px", sm: "30px", xxxs: "80px" },
              borderRight: "1px solid gray",
              borderBottom: "1px solid gray",
              height: "100%",
              background: "black",
              position: "relative",
            }}
          >
            <MenuIcon
              sx={{
                position: "fixed",
                width: "30px",
                height: "30px",
                background: "black",
                color: "white",
                left: `${openSideNav ? "115px" : "5px"}`,
                top: "10px",
                display: { sm: "none", xxxs: "block" },
                borderRadius: "0 4px 4px 0",
                zIndex: 4,
                transition: "all .5s ease-in",
              }}
              onClick={() => setOpenSideNav(!openSideNav)}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "53%",
                borderBottom: "1px solid #494949",
              }}
            >
              {sideBar.map((e) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "20%",
                    cursor: "pointer",
                  }}
                  onClick={e.func}
                >
                  <img
                    src={
                      activeTag === e.activeName ? e.activeSrc : e.unactiveSrc
                    }
                  />
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: { md: "10px", xxxs: "8px" },
                      textAlign: "center",
                    }}
                  >
                    {e.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "13%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "10px",
                  mb: "12px",
                }}
              >
                Switch Theme
              </Typography>
              <Box
                sx={{
                  width: "34px",
                  height: "16px",
                  background: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "2px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "18px",
                    height: "18px",
                    background: "#494949",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "20%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "10px",
                  mb: "12px",
                }}
              >
                Join our Social
              </Typography>
              <img src="/discord.png" className="discord-logo" />
              <img src="/twitter.png" className="twitter-logo" />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #494949",
                height: "15%",
              }}
              onClick={handleLogout}
            >
              <img src="/exit.png" className="exit-image" />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {!location.search && <Props></Props>}
          {location.search === "?deposit=old-user" && <AddCash />}
          {location.search === "?deposit=new&page=verify" && (
            <NewAddCashVerify />
          )}
          {location.search === "?deposit=new&page=form" && (
            <NewAddCashForm address={address} />
          )}
          {location.search === "?deposit=new&page=address" && (
            <Address setAddress={setAddress} />
          )}
          {location.search === "?deposit=go-refral-bonus-cash-randoom" && (
            <RefralBonusCashRandoom setNumber={setNumber} number={number} />
          )}
          {location.search === "?deposit=verify-phone-number-code" && (
            <VerifyPhoneNumberCode number={number} />
          )}
          {location.search === "?deposit=refral-bonus-cash-code" && (
            <RefralBonusCashCode />
          )}
        </Box>
      </Box>
      {openReferTag && (
        <div className="bonus-offer-container">
          <Box
            sx={{
              width: { sm: "566px", xs: "400px", xxs: "100%", xxxs: "100%" },
              height: "608px",
              background: "#2A2A2A",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: "0 auto",
            }}
          >
            <Box
              sx={{
                color: "white",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ClearIcon
                sx={{
                  fontSize: "25px",
                  color: "white",
                  mr: "14px",
                  mt: "14px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenReferTag(false)}
              />
            </Box>
            <img src="/refer1.png" className="refer1" />
            <Typography
              sx={{
                fontSize: { sm: "20px", xxxs: "18px" },
                fontWeight: 800,
                fontFamily: "poppins",
                mt: "23px",
                color: "#F5A922",
              }}
            >
              BONUS OFFER
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: "16px", xxxs: "14px" },
                fontWeight: 600,
                fontFamily: "poppins",
                mt: "8px",
                color: "white",
              }}
            >
              Invite a friend, earn $25{" "}
            </Typography>
            <Box
              sx={{
                background: "black",
                border: "1px solid #F5A922",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                width: "445px",
                width: {
                  sm: "445px",
                  xs: "345px",
                  xxs: "245px",
                  xxxs: "200px",
                },

                alignItems: "center",
                mt: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: "14px", xxxs: "12px" },
                  fontWeight: 600,
                  fontFamily: "poppins",
                  mt: "24px",
                  color: "white",
                }}
              >
                SHARE YOUR REFERRAL CODE{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "16px", xxxs: "14px" },
                  fontWeight: 600,
                  fontFamily: "poppins",
                  mt: "12px",
                  mb: "12px",
                  color: "white",
                }}
              >
                IUUASV18
              </Typography>
              <Button
                sx={{
                  color: "black",
                  background: "#F5A922",
                  fontSize: { sm: "15px", xxxs: "13px" },
                  fontWeight: 700,
                  p: {
                    sm: "14px 45px",
                    xs: "14px 40px",
                    xxs: "12px 25px",
                    xxxs: "10px 15px",
                  },
                  mb: "32px",
                  "&.MuiButtonBase-root:hover": {
                    background: "#F5A922",
                  },
                  cursor: "pointer",
                }}
                onClick={() => {
                  goRefralBonusCashRadeem();
                  setOpenReferTag(false);
                }}
              >
                Share SportsBattle
              </Button>
            </Box>
            <Box
              sx={{
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                width: {
                  sm: "445px",
                  xs: "345px",
                  xxs: "245px",
                  xxxs: "200px",
                },
                alignItems: "flex-start",
                mt: "29px",
              }}
            >
              {referNote.map((e) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "rows",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    mb: "12px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#F5A922",
                      fontSize: { sm: "25px", xxxs: "23px" },
                      mr: "12px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { sm: "12px", xxxs: "10px" },
                      fontFamily: "poppins",
                    }}
                  >
                    {e.note}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </div>
      )}
    </main>
  );
}
