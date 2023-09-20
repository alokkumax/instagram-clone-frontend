import React from "react";
import "../../src/App.css";
import Sidebar from "./Sidebar";
import Explore from "../../src/pages/Explore";
import Home from "../../src/pages/Home";
import Reels from "../../src/pages/Reels";
import Dms from "../../src/pages/Dms";
import Profile from "../../src/pages/Profile";
import { Box, Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Box>
        <Stack direction={"row"} display={"flex"} alignItems={"start"} >
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/reels" element={<Reels/>}/>
            <Route path="/dms" element={<Dms/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </Stack>
      </Box>
    </Router>
      
    
  );
}

export default App;
