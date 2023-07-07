import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [num, setNum] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const calculateMultiplications = () => {
      const tempResults = [];
      for (let i = 1; i <= 10; i++) {
        tempResults.push(num * i);
      }
      setResults(tempResults);
    };

    if (num !== null) {
      calculateMultiplications();
    }
  }, [num]);

  return (
    <div className="student-container">
      <h1>Table</h1>
      <div className="input-container">
        <form>
          <input id="num" type="text" value={num} onChange={(e) => setNum(Number(e.target.value))} placeholder="Number" />
        </form>
      </div>
      <h2>Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
