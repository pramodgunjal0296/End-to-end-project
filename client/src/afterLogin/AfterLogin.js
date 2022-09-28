import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Login from '../beforeLogin/Login'
import Home from './Home'
import Profile from './Profile'
export const AfterLogin = () => {
  return (
    <div>  
      <div className='menu'>
        <a href="#/home">Home</a>
        <a href="#/profile">Profile</a>
        <a href="#/login">LogOut</a> 
      </div>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='*' element={<Navigate to ={<Home/>}/>}/>
      </Routes>
    </div>
  )
}
