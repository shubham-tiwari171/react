import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/header-items/header';
import Content from './components/molecules/content/Content';
import Companies from './components/atoms/Companies/Companies';
import Residencies from './components/atoms/Resedencies/Residencies';
function App() {
  return (
    <>
      <Header />
      <Content />
      <Companies />
      <Residencies />
    </>
  );
}

export default App;
