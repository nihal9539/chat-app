import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router-dom';


const drawerWidth = 240;

export default function Home() {
  const navigate = useNavigate()
  const user = (JSON.parse(localStorage.getItem('user')))
  console.log(user);
  const icons = [
    {
      name: "profile"
      , icon: <FaUser size={20} />,
      navigate: "/profile"
    },
    {
      name: "Share"
      , icon: <IoShareSocialSharp size={20} />
    },
    {
      name: "about",
      icon: <IoInformationCircle size={20} />
    },
    {
      name: "Log out",
      icon: <MdLogout size={20} />
    },
  ]
  const handleNavigate = (name) => {
    switch(name) {

      case "profile":   return navigate('/profile');
      case "Share":   return navigate('/Share') ;
      case "about":   return navigate('/about') ;
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {icons.map((icon, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={()=>handleNavigate(icon.name)}>
                  <ListItemText className='capitalize font-medium pl-4' primary={icon.name} />
                  <ListItemIcon>
                    {icon.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}