import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/post/all').then(res => setPosts(res.data));
  }, []);

  const handleLike = id => axios.post(`http://localhost:3001/api/post/${id}/like`);
  const handleUnlike = id => axios.post(`http://localhost:3001/api/post/${id}/unlike`);
  const handleComment = (id, comment) => axios.post(`http://localhost:3001/api/post/${id}/comment`, { comment });

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid black', padding: '8px', marginBottom: '10px' }}>
          <p>{post.text}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <button onClick={() => handleUnlike(post.id)}>Unlike</button>
          <CommentBox onSubmit={comment => handleComment(post.id, comment)} />
        </div>
      ))}
    </div>
  );
}

function CommentBox({ onSubmit }) {
  const [comment, setComment] = useState('');
  return (
    <div>
      <input value={comment} onChange={e => setComment(e.target.value)} placeholder="Write comment..." />
      <button onClick={() => { onSubmit(comment); setComment(''); }}>Comment</button>
    </div>
  );
}

export default PostFeed;
