import React from "react";
import { useState } from "react";

const Chat = () =>{
    const [message,setMessage] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () =>{
        if(input.trim()!==""){
            setMessage([...message,input]);
            setInput("");
        }
    };

    return (
        <div className="chat-section">
      <h3>Chat</h3>
      <div className="chat-box">
        {message.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
    );
}

export default Chat;