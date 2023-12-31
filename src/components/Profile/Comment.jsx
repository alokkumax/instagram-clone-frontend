import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplySection from "./ReplySection";
// import Comment from "../Profile/Comment.jsx"
export default function Comment({
  commentLike,
  url,
  commenterName,
  comment,
  replies,
  isOther,
}) {
  const [like, setLike] = useState(commentLike);
  const [reply, setReply] = useState(0);
  const [isLiked, setLiked] = useState(false);
  console.log(commenterName);
  return (
    <>
      
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0.5rem 1rem"}
      >
        <Box>
          <Box display={"flex"} gap={"0.9rem"} alignItems={"center"}>
            <img className="dp" src={url} />
            <Box
              flexDirection={"column"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box>
                <Typography variant="p" fontSize={"14px"} fontFamily={"Nunito"}>
                  <b>{commenterName}</b>
                </Typography>
                <Typography
                  variant="p"
                  fontSize={"13px"}
                  fontFamily={"Poppins"}
                >
                  {" "}
                  {comment}
                </Typography>
              </Box>
              <Box
                gap={"1rem"}
                fontSize={"12px"}
                fontFamily={"Poppins"}
                color={"gray"}
                display={"flex"}
              >
                <span>12w</span>
                {like > 0 ? (
                  <span>{isLiked ? commentLike + 1 : commentLike} likes</span>
                ) : (
                  <></>
                )}
                {isOther && <span>Reply</span>}
              </Box>
            </Box>
          </Box>
          
        </Box>
        {isOther &&
          (isLiked ? (
            <FavoriteIcon
              sx={{ color: "red", fontSize:"small"}}
              onClick={() => setLiked(!isLiked)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ color: "red", fontSize :"small" }}
              onClick={() => setLiked(!isLiked)}
            />
          ))}
      </Box>
      {isOther && (
            <Box>
                <details>
                    <summary  >
                    <Typography
                      variant="p"
                      marginTop={"-2rem"}
                      fontSize={"12px"}
                      fontFamily={"Poppins"}
                      color={"gray"}
                      paddingLeft={"4rem"}
                    >
                      - View Replies ({replies.length})
                    </Typography>
                    </summary>
                      <ul>
                        {
                          replies.map(item =>
                            
                              <ReplySection
                              url = {item.url}
                              commenterName = {item.name}
                              comment = {item.comment}
                              commentLike = {item.likes}
                              isOther = {true}
                              replies = {item.replies}
                              />
                          
                            
                          )
                        }
                      </ul>
                  </details> 
            </Box>
          )}
    </>
  );
}
