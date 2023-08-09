import { useEffect, useState } from 'react';
import Profile from './Profile.jsx'

const Home = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setLoggedIn(false);
    setUsername('Mateo')
  }, []);

  const toProfile = () => {
    console.log('TO PROFILE')
    return(
      <Profile/>
    )
  }

  const toLogIn = () => {
    console.log('TO LOGIN')
  }

  const toSignUp = () => {
    console.log('TO SIGN UP')
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
