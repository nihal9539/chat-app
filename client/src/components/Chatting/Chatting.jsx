import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Chatting.css"


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
const Chatting = () => {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
      <div className="overflow-y-scroll scroll">
      <Box
      sx={{
          height: "500px",
          width:"495px",
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
          px:2,
          py:1,
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