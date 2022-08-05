import React from "react";
import "./newPassword.css";
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
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ContinueButtonComponent,
  InputComponent,
  BackButtonComponent,
  PasswordInputComponent,
} from "../defaultComponent/DefaultComponent";
import CheckIcon from "@mui/icons-material/Check";

const NewPassword = () => {
  const [enterPassword, setEnterPassword] = useState(null);
  const [reEnterPassword, setReEnterPassword] = useState(null);
  const [showPass, setShowPass] = useState(false);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/verification", { replace: true });
  };

  const handleContinue = () => {
    return;
  };

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (enterPassword && reEnterPassword) {
      if (enterPassword === reEnterPassword) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    } else {
      setDisableButton(true);
    }
  }, [enterPassword, reEnterPassword]);
  return (
    <div className="first-signup-flow-container">
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
            width: {
              md: "408px",
              sm: "390px",
              xs: "408px",
              xxs: "300px",
              xxxs: "250px",
            },
            mr: { xs: "20px", sm: 0 },
          }}
        >
          <Box component={"div"} sx={{ width: 1 }}>
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
                fontSize: { xs: "32px", xxxs: "18px" },
                fontWeight: "700",
                mb: "4px",
              }}
            >
              Create your new password
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                mb: "25px",
                fontFamily: "Poppins",
              }}
            >
              You'll use this log into your account.
            </Typography>
            <PasswordInputComponent
              placeholder={"Enter your new password"}
              showPass={showPass}
              setEnterPassword={setEnterPassword}
              setShowPass={setShowPass}
            />
            <PasswordInputComponent
              placeholder={"Re-enter your new password"}
              showPass={showPass}
              setReEnterPassword={setReEnterPassword}
              setShowPass={setShowPass}
            />
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
              }}
            >
              <BackButtonComponent text={"Back"} handleBack={handleBack} />
              <ContinueButtonComponent
                text={"Change Password"}
                handleContinue={handleContinue}
                disabled={disableButton}
                rightArrow={false}
              />
            </Box>
          </FormControl>
        </Box>
      </Box>
      <div className="rightImageContainer">
        <img src="RightPhoneFinal.png" className="second-right-image" />{" "}
        <img src="Vector.png" className="right-vector" />
      </div>
    </div>
  );
};
export default NewPassword;
