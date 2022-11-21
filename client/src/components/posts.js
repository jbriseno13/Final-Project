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
          <li key={p.id}>
            {p.date} {p.question} {p.post}
          </li>
        ))}
      </ul>
  
    </div>
  );
}

export default Posts;
