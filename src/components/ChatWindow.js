import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/chat').then(res => setMessages(res.data));
  }, []);

  const sendMessage = async () => {
    await axios.post('http://localhost:3001/api/chat', { message: msg });
    setMsg('');
    alert('Message sent');
  };

  return (
    <div>
      <div style={{ height: '150px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.sender}</strong>: {m.message}</div>
        ))}
      </div>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatWindow;
