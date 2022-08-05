import React from "react";
import { Button, Input, Box } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import "./defaultComponent.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export function ButtonComponent({ name, disabled, handleContinue }) {
  const theme = createTheme({
    palette: {
      action: {
        disabled: "rgba(255,255,255, 0.4)",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        disabled={disabled}
        onClick={handleContinue}
        className="disableButton"
        sx={{
          width: "408px",
          height: "64px",
          background: "#4831D4",
          color: "white",
          fontSize: { sm: "16px", xs: "12px" },
          fontWeight: "600",
          mb: 3,
          "&.MuiButtonBase-root:hover": {
            background: "#4831D4",
          },
          textTransform: "none",
        }}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
}

export function ContinueButtonComponent({
  text,
  handleContinue,
  disabled,
  rightArrow,
  checkIcon,
}) {
  const theme = createTheme({
    palette: {
      action: {
        disabled: "rgba(255,255,255, 0.4)",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        endIcon={rightArrow ? <ArrowForwardIcon /> : checkIcon && <CheckIcon />}
        className="disableButton"
        sx={{
          width: "240px",
          height: "64px",
          background: "#4831D4",
          color: "white",
          fontSize: "16px",
          fontWeight: "700",
          mb: 3,
          "&.MuiButtonBase-root:hover": {
            background: "#4831D4",
          },
          textTransform: "none",
          borderRadius: "8px",
          fontFamily: "Poppins",
        }}
        onClick={handleContinue}
        disabled={disabled}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

export function BackButtonComponent({ text, handleBack }) {
  return (
    <Button
      startIcon={<ArrowBackIcon />}
      sx={{
        width: "160px",
        height: "64px",
        background: "#525252",
        color: "white",
        fontSize: "16px",
        fontWeight: "700",
        mb: 3,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "#525252",
        },
        textTransform: "none",
        borderRadius: "8px",
        fontFamily: "Poppins",
      }}
      onClick={handleBack}
    >
      {text}
    </Button>
  );
}

export function InputComponent({
  placeholder,
  setName,
  setEmail,
  setFirstName,
  setSecondName,
  setVerifyCode,
}) {
  return (
    <Input
      placeholder={placeholder}
      type="text"
      variant="outlined"
      disableUnderline
      sx={{
        width: "408px",
        height: "64px",
        border: 0,
        borderColor: "#525252",
        background: "#272727",
        borderRadius: "5px",
        color: "white",
        boxShadow: 3,
        pl: 2,
        fontSize: "16px",
        mb: "16px",
        "&.MuiButtonBase-root:focus": {
          bgcolor: "black",
          borderColor: "white",
          border: 2,
          outline: 1,
        },
        fontFamily: "Poppins",
      }}
      onChange={(e) => {
        setName && setName(e.target.value);
        setEmail && setEmail(e.target.value);
        setFirstName && setFirstName(e.target.value);
        setSecondName && setSecondName(e.target.value);
        setVerifyCode && setVerifyCode(e.target.value);
      }}
    />
  );
}

export function PasswordInputComponent({
  placeholder,
  setShowPass,
  showPass,
  setPassword,
  setEnterPassword,
  setReEnterPassword,
}) {
  return (
    <Box
      sx={{ position: "relative", width: "408px", height: "64px", mb: 2 }}
      component="div"
    >
      <Input
        placeholder={placeholder}
        type={showPass ? "text" : "password"}
        variant="outlined"
        disableUnderline
        sx={{
          width: 1,
          height: 1,
          border: 0,
          outline: 0,
          borderColor: "#525252",
          background: "#272727",
          borderRadius: "5px",
          color: "white",
          boxShadow: 3,
          pl: 2,
          fontSize: "16px",
          focused: "none",
          fontFamily: "Poppins",
        }}
        onChange={(e) => {
          setPassword && setPassword(e.target.value);
          setReEnterPassword && setReEnterPassword(e.target.value);
          setEnterPassword && setEnterPassword(e.target.value);
        }}
      />
      {showPass ? (
        <VisibilityOutlinedIcon
          sx={{
            color: "white",
            position: "absolute",
            top: { sm: "25px", xs: "18px" },
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowPass(false);
          }}
        />
      ) : (
        <VisibilityOffOutlinedIcon
          sx={{
            color: "white",
            position: "absolute",
            top: { sm: "25px", xs: "18px" },
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowPass(true);
          }}
        />
      )}
    </Box>
  );
}
