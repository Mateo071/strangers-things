import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {

    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Link to="/">Stranger's Things</Link>
      <Link to="/">HOME</Link>
      <Link to="/posts">POSTS</Link>
      {isLoggedIn ? 
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
