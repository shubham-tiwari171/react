import logo from './logo.svg';
import './App.css';
import Invitation from './components/Invitation/Invitation';

function App() {
  const invitation = {
    name: "JaGdish ",
    subject: "Birthday party Invitation",
    email: "jaGdish@gmail.com",
    partyType: "birthday party",
    peoples: ["Ritu", "Saurabh", "Kartik"],
    address: "Green field Avenue",
    color: "red"
  }
  return (
    <div className="center">
      <Invitation invitationData={invitation} />
    </div>
  );
}

export default App;
