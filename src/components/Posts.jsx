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
                <div key={post.id}>
                  <h3 key={post.id + '_title'}>{post.title}</h3>
                  <p key={post.id + '_description'}>{post.description}</p>
                  <p key={post.id + '_price'}>Price: {post.price}</p>
                  <p key={post.id + '_author'}>Seller: {post.author.username}</p>
                  <p key={post.id + '_location'}>Location: {post.location}</p>
                  <button key={post.id + '_message_button'}>SEND MESSAGE</button>
                </div>
            )
          })
        }
      </div>
    </>


  )
}

export default Posts;
