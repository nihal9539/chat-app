import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Chat from './components/Chat/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
