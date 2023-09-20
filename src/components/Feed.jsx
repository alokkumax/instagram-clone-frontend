import { Box, Input, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import posts from '../constants/post';
export default function Feed() {
  return (
      <Box height={"100vh"} flex={2}  >
        <Box padding={"1rem"} margin={"1rem"} bgcolor={"greenyellow"}>Stories</Box>
        <Stack padding={"1rem"} margin={"1rem"} >

          {posts.map((item,index)=>{
            return (
            <Box key={item.id} borderColor={"1px solid red"} flexDirection={"column"} margin={"1rem 8rem"}>
              <Box padding={"0.6rem"} justifyContent={"space-between"} alignContent={"center"} alignSelf={"center"} alignItems={"center"} display={"flex"} flexDirection={"row"}>
                <Box gap={"0.5rem"} alignItems={"center"} display={"flex"} >
                  <img className='dp' src={item.dp}/>
                  <span style={{fontWeight:"500", fontFamily:"Nunito"}}>{item.username}</span>
                </Box>
                <div>
                  <MoreHorizOutlinedIcon/>
                </div>
              </Box>
              <img src={item.url} className='post'/>
              <Box 
                display={"flex"}
                padding={"0.5rem 0rem"} 
                flexDirection={"row"} 
                justifyContent={"space-between"}
               >
                <Box display={"flex"} gap={"0.5rem"}>
                  <FavoriteBorderOutlinedIcon/>
                  <ModeCommentOutlinedIcon/>
                  <ShareOutlinedIcon/>
                </Box>
                  <BookmarkBorderOutlinedIcon/>
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant='p'><b>{item.likesCount} likes</b></Typography>
                  <Typography variant='p'><b>{item.username}</b>{" "}{item.desc}</Typography>
                  <Typography padding={"0.5rem 0rem"} variant='p'>View all {item.commentsCount} comments</Typography>
                  <Input padding={"0.5rem"} placeholder='Add a comment'/>
                </Box>
            </Box>)
          })}
        

         
        </Stack>
      </Box>

  )
}
