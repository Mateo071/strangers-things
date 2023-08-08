import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState('');

  useEffect(() => {
    setLoggedIn('true');
  }, []);

  return (
    <>
      <Link to="/">Stranger's Things</Link>
      <Link to="/">HOME</Link>
      <Link to="/posts">POSTS</Link>
      {loggedIn ? 
      <>
        <Link to="/profile">PROFILE</Link>
        <Link onClick={() => console.log('sign out')}>LOG OUT</Link>
      </> : 
      <Link to="/login">LOG IN</Link>
      }
    </>
  )
}

export default NavBar;
