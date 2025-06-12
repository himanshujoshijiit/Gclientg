import React from 'react';
import CreatePost from './CreatePost';
import PostFeed from './PostFeed';
import ChatWindow from './ChatWindow';
import MediaUploader from './MediaUploader';
function AccountPage({ keycloak }) {
    const username = keycloak.tokenParsed?.preferred_username;
  
    return (
      <div className="container">
        <h1>Welcome, {username}</h1>
        <button onClick={() => keycloak.logout()}>Logout</button>
  
        <h2>Create Post</h2>
        <CreatePost />
  
        <h2>Post Feed</h2>
        <PostFeed />
  
        <h2>Media Content</h2>
        <MediaUploader />
  
        <h2>Chat</h2>
        <ChatWindow />
      </div>
    );
  }
  
export default AccountPage;
