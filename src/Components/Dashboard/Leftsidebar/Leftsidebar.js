import React, { useState } from "react";
import './Leftsidebar.css'
import Container from '@mui/material/Container';
import  HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "../Navbar/Navbar";



function Leftsidebar(){

    const [isActive,setActive] = useState(false);
    
    const toggleMenu = ()=>{
        setActive(!isActive);
    }
    

    return(
        <>
            <Container id='containerleft'>
                {/* <div id="item">
                <IconButton color="inherit"  onClick={toggleMenu} >
                <MenuIcon id='menuicon' variant='contained' />
                </IconButton>
                </div> */}
                <div id="item">
                <HomeIcon id='icon'/>
                <Typography id='text' className={isActive?'text1':null}>Home</Typography>
                </div>
                <div id="item">
                <PersonIcon id='icon'/>
                <Typography id='text'>Friends</Typography>
                </div>
                <div id="item">
                <FormatListBulletedIcon id='icon'/>
                <Typography id='text'>Lists</Typography> 
                </div>
                <div id="item">
                <CameraAltIcon id='icon'/>
                <Typography id='text'>Camera</Typography>
                </div>
                <div id="item">
                <FeaturedVideoIcon id='icon'/>
                <Typography id='text'>Videos</Typography>
                </div>
                <div id="item">
                <AppSettingsAltIcon id='icon'/>
                <Typography id='text'>Apps</Typography>
                </div>

                <div id="item">
                <AppsOutageIcon id='icon'/>
                <Typography id='text'>Collection</Typography>
                </div>
                <div id="item">
                <StorefrontIcon id='icon'/>
                <Typography id='text'>Marketplace</Typography>
                </div>
                <div id="item">
                <SettingsIcon id='icon'/>
                <Typography id='text'>Settings</Typography>
                </div>
                <div id="item">
                <LogoutIcon id='icon'/>
                <Typography id='text'>Log Out</Typography>
                </div>
            </Container>
        </>
    )
}
export default Leftsidebar;