import React from 'react'
import ChatSpaceNav from '../ChatSpaceNav/ChatSpaceNav'
import Chatting from '../Chatting/Chatting'
import { useParams } from 'react-router-dom'

const Chattings = () => {
    const {id} = useParams()
    console.log(id);
  return (
    <div>
      <ChatSpaceNav/>
      <Chatting/>
    </div>
  )
}

export default Chattings
