import React from "react";
import "./createUserName.css";
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
import ClearIcon from "@mui/icons-material/Clear";

const CreateUserName = () => {
  const [name, setName] = useState(null);
  const [showPass, setShowPass] = useState(false);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/enteryourdetail", { replace: true });
  };

  const handleContinue = () => {
    navigate("/createpassword", { replace: true });
  };

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name]);

  const [validCode, setValidCode] = useState(true);
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
              STEP 2 OF 3
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: "32px", xs: "20px" },
                fontWeight: "700",
                mb: "4px",
              }}
            >
              Create your username
            </Typography>
            <Typography
              sx={{ fontSize: "14px", mb: "25px", fontFamily: "Poppins" }}
            >
              Enter your unique user name
            </Typography>
            <InputComponent placeholder={"User Name"} setName={setName} />
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                mb: "34px",
              }}
            >
              {name && (
                <>
                  {validCode ? (
                    <CheckIcon sx={{ color: "green", fontSize: "25px" }} />
                  ) : (
                    <ClearIcon sx={{ color: "red", fontSize: "25px" }} />
                  )}
                  <Typography
                    sx={
                      validCode
                        ? {
                            color: "green",
                            fontSize: "14px",
                            ml: "16px",
                            fontFamily: "Poppins",
                            fontWeight: 700,
                          }
                        : {
                            color: "red",
                            fontSize: "14px",
                            ml: "16px",
                            fontFamily: "Poppins",
                            fontWeight: 700,
                          }
                    }
                  >
                    {validCode ? "User name available" : "Invalid code"}
                  </Typography>
                </>
              )}
            </Box>
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
            height: "50%",
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
              background: "#4831D4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckIcon
              sx={{
                fontSize: { md: "20px", sm: "20px" },
                color: "white",
              }}
            />
          </Box>

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
        </Box>
      </Box>
      <div className="rightImageContainer">
        <img src="RightPhoneFinal.png" className="second-right-image" />{" "}
        <img src="Vector.png" className="right-vector" />
      </div>
    </div>
  );
};
export default CreateUserName;
