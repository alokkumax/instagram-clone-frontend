import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

const ProfileDesc = () => {
    return (
      <Box paddingTop={"1rem"} display={"flex"} flexDirection={"column"}>
        <Typography fontFamily={"Nunito"} padding={"0rem 0rem 0.5rem"}>
          <b>Alok Kumar</b>
        </Typography>
        <Typography fontFamily={"Nunito"}>be kind {"<3"}</Typography>
        <Typography
          padding={"0.5rem 0rem"}
          fontFamily={"Nunito"}
          fontSize={"16px"}
        >
          344 accounts reached in the last 30 days.{" "}
          <Typography variant="span" fontWeight={"700"} color={"#000"}>
            View insights
          </Typography>
        </Typography>
      </Box>
    );
  };

  export default ProfileDesc;
