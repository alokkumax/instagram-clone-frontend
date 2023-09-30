import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import FaceIcon from '@mui/icons-material/Face';

const bottomNavBar = [
    {
        name : "Home",
        icon : <HomeIcon/>,
        iconOutine : <HomeOutlinedIcon/>,
        path : "/"
    },
    {   
        name : "Search",
        icon : <SearchIcon/>,
        iconOutine :<SearchOutlinedIcon/>

    },
    // {
    //     name : "Explore",
    //     icon : <ExploreIcon/>,
    //     iconOutine : <ExploreOutlinedIcon/>,
    //     path : "/explore",


    // },
    {
        name : "Reels",
        icon : <PlayCircleFilledOutlinedIcon/>,
        iconOutine : <PlayCircleOutlineOutlinedIcon/>,
        path : "/reels"

    },
    {
        name : "Messages",
        icon : <ChatBubbleOutlinedIcon/>,
        iconOutine : <ChatBubbleOutlineOutlinedIcon/>,
        path : "/dms"


    },
    // {
    //     name : "Notifications",
    //     icon : <FavoriteBorderOutlinedIcon/>,
    //     iconOutine : <FavoriteBorderOutlinedIcon/>,
    // },
    // {
    //     name : "Create",
    //     icon : <AddCircleOutlineOutlinedIcon/>,
    //     iconOutine : <AddCircleOutlineOutlinedIcon/>,
    // },
    {
        name : "Profile",
        icon : <FaceIcon/>,
        iconOutine : <FaceOutlinedIcon/>,
        path : "/profile"

    },
]
export default bottomNavBar;