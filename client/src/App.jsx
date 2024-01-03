import { useState } from 'react'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatSection from './components/ChatSection/ChatSection'
import Home from './components/Chat/Home'
import NotFound from './components/NotFound/NotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile/Profile'
import About from './pages/About/About'
import Share from './pages/Share/Share'
import Chatting from './components/Chatting/Chatting'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}>

        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/share' element={<Share />} />
        <Route path='/chat' element={<Home />}>
          <Route path='chats' element={<ChatSection />} />
          <Route path=':id' element={<Chatting />} />
        </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
      <ToastContainer style={{ width: "300px" }} />
    </BrowserRouter>
  )
}

export default App
