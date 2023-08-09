import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import NavBar from './components/NavBar.jsx';
import SignUp from './components/SignUp';

function App() {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const API_URL = `https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF`

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;
