import { Box, Divider } from "@mui/material";
import React from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import Stories from "../components/Feed/Stories";
import ProfileFeed from "../components/Profile/ProfileFeed";

const Profile = () => {
  return (
    <Box
      // maxWidth={"800px"}
      // bgcolor={"pink"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      
    >
      <ProfileCard />
      <Stories />
      <ProfileFeed/>
    </Box>
  );
};

export default Profile;
