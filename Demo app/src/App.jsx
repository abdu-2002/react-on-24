import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>welcome to react learning</h2>
     <Home/><br /><br />

     <Add/>
    </>
  )
}

export default App
