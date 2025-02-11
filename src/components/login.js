import { useState } from "react";
import { login, register } from "../Services/authservice";
import "../css/Authpage.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            //const response = await axios.post("", { username, password });

            const user = await login(username, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");
            alert("Login successful!");
        } catch (error) {
            alert("Login failed: " + error.response);
        }
    };

    const handleRegister = async () => {
        try {
            //const response = await axios.post("", { username, password });

            const user = await register(username, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");
            alert("Register successful!");
        } catch (error) {
            alert("Register failed: " + error.response);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Login;
