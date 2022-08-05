import { Box, Button, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Choose from "./component/choose/Choose";
import EnterVerificationCode from "./component/enter-verification-code/EnterVerificationCode";
import EnterYourDetail from "./component/enter-your-detail/EnterYourDetail";
import LoginFlow from "./component/loginFlow/LoginFlow";
import EnterVerificationCodeSignup from "./component/enter-verification-signup/EnterVerificationCodeSignup";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
import NewPassword from "./component/newPassword/NewPassword";
import CreatePassword from "./component/createPassword/CreatePassword";
import CreateUserName from "./component/createUserName/CreateUserName";
import EnterYourName from "./component/enter-your-name/EnterYourName";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
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
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginFlow />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/enteryourdetail" element={<EnterYourDetail />} />
            <Route path="/enteryourname" element={<EnterYourName />} />
            <Route path="/verification" element={<EnterVerificationCode />} />
            <Route
              path="/signupverification"
              element={<EnterVerificationCodeSignup />}
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/createpassword" element={<CreatePassword />} />
            <Route path="/createusername" element={<CreateUserName />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
