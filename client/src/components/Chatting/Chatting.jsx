
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import "./Chatting.css"
import ChatSpaceNav from "../ChatSpaceNav/ChatSpaceNav";
import { useEffect, useState } from "react";
import { getUser } from "../../api/ChatRequests";
import { getMessages } from "../../api/MessageRequest";


export const messages = [
  { id: 1, text: "Hi there!", sender: "bot" },
  { id: 2, text: "Hello!", sender: "user" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
  { id: 2, text: "Hello!", sender: "user" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
  { id: 2, text: "Hello!", sender: "user" }

];
const Chatting = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [message, setMessages] = useState(null);

  //fetching data for header

  useEffect(() => {
    const userId = chat?.memebers.find((id) => id !== currentUser)
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId)
        console.log(data);
        setUserData(data)

      } catch (error) {
        console.log(error);
      }
    }
    if (chat !== null) {
      getUserData()

    }
  }, [chat, currentUser])

  useEffect(() => {
    const fetchMessage = async () => {
     
        try {
          const { data } = await getMessages(chat._id)
          console.log(data);
          setMessages(data)
        } catch (error) {
          console.log(error);
        }
      
    }
    if(chat!== null) fetchMessage()
  },[chat])


  return (
    <div className="overflow-y-scroll scroll">
      <ChatSpaceNav />

      <Box
        sx={{
          height: "500px",
          width: "355px",
          //   maxWidth:"490px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
        }}
      >
        <Box sx={{ flexGrow: 1, overflow: "auto", p: 1 }}>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <div >
      <Box
        sx={{
          display: "flex",
          justifyContent: isBot ? "flex-start" : "flex-end",
          mb: 1,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            px: 2,
            py: 1,
            backgroundColor: isBot ? "grey.300" : "primary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1" fontSize={13}>{message.text}</Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Chatting;