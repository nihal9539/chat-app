import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:2000" })

export const register = (formData) => API.post('/api/register', formData)
export const logIn = (formData) => API.post('/api/login', formData)