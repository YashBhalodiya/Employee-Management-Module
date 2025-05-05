import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes>
    </Router>
  )
}

export default App