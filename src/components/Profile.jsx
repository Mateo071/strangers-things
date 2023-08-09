const Profile = () => {

  const TOKEN_STRING = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…4Nzh9.kUCCo7Tc1oEFDNItaB4jgq4E5aeyCQ7Gb11wWoV4muQ'

  const myProfile = async () => {
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err)
    }
  }
  myProfile()

  return (
    <>
      <h2>Welcome</h2>
      <p>Messages to Me:</p>

    </>

  )
}

export default Profile