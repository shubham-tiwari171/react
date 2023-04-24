import logo from './logo.svg';
import './App.css';
import Profilecard from './components/Profilecard/Profilecard';
import { ProfileCardData } from './Constants'
function App() {
  let data = ProfileCardData;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Profile cards</h1>
      <Profilecard data={data} />
    </div>
  );
}

export default App;
