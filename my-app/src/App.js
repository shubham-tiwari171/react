import logo from './logo.svg';
import './App.css';
import Profilecard from './components/section/Profilecard/Profilecard';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

  }, []);
  async function fetchData() {
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const data = await response.json();
      setData(data);
    } catch (error) { }
  }
  return (
    <Profilecard profileInfo={{ data: data, onclick: fetchData }} />
    // <></>
  );
}

export default App;
