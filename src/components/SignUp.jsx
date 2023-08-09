import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUserInput = (event) => {
    setUsername(event.target.value);
  }

  const getPassInput = (event) => {
    setPassword(event.target.value);
  }

  const runAPI = async () => {
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/register`, {
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
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const register = (event) => {
    event.preventDefault();
    runAPI();
    console.log('registered!')
    console.log(username)
    console.log(password)
  }

  return (
    <>
      <h1>Welcome to Stranger's Things!</h1>
      <h2>Follow the steps to sign up below</h2>
      <form onSubmit={register}>
        <label>Username: <input onChange={getUserInput} type="text" /></label>
        <label>Password: <input onChange={getPassInput} type="password" /></label>
        <button type="submit">Register</button>
      </form>
    </>

  )
}

export default SignUp;
