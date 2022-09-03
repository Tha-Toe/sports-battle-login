import React from "react";
import "./forgotPassword.css";
import Box from "@mui/material/Box";
import { FormControl, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  ButtonComponent,
  InputComponent,
} from "../../defaultComponent/DefaultComponent";
import ClearIcon from "@mui/icons-material/Clear";

const ForgotPassword = ({ mode, setMode }) => {
  const [email, setEmail] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (email) {
      setDisableButton(false);
      setMatchAccount(false);
    } else {
      setDisableButton(true);
      setMatchAccount(true);
    }
  }, [email]);
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/checkmail", { replace: true });
  };

  const [matchAccount, setMatchAccount] = useState(true);
  const switchMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <div className="login-flow-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { md: "60%", sm: "60%", xxxs: "100%" },
          height: "100%",
          bgcolor: "primary.dark_gray",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "50%", md: "74%", xxxs: "80%" },
          }}
        >
          <Box
            sx={{
              width: {
                md: "408px",
                sm: "390px",
                xs: "408px",
                xxs: "300px",
                xxxs: "250px",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Box component={"div"} sx={{ width: 1, mb: "25px" }}>
              {mode === "dark" ? (
                <img src="/sportsbattle.png" className="logo" />
              ) : (
                <img src="/sportsbattle-lightmode.png" className="logo-light" />
              )}
            </Box>
          </Box>
          <FormControl
            sx={{
              width: {
                md: "408px",
                sm: "390px",
                xs: "408px",
                xxs: "300px",
                xxxs: "250px",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "32px", sm: "25px", xxxs: "20px" },
                fontWeight: "700",
                mb: "11px",
                fontFamily: "Poppins",
                color: "secondary.dark_gray",
              }}
            >
              Forgot Password?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                mb: "21px",
                fontFamily: "Poppins",
                color: "secondary.dark_gray",
              }}
            >
              We’ll send a verification code to your mail id if registered
            </Typography>
            <InputComponent
              placeholder={"Email address"}
              setEmail={setEmail}
              mode={mode}
            />
            {!matchAccount && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: "20px",
                }}
              >
                <ClearIcon
                  sx={{
                    color: "rgba(228, 49, 60, 1)",
                    fontSize: { xs: "28px", xxs: "25px", xxxs: "20px" },
                  }}
                />
                <Typography
                  sx={{
                    color: "rgba(228, 49, 60, 1)",
                    fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
                    ml: { xs: "10px", xxs: "5px" },
                    fontFamily: "Poppins",
                    fontWeight: 700,
                  }}
                >
                  The given email is not assocaited with any account
                </Typography>
              </Box>
            )}
            <ButtonComponent
              name={"Submit"}
              disabled={disableButton}
              handleContinue={handleContinue}
            />
            <Box
              component="div"
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "secondary.dark_gray",
                  fontSize: { xs: "18px", xxxs: "14px" },
                  fontFamily: "Poppins",
                }}
              >
                Not a member?
              </Typography>
              <Link to="/choose">
                <Typography
                  sx={{
                    color: "secondary.dark_gray",
                    fontSize: { xs: "18px", xxxs: "14px" },

                    fontWeight: 700,
                    ml: 1,
                    cursor: "pointer",
                    fontFamily: "Poppins",
                    textDecoration: "underline",
                  }}
                >
                  Register Now
                </Typography>
              </Link>
            </Box>
          </FormControl>
        </Box>
      </Box>
      <div
        className={`${"rightImageContainer-rpp"} ${
          mode !== "dark" && "right-rpp-light-mode"
        }`}
      >
        <img src="Reset-password-pana-1.png" className="right-image-rpp" />
      </div>
      <img
        src="/switchModeLoginPage.png"
        className="switchMode"
        onClick={switchMode}
      />
    </div>
  );
};
export default ForgotPassword;
