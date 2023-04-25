import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Content from './components/content/Content';
import Button from './components/Button/Button';
import { data } from "./data.js"
function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      < Logo />
      <Content data={data} />
      <Button />
    </div >
  );
}

export default App;
