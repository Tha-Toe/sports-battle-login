import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./logged.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Props from "../../Props/Props";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
import KnowMore from "../../KnowMore/KnowMore";
import BonusOffer from "../../BonusOffer/BonusOffer";
import MyProfile from "../../MyProfile/MyProfile";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailPrefrence from "../../EmailPrefrence/EmailPrefrence";
import MyProps from "../../MyProps/MyProps";
import TransactionHistory from "../../TransactionHistory/TransactionHistory";
import Clear from "@mui/icons-material/Clear";
import AddAddress from "../../AddCash/AddAddress";
export function Logged({ mode, setMode }) {
  let navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const propsOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("props");
  };
  const knowMoreOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("know-more");
  };
  const emailPrefrenceOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("email-prefrence");
  };
  const myProfileOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("my-profile");
  };
  const transactionHistoryOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("transaction-history");
  };
  const goDepositNewUser = () => {
    navigate("/logged?deposit=new&page=verify", { replace: true });
    navigate("/logged?deposit=old-user", { replace: true });
  };
  const goRefralBonusCashRadeem = () => {
    navigate("/logged", { replace: true });
    setOpenTag("enter-referral-code");
    navigate("/logged?deposit=go-refral-bonus-cash-randoom", { replace: true });
    setOpenSideNav(false);
  };
  const goVerifyPhoneNumberCode = () => {
    navigate("/logged?deposit=verify-phone-number-code", { replace: true });
  };
  const goEmailPrefrencePage = () => {
    setOpenDropDown(false);
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("email-prefrence");
  };
  const myPropsOpen = () => {
    navigate("/logged", { replace: true });
    setOpenSideNav(false);
    setOpenTag("my-props");
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
      func: myPropsOpen,
    },
    {
      name: "My Account",
      activeSrc: "/myAccount-active.png",
      unactiveSrc: "/myAccount.png",
      activeName: "my-profile",
      func: myProfileOpen,
    },
    {
      name: "Transaction History",
      activeSrc: "/transcationHistoryActive.png",
      unactiveSrc: "/transcationHistory.png",
      activeName: "transaction-history",
      func: transactionHistoryOpen,
    },
    {
      name: "Enter Referral Code",
      activeSrc: "/referalCodeActive.png",
      unactiveSrc: "/referalCode.png",
      activeName: "enter-referral-code",
      func: goRefralBonusCashRadeem,
    },
  ]);
  const [sideBarOther, setSideBarOther] = useState([
    {
      name: "Know More",
      activeSrc: "/nomore-active.png",
      unactiveSrc: "/nomore-unactive.png",
      activeName: "know-more",
      func: knowMoreOpen,
    },
    {
      name: "Email Preferences",
      activeSrc: "/email-prefrence-active.png",
      unactiveSrc: "/email-prefrence-unactive.png",
      activeName: "email-prefrence",
      func: emailPrefrenceOpen,
    },
    {
      name: "Support Chat",
      activeSrc: "/nomore-active.png",
      unactiveSrc: "/nomore-unactive.png",
      activeName: "support-chat",
    },
  ]);

  const [openSideNav, setOpenSideNav] = useState(false);
  const [openTag, setOpenTag] = useState("props");
  const [address, setAddress] = useState(null);

  const [openInviteFriend, setOpenInviteFriend] = useState(false);

  // onClick={() => {
  //   goRefralBonusCashRadeem();
  //   setOpenInviteFriend(false);
  // }}

  const switchMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  useEffect(() => {
    console.log(mode);
  }, [mode]);

  const [openDropDown, setOpenDropDown] = useState(false);
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
            mt: "10px",
            pb: { sm: 0, xxxs: "5px" },
          }}
        >
          <Toolbar
            sx={{
              display: { xxxs: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            bgcolor="primary.main"
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
                  xxxs: "100%",
                },
                margin: "0 auto",
                display: "flex",
                justifyContent: { sm: "flex-end", xxxs: "space-between" },
                alignItems: "center",
                mb: { xs: 0, xxxs: "10px" },
                mt: { sm: 0, xxxs: "10px" },
              }}
            >
              <Button
                sx={{
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
                  mr: { sm: "12px", xs: "8px", xxxs: "4px" },
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "secondary.main",
                  },
                  cursor: "pointer",
                  bgcolor: "secondary.main",
                }}
                onClick={() => {
                  setOpenInviteFriend(true);
                }}
              >
                Invite Friends
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  bgcolor: "primary.light",
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
                  mr: { sm: "12px", xs: "8px", xxxs: "4px" },
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
                  bgcolor: "primary.light",
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
                  mr: { sm: "12px", xs: "8px", xxxs: "4px" },
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
                  mr: { sm: "12px", xs: "8px", xxxs: "4px" },
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
                  position: { sm: "relative", xxxs: "absolute" },
                  top: 0,
                  left: { sm: "1px", xxxs: "auto" },
                  right: "10px",
                }}
              >
                <img src="/profile.png" className="accountImage" />
                {openDropDown ? (
                  <KeyboardArrowUpIcon
                    sx={{
                      color: "#494949",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#494949",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
                )}

                {openDropDown && (
                  <Box
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      background: "rgba(0,0,0,0.9)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        width: { sm: "500px", xxxs: "80%" },
                        padding: "10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                      }}
                    >
                      <Clear
                        sx={{ color: "white" }}
                        onClick={() => setOpenDropDown(false)}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { sm: "500px", xxxs: "80%" },
                        padding: "10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        border: "1px solid white",
                        borderRadius: "4px",
                        background: "black",
                        cursor: "pointer",
                      }}
                      onClick={goEmailPrefrencePage}
                    >
                      <SettingsIcon sx={{ color: "white", mr: "5px" }} />
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", xxxs: "12px" },
                          fontWeight: 400,
                          fontFamily: "poppins",
                          color: "white",
                        }}
                      >
                        Setting
                      </Typography>
                    </Box>
                  </Box>
                )}
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
        }}
      >
        <AppBar
          component="nav"
          sx={{
            boxShadow: "none",
            outline: "none",
            position: { sm: "absolute", xxxs: "fixed" },
            width: { lg: "105px", md: "50px", sm: "30px", xxxs: "80px" },
            left: { sm: 0, xxxs: `${openSideNav ? 0 : "-195px"}` },
            height: "100%",
            zIndex: 3,
            transition: "all .5s ease-in",
            padding: 0,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              width: { lg: "105px", md: "50px", sm: "30px", xxxs: "185px" },
              borderRight: "1px solid gray",
              height: "100%",
              position: "relative",
              bgcolor: "primary.main",
              padding: 0,
            }}
          >
            <MenuIcon
              sx={{
                position: "fixed",
                width: "30px",
                height: "30px",
                bgcolor: "primary.main",
                color: "secondary.main",
                left: `${openSideNav ? "195px" : "5px"}`,
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
                alignItems: "flex-start",
                height: "39%",
                width: { lg: "145px", md: "90px", sm: "70px", xxxs: "145px" },
              }}
            >
              {sideBar.map((e) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { lg: "row", sm: "column", xxxs: "row" },
                    alignItems: "center",
                    justifyContent: {
                      lg: "flex-start",
                      sm: "space-between",
                      xxxs: "flex-start",
                    },
                    height: "20%",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={e.func}
                >
                  <img
                    src={openTag === e.activeName ? e.activeSrc : e.unactiveSrc}
                    className="side-bar-icon"
                  />
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: { md: "10px", xxxs: "8px" },
                      textAlign: "center",
                      mt: "3px",
                      ml: { lg: "8px", sm: "0px", xxxs: "8px" },
                    }}
                  >
                    {e.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "22%",
                width: { lg: "145px", md: "90px", sm: "70px", xxxs: "145px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "#2582E3",
                }}
              >
                Other
              </Typography>
              {sideBarOther.map((e) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { lg: "row", sm: "column", xxxs: "row" },
                    alignItems: "center",
                    justifyContent: {
                      lg: "flex-start",
                      sm: "center",
                      xxxs: "flex-start",
                    },
                    height: "20%",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={e.func}
                >
                  <img
                    src={openTag === e.activeName ? e.activeSrc : e.unactiveSrc}
                  />
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: { md: "10px", xxxs: "8px" },
                      textAlign: "center",
                      mt: "3px",
                      ml: { lg: "8px", sm: "0px", xxxs: "8px" },
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
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "7%",
                cursor: "pointer",
                width: { lg: "145px", md: "90px", sm: "70px", xxxs: "145px" },
              }}
              onClick={switchMode}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "#2582E3",
                }}
              >
                Switch Theme
              </Typography>
              <Box
                sx={{
                  width: "34px",
                  height: "16px",
                  bgcolor: "primary.light",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: `${
                    mode === "dark" ? "flex-start" : "flex-end"
                  }`,
                  alignItems: "center",
                  padding: "2px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "18px",
                    height: "18px",
                    bgcolor: "secondary.main",
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
                height: "21%",
                width: { lg: "145px", md: "90px", sm: "70px", xxxs: "145px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "#2582E3",
                  width: "100%",
                  mb: "5px",
                }}
              >
                Our Socials
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { lg: "row", sm: "column", xxxs: "row" },
                  alignItems: "center",
                  justifyContent: {
                    lg: "flex-start",
                    sm: "center",
                    xxxs: "flex-start",
                  },
                }}
              >
                <img
                  src="/discord.png"
                  className={`${"discord-logo"} ${
                    mode !== "dark" && "lightMode"
                  }`}
                />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "10px",
                    ml: { lg: "10px", sm: "0px", xxxs: "10px" },
                    textAlign: "center",
                  }}
                >
                  Join our Discord
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { lg: "row", sm: "column", xxxs: "row" },
                  alignItems: "center",
                  justifyContent: {
                    lg: "flex-start",
                    sm: "center",
                    xxxs: "flex-start",
                  },
                  mt: "10px",
                }}
              >
                <img
                  src="/twitter.png"
                  className={`${"twitter-logo"} ${
                    mode !== "dark" && "lightMode"
                  }`}
                />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "10px",
                    ml: { lg: "10px", sm: "0px", xxxs: "10px" },
                    textAlign: "center",
                  }}
                >
                  Follow Twitter{" "}
                </Typography>
              </Box>
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
          {!location.search && openTag === "props" && (
            <Props mode={mode}></Props>
          )}
          {!location.search && openTag === "my-props" && (
            <MyProps mode={mode} />
          )}
          {!location.search && openTag === "my-profile" && (
            <MyProfile mode={mode} myProfileOpen={myProfileOpen} />
          )}
          {!location.search && openTag === "transaction-history" && (
            <TransactionHistory mode={mode} />
          )}
          {!location.search && openTag === "know-more" && (
            <KnowMore setOpenInviteFriend={setOpenInviteFriend} mode={mode} />
          )}
          {!location.search && openTag === "email-prefrence" && (
            <EmailPrefrence />
          )}

          {location.search === "?deposit=old-user" && <AddCash mode={mode} />}
          {location.search === "?deposit=new&page=verify" && (
            <NewAddCashVerify mode={mode} />
          )}
          {location.search === "?deposit=new&page=form" && (
            <NewAddCashForm address={address} mode={mode} />
          )}
          {location.search === "?deposit=new&page=address" && (
            <Address setAddress={setAddress} />
          )}
          {location.search === "?deposit=new&page=add-address" && (
            <AddAddress setAddress={setAddress} />
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
      {openInviteFriend && (
        <BonusOffer setOpenInviteFriend={setOpenInviteFriend} />
      )}
    </main>
  );
}
