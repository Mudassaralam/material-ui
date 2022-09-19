import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Search } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import './Navbar.css'
 function Navbar() {

  // // const [isActive,setActive] = useState({state});
    
  // const toggleMenu = (isActive)=>{
  //     setActive(!isActive);
  // }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
      
        <Toolbar id='toolbar'>
        <div id='menu'>
        <IconButton color="inherit"  >
        <MenuIcon id='menuicon' variant='contained' />
        </IconButton>
        
        <Typography variant='h6'>Viltco</Typography>
        </div>
          
          <div id='search'>
          <Search/> 
          <InputBase
            placeholder='Search...'
          />
          </div>
        <div id='icons'> 
         <Avatar alt="M" src="/static/images/avatar/1.jpg" />
        </div>  

        </Toolbar>
       
      </AppBar>
    </Box>
  );
}
export default Navbar;