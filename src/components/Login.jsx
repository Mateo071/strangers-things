import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Login = () => {

  const tryLogin = (event) => {
    event.preventDefault();
    console.log('logging in...')
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={() => tryLogin()}>
        <label>Username: <input type="text" /></label>
        <label>Password: <input type="password" /></label>
        <button type="submit">LOG IN</button>
      </form>
      <p><Link to="/signup">Don't have an account? Sign Up</Link></p>
    </>
  )
}

export default Login;
