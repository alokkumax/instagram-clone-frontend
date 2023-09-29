import { Box, Divider, } from "@mui/material";
import React, { useState } from "react";
import profilePosts from "../../constants/profilePosts";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ViewPost from './ViewPost'
import Modal from "./Modal";

export default function ProfileFeed() {
  const tabs = [
    {
      id: 0,
      label: "POSTS",
      icon: <ListAltIcon />,
    },
    {
      id: 1,
      label: "REELS",
      icon: <PlayCircleOutlineIcon />,
    },
    {
      id: 2,
      label: "SAVED",
      icon: <BookmarkBorderIcon />,
    },
    {
      id: 3,
      label: "TAGGED",
      icon: <AlternateEmailIcon />,
    },
  ];
  const [toggle, setToggle] = useState(0);
  function handelTab(id) {
    setToggle(id);
  }
  const [modal, setModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  function handlePost(selectedPost){
    setSelectedPost(selectedPost);
    setModal(!modal);
  }
  return (
    <Box width={"100%"} >
      <Divider bgcolor={"gray"} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"3rem"}
        justifyContent={"center"}
      >
        {tabs.map((item) => {
          return (
            <Box
              display={"flex"}
              justifyContent={"center"}
              fontSize={"13px"}
              alignItems={"center"}
              padding={"0.8rem 1rem"}
              className={toggle === item.id ? "activeTab" : "tabss"}
              onClick={() => handelTab(item.id)}
            >
              {item.icon}
              {item.label}
            </Box>
          );
        })}
      </Box>
      <Box display={"flex"} width={"100%"} gap={"0.2rem"} flexWrap={"wrap"}>
        {toggle === 0 ? (
          profilePosts.map((post) => {
            return (
              <>
                <Box onClick={() => handlePost(post)} className="postPic">
                  <img src={post.url} />
                  <span class="post-overlay">
                    <div>
                      <p class="post-likes">
                        <span>{post.likes}</span>
                        <span>
                          <FavoriteIcon />
                        </span>
                      </p>
                      <p class="post-comments">
                        <span>{post.comments.length}</span>
                        <span>
                          <ModeCommentIcon />
                        </span>
                      </p>
                    </div>
                  </span>
                </Box>
              </>
            );
          })
        ) : toggle === 1 ? (
          <Box>Reels</Box>
        ) : toggle === 2 ? (
          <Box>SAVED</Box>
        ) : (
          <Box>TAGGED</Box>
        )}
       {modal && <Modal currPost = {selectedPost} toggleModal = {()=> setModal(!modal)} />}
      </Box>
    </Box>
  );
}
