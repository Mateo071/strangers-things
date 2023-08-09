import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile.jsx'
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setLoggedIn(false);
    setUsername('Mateo')
  }, []);

  const toProfile = () => {
    navigate(`/profile`)
  }

  const toLogIn = () => {
    navigate(`/login`)
  }

  const toSignUp = () => {
    navigate(`/signup`)
  }

  return (
    <>
      <h1>Welcome to Stranger's Things!</h1>
      <h2>{loggedIn ? `Logged in as ${username}` : `Log In Here:`}</h2>
      {
        loggedIn ? <button onClick={() => toProfile()}>View Profile</button> : <><button onClick={() => toLogIn()}>Log In</button>
        <button onClick={() => toSignUp()}>New User? Sign up</button></>
      }
    </>
  )
}

export default Home;
