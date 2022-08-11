import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./addCash.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AddCash() {
  const [amountList, setAmountList] = useState([
    { amount: "$30" },
    { amount: "$50" },
    { amount: "$100" },
    { amount: "$250" },
    { amount: "Other" },
  ]);
  const [amount, setAmount] = useState("$30");
  const [showLimit, setShowLimit] = useState(false);
  return (
    <Box
      sx={{
        minHeight: "100%",
        width: {
          xl: "900px",
          lg: "800px",
          md: "500px",
          sm: "500px",
          xs: "80%",
          xxxs: "95%",
        },
        margin: "0 auto",
        display: "flex",
        flexDirection: { lg: "row", xxxs: "column" },
        alignItem: "center",
        justifyContent: "center",
        mt: { lg: 0, xxxs: "50px" },
      }}
    >
      <Box
        component="div"
        sx={{
          width: { lg: "50%", md: "100%" },
          height: { lg: "100%", xxxs: "auto" },
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "flex-start",
          mb: { xxxs: "50px", lg: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "poppins",
            color: "white",
            mt: "14px",
          }}
        >
          Add Cash
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            fontFamily: "poppins",
            color: "white",
            mt: "16px",
          }}
        >
          How much would you like to deposit?{" "}
        </Typography>
        <Box sx={{ mt: "13px" }}>
          {amountList.map((e) => (
            <Button
              sx={{
                minWidth: { xs: "64px", xxxs: "50px" },
                height: "40px",
                background: `${amount === e.amount ? "#439F48" : "black"}`,
                border: "1px solid #439F48",
                borderRadius: "4px",
                fontSize: { xs: "16px", xxxs: "14px" },
                fontWeight: 500,
                fontFamily: "poppins",
                color: `${amount === e.amount ? "black" : "#439F48"}`,
                mr: "4px",
                "&.MuiButtonBase-root:hover": {
                  background: "#439F48",
                  color: "black",
                },
              }}
              onClick={() => {
                setAmount(e.amount);
              }}
            >
              {e.amount}
            </Button>
          ))}
        </Box>
        {amount === "Other" && (
          <Box sx={{ mt: "23px", mb: "16px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "poppins",
                color: "white",
                mb: "7px",
              }}
            >
              Enter Amount
            </Typography>
            <Input
              type="number"
              placeholder="100"
              variant="outlined"
              sx={{
                color: "white",
                borderBottom: "1px solid #439F48",
                width: "100%",
                py: "7px",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "poppins",
                outline: "none",
              }}
              onChange={() => setShowLimit(true)}
            />
            {showLimit && (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "poppins",
                  color: "#E4313C",
                  mt: "16px",
                }}
              >
                Limit is $500{" "}
              </Typography>
            )}
          </Box>
        )}
        <Button
          sx={{
            color: "white",
            fontSize: { xs: "16px", xxxs: "14px" },
            fontWeight: 600,
            fontFamily: "poppins",
            background: "#439F48",
            borderRadius: "8px",
            mt: "16px",
            py: { xs: "16px", xxxs: "12px" },
            "&.MuiButtonBase-root:hover": {
              background: "#439F48",
            },
          }}
        >
          Continue
        </Button>
        <Box sx={{ background: "#494949", height: "2px", mt: "24px" }}></Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            fontFamily: "poppins",
            color: "white",
            mt: "16px",
          }}
        >
          You will see this transaction as from Onecricket Fantasy Inc, in your
          statement{" "}
        </Typography>
        <Button
          sx={{
            color: "#439F48",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "poppins",
            background: "black",
            borderRadius: "8px",
            border: "1px solid #439F48",
            mt: "16px",
            width: { xs: "240px", xxxs: "200px" },
            height: "40px",
          }}
        >
          Support Chat
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          width: { lg: "50%", md: "100%" },
          height: { lg: "100%", xxxs: "auto" },
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "flex-start",
          borderLeft: { lg: "1px solid #494949", xxxs: 0 },
          px: { lg: "20px", xxxs: 0 },
          ml: { lg: "18px", xxxs: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "poppins",
            color: "#4831D4",
            mt: "20px",
            mb: "2px",
          }}
        >
          NOTE
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "rows",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <CheckCircleIcon
            sx={{
              color: "#52C03C",
              fontSize: { xs: "20px", xxxs: "20px" },
              mr: "12px",
            }}
          />
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "14px", xxxs: "14px" },
              fontWeight: 600,
              fontFamily: "poppins",
            }}
          >
            First time deposits, we will match 100% deposit in bonus cash upto
            $100{" "}
          </Typography>
        </Box>
        <Box
          sx={{ background: "#494949", height: "2px", mt: "14px", mb: "15px" }}
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "poppins",
            color: "white",
            mb: "14px",
          }}
        >
          Payment FAQ’s
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          What can I use to depoist to my wallet?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          We accept credit & debit cards methods of deposit Right Now, American
          express is not supported yet. **You should only deposit funds into
          your SportsBattle account with a payment method registered in your
          name{" "}
        </Typography>
        <Box
          sx={{ background: "#494949", height: "2px", mt: "14px", mb: "15px" }}
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          What can I use to depoist to my wallet?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          We accept credit & debit cards methods of deposit Right Now, American
          express is not supported yet. **You should only deposit funds into
          your SportsBattle account with a payment method registered in your
          name{" "}
        </Typography>
        <Box
          sx={{ background: "#494949", height: "2px", mt: "14px", mb: "15px" }}
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          What can I use to depoist to my wallet?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "poppins",
            color: "white",
            mb: "10px",
          }}
        >
          We accept credit & debit cards methods of deposit Right Now, American
          express is not supported yet. **You should only deposit funds into
          your SportsBattle account with a payment method registered in your
          name{" "}
        </Typography>
      </Box>
    </Box>
  );
}
