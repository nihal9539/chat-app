import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:2000" })

export const userChats = async(id)=>API.get(`/chat/${id}`)
export const getUser = async(id)=>API.post(`/user/${id}`)