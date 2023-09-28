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
          dp = "https://images.pexels.com/photos/18193622/pexels-photo-18193622/free-photo-of-smiling-woman-sitting-on-floor-and-leaning-arm-on-stool.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
              hint = {item.follower ? "Follows you" : "Followed by alokumax, ..."}
              btn = "Follow"
            />
          )
        })
      }
      <Footer/>

    </Box>
  )
}
