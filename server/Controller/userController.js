import { Users } from "../model/UserModel.js";
import bcrpy from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    const { username, password, email } = req.body;
    const salt = await bcrpy.genSalt(10)
    const hashpassword = await bcrpy.hash(password, salt)
    const newUser = new Users({ username: username, password: hashpassword, email: email })

    try {

        const existUser = await Users.findOne({ username })
        console.log("hii");
        console.log(existUser);
        if (existUser) {
            // console.log("hii");
            res.status(400).json({ message: "Already Exist" })
        }
        const user = await newUser.save()
        console.log(user);
        const token = jwt.sign({
            username: user.username, id: user._id

        }, "CHATAPP", { expiresIn: "3h" }

        )
        res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json(error)
    }
}
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    try {
        const user = await Users.findOne({ username })
        console.log("user");
        if (user) {
            console.log("user");
            const validiy = await bcrpy.compare(password, user.password)
            if (!validiy) {
                res.status(400).json("Wrong password")
            } else {
                const token = jwt.sign({
                    username: user.username, id: user._id

                }, "CHATAPP", { expiresIn: "3h" })

                res.status(200).json({ user, token })
            }
        }
        else {
            res.status(404).json("User not exit")
        }


    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await Users.findById(id)
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(404).json("User not exit")
        }


    } catch (error) {
        res.status(500).json(error.message)
    }
}