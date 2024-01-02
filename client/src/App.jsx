import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import ChatingSpace from './components/ChatinfSpace/ChatingSpace'
import ChatSection from './components/ChatSection/ChatSection'
import Home from './components/Chat/Home'
import NotFound from './components/NotFound/NotFound'
import Chattings from './components/Chattings/Chattings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}>

        </Route>
        <Route path='/chat' element={<Home />}>

          <Route path='chats' element={<ChatSection />} />
          <Route path=':id' element={<Chattings />} />
        </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
