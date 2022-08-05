import React from "react";
import "./enterYourDetail.css";
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
} from "../defaultComponent/DefaultComponent";

const EnterYourDetail = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/choose", { replace: true });
  };

  const handleContinue = () => {
    navigate("/signupverification", { replace: true });
  };

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (email && name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    console.log(email);
  }, [email, name]);
  return (
    <div className="first-signup-flow-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { sm: "60%", xs: "100%" },
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
            width: { md: "408px", xs: "80%" },
            mr: { xs: "20px", sm: 0 },
          }}
        >
          <Box component={"div"} sx={{ width: 1 }}>
            <img src="/sportsbattle.png" className="logo" />
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
              sx={{ fontSize: "14px", mb: "15px", fontFamily: "Poppins" }}
            >
              STEP 1 OF 3
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: "32px", xs: "20px" },
                fontWeight: "700",
                mb: "4px",
              }}
            >
              Enter Your Details
            </Typography>
            <Typography
              sx={{ fontSize: "14px", mb: "25px", fontFamily: "Poppins" }}
            >
              You'll recieve code for your email verification.
            </Typography>
            <InputComponent placeholder={"Full Name"} setName={setName} />
            <Typography
              sx={{ fontSize: "14px", mb: "22px", fontFamily: "Poppins" }}
            >
              Enter your name as per your passport/ National ID's
            </Typography>
            <InputComponent placeholder={"Email Address"} setEmail={setEmail} />
            <Box
              component="div"
              sx={{
                width: "408px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BackButtonComponent text={"Back"} handleBack={handleBack} />
              <ContinueButtonComponent
                text={"Continue"}
                handleContinue={handleContinue}
                disabled={disableButton}
                rightArrow={true}
              />
            </Box>
          </FormControl>
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            right: { md: "50px", xs: "20px" },
            height: "242px",
            borderRightColor: "white",
            borderRight: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            top: "35%",
          }}
        >
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              borderColor: "#4831D4",
              background: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#4831D4",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
        </Box>
      </Box>
      <div className="rightImageContainer">
        <img src="RightPhoneFinal.png" className="second-right-image" />{" "}
        <img src="Vector.png" className="right-vector" />
      </div>
    </div>
  );
};
export default EnterYourDetail;
