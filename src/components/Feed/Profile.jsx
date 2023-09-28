import { Box, Typography } from "@mui/material";
import React from "react";
import BasicModal from "./BasicModal";

export default function Profile(props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0.5rem 1rem"}
    >
      <Box display={"flex"} gap={"0.9rem"}>
        <img className="dp2" src={props.dp} />
        <Box flexDirection={"column"} display={"flex"} justifyContent={"center"}>
          <Typography variant="p" fontSize={"16px"} fontFamily={"Poppins"}>
            <b>{props.name}</b>
          </Typography>
          <Typography variant="p" fontSize={"13px"} fontFamily={"Poppins"}>
            {props.hint}
          </Typography>
        </Box>
      </Box>
      {props.btn === "btn" ? (
        <BasicModal />
      ) : (
        <Typography variant="p" fontSize={"13px"} fontFamily={"Poppins"}>
          {props.btn}
        </Typography>
      )}
    </Box>
  );
}
