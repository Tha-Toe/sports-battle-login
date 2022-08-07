import React from "react";
import "./enterVerificationCode.css";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  InputComponent,
  BackButtonComponent,
  ContinueButtonComponent,
} from "../defaultComponent/DefaultComponent";
import ClearIcon from "@mui/icons-material/Clear";
const EnterVerificationCode = () => {
  const [verifyCode, setVerifyCode] = useState(null);
  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/forgotpassword", { replace: true });
  };

  const handleContinue = () => {
    navigate("/newpassword", { replace: true });
  };

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (verifyCode) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [verifyCode]);

  const [invalidCode, setInvalidCode] = useState(false);
  return (
    <div className="second-signup-flow-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { sm: "60%", xxxs: "100%" },
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { md: "50%", xs: "80%" },
            mr: { xxxs: "20px", sm: 0 },
          }}
        >
          <Box component={"div"} sx={{ width: 1, mb: "75px" }}>
            <img src="/sportsbattle.png" className="logo" />
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
                fontSize: { sm: "32px", xxxs: "20px" },
                fontWeight: "700",
                mb: "4px",
              }}
            >
              Enter Verification Code
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                mb: "21px",
                fontFamily: "Poppins",
              }}
            >
              You would receive a verificaton code to your mail, Kindly enter
              the code, If you are unsure about it, Click here to update{" "}
            </Typography>
            <Box
              component={"div"}
              sx={{
                mb: "16px",
                width: {
                  md: "408px",
                  sm: "390px",
                  xs: "408px",
                  xxs: "300px",
                  xxxs: "250px",
                },
                height: { xs: "64px", xxxs: "50px" },

                background: "#272727",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Input
                placeholder="Verification code"
                type="text"
                variant="outlined"
                disableUnderline
                sx={{
                  width: "70%",
                  height: "100%",
                  border: 0,
                  background: "#272727",
                  color: "white",
                  pl: 2,
                  fontSize: "16px",
                  "&.MuiButtonBase-root:focus": {
                    bgcolor: "black",
                    borderColor: "white",
                    border: 2,
                    outline: 1,
                  },
                  fontFamily: "Poppins",
                  borderRadius: "5px",
                }}
                onChange={(e) => {
                  setVerifyCode && setVerifyCode(e.target.value);
                }}
              />
              {invalidCode && (
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "red", fontSize: "14px", mr: "5px" }}
                  >
                    Invalid Code
                  </Typography>
                  <ClearIcon sx={{ color: "red", fontSize: "25px" }} />
                </Box>
              )}
            </Box>
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
                justifyContent: "space-between",
                alignItems: "center",
                mt: "5px",
              }}
            >
              <BackButtonComponent text={"Back"} handleBack={handleBack} />
              <ContinueButtonComponent
                text={"Verify Code"}
                handleContinue={handleContinue}
                disabled={disableButton}
              />
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
export default EnterVerificationCode;
