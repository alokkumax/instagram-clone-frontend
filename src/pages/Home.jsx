import React from 'react'
import Suggestion from '../components/Feed/Suggestion'
import Feed from '../components/Feed/Feed'
import { Box, Stack, useMediaQuery } from '@mui/material'

const Home = () => {
  const islaptop = useMediaQuery('(min-width:1260px)');
  const isTablet= useMediaQuery('(min-width:768px)');

  return (
    <Box height={"100%"} padding={ islaptop ? "2rem 2rem 2rem 14rem" : isTablet ? "2rem" : "0rem"}  width={"100%"}>
        <Stack className='feed' direction={"row"} justifyContent={"center"} gap={"3rem"}>
            <Feed/>
            { islaptop && <Suggestion/> }
        </Stack>
    </Box>
    )
}

export default Home