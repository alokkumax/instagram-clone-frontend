import { Box, Stack } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import Suggestion from './Suggestion'

export default function Content() {
  return (
    <Box flex={5} bgcolor={"pink"}>
        <Stack direction={"row"} justifyContent={"center"} mx={"12rem"}>
            <Feed/>
            <Suggestion/>
        </Stack>
    </Box>
  )
}
