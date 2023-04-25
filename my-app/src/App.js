import logo from './logo.svg';
import './App.css';
import { data } from "./data.js"
import Invitation from './components/Invitation/Invitation';
function App() {
  let invitation = data;
  return (
    <div className="center">
      <Invitation invitationData={invitation} />
    </div>
  );
}

export default App;
