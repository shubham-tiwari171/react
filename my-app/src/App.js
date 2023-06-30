import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Invalid input');
    } else {
      switch (operation) {
        case 'addition':
          setResult(number1 + number2);
          break;
        case 'subtraction':
          setResult(number1 - number2);
          break;
        case 'multiplication':
          setResult(number1 * number2);
          break;
        case 'division':
          if (number2 === 0) {
            setResult('Cannot divide by zero');
          } else {
            setResult(number1 / number2);
          }
          break;
        default:
          setResult('');
          break;
      }
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="input-container">
        <input type="text" value={num1} onChange={handleNum1Change} />
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation('addition')}>+</button>
        <button onClick={() => handleOperation('subtraction')}>-</button>
        <button onClick={() => handleOperation('multiplication')}>*</button>
        <button onClick={() => handleOperation('division')}>/</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;

