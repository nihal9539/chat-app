import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [signup, SetSignup] = useState(false)
    const navigate = useNavigate()
    console.log(signup);
    return (
        <div>
            <div class="flex h-screen bg-slate-100">
                <div class="w-full max-w-xs m-auto bg-slate-200 rounded-2xl p-5">

                    {signup === false ? (<div className='py-8'>
                        <div>
                            <label class="block mb-2 text-vbg-violet-500" for="username">Username</label>
                            <input class="w-full p-2 mb-6 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="text" name="username" />
                        </div>
                        <div>
                            <label class="block mb-2 text-vbg-violet-500" for="password">Password</label>
                            <input class="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                        </div>
                        <div>
                            <a class="text-indigo-700 hover:text-pink-700 text-sm float-right pb-2" href="#">Forgot Password?</a>
                        </div>
                        <div>
                            <input class="w-full bg-violet-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4  rounded" type="submit" onClick={()=>navigate('chat')}/>
                        </div>
                        <div>
                            <h1 class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#" onClick={() => SetSignup(!signup)}>Don't Have an Account?</h1>
                        </div>
                    </div>)
                        :
                        (<div className='py-8'>
                            <div>
                                <label class="block mb-2 text-vbg-violet-500" for="username">Username</label>
                                <input class="w-full p-2 mb-6 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="text" name="username" />
                            </div>
                            <div>
                                <label class="block mb-2 text-vbg-violet-500" for="password">Email</label>
                                <input class="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="email" name="email" />
                            </div>
                            <div>
                                <label class="block mb-2 text-vbg-violet-500" for="password"> Password</label>
                                <input class="w-full p-2 mb-4 text-vbg-violet-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                            </div>

                            <div>
                                <input class="w-full bg-violet-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4  rounded" type="submit" />
                            </div>
                            <div>
                                <h1 class="text-indigo-700 hover:text-pink-700 text-sm float-right hover:cursor-pointer"  onClick={() => SetSignup(!signup)}>Alreade Have an Account</h1>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default LoginPage
