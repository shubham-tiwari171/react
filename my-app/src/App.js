import logo from './logo.svg';
import './App.css';
import { Quiz } from './Components/atom/Quiz/Quiz'
import { questions } from './quizdata'
function App() {

  return (
    <>
      <h1>React Quiz</h1>
      <div className="App">
        <Quiz data={questions} />
      </div>
    </>
  );
}

export default App;
