import { useState, useEffect } from "react";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getAPI = async() => {
      try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts`);
        const data = await response.json();
        const posts = data.data.posts;
        setAllPosts(posts);
      } catch (err) {
        console.log('Error!!!', err)
      }

    }
    getAPI();
  }, []);


  return (
    <>
      <h2>Posts</h2>
        <div>
        {
          allPosts.map((post) => {
            return (
              <>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>Price: {post.price}</p>
                  <p>Seller: {post.author.username}</p>
                  <p>Location: {post.location}</p>
                  <button>SEND MESSAGE</button>
                </div>
              </>
            )
          })
        }
      </div>
    </>


  )
}

export default Posts;
