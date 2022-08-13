import { Box, Button, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Choose from "./component/SignUp/choose/Choose";
import EnterYourDetail from "./component/SignUp/enter-your-detail/EnterYourDetail";
import LoginFlow from "./component/Login/loginFlow/LoginFlow";
import EnterVerificationCodeSignup from "./component/SignUp/enter-verification-signup/EnterVerificationCodeSignup";
import ForgotPassword from "./component/Forgot/forgotPassword/ForgotPassword";
import NewPassword from "./component/Forgot/newPassword/NewPassword";
import CreatePassword from "./component/SignUp/createPassword/CreatePassword";
import CreateUserName from "./component/SignUp/createUserName/CreateUserName";
import EnterYourName from "./component/SignUp/enter-your-name/EnterYourName";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CheckMail from "./component/Forgot/checkMail/CheckMail";
import { Logged } from "./component/Logged/Logged/Logged";
import { useContext, useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000000", //black
        light: "#242423", //rgba(36, 36, 35, 1)
      },
      secondary: {
        main: "#ffffff", //white
      },
    },
    breakpoints: {
      values: {
        xxxs: 0,
        xxs: 350,
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1100,
        xl: 1550,
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        light: "#696969",
      },
      secondary: {
        main: "#000000",
      },
    },
    breakpoints: {
      values: {
        xxxs: 0,
        xxs: 350,
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1100,
        xl: 1550,
      },
    },
  });
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `${mode === "dark" ? "black" : "white"}`,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginFlow />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/enteryourdetail" element={<EnterYourDetail />} />
            <Route path="/enteryourname" element={<EnterYourName />} />
            <Route path="/checkmail" element={<CheckMail />} />
            <Route
              path="/signupverification"
              element={<EnterVerificationCodeSignup />}
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/createpassword" element={<CreatePassword />} />
            <Route path="/createusername" element={<CreateUserName />} />
            <Route
              path="/logged"
              element={<Logged mode={mode} setMode={setMode} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
