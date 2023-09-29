import { HearingDisabledOutlined } from "@mui/icons-material";
import { Box, Divider, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import LikeStack from "../LikeStack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PostAction({isLiked, likes}) {
  const [isLike, setIsLiked] = useState(isLiked)
  const [like, setLike] = useState(likes)
  
  return (
    <Box bgcolor={"white"}>
      <Divider />
      <Box>
        <Box
          padding={"1rem 1rem 0.5rem"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} gap={"0.5rem"}>
          {isLike ? (
            <FavoriteIcon
              sx={{ color: "red"}}
              onClick={() => setIsLiked(!isLike)}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={() => setIsLiked(!isLike)}
            
            />
          )}
            <ModeCommentOutlinedIcon />
            <ShareOutlinedIcon />
          </Box>
          <BookmarkBorderOutlinedIcon />
        </Box>

        <Box padding={"0rem 1rem"} display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <LikeStack />
          <span>
            {" "}
            liked by <b>{isLike ? like +1 : like}</b> others
          </span>
        </Box>
        <span style={{fontSize:"10px",padding:"1rem 1rem 0.5rem", fontFamily:"Nunito", color:"gray"}}>12W</span>
      </Box>
      <Divider />
      <Box
        padding={"0.5rem 0rem"}
        justifyContent={"center"}
        flexDirection={"row"}
        alignContent={"center"}
        display={"flex"}
        width={"100%"}
        flex={"1"}
      >
        <SentimentSatisfiedAltIcon />
        <input
          placeholder="Add a comment"
          style={{
            width: "80%",
            border: "0px solid transparent",
            outline: "0px solid white",
          }}
        />
        <span>Post</span>
      </Box>
    </Box>
  );
}
