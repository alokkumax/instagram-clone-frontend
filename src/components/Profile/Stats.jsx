import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

  const Stats = (props) => {
    const [align , setAlign ] = useState(props.start)

    return (
      <Box
        display = {"flex"}
        flexDirection = {"row"}
        padding = {align ? "1rem 0rem" : "1rem 0rem"}
        justifyContent = {align ? "start" : "space-evenly"}
        gap = {"2rem"}
        width = {props.width}
        alignContent = {"center"}
        alignItems = {"center"}
      >
        <Typography fontFamily={"Poppins"} fontSize={"17px"}>
          { align ?
            <b style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>48</b> :
            <p style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>48</p> 
          } posts
        </Typography>
        <Typography fontFamily={"Poppins"}>
        { align ?
            <b style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>766</b> :
            <p style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>766</p> 
          } followers
        </Typography>
        <Typography fontFamily={"Poppins"}>
        { align ?
            <b style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>589</b> :
            <p style={{margin:"0px", textAlign:"center",fontWeight:"bold"}}>589</p> 
          } following
        </Typography>
      </Box>
    );
  };

  export default Stats;