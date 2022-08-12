import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography, Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./refralBonus.css";
import ClearIcon from "@mui/icons-material/Clear";

export default function RefralBonusCashCode({ number, setNumber }) {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [disableVerify, setDisableVerify] = useState(true);
  const [referCode, setReferCode] = useState(null);
  useEffect(() => {
    if (referCode) {
      setDisableVerify(false);
    } else {
      setDisableVerify(true);
    }
  }, [referCode]);

  const theme = createTheme({
    palette: {
      action: {
        disabled: "rgba(255,255,255, 0.4)",
      },
    },
    breakpoints: {
      values: {
        xxxs: 0,
        xxs: 380,
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1100,
        xl: 1550,
      },
    },
  });
  const goVerifyPhoneNumberCode = () => {
    navigate("/logged?deposit=verify-phone-number-code", { replace: true });
  };
  return (
    <Box
      sx={{
        width: { lg: "800px", md: "700px", sm: "500px", xxxs: "90%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          mt: { sm: "13px", xxxs: "30px" },
          cursor: "pointer",
        }}
        onClick={goVerifyPhoneNumberCode}
      >
        <ArrowBackIosIcon sx={{ fontSize: { md: "23px", xxxs: "18px" } }} />
        <Typography
          sx={{
            fontSize: { md: "16px", sm: "14px", xxxs: "12px" },
            fontWeight: 600,
            fontFamily: "poppins",
            color: "white",
          }}
        >
          Referral Bonus Cash Redeem{" "}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { md: "14px", sm: "12px", xxxs: "10px" },
          fontWeight: 400,
          fontFamily: "poppins",
          color: "white",
          width: "100%",
          mt: "21px",
        }}
      >
        Please enter the referral code from a friend to get bonus cash. If
        redeemed successfully, you and your friend will receive $25 bonus cash.
      </Typography>
      <Typography
        sx={{
          fontSize: { md: "14px", sm: "12px", xxxs: "10px" },
          fontWeight: 400,
          fontFamily: "poppins",
          color: "white",
          width: "100%",
          mt: "21px",
        }}
      >
        If you have other referral code, respective amount will be added to your
        bonus cash
      </Typography>
      <Typography
        sx={{
          fontSize: { md: "16px", sm: "14px", xxxs: "12px" },
          fontWeight: 600,
          fontFamily: "poppins",
          color: "white",
          width: "100%",
          mt: "23px",
        }}
      >
        Referral Code{" "}
      </Typography>{" "}
      <Typography
        sx={{
          fontSize: { md: "12px", sm: "10px", xxxs: "8px" },
          fontWeight: 400,
          fontFamily: "poppins",
          color: "white",
          width: "100%",
          mt: "13px",
        }}
      >
        Referral codes are case sensitive
      </Typography>
      <Input
        type="number"
        variant="outlined"
        placeholder="Enter Referral Code"
        sx={{
          color: "white",
          borderBottom: "1px solid #494949",
          width: "100%",
          py: "8px",
          fontSize: { md: "16px", sm: "14px", xxxs: "12px" },
          fontWeight: 500,
          fontFamily: "poppins",
          outline: "none",
          mt: "24px",
        }}
        onChange={(e) => setReferCode(e.target.value)}
      />
      {clicked && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: "13px",
          }}
        >
          <ClearIcon sx={{ color: "#E4313C", mr: "12px" }} />
          <Typography
            sx={{
              fontSize: { md: "14px", sm: "12px", xxxs: "10px" },
              fontWeight: 300,
              fontFamily: "poppins",
              color: "#E4313C",
            }}
          >
            Code invalid, Reach out to support for help
          </Typography>
        </Box>
      )}
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            background: "#4831D4",
            fontSize: { md: "14px", sm: "12px", xxxs: "10px" },
            fontWeight: 400,
            fontFamily: "poppins",
            padding: { xs: "17px 119px 9px 123px", xxxs: "10px 70px" },
            color: "white",
            "&.MuiButtonBase-root:hover": {
              background: "#4831D4",
            },
            mt: "24px",
          }}
          disabled={disableVerify}
          className="disableButton"
          onClick={() => setClicked(true)}
        >
          Apply Code{" "}
        </Button>
      </ThemeProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", xxxs: "column" },
          alignItems: "center",
          justifyContent: "center",
          mt: "27px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "12px", sm: "10px", xxxs: "8px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "white",
          }}
        >
          By continuing, you agree to SportsBattle's
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "12px", sm: "10px", xxxs: "8px" },
            fontWeight: 400,
            fontFamily: "poppins",
            color: "#2072C4",
            ml: { sm: "4px", xxxs: 0 },
          }}
        >
          terms, privacy policy & payment terms{" "}
        </Typography>
      </Box>
      {clicked && (
        <Button
          sx={{
            background: "black",
            border: "1px solid #439F48",
            color: "#439F48",
            fontSize: { md: "14px", sm: "12px", xxxs: "10px" },
            fontWeight: 500,
            fontFamily: "poppins",
            width: "220px",
            py: "10px",
            mt: "23px",
          }}
        >
          Support Chat
        </Button>
      )}
    </Box>
  );
}
