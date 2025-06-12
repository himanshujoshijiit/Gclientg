import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [text, setText] = useState('');

  const handleCreate = async () => {
    await axios.post('http://localhost:3001/api/post', { text });
    setText('');
    alert('Post created');
  };

  return (
    <div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write your post..." />
      <button onClick={handleCreate}>Post</button>
    </div>
  );
}

export default CreatePost;
