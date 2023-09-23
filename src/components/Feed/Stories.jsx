import React from 'react'
import stories from '../../constants/stories'
import { Box, ListItem, Stack, Typography } from '@mui/material'
export default function Stories() {
  return (
    <Box  width={"fit-content"} flexWrap={"no-wrap"}>
        <Stack display={"flex"} flexDirection={"row"} gap={"1rem"} flexWrap={"no-wrap"}>
            {
                stories.map((item) => {
                    return(
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                            <Box className="storyDiv">
                                <img src={item.pic} className='story'/>
                            </Box>
                            <Typography variant='p' fontSize={"14px"} fontFamily={"Nunito="}>{item.username}</Typography>
                        </Box>
                    )
                })
            }
        </Stack>
    </Box>
  )
}
