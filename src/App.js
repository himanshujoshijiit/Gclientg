import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     </Router>
  );
}

export default App;
