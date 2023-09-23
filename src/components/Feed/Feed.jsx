import { Box, Stack} from '@mui/material'
import React from 'react'

import Stories from './Stories';
import Post from './Post';
export default function Feed() {
  return (
      <Box flex={2}  >
          <Stories/>
          <Post/>
      </Box>

  )
}
