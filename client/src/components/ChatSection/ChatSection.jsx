// import  from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { chatting } from '../data/chatting';

export default function ChatSection() {
    const a = [1, 2, 3, 4, 5, 6]
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
            {chatting.map((val, index) => (<div>
                <NavLink replace to={`/chat/${val.id}`}>
                    <ListItem alignItems="flex-start" >
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </Fragment>
                            }
                        />


                    </ListItem>
                </NavLink>
                <Divider variant="inset" component="li" />
            </div>))}
            <Outlet />
        </List>
    );
}