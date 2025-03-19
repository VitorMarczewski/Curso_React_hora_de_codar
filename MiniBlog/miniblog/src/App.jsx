import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


import './App.css'
//Componentes
import Navbar from './components/Navbar'
import Footer from './pages/Footer/Footer'

//Paginas
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>           
          <Router>
            <Navbar/>
            <div className='container'>
            <Routes>
              <Route path="/" element = {<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/login" element ={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
            </Routes>
            </div>
            <Footer/>
          </Router>
    </>
  )
}

export default App
