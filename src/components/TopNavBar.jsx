import { Box, Divider, ListItem, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import topNav from "../constants/topNav";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom";

export default function TopNavBar() {
  const loc = useLocation();
  const islaptop = useMediaQuery("(min-width:1380px)");

  // const isMobile = useMediaQuery('(min-width:730px)');

  return (
    <Box
      zIndex={"1"}
      
      bgcolor={"white"}
      position={"fixed"}
      height={"3.5rem"}
      bottom={"top"}
      width={"100%"}
      borderBottom={"0.1rem solid #cdcdcd"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box>
          <ListItem>
            <div className="logoTop">
              <a style={{ textDecoration: "none", color: "black" }} href="/">
                Instagram
              </a>
            </div>
          </ListItem>
      </Box>

      <Stack display={"flex"} flexDirection={"row"} >
        {topNav.map(({ name, icon, iconOutine, path }) => {
          return (
            <ListItem>
              <div
                className={
                  loc.pathname === path
                    ? "navTileTop active"
                    : "navTileTop"
                }
              >
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={path}
                >
                  {loc.pathname === path ? icon : iconOutine}
                </a>
                {islaptop ? (
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={path}
                  >
                    {name}
                  </a>
                ) : null}
              </div>
            </ListItem>
          );
        })}
      </Stack>
    </Box>
  );
}
