import React from 'react'
import highlights from '../../constants/highlights'
import { Box, ListItem, Stack, Typography, useMediaQuery } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Highlights(props) {
    const isTablet = useMediaQuery("(min-width:768px)");
    const isMobile = useMediaQuery("(min-width:690px)");

    function handleIcons(){
        const scrollDiv = document.querySelector(".storiesDiv");
        const leftArrow =document.querySelector(".leftArr");
        const rightArrow =document.querySelector(".rightArr");
        const maxScrollval = scrollDiv.scrollWidth - scrollDiv.clientWidth -20;
        console.log(scrollDiv.scrollWidth , scrollDiv.clientWidth , scrollDiv.scrollLeft)
        if(scrollDiv.scrollLeft > 20){
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
        handleIcons();

        document.querySelector(".storiesDiv").scrollLeft += 300;
    }
    const handelScroll2 = () =>{
        document.querySelector(".storiesDiv").scrollLeft -= 300;
        handleIcons();
    }
  return (
    <Box 
    // bgcolor={"red"} 
    position={"relative"} 
    maxWidth={"700px"}
    flexWrap={"no-wrap"}
    marginTop={ isTablet ? "" : isMobile ? "3.7" : "1rem" }
    
    >
        <Box 
            className="storiesDiv"
            display={"flex"}
            gap={isTablet ? "1.4rem" : "0.6rem"}
        >
            <Box onClick={handelScroll2} className="leftArr">
                <KeyboardArrowLeftIcon/>
            </Box>
            {
                highlights.map((item) => {
                    return(
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                            <Box 
                            className = {!isTablet ? "highlightDivWeb" : "highlightDiv"}
                            // className = "storyDiv"
                            >
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
