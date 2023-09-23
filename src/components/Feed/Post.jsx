import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import posts from "../../constants/post";
import React from "react";
import { Box, Divider, Input, ListItem, Stack, Typography } from "@mui/material";

export default function Post() {
  return (
    <>
      {posts.map((item, index) => {
        return (
          <>
          <Box
            key={item.id}
            borderColor={"1px solid red"}
            flexDirection={"column"}
            margin={"1rem 8rem"}
            padding={"2rem 0rem 0rem"}
            width={"460px"}
            // bgcolor={"red"}
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
                <img className="dp" src={item.dp} />
                <span style={{ fontWeight: "500", fontFamily: "Nunito" }}>
                  {item.username}
                </span>
              </Box>
              <div>
                <MoreHorizOutlinedIcon />
              </div>
            </Box>
            <img src={item.url} className="post" />
            <Box
              display={"flex"}
              padding={"0.5rem 0rem"}
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
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="p">
                <b>{item.likesCount} likes</b>
              </Typography>
              <Typography variant="p">
                <b>{item.username}</b> {item.desc}
              </Typography>
              <Typography padding={"0.5rem 0rem"} variant="p">
                View all {item.commentsCount} comments
              </Typography>
              <Input style={{borderBottom:"0px solid white"}} padding={"0.5rem"} placeholder="Add a comment" />
            </Box>
          </Box>
          </>
        );
      })}
    </>
  );
}
