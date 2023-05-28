
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/molecule/Navbar/Navbar';
import Register from './Components/molecule/Register/Register';

function App() {
  return (
    <>

      <Navbar />

      <Register />
      {/* <Login /> */}
      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addquestions" element={<AddQuestions />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
