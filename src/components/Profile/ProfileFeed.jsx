import { Box, Divider, useMediaQuery, } from "@mui/material";
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
import reel from "../../assets/reel1.mp4"
import ModalPhone from "./ModalPhone";
export default function ProfileFeed() {
  const islaptop = useMediaQuery("(min-width:1380px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isMobile = useMediaQuery("(min-width:690px)");

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
    <Box 
      paddingTop={ !isTablet ? "0rem":"1rem"}
     width={"50%"} 
     minWidth={islaptop ? "60%" : isTablet? "80%" :"100%"} >
      <Divider bgcolor={"gray"} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={!isTablet ? "0px" : "3rem"}
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
      <Box display={"flex"} width={"100%"} gap={"0.3rem"} flexWrap={"wrap"} justifyContent={"center"}>
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
       
       {modal ? 
        (isTablet ? <Modal currPost = {selectedPost} toggleModal = {()=> setModal(!modal)} /> :
          <ModalPhone currPost = {selectedPost} toggleModal = {()=> setModal(!modal)} />
         ) : null
        
       }
      </Box>
    </Box>
  );
}
