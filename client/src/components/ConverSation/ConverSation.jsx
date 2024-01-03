import React, { Fragment, useEffect, useState } from 'react'
import { getUser } from '../../api/ChatRequests'
import { NavLink } from 'react-router-dom'
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';


const ConverSation = ({data,currentUserId}) => {

    const [userData,setUserData] = useState([])
    const [currentchat,setCurrentChat] = useState(null)

    useEffect(()=>{
        const UserId = data.members.find((id)=>id!==currentUserId)
        console.log(UserId);
        const getUsserData = async ()=>{
            getUser(UserId).then((res)=>{
                console.log(res.data);
                setUserData(res.data)
                console.log(userData);
            })
          
        }
        getUsserData()
    },[])

  return (
    <div>
       <NavLink replace >
                    <ListItem alignItems="flex-center" >
                        <ListItemAvatar  className='pl-10'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        className='pl-2'
                            primary={userData?.username}
                           
                            
                        />


                    </ListItem>
                </NavLink>
    </div>
  )
}

export default ConverSation
