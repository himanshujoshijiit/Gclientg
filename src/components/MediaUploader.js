import React, { useState } from 'react';
import axios from 'axios';

function MediaUploader() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('media', file);
    await axios.post('http://localhost:3001/api/content/media', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    alert('Uploaded!');
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default MediaUploader;
