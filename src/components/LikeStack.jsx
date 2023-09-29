import { Box } from '@mui/material'
import React from 'react'

export default function LikeStack() {
  return (
    <Box 
    display={"flex"}
    >
        <img className='dp4' src='https://avatars.githubusercontent.com/u/59159355?v=4'/>
        <img style={{marginLeft:"-8px"}} className='dp4' src='https://avatars.githubusercontent.com/u/57232570?v=4'/>
        <img style={{marginLeft:"-8px"}} className='dp4' src='https://avatars.githubusercontent.com/u/56017536?v=4'/>
    </Box>
  )
}
