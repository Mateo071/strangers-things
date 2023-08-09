import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import NavBar from './components/NavBar.jsx';
import SignUp from './components/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path="/posts" element={<Posts isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} />} />
    
      </Routes>
    </>
  )
}

export default App;
