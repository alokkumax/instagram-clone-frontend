import React from "react";
import Profile from "../Feed/Profile";
import Comment from "./Comment"
import PostAction from "./PostAction";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Box, Divider, Input, ListItem, Stack, Typography } from "@mui/material";

export default function ModalPhone({currPost,toggleModal}) {
  
  return (
    <Box className="modalp">
      <div className="overlayp" onClick={toggleModal}></div>
      <div className="modal-contentp" >
        {
          <>
          <Box
            // key={item.id}
            borderColor={"1px solid red"}
            flexDirection={"column"}
            margin={""}
            padding={"2rem 0rem 0rem"}
            minWidth={"390px"} 
            maxWidth={"100%"}
            
          >
            <Box
              padding={"0.6rem"}
              justifyContent={"space-between"}
              alignContent={"center"}
              alignSelf={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Box gap={"0.5rem"} alignItems={"center"} display={"flex"}>
                <img className="dp" src={currPost.url} />
                <span style={{ fontWeight: "500", fontFamily: "Nunito" }}>
                  {currPost.username}
                </span>
              </Box>
              <div>
                <MoreHorizOutlinedIcon />
              </div>
            </Box>
            <img src={currPost.url} className="postP" />
            <Box
              display={"flex"}
              padding={"0.5rem 0.5rem"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} gap={"0.5rem"}>
                <FavoriteBorderOutlinedIcon />
                <ModeCommentOutlinedIcon />
                <ShareOutlinedIcon />
              </Box>
              <BookmarkBorderOutlinedIcon />
            </Box>
            <Box padding={"0.5rem 0.5rem"} display={"flex"} flexDirection={"column"}>
              <Typography variant="p">
                <b>{currPost.likes} likes</b>
              </Typography>
              <Typography variant="p">
                <b>{currPost.username}</b> desc
              </Typography>
              <Typography padding={"0.5rem 0rem"} variant="p">
                View all {currPost.comments.length} comments
              </Typography>
              <Input style={{borderBottom:"0px solid white"}} padding={"0.5rem"} placeholder="Add a comment" />
            </Box>
          </Box>
          </>
        }

        {/* <Box>2</Box> */}
        <Box 
          position={"absolute"}
          top={"8%"}
          left={"0%"}
          onClick={toggleModal}
          display={"flex"}
          paddingLeft={"1rem"}
          >
          <ArrowBackIosNewIcon fontSize="12px"/>
          {/* <Typography alignSelf={"center"}>Post</Typography> */}
        </Box>
      </div>
    </Box>
  );
}
