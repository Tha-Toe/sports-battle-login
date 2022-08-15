import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid, Card } from "@mui/material";

export default function MyPropsCardContainer({
  mode,
  setOpenDetail,
  mainDetail,
  openTag,
}) {
  const handelOpenDetail = () => {
    if (openTag === "Upcomming") {
      setOpenDetail("Upcomming");
    } else if (openTag === "Live") {
      setOpenDetail("Live");
    } else {
      setOpenDetail("Completed");
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        sx={{
          width: "100%",
          border: "1px solid #494949",
        }}
      >
        {mainDetail.map((e) => (
          <Grid
            item
            xxxs={12}
            md={6}
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: "6px",
              mt: "6px",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "95%",
                bgcolor: "primary.main",
                borderRadius: "4px",
                border: "1px solid #494949",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => handelOpenDetail()}
            >
              {e.condition && (
                <Typography
                  sx={{
                    fontSize: { xs: "10px", xxs: "8px", xxxs: "6px" },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "white",
                    background: "#494949",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    position: "absolute",
                    right: "11px",
                    top: "8px",
                  }}
                >
                  {e.condition}
                </Typography>
              )}
              <Typography
                sx={{
                  fontSize: { xs: "16px", xxs: "14px", xxxs: "12px" },
                  fontWeight: 700,
                  fontFamily: "poppins",
                  color: "secondary.main",
                  mt: "7px",
                  width: "95%",
                }}
              >
                {e.header}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", xxs: "10px", xxxs: "8px" },
                  fontWeight: 500,
                  fontFamily: "poppins",
                  color: "secondary.main",
                  mt: "5px",
                  width: "95%",
                }}
              >
                {e.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "95%",
                  mt: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img src={e.src} />
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", xxxs: "10px" },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      color: "secondary.main",
                      mt: "5px",
                    }}
                  >
                    {e.date}
                  </Typography>
                </Box>
                {e.win ? (
                  <Button
                    sx={{
                      fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                      fontWeight: 600,
                      fontFamily: "poppins",
                      color: `${e.win === "win" ? "#52C03C" : "#E4313C"}`,
                      bgcolor: `${e.win === "win" ? "#CFE5CD" : "#F3A5AA"}`,
                      padding: { xs: "8px 9.5px", xxxs: "5px 7px" },
                    }}
                  >
                    {e.amount}
                  </Button>
                ) : (
                  <Button
                    sx={{
                      fontSize: { xs: "14px", xxs: "12px", xxxs: "10px" },
                      fontWeight: 600,
                      fontFamily: "poppins",
                      color: "#4831D4",
                      bgcolor: "#BCDEF9",
                      padding: { xs: "8px 9.5px", xxxs: "5px 7px" },
                    }}
                  >
                    {e.amount}
                  </Button>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "95%",
                  mt: "8px",
                }}
              >
                {e.start.map((each) => (
                  <img src={each} style={{ marginRight: "6px" }} />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "95%",
                  mt: "12px",
                  mb: "14px",
                }}
              >
                <img
                  src={e.sportType.src}
                  style={{
                    background: "black",
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "12px", xxs: "10px", xxxs: "8px" },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "secondary.main",
                    ml: "5px",
                  }}
                >
                  {e.sportType.type}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
