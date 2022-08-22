import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./props.css";

const GridItemComponent = ({
  e,
  setSelectCardId,
  selectCardId,
  index,
  addCardIndex,
  mode,
}) => {
  useEffect(() => {
    let conditionArray = selectCardId.filter((each) => {
      return each === index;
    });
    if (conditionArray.length === 0) {
      setOver(false);
      setUnder(false);
      setAlreadyPicked(false);
    }
  }, [selectCardId]);
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
    <Grid
      item
      xxxs={12}
      md={6}
      sx={{ padding: 0, height: { xs: "78px", xxxs: "100px" } }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          bgcolor: "primary.main",
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
              color: "secondary.main",
              fontSize: { lg: "12px", md: "10px", xs: "8px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
            }}
          >
            {e.name}
          </Typography>
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: "8px",
              fontSize: {
                lg: "8px",
                md: "8px",
                xs: "6px",
                xxs: "8px",
                xxxs: "10px",
              },
              fontWeight: 400,
              fontFamily: "poppins",
            }}
          >
            {e.cubs}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: {
                  lg: "8px",
                  md: "8px",
                  xs: "6px",
                  xxxs: "10px",
                },
                fontWeight: 400,
                fontFamily: "poppins",
              }}
            >
              {e.vs}
            </Typography>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: {
                  lg: "8px",
                  md: "8px",
                  xs: "6px",
                  xxxs: "10px",
                },
                fontWeight: 400,
                fontFamily: "poppins",
                ml: "2px",
              }}
            >
              {e.time}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: {
                  lg: "8px",
                  md: "8px",
                  xs: "6px",
                  xxxs: "10px",
                },
                fontWeight: 400,
                fontFamily: "poppins",
              }}
            >
              Last 5
            </Typography>
            <Typography
              sx={{
                color: "#3A6DBE",
                fontSize: {
                  lg: "8px",
                  md: "8px",
                  xs: "6px",
                  xxxs: "10px",
                },
                fontWeight: 400,
                fontFamily: "poppins",
              }}
            >
              {e.last}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: {
                lg: "8px",
                md: "8px",
                xs: "6px",
                xxxs: "10px",
              },
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
              color: "secondary.main",
              fontSize: {
                lg: "10px",
                md: "7px",
                sm: "8px",
                xxxs: "8px",
              },
              fontWeight: 500,
              fontFamily: "poppins",
            }}
          >
            Bat.Runs + RBIs
          </Typography>
          <Typography
            sx={{
              color: "secondary.main",
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
          <a href="#submitProjection">
            <Button
              sx={{
                width: { sm: "48px", xxxs: "24px" },
                height: "20px",
                color: "secondary.main",
                fontSize: { sm: "9px", xs: "7px", xxxs: "9px" },
                fontWeight: 400,
                fontFamily: "poppins",
                border: `${over ? "none" : "1px solid white"}`,
                borderColor: `${mode === "dark" ? "white" : "black"}`,
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
          </a>
          <a href="#submitProjection">
            <Button
              sx={{
                width: { sm: "48px", xxxs: "24px" },
                color: "secondary.main",
                height: "20px",
                fontSize: { sm: "9px", xs: "7px", xxxs: "9px" },
                fontWeight: 400,
                fontFamily: "poppins",
                border: `${under ? "none" : "1px solid white"}`,
                borderColor: `${mode === "dark" ? "white" : "black"}`,
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
          </a>
        </Box>
      </Card>
    </Grid>
  );
};
export default GridItemComponent;
