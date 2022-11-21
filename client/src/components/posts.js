import { useState, useEffect } from "react";


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then(() => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="posts">
      <ul>
        {posts.map((p) => (
          <li key={posts.id}>
            {posts.date} {posts.question} {posts.post}
          </li>
        ))}
      </ul>
  
    </div>
  );
}

export default Posts;
