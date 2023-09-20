import React from 'react'
import Suggestion from '../components/Suggestion'
import Feed from '../components/Feed'
import { Box, Stack } from '@mui/material'

const Home = () => {
  return (
    <Box paddingLeft={"23rem"} height={"100%"}  width={"100%"}>
        <Stack direction={"row"} justifyContent={"center"} mx={"12rem"}>
            <Feed/>
            <Suggestion/>
        </Stack>
    </Box>
    )
}

export default Home