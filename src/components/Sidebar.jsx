import { Box, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import navs from "../constants/navs";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [shrink, setShrink] = useState(false);
  const loc = useLocation();
  // var width = {
  //   innerWidth: window.innerWidth
  // }
  // setShrink(()=>{
  //   return{
  //     if(width <= 1000){

  //     }
  //   }
  // })

  return (
    <Box
      position={"sticky"}
      height={"100vh"}
      // top={0}
      width={!shrink ? "23rem" : "fit-content"}
      borderRight={"1px solid #e1e1e1"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        {!shrink ? (
          <ListItem
          ><div className="logo">
          <a style={{textDecoration:"none" , color:"black"}} href="/">
          Instagram
          </a>
          </div>
          </ListItem>
        ) : (
          <ListItem>
            <div className="navTile">
              <InstagramIcon />{" "}
            </div>
          </ListItem>
        )}
        <Stack>
          {navs.map(({ name,icon, iconOutine , path }) => {
            return (
              <ListItem>
                <div className={loc.pathname === path ? "navTile active" : "navTile"}>
                <a style={{textDecoration:"none" , color:"black"}} href={path}>{loc.pathname === path ? icon : iconOutine}</a>
                  {!shrink 
                  ? 
                  <a style={{textDecoration:"none" , color:"black"}} href={path}>{name}</a>
                  : null}
                </div>
              </ListItem>
            );
          })}
        </Stack>
      </Box>

      <Box>
      { !shrink ? <ListItem>
        <div className="navTile">
          <MoreHorizOutlinedIcon /> More
        </div>
      </ListItem> : <ListItem>
        <div className="navTile">
          <MoreHorizOutlinedIcon />
        </div>
      </ListItem>}
      </Box>
      
      
    </Box>
  );
}
