import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";

const GridItemComponent = ({
  e,
  setSelectCardId,
  selectCardId,
  index,
  addCardIndex,
}) => {
  const [alreadyPicked, setAlreadyPicked] = useState(false);
  const [over, setOver] = useState(false);
  const [under, setUnder] = useState(false);
  const addCard = (type) => {
    if (!alreadyPicked) {
      addCardIndex(index);
    }
    setAlreadyPicked(true);
    if (type === "over") {
      setOver(true);
      setUnder(false);
    } else {
      setUnder(true);
      setOver(false);
    }
  };

  return (
    <Grid item xxxs={12} md={6} sx={{ padding: 0, height: "78px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "black",
          border: "1px solid #494949",
          borderRadius: "2px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            ml: "8px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { sm: "10px", xs: "7px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
            }}
          >
            {e.name}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "6px",
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            {e.cubs}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "6px",
                fontWeight: 400,
                fontFamily: "poppins",
              }}
            >
              {e.vs}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "6px",
                fontWeight: 400,
                fontFamily: "poppins",
                ml: "2px",
              }}
            >
              {e.time}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "6px",
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            Last 5 {e.last}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "6px",
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            Avg :: {e.avg}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { sm: "8px", xs: "6px", xxxs: "8px" },
              fontWeight: 500,
              fontFamily: "poppins",
            }}
          >
            Bat.Runs + RBIs
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
              fontFamily: "poppins",
            }}
          >
            {e.bat}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mr: "8px",
          }}
        >
          <Button
            sx={{
              width: { sm: "48px", xxxs: "24px" },
              height: "20px",
              color: "white",
              fontSize: { sm: "9px", xs: "7px", xxxs: "9px" },
              fontWeight: 400,
              fontFamily: "poppins",
              border: `${over ? "none" : "1px solid white"}`,
              borderRadius: "3px",
              mb: "8px",
              background: `${over ? "#4831D4" : "transparent"}`,
              "&.MuiButtonBase-root:hover": {
                background: `${over ? "#4831D4" : "transparent"}`,
              },
            }}
            onClick={() => {
              addCard("over");
            }}
          >
            Over
          </Button>
          <Button
            sx={{
              width: { sm: "48px", xxxs: "24px" },
              color: "white",
              height: "20px",
              fontSize: { sm: "9px", xs: "7px", xxxs: "9px" },
              fontWeight: 400,
              fontFamily: "poppins",
              border: `${under ? "none" : "1px solid white"}`,
              borderRadius: "3px",
              background: `${under ? "#4831D4" : "transparent"}`,
              "&.MuiButtonBase-root:hover": {
                background: `${under ? "#4831D4" : "transparent"}`,
              },
            }}
            onClick={() => {
              addCard("under");
            }}
          >
            Under
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
export default GridItemComponent;
