import { Box, Divider } from "@mui/material";
import React from "react";
import Profile from "../Feed/Profile";
import Comment from "./Comment"
export default function Modal({currPost,toggleModal}) {
    console.log(currPost.comments)
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content" >
        <div className="pic-div">
            <img src={currPost.url} />
        </div>
        <div className="cmt-div" >
            <Profile
                dp = "https://avatars.githubusercontent.com/u/59159355?v=4"
                name = "alokkumax"
            />
            <Divider/>
            <Comment 
                url = {currPost.comments.url} 
                commenterName = {currPost.comments.name}
                comment = {currPost.comments.comment}
                likes = {currPost.comments.likes}
                replies = {currPost.comments.replies}

            />
            {/* {currPost.map(post => {
                return(
                    <Comment  />
                )
            })} */}
        </div>
      </div>
    </div>
  );
}
