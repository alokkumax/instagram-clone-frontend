import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Comment({likes,url,commenterName,comment, replies}) {
  const [like, setLike] = useState(likes);
  const [reply, setReply] = useState(0);
  console.log(commenterName)
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0.9rem 1rem"}
      >
        <Box>
          <Box display={"flex"} gap={"0.9rem"} alignItems={"center"}>
            <img
              className="dp"
              src={url}
            />
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
                {like > 0 ? <span>{like} likes</span> : <></>}
                <span>Replies</span>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
                variant="p"
                marginTop={"-2rem"}
                fontSize={"12px"}
                fontFamily={"Poppins"}
                color={"gray"}
                paddingLeft={"3rem"}
            >
            - View Replies "(" hey ")"
            </Typography>
            {/* <details>
            <summary>hey</summary>
                <p>hey</p>
            </details> */}
          </Box>
        
        </Box>

        <FavoriteIcon sx={{ color: "red" }} onClick={() => setLike(like + 1)} />
      </Box>
    </>
  );
}
