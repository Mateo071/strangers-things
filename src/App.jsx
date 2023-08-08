import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  )
}

export default App;
