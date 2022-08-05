import React from "react";
import "./forgotPassword.css";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  ButtonComponent,
  InputComponent,
  PasswordInputComponent,
} from "../defaultComponent/DefaultComponent";
const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (email) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email]);
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/verification", { replace: true });
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
            <Box component={"div"} sx={{ width: 1 }}>
              <img src="/sportsbattle.png" className="logo" />
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
                mb: "15px",
              }}
            >
              Forgot Password?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                mb: "21px",
                fontFamily: "Poppins",
              }}
            >
              We’ll send a verification code to your mail id if registered
            </Typography>
            <InputComponent placeholder={"Email Address"} setEmail={setEmail} />

            <ButtonComponent
              name={"Send Code"}
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
                  color: "white",
                  fontSize: { xs: "18px", xxxs: "14px" },
                  fontFamily: "Poppins",
                }}
              >
                Not a member yet?
              </Typography>
              <Link to="/choose">
                <Typography
                  sx={{
                    color: "white",
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
      <div className="rightImageContainer">
        <img src="RightPhoneFinal.png" className="right-image" />{" "}
        <img src="Vector.png" className="right-vector" />
      </div>
    </div>
  );
};
export default ForgotPassword;
