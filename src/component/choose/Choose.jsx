import React from "react";
import "./choose.css";
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
import { useState } from "react";
const Choose = () => {
  let navigate = useNavigate();

  const handleGoSignUp = () => {
    navigate("/enteryourdetail", { replace: true });
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
          width: { md: "60%", sm: "60%", xs: "100%" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "50%", md: "74%", xs: "80%" },
          }}
        >
          <Box
            sx={{
              width: 1,
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
              width: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "32px", sm: "25px", xs: "20px" },
                fontWeight: "700",
                mb: "15px",
              }}
            >
              Choose your method
            </Typography>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: "13px",
              }}
            >
              <Button
                startIcon={<GoogleIcon />}
                sx={{
                  color: "white",
                  width: "196px",
                  height: "64px",
                  fontSize: { sm: "14px", xs: "9px" },
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
                  width: "196px",
                  height: "64px",
                  fontSize: { sm: "14px", xs: "9px" },
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

            <Button
              startIcon={<AppleIcon />}
              sx={{
                color: "white",
                width: "408px",
                height: "64px",
                fontSize: { sm: "14px", xs: "12px" },
                mb: 3,
                border: 2,
                borderColor: "#272727",
                borderRadius: "5px",
                "&.MuiButtonBase-root:hover": {
                  borderColor: "white",
                },
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              onClick={handleGoSignUp}
            >
              Sign up with email
            </Button>
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
                sx={{ color: "white", fontSize: "18px", fontFamily: "Poppins" }}
              >
                Already a member yet?
              </Typography>
              <Link to="/">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "700",
                    ml: 1,
                    cursor: "pointer",
                    fontFamily: "Poppins",
                    textDecoration: "underline",
                  }}
                >
                  Login Now
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
export default Choose;
