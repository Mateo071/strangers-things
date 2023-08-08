import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Log In</Link>
    </>
  )
}

export default NavBar;
