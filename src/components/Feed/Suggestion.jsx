import { Box, Typography } from '@mui/material'
import React from 'react'
import Profile from './Profile'
import suggestion from '../../constants/suggestion'
import Footer from './Footer'
export default function Suggestion() {
  return (
    <Box bgcolor={""} paddingTop={"1rem"}  maxWidth={"360px"} minWidth={"280px"} >
      <Box >
        <Profile 
          dp = "https://avatars.githubusercontent.com/u/59159355?v=4"
          name = "alokkumax"
          hint = "Alok Kumar"
          btn = "btn"
        />
      </Box>
      <Box padding={"1rem 1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant='p' fontSize={"16px"} fontWeight={'500'} fontFamily={"Poppins"}>Suggested for you</Typography>
        <Typography variant='p' fontSize={"13px"} fontWeight={'500'} fontFamily={"Poppins"}>See all</Typography>
      </Box>
      {
        suggestion.map((item) =>{
          return(
            <Profile
              dp = {item.pic}
              name = {item.username}
              hint = {item.follower ? "Follows you" : "Followed by aditya_xd, ..."}
              btn = "Follow"
            />
          )
        })
      }
      <Footer/>

    </Box>
  )
}
