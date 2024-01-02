import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logIn } from '../../api/api';


const LoginPage = () => {
    const [signup, SetSignup] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        conformPassword: ""
    })
    // console.log(signup);

    const handleSubmit = () => {


        if (user.password === "" || user.username === "" || user.email === "" || user.conformPassword == "") {
            toast.error("Complete The form")
        } else if (user.password !== user.conformPassword) {
            toast.error("Conform password is not same")
        } else if (user.password.length <= 8 || user.conformPassword <= 8) {
            toast.error("Password must have length of 8")
        } else {
            register(user).then((res) => {
                localStorage.setItem('user', user.username)
                console.log(res);
                navigate('/chat/chats')
            }).catch((err) => {
                console.log(err);
            })

        }
    }
    const handllogin = () => {
console.log("hii");
        if (user.password === "" || user.username === "") {
            toast.error("Complete the form")
        } else {
            logIn(user).then((res) => {

                if (res.status === 404) {
                    toast.error("User Login")
                }
                localStorage.setItem('user', JSON.stringify(user.username))
                
                setUser({})
                navigate('/chat/chats')
            }).catch((err) => {
                toast.error("Something Went Wrong")

                console.log(err);
            })
        }
    }
    return (
        <div>
            <div className="flex h-screen bg-slate-100">
                <div className="w-full max-w-xs m-auto bg-slate-200 rounded-2xl p-5">

                    {signup === false ? (<div className='py-8'>
                        <div>
                            <label className="block mb-2 text-vbg-violet-500" >Username</label>
                            <input value={user.name} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} className="w-full p-2 mb-6 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="text" name="username" />
                        </div>
                        <div>
                            <label className="block mb-2 text-vbg-violet-500" >Password</label>
                            <input value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} className="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                        </div>
                        <div>
                            <a className="text-indigo-700 hover:text-pink-700 text-sm float-right pb-2" href="#">Forgot Password?</a>
                        </div>
                        <div>
                            <input className="w-full bg-violet-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4  rounded" type="submit" onClick={handllogin} />
                        </div>
                        <div>
                            <h1 className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#" onClick={() => SetSignup(!signup)}>Don't Have an Account?</h1>
                        </div>
                    </div>)
                        :
                        (<div className='py-8'>
                            <div>
                                <label className="block mb-2 text-vbg-violet-500" >Username</label>
                                <input value={user.name} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} className="w-full p-2 mb-6 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="text" name="username" />
                            </div>
                            <div>
                                <label className="block mb-2 text-vbg-violet-500" >Email</label>
                                <input value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} className="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="email" name="email" />
                            </div>
                            <div>
                                <label className="block mb-2 text-vbg-violet-500" > Password</label>
                                <input value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} className="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                            </div>
                            <div>
                                <label className="block mb-2 text-vbg-violet-500" > Password</label>
                                <input value={user.conformPassword} onChange={(e) => { setUser({ ...user, conformPassword: e.target.value }) }} className="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                            </div>

                            <div>
                                <input className="w-full bg-violet-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4  rounded" type="submit" onClick={handleSubmit} />
                            </div>
                            <div>
                                <h1 className="text-indigo-700 hover:text-pink-700 text-sm float-right hover:cursor-pointer" onClick={() => SetSignup(!signup)}>Alreade Have an Account</h1>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default LoginPage
