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
      return each.index === index;
    });
    if (conditionArray.length > 0) {
      setType(conditionArray[0].type);
    }
    if (conditionArray.length === 0) {
      setType(null);
      setAlreadyPicked(false);
    }
  }, [selectCardId]);
  const [alreadyPicked, setAlreadyPicked] = useState(false);
  const [type, setType] = useState(null);
  const addCard = (type) => {
    if (!alreadyPicked) {
      let data = { index: index, type: type };
      addCardIndex(data);
    } else {
      let selectCardIdClone = selectCardId.map((each) => {
        if (each.index === index) {
          return { index: each.index, type: type };
        } else {
          return each;
        }
      });
      setSelectCardId(selectCardIdClone);
    }
    setAlreadyPicked(true);
  };

  return (
    <Grid
      item
      xxxs={12}
      md={6}
      sx={{ padding: 0, height: { xs: "100px", xxxs: "100px" } }}
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
            justifyContent: "space-between",
            alignItems: "flex-start",
            ml: "8px",
            height: "80%",
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
                  lg: "10px",
                  md: "10px",
                  xs: "8px",
                  xxxs: "10px",
                },
                fontWeight: 400,
                fontFamily: "poppins",
                mr: "5px",
              }}
            >
              Last 5
            </Typography>
            <Typography
              sx={{
                color: "#3A6DBE",
                fontSize: {
                  lg: "10px",
                  md: "10px",
                  xs: "8px",
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
                lg: "10px",
                md: "10px",
                xs: "8px",
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
                border: `${type === "over" ? "none" : "1px solid white"}`,
                borderColor: `${mode === "dark" ? "white" : "black"}`,
                borderRadius: "3px",
                mb: "8px",
                background: `${type === "over" ? "#4831D4" : "transparent"}`,
                "&.MuiButtonBase-root:hover": {
                  background: `${type === "over" ? "#4831D4" : "transparent"}`,
                },
              }}
              onClick={() => {
                setType("over");
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
                border: `${type === "under" ? "none" : "1px solid white"}`,
                borderColor: `${mode === "dark" ? "white" : "black"}`,
                borderRadius: "3px",
                background: `${type === "under" ? "#4831D4" : "transparent"}`,
                "&.MuiButtonBase-root:hover": {
                  background: `${type === "under" ? "#4831D4" : "transparent"}`,
                },
              }}
              onClick={() => {
                setType("under");
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
