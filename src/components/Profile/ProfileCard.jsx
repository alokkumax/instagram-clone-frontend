import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import dp from "../../assets/dp.png"
import SettingsIcon from '@mui/icons-material/Settings';
export default function ProfileCard() {
  return (
    <Box padding={"2rem"} width={"800px"} gap={"2rem"} display={"flex"} flexDirection={"row"}>
        <Box>
            <img src={dp} width={"200rem"} />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
                <Typography variant='p' className='username'>alokkumax</Typography>
                <button className='btn'>Edit profile</button>
                <button className='btn'>View Archieve</button>
                <button className='btn'>Ad Tools</button>
                <SettingsIcon/>
            </Box>
            <Box display={"flex"} flexDirection={"row"} paddingTop={"1rem"} gap={"2rem"}>
                <Typography fontFamily={"po"} fontSize={"17px"} ><b>48</b> posts</Typography>
                <Typography fontFamily={"Nunito"}><b>766</b> followers</Typography>
                <Typography fontFamily={"Nunito"}><b>594</b> following</Typography>
            </Box>
            <Box paddingTop={"1rem"} display={"flex"} flexDirection={"column"}>
                <Typography fontFamily={"Nunito"}>be kind {"<3"}</Typography>
                <Typography padding={"0.5rem 0rem"} fontFamily={"Nunito"} fontSize={"16px"}>344 accounts reached in the last 30 days. <Typography variant='span' fontWeight={"700"} color={"#000"}>View insights</Typography></Typography>
            </Box>
        </Box>
    </Box>
  )
}
