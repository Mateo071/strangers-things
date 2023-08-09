import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUserInput = (e) => {
    setUsername(e.target.value);
  }

  const getPassInput = (e) => {
    setPassword(e.target.value);
  }

  const tryLogin = (event) => {
    event.preventDefault();
    const runAPI = async () => {
      try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            }
          })
        });
        const result = await response.json();
        console.log(result);

        (result.success ? 
          (alert(result.data.message),
          navigate(`/`)) :
        alert(result.error.message));
        return result;
      } catch (err) {
        console.error(err);
        alert(`Error. Please try again.`)
      }
    };
    runAPI();
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={tryLogin}>
        <label>Username: <input onChange={getUserInput} type="text" /></label>
        <label>Password: <input onChange={getPassInput} type="password" /></label>
        <button type="submit">LOG IN</button>
      </form>
      <p><Link to="/signup">Don't have an account? Sign Up</Link></p>
    </>
  )
}

export default Login;
