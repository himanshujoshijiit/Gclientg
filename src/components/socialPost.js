import React, { useState } from "react";

const SocialPost = () =>{
    const [posts,setposts] = useState([]);
    const [newPost,setNewPost] = useState("");
    
    const addPost = () =>{
       if(newPost.trim()!==""){
        setposts([posts,newPost]);
        setNewPost("");
       }
    };

    return (
        <div className="social-section">
          <h3>Social Posts</h3>
          <div className="post-list">
            {posts.map((post, index) => (
              <p key={index}>{post}</p>
            ))}
          </div>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button onClick={addPost}>Post</button>
        </div>
      );
}

export default SocialPost;