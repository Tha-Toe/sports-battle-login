import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ClearIcon from "@mui/icons-material/Clear";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const NotAllowSameEmail = ({ mode }) => {
  return (
    <div
      className="bonus-offer-container"
      style={{
        background: `${
          mode === "dark" ? "rgba(0,0,0,0.9)" : "rgba(115, 115, 115, 0.7)"
        }`,
      }}
    >
      <Box
        sx={{
          width: { sm: "566px", xs: "400px", xxs: "100%", xxxs: "100%" },
          height: "608px",
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ClearIcon
            sx={{
              fontSize: "25px",
              color: `${mode === "dark" ? "white" : "#494949"}`,
              mr: "14px",
              mt: "14px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </div>
  );
};
export default NotAllowSameEmail;
