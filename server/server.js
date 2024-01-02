import express from "express"
import { connectDB } from "./db/connection.js"
import { Users } from "./model/UserModel.js";
import cors from "cors"
import { createChat, findChat, userChat } from "./Controller/ChatController.js";
import { addMessage, getmessage } from "./Controller/MessgeController.js";
import { getUser, loginUser, register } from "./Controller/userController.js";

const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome');
})

//login register
app.post('/api/register', register);
app.post('/api/login', loginUser);

//get a user

app.post('/user/:id', getUser);
//router for chat

app.post('/chat', createChat)
app.get('/chat/:userId', userChat)
app.get('/chat/find/:firstId/:secondId', findChat)


//message Router

app.post('/message', addMessage)
app.get('/message/:chatId', getmessage)


app.listen(2000, () => {
    try {
        console.log("connect");
        connectDB()
    } catch (error) {
        console.log(error);
        throw err
    }
})