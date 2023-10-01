import { Box, Stack, ListItem, Typography } from "@mui/material";
import React from "react";

export default function Footer(props) {
  const footer = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];
  console.log()
  return (
    <Box padding={"1rem 0rem"}>
    {
        footer.map((item)=>{
            return(
                    <span className="footer">
                        {item} {" "}
                    </span>
                
            )
        })
    }
    <Typography padding={"1rem 0rem"} textAlign={props.align} color={"gray"} fontSize={"14px"} fontFamily={"Nunito"}>
      © 2023 INSTAGRAM FROM META
    </Typography>
    </Box>
  )
}
