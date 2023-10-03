import { Box, ListItem, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import bottomNavBar from "../constants/bottonNav";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom";

export default function BottomNavBar() {
  const loc = useLocation();
  const islaptop = useMediaQuery('(min-width:1380px)');


  return (
    <Box
      zIndex={"1"}

        bgcolor={"white"}
        position={"fixed"}
        bottom={"0"}
        display={"flex"}
        width={"100%"}
        borderTop={"1px solid gray"}
    >
       
        <Stack display={"flex"} flexDirection={"row"} width={"100%"}>
          {bottomNavBar.map(({ name,icon, iconOutine , path }) => {
            return (
              <ListItem >
                <div className={loc.pathname === path ? "navTileBottom active" : "navTileBottom"}>
                <a style={{textDecoration:"none" , color:"black"}} href={path}>{loc.pathname === path ? icon : iconOutine}</a>
                  {islaptop 
                  ? 
                  <a style={{textDecoration:"none" , color:"black"}} href={path}>{name}</a>
                  : null}
                </div>
              </ListItem>
            );
          })}
        </Stack>
    </Box>

      
      
  );
}
