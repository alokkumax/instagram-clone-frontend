import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import dp from "../../assets/dp.png";
import SettingsIcon from "@mui/icons-material/Settings";
import Stats from "./Stats";
import ProfileDesc from "./ProfileDesc";
export default function ProfileCard() {
  const isMobile = useMediaQuery("(min-width:690px)");


  return (
    <Box
      gap={"1rem"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      // bgcolor = {"pink"}
      minWidth={"100%"}
      maxWidth={"800px"}
      paddingTop={!isMobile ? "3rem" : "2rem"}
      // minWidth = {"800px"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <img
          src="https://avatars.githubusercontent.com/u/59159355?v=4"
          width={isMobile ? "150rem" : "80rem"}
          className="dpProfile"
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
        <Box
          display={"flex"}
          flexDirection={!isMobile ? "column" : "row"}
          // gap={"1rem"}
          alignItems={"baseline"}
        >
          <Typography variant="p" className="username">
            alokkumax
          </Typography>
          <Box gap={"8px"} display={"flex"} flexWrap={ !isMobile ? "wrap" : ""}>
            <button className="btn">Profile</button>
            <button className="btn">Archieves</button>
            <button className="btn">AdTools</button>
          </Box>
          {!isMobile && (
            <Typography
              padding={"0.5rem 0rem"}
              fontFamily={"Nunito"}
              fontSize={"14px"}
            >
              344 accounts reached in the last 30 days.{" "}
              <Typography variant="span" fontWeight={"700"} color={"#000"}>
                View insights
              </Typography>
            </Typography>
          )}

          {isMobile && <SettingsIcon />}
        </Box>
        {isMobile ? (
          <div>
            <Stats start = "true"/>
            <ProfileDesc />
          </div>
        ) : null}

        {/* <Stats/>
        <ProfileDesc /> */}
      </Box>
    </Box>
  );
}
