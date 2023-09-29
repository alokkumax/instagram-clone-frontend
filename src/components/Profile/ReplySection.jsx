import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Comment from "../Profile/Comment.jsx"
export default function ReplySection({
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
        padding={"0.4rem 1rem 0.4rem 0.3rem"}
      >
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <img className="dp3" src={url} />
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
              sx={{ color: "red", fontSize: "small" }}
              onClick={() => setLiked(!isLiked)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ color: "red", fontSize: "small" }}
              onClick={() => setLiked(!isLiked)}
            />
          ))}
      </Box>
      
    </>
  );
}
