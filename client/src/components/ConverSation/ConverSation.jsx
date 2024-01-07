import React, { Fragment, useEffect, useState } from 'react'
import { getUser } from '../../api/ChatRequests'
import { NavLink } from 'react-router-dom'
import { Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';


const ConverSation = ({ data, currentUserId }) => {
    console.log(data);

    const [userData, setUserData] = useState([])
    const [currentchat, setCurrentChat] = useState(null)

    useEffect(() => {
        const UserId = data.members.find((id) => id !== currentUserId)
        console.log(UserId);
        const getUsserData = async () => {
            getUser(UserId).then((res) => {
                console.log(res.data);
                setUserData(res.data)
                console.log(userData);
            })

        }
        getUsserData()
    }, [])

    return (
        <div>
           
            <div className='flex flex-col '>
                <div className='flex flex-row items-center gap-2 justify-center'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div className='flex flex-col'> 
                        <span>{userData?.username}</span>
                        <span>online</span></div>

                </div>
                        <Divider variant="middle" component="li" />
            </div>
        </div>
    )
}

export default ConverSation
