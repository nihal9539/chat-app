import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import AccountCircle from '@mui/icons-material/AccountCircle';

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';





export default function ChatSpaceNav() {
    const navigate = useNavigate()


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

 
    const menuId = 'primary-search-account-menu';
 

    return (
        <div className="">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <div className='border-2 rounded-full p-0.5' onClick={()=>navigate('/chat/chats')}>

                            <IoMdArrowBack size={25} />
                        </div>
                        */}
                     
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                           
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                      
                    </Toolbar>
                </AppBar>
                {/* {renderMobileMenu}
                {renderMenu} */}
            </Box>
        </div>
    );
}