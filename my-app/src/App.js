import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/molecule/Navbar/Navbar';
import Register from './Components/molecule/Register/Register';
import Login from './Components/molecule/Login/Login';
import Quiz from "./Components/atom/Quiz/Quiz";
import Dashboard from './Components/molecule/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
