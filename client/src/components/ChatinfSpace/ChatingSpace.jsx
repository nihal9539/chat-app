import React from 'react'
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import ChatSpaceNav from '../ChatSpaceNav/ChatSpaceNav';
import Chatting from '../Chatting/Chatting';
import { Input } from '@mui/material';
import { LuSendHorizonal } from "react-icons/lu";
import { BsCardImage } from "react-icons/bs";
import { FaRegFaceSmile } from "react-icons/fa6";
// import "./ChatingSpace.css"
const ChatingSpace = () => {
  return (
    <div className='flex flex-col  border-2 justify-between items-center ' style={{ maxWidth: 500 ,height:"650px"}}>
      <ChatSpaceNav/>
      <Chatting/>
      <div className="flex w-full flex-row h-14  justify-between px-8 items-center border border-gray-900/10 bg-gray-900/5 p-2" >
        <div className=" flex flex-row gap-6">
         <BsCardImage/>
         <FaRegFaceSmile/>
        </div>
        <div className="w-96 p-3">
        <Input
        fullWidth={true}  
        />
        </div>
        <div>
       <LuSendHorizonal size={20}/>
         </div>
      </div>
    </div>
  )
}


export default ChatingSpace
