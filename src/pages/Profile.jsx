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
      // className= "scroll"
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      padding={"2rem 2rem 2rem 14rem"} 
      >
      <Box 
        display={"flex"}
        width={"900px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"2rem"}
        
        >
        <ProfileCard />
        <Stories width={"100%"} />
        <ProfileFeed/>
      </Box>
      
    </Box>
  );
};

export default Profile;
