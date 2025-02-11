import React from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import Chat from "../components/chat";
import SocialPost from "./socialPost";
import "../css/Dashboard.css";

const Dashboard = () =>{
    const navigate = useNavigate();

    return (

        <div>
      {/* Top Bar */}
      <div className="top-bar">
        <h2>Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>

      {/* Main Layout */}
      <div className="dashboard-container">
        {/* Left Sidebar - Account */}
        <div className="account-section">
          <Account />
        </div>

        {/* Center Content - Social Posts */}
        <div className="social-section">
          <SocialPost />
        </div>

        {/* Right Sidebar - Chat */}
        <div className="chat-section">
          <Chat />
        </div>
      </div>
    </div>

    );

}

export default Dashboard;