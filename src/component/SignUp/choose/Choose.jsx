import React from "react";
import "./choose.css";
import Box from "@mui/material/Box";
import { Button, FormControl, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
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
            <Box component={"div"} sx={{ width: 1, mb: "43px" }}>
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
                mb: "11px",
                fontFamily: "Poppins",
              }}
            >
              Choose your method
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
                mb: "13px",
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

            <Button
              startIcon={<AppleIcon />}
              sx={{
                color: "white",
                width: {
                  md: "408px",
                  sm: "390px",
                  xs: "408px",
                  xxs: "300px",
                  xxxs: "250px",
                },
                height: "64px",
                fontSize: { xs: "16px", xxxs: "14px" },
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
                width: {
                  md: "408px",
                  sm: "390px",
                  xs: "408px",
                  xxs: "300px",
                  xxxs: "250px",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xxs: "16px", xxxs: "14px" },
                  fontFamily: "Poppins",
                }}
              >
                Already a member yet?
              </Typography>
              <Link to="/">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xxs: "16px", xxxs: "14px" },
                    fontWeight: "700",
                    ml: { xs: "5px", xxxs: "5px" },
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
