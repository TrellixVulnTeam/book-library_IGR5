import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/context/Home'
import Login from './components/sessions/Login'
import Nav from './components/navigation/Nav';
import Signup from './components/sessions/Signup'
import {UserProvider } from './components/context/user'


function App(props) {

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/signup" element={<Signup />} /> 
          <Route exact path="/login" element={<Login />} /> 
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App