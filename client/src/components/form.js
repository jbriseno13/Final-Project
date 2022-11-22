import { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Form = () => {
  const { isAuthenticated, user } = useAuth0();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    userId: user.userId,
    date: "",
    question: "",
    post: "",
  });
 
  const getPosts = async () => {
   // const response = await fetch(`/api/posts`);
    const response = await fetch("/api/allposts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({sub: user.sub}),
    });
    
    const posts = await response.json();
    console.log("Post Here", posts);
   setPosts([...posts]);
    setNewPost(posts[0].user_id);
  };
  
  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedPost = {
      sub: user.sub,
      date: newPost.date,
      question: newPost.question,
      post: newPost.post,
    };

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedPost),
    });
    const content = await response.json();

    setPosts([...posts, content]);
    setNewPost({
      sub: user.sub,
      date: "",
      question: "",
      post: "",
    });
  };


  return (
    <div className="post-section">
      <div className="post-wrapper">
        {posts && posts.map((post, index) => { //will only run if posts is truthy- not an empty string, null, undefined. 
          return (
            <div className="posts-cards" key={index}>
              <div className="posts-date">{post.date}</div>
              <div className="posts-question">{post.question}</div>
              <div className="posts-post">{post.post}</div>
     
              {/* <button
                    className="post-dlt-btn"
                    onClick={() => handleDeletePosts(posts.id)}
                  >
                    Delete
                  </button> */}
    </div>
          );
        })}
      </div>
      <form className="day-note-section" onSubmit= {(e) => handleSubmit(e)}>
        <div id="form-card">
          <fieldset>
          <div className="form-section">
            <label>Today's Date</label>
            <input
              type="date"
              id="add-date-of-sighting"
              value={newPost.date}
              onChange={(e) => {
                //passing in event
                setNewPost((prev) => ({
                  ...prev, //whatever is prev in obj us spread op.. and them here
                  date: e.target.value,
                }));
            }}
            />
            <br />
            <label>How do you feel?</label>
            
    
            <input
              type="text"
              id="fav-question"
              value={newPost.question}
              placeholder="Feeling"
              required
              onChange={(e) => {
                //passing in event
                setNewPost((prev) => ({
                  ...prev, //whatever is prev in obj us spread op.. and them here
                  question: e.target.value,
                }));
            }}
            />
            </div>
            <br />
            <label>Journal</label>
            <textarea
              className="text-area"
              type="text"
              value={newPost.post}
              id="add-journal-entry"
              placeholder="How was your day?"
              required
              onChange={(e) => {
                //passing in event
                setNewPost((prev) => ({
                  ...prev, //whatever is prev in obj us spread op.. and them here
                  post: e.target.value,
                }));
            }}
            />
          </fieldset>
        </div>
        <button className="add-form-btn" type="submit" >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
