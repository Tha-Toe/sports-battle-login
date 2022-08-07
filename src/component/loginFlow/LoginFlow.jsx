import React from "react";
import "./loginFlow.css";
import Box from "@mui/material/Box";
import { Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  ButtonComponent,
  InputComponent,
  PasswordInputComponent,
} from "../defaultComponent/DefaultComponent";
const LoginFlow = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (name && password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name, password]);

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
        x
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
              Login to Your Account
            </Typography>
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
                flexDirection: "row",
                justifyContent: "space-between",
                mb: "7px",
              }}
            >
              <Button
                startIcon={<GoogleIcon />}
                sx={{
                  color: "white",
                  width: {
                    md: "196px",
                    sm: "190px",
                    xs: "196px",
                    xxs: "145px",
                    xxxs: "120px",
                  },
                  height: { xs: "64px", xxxs: "50px" },
                  fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
                  border: 2,
                  borderColor: "#272727",
                  borderRadius: "5px",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "white",
                  },
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Login with Google
              </Button>
              <Button
                startIcon={<AppleIcon />}
                sx={{
                  color: "white",
                  width: {
                    md: "196px",
                    sm: "190px",
                    xs: "196px",
                    xxs: "145px",
                    xxxs: "120px",
                  },
                  height: { xs: "64px", xxxs: "50px" },
                  fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
                  border: 2,
                  borderColor: "#272727",
                  borderRadius: "5px",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "white",
                  },
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Login with Apple
              </Button>
            </Box>
            <InputComponent placeholder={"User Name"} setName={setName} />

            <PasswordInputComponent
              placeholder={"Password"}
              showPass={showPass}
              setPassword={setPassword}
              setShowPass={setShowPass}
            />
            <Typography
              sx={{
                width: {
                  md: "408px",
                  sm: "390px",
                  xs: "408px",
                  xxs: "300px",
                  xxxs: "250px",
                },
                display: "flex",
                justifyContent: "flex-end",
                fontSize: { xs: "14px", xxxs: "12px" },
                mb: 1,
                fontFamily: "Poppins",
              }}
            >
              Forgot Password?
            </Typography>
            <ButtonComponent
              name={"Login to Your Account"}
              disabled={disableButton}
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
                  fontSize: { xxs: "18px", xxxs: "14px" },
                  fontFamily: "Poppins",
                }}
              >
                Not a member yet?
              </Typography>
              <Link to="/choose">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xxs: "18px", xxxs: "14px" },
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
export default LoginFlow;
