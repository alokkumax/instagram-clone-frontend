import { Box, ListItem, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import navs from "../constants/navs";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const loc = useLocation();
  const islaptop = useMediaQuery('(min-width:1260px)');

  return (
    <Box
      position={"sticky"}
      height={"100vh"}
      width={islaptop ? "20rem" : "fit-content"}
      minWidth={islaptop ? "20rem" : "fit-content"}
      borderRight={"1px solid #e1e1e1"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        {islaptop ? (
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

      <Box>
      { islaptop ? <ListItem>
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
