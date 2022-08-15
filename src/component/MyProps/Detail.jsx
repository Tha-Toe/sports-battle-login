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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PayoutScenarious from "./PayoutScenarious";
export default function Detail({
  mode,
  setOpenDetail,
  detailData,
  openDetail,
}) {
  const [tabelHead, setTabelHead] = useState([
    "Game",
    "Status",
    "Over",
    "Actual",
  ]);

  const [openPayoutScenarious, setOpenPayoutScenarious] = useState(false);

  return (
    <Box
      sx={{
        width: {
          lg: "836px",
          md: "700px",
          sm: "500px",
          xs: "450px",
          xxxs: "90%",
        },
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: "10px", xxxs: "20px" },
      }}
      component="div"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: "13px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setOpenDetail(null)}
        >
          <ArrowBackIosIcon sx={{ color: "secondary.main" }} />
          <Typography
            sx={{
              fontSize: { xs: "16px", xxs: "12px", xxxs: "10px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.main",
            }}
          >
            Entry #36475f
          </Typography>
        </Box>
        {openDetail !== "Upcomming" && (
          <Button
            sx={{
              color: "#4831D4",
              fontSize: { xs: "10px", xxs: "6px", xxxs: "6px" },
              fontWeight: 600,
              fontFamily: "poppins",
              padding: "8px 32px",
              bgcolor: "#C2DDF8",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#C2DDF8",
              },
            }}
          >
            Refresh
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          border: "1px solid #494949",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            py: "10px",
            background: "#494949",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              background: "#494949",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
                fontWeight: 600,
                fontFamily: "poppins",
                color: "secondary.main",
              }}
            >
              PLAYER
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "70%",
              }}
            >
              {tabelHead.map((e) => (
                <Typography
                  sx={{
                    fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
                    fontWeight: 600,
                    fontFamily: "poppins",
                    color: "secondary.main",
                    textAlign: "center",
                    width: "25%",
                  }}
                >
                  {e}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        {detailData.map((e) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              py: "10px",
              mt: { xs: "17px", xxxs: "10px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "30%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", xxs: "12px", xxxs: "10px" },
                    fontWeight: 700,
                    fontFamily: "poppins",
                    color: "secondary.main",
                  }}
                >
                  {e.player.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
                    fontWeight: 500,
                    fontFamily: "poppins",
                    color: "secondary.main",
                    mt: "4px",
                  }}
                >
                  {e.player.forward}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "70%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "25%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      background: "#E431F4",
                      padding: { xs: "5px", xxxs: "3px" },
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={e.game.playType.src}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
                        fontWeight: 500,
                        fontFamily: "poppins",
                        color: "secondary.main",
                        ml: "5px",
                      }}
                    >
                      {e.game.playType.type}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      color: "secondary.main",
                      mt: "5px",
                    }}
                  >
                    {e.game.vs}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    width: "25%",
                    textAlign: "center",
                    color: `${
                      e.status === "lose" ? "#E4313C" : "secondary.main"
                    }`,
                    fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
                    fontWeight: 500,
                    fontFamily: "poppins",
                  }}
                >
                  {e.status}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "25%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", xxs: "16px", xxxs: "14px" },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.main",
                    }}
                  >
                    {e.goal.amount}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
                      fontWeight: 500,
                      fontFamily: "poppins",
                      color: `${e.color ? e.color : "secondary.main"}`,
                      mt: "5px",
                    }}
                  >
                    {e.goal.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "25%",
                    color: "secondary.main",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", xxs: "16px", xxxs: "14px" },
                      fontWeight: 700,
                      fontFamily: "poppins",
                      color: "secondary.main",
                    }}
                  >
                    {e.actual}
                  </Typography>
                  <Typography
                    sx={{
                      width: { xs: "43px", xxxs: "30px" },
                      height: "4px",
                      bgcolor: `${e.color ? e.color : "secondary.main"}`,
                      mt: "12px",
                    }}
                  >
                    {e.status === "lose" && (
                      <Typography
                        sx={{
                          width: "50%",
                          height: "100%",
                          bgcolor: "#E4313C",
                        }}
                      ></Typography>
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "95%",
          mt: "13px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.main",
            }}
          >
            3/3 correct - win $11.25{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", xxs: "10px", xxxs: "8px" },
              fontWeight: 600,
              fontFamily: "poppins",
              color: "secondary.main",
            }}
          >
            2/3 correct - win $6.25{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: { xs: "7px 18px", xxxs: "3px 5px" },
            background: "#CEE4CC",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => setOpenPayoutScenarious(true)}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
              fontWeight: 500,
              fontFamily: "poppins",
              color: "#459F48",
            }}
          >
            Payout Scenarios
          </Typography>
          <PlayArrowIcon sx={{ color: "#459F48" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "95%",
          mt: "20px",
        }}
      >
        <Button
          sx={{
            p: { xs: "11px 40px", xxxs: "6px 15px" },
            background: "#C2DDF8",
            borderRadius: "4px",
            fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
            fontWeight: 700,
            fontFamily: "poppins",
            color: "#4831D4",
            "&.MuiButtonBase-root:hover": {
              background: "#C2DDF8",
            },
          }}
        >
          Entry: $5
        </Button>
        <Button
          sx={{
            p: { xs: "11px 40px", xxxs: "6px 15px" },
            background: "#CEE4CC",
            borderRadius: "4px",
            fontSize: { xs: "12px", xxs: "8px", xxxs: "6px" },
            fontWeight: 700,
            fontFamily: "poppins",
            color: "#459F48",
            ml: "12px",
            "&.MuiButtonBase-root:hover": {
              background: "#CEE4CC",
            },
          }}
        >
          TO WIN: $11.25
        </Button>
      </Box>
      <Box sx={{ width: "95%", mt: "12px" }}>
        <img src="/defence-play-my-props.png" />
      </Box>
      {openPayoutScenarious && (
        <PayoutScenarious setOpenPayoutScenarious={setOpenPayoutScenarious} />
      )}
    </Box>
  );
}
