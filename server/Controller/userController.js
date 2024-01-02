import { Users } from "../model/UserModel.js";


export const register = async(req,res)=>{
    const {username,password,email} = req.body;
console.log("hiii");
    const newUser  = new Users({username:username,password:password,email:email})

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}