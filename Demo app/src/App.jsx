import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <h2>Employee list</h2>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='add' element={<Add/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
