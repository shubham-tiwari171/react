import logo from './logo.svg';
import './App.css';
import Header from './Components/molecules/header-items/header';
import Content from './Components/molecules/content/Content';
import Companies from './Components/atoms/Companies/Companies';
import Residencies from './Components/atoms/Resedencies/Residencies';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Content />
      <Companies />
      <Residencies />
    </>
  );
}

export default App;
