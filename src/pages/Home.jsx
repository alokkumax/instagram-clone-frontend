import React from 'react'
import Suggestion from '../components/Suggestion'
import Feed from '../components/Feed/Feed'
import { Box, Stack } from '@mui/material'

const Home = () => {
  return (
    <Box height={"100%"} padding={"2rem"}  width={"100%"}>
        <Stack direction={"row"} justifyContent={"center"} mx={"12rem"} gap={"3rem"}>
            <Feed/>
            <Suggestion/>
        </Stack>
    </Box>
    )
}

export default Home