import { Box, Divider, useMediaQuery } from "@mui/material";
import React from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import Stories from "../components/Feed/Stories";
import ProfileFeed from "../components/Profile/ProfileFeed";
import Footer from "../components/Feed/Footer";
import Highlights from "../components/Profile/Highlights";
import Stats from "../components/Profile/Stats";
import ProfileDesc from "../components/Profile/ProfileDesc";
import { Padding } from "@mui/icons-material";
import Post from "../components/Feed/Post";

const Profile = () => {
  const islaptop = useMediaQuery("(min-width:1380px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isMobile = useMediaQuery("(min-width:690px)");

  return (
    <Box
      // maxWidth={"800px"}
      // bgcolor={"red"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      padding={
          islaptop
          ? "2rem 0rem 2rem 14rem"
          : isTablet
          ? "2rem 0rem 2rem 2rem"
          : "2rem 0rem "
      }
    >
      <ProfileCard />
      {!isMobile && (
        <Box paddingleft={"2rem"} width={"90%"}>
          <ProfileDesc />
        </Box>
      )}
      {!isMobile && (
        <Box width={"100%"}>
          <Highlights width={"100%"} />
          <Divider />
          <Stats width="100%" />
        </Box>
      )}
      {isMobile && <Highlights width="500px" />}
      <ProfileFeed/>
      <Footer align= "center"/>
    </Box>
  );
};

export default Profile;
