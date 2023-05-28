
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/molecule/Navbar/Navbar';
import Dashboard from './Components/molecule/Dashboard/Dashboard';
import AddQuestions from './Components/molecule/AddQuestions/AddQuestions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addquestions" element={<AddQuestions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
