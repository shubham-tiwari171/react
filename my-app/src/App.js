import logo from './logo.svg';
import './App.css';
import Profilecard from './components/Profilecard/Profilecard';
import { ProfileCardData } from './Constants'
function App() {
  let data = ProfileCardData;
  return (
    <Profilecard data={data} />
  );
}

export default App;
