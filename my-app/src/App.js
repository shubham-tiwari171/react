
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/molecule/Navbar/Navbar';
import Register from './Components/molecule/Register/Register';
import Login from './Components/molecule/Login/Login';
function App() {
  return (
    <>

      {/* <Navbar /> */}

      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
