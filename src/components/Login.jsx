const Login = () => {

  const tryLogin = () => {
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
    </>
  )
}

export default Login;
