import { Box, Stack} from '@mui/material'
import React from 'react'

import Stories from './Stories';
import Post from './Post';
export default function Feed() {
  return (
      <Box 
      // bgcolor={"pink"} 
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      minWidth={"390px"} 
      maxWidth={"600px"} >
          <Stories width="100%"/>
          <Post/>
      </Box>

  )
}
