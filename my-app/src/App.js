import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guessNumber, setguessNumber] = useState("");
  const [count, setcount] = useState(0);
  let localCount = 0;
  function handleOnChange(event) {
    event.preventDefault();
    setguessNumber(event.target.value);
  }

  function handleClick() {
    if (randomNumber === Number(guessNumber)) {
      alert("Congratulations you won");
      setcount(count + 1);
    }
    else {
      localCount = localCount + 1;
      console.log(localCount);
    }
  }
  return (
    <>
      <div className="alignments">
        <div className="content">
          <div className="gap"><h2>Name updater</h2></div>
          <div className="d-flex justify-content-between">
            <div>
              <input type="text" className="form-control" placeholder="Enter Number to guess" onChange={handleOnChange} />
            </div>
            <div><button className="btn btn-primary" onClick={handleClick}>Submit</button ></div>
          </div>
          <div className="gap"><h4>Hii my name is: {count}</h4></div>
          <div className="gap"><h4>random: {randomNumber}</h4></div>
        </div>
      </div >
    </>
  );
}

export default App;
