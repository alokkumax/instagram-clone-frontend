import React from 'react'
import stories from '../../constants/stories'
import { Box, ListItem, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Stories() {

    function handleIcons(){
        const scrollDiv = document.querySelector(".storiesDiv");
        const leftArrow =document.querySelector(".leftArr");
        const rightArrow =document.querySelector(".rightArr");
        const maxScrollval = scrollDiv.scrollWidth - scrollDiv.clientWidth -20;

        if(scrollDiv.scrollLeft >= 10){
            leftArrow.classList.add("add")
        }else{
            leftArrow.classList.remove("add")
        }
        if(scrollDiv.scrollLeft >= maxScrollval){
            rightArrow.classList.remove("add")
        }else{
            rightArrow.classList.add("add")
        }
    }
    const handelScroll = (e)=>{
        document.querySelector(".storiesDiv").scrollLeft += 400;
        handleIcons();
    }
    const handelScroll2 = () =>{
        document.querySelector(".storiesDiv").scrollLeft -= 400;
        handleIcons();
    }
  return (
    <Box 
    // bgcolor={"red"} 
    position={"relative"} 
    width={"100%"} 
    flexWrap={"no-wrap"}
    
    >
        <Box 
            className="storiesDiv"
            display={"flex"}
            overflow={"hidden"}
            gap={"0.7rem"}
        
        >
            <Box onClick={handelScroll2} className="leftArr">
                <KeyboardArrowLeftIcon/>
            </Box>
            {
                stories.map((item) => {
                    return(
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                            <Box className="storyDiv">
                                <img src={item.pic} className='story'/>
                            </Box>
                            <Typography variant='p' fontSize={"14px"} fontFamily={"Nunito="}>{item.username}</Typography>
                        </Box>
                    )
                })
            }
            <Box className="rightArr add" onClick={handelScroll}>
                <KeyboardArrowRightIcon/>
            </Box>
        </Box>
    </Box>
  )
}
