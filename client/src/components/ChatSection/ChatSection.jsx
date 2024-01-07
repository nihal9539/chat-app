// import  from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { chatting } from '../data/chatting';
import { userChats } from '../../api/ChatRequests';
import ConverSation from '../ConverSation/ConverSation';
import Chatting from '../Chatting/Chatting';

export default function ChatSection() {
    const [chats, setChats] = useState([])
    const [currentchat, setCurrentChat] = useState(null)
    const user = (JSON.parse(localStorage.getItem('user')))
    console.log(user);

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    }, [])

    return (
        <div className='w-full flex flex-row gap-5'>
            <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
                {chats.map((chat, index) => (<div>
                    <div onClick={()=>setCurrentChat(chat) }>
                        <ConverSation data={chat} currentUserId={user._id} />
                    </div>
                </div>))}
                <Outlet />
            </List>
            <div className='w-1/3'> <Chatting chat={currentchat} currentUser={user._id} /></div>
        </div>
    );
}