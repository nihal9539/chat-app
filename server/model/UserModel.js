
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    country:{
        type:String
    },
    age:{
        type:Number
    },
    state:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    gender:{
        type:String
    },
    firstName:{
        type:String
    },
    LastName:{
        type:String
    },
}, { timestamps: true });

export const Users = mongoose.model('User', userSchema);

