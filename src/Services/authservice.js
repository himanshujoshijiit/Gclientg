import axios from "axios";

const API_URL = "http://localhost:3001";
//const API_URL2 = ""

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    if(!response){
        throw new Error("No data received from server");
    }
    return response;
};

export const register = async (username,password) => {
    const response = await axios.post(`${API_URL}/api/auth/signup`, {username, password},
        {
            headers: { "Content-Type": "application/json" } // Explicitly set JSON format
          }
    );
    return response;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const sendMessage = async () => {
    const response = await axios.post(`{API_URL}/api/chat/send`,{sender, receiver, content});
    if(!response){
        throw new Error("No data received from server");
    }
    return response;
}

export const createpost = async () =>{
    const response = await axios.post(`{API_URL}/api/social/create`,{author, content});
    
    if(!response){
        throw new Error("No data received from server");
    }
    return response;
}
