import { Box, Divider } from "@mui/material";
import React from "react";
import Profile from "../Feed/Profile";
import Comment from "./Comment"
import PostAction from "./PostAction";
export default function Modal({currPost,toggleModal}) {
  
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content" >
        <div className="pic-div">
            <img src={currPost.url} />
        </div>
        <div className="cmt-div" >
            <Box position={"absolute"} top={"0"} bgcolor={"white"} minWidth={"100%"} width={"400px"}>
              <Profile
                      dp = "https://avatars.githubusercontent.com/u/59159355?v=4"
                      name = "alokkumax"
                  />
              <Divider/>
            </Box>
            <br/>
            <br/>
            <Comment 
                  url = "https://avatars.githubusercontent.com/u/59159355?v=4"
                  commenterName = {currPost.username}
                  comment = {currPost.desc}
                  isOther = {false}
            />
            {/* Comments */}
            {currPost.comments.map(item =>{
              return(
               <Comment
                  url = {item.url}
                  commenterName = {item.name}
                  comment = {item.comment}
                  commentLike = {item.likes}
                  isOther = {true}
                  replies = {item.replies}

                />
              )
            })}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Box position={"absolute"} bottom={"0"} minWidth={"100%"} width={"400px"}>
              <PostAction isLiked={true} likes = {currPost.likes}/>
            </Box>
        </div>
      </div>
    </div>
  );
}
