import express from "express"
import {connectDB} from "./db/connection.js"
import { Users } from "./module/UserModule.js";
import cors from "cors"

// const { default: userRoute } = require('./router/userRouter');
// const { userRoute } = require('./router/userRouter');

const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome');
})
app.post('/api/login', (req, res) => {
console.log(req.body);
    Users.create(req.body)
 
    res.json("hiii")

}

);

app.listen(2000, () => {
    try {
        console.log("connect");
        connectDB()
    } catch (error) {
        console.log(error);
        throw err
    }
})