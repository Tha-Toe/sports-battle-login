import { Box, Typography, Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";
import { AndresCard } from "./AndresCard";
import Times from "./TImes";
import Amount from "./Amount";
import ChooseType from "./ChooseType";
import Balance from "./Balance";
const SubmitProjection = ({ selectCardId }) => {
  const [startSelect, setStartSelect] = useState(false);
  const [moreThanOneCard, setMoreThanOneCard] = useState(false);
  const [selectAmount, setSelectAmount] = useState(null);
  const [pickPlayType, setPickPlayType] = useState(false);
  useEffect(() => {
    if (selectCardId.length === 0) {
      setStartSelect(false);
      console.log("false");
    } else {
      console.log("true");
      setStartSelect(true);
      if (selectCardId.length > 1) {
        setMoreThanOneCard(true);
      } else {
        setMoreThanOneCard(false);
      }
    }
  }, [selectCardId]);

  return (
    <Box
      sx={{
        width: { md: "30%", xs: "50%", xxxs: "100%" },
        minHeight: "522px",
        border: "1px solid #2c2c2c",
        display: "flex",
        flexDirection: "column",
        ml: "3px",
        borderRadius: "4px",
        mb: "30px",
      }}
    >
      <Typography
        id="submitProjection"
        sx={{
          display: { xs: "none", xxxs: "block" },
        }}
      ></Typography>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "14px",
          fontWeight: 600,
          color: "white",
          mt: "13px",
          mb: "9px",
          width: "90%",
          mx: "auto",
          mt: "13px",
          mb: "9px",
        }}
      >
        Submit Projections
      </Typography>
      {startSelect ? (
        <>
          {moreThanOneCard && (
            <Box
              id="top-submit"
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
              }}
            >
              <Times />
              <Box sx={{ borderBottom: "1px solid #2c2c2c" }}>
                <Amount
                  setSelectAmount={setSelectAmount}
                  selectAmount={selectAmount}
                />
                {selectAmount && (
                  <Box sx={{ width: "100%", margin: "0 auto" }}>
                    <ChooseType
                      setPickPlayType={setPickPlayType}
                      pickPlayType={pickPlayType}
                    />
                    {pickPlayType && <Balance />}
                  </Box>
                )}
              </Box>
            </Box>
          )}
          <Box sx={{ mt: "14px" }}>
            {moreThanOneCard && (
              <Box
                sx={{
                  display: "flex",
                  width: "95%",
                  margin: "0 auto",
                  mb: "9px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "8px",
                    fontWeight: 400,
                    fontFamily: "poppins",
                    mr: "3px",
                  }}
                >
                  Your Entries
                </Typography>
                <Typography
                  sx={{
                    fontSize: "8px",
                    fontWeight: 400,
                    fontFamily: "poppins",
                    color: "#2072C4",
                  }}
                >
                  Change
                </Typography>
              </Box>
            )}
            {selectCardId.map(() => (
              <AndresCard />
            ))}
          </Box>
          {pickPlayType && (
            <Button
              sx={{
                color: "white",
                fontSize: "10px",
                fontWieght: 600,
                fontFamily: "poppins",
                background: "#4831D4",
                width: "90%",
                margin: "0 auto",
                mb: "10px",
                "&.MuiButtonBase-root:hover": {
                  background: "#4831D4",
                },
              }}
            >
              Submit
            </Button>
          )}
        </>
      ) : (
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "12px",
            fontWeight: 400,
            color: "white",
            mx: "auto",
            mt: "60px",
            mb: "9px",
            width: "70%",
          }}
        >
          Choose over or under on a player to make your entry.{" "}
        </Typography>
      )}
    </Box>
  );
};

export default SubmitProjection;
