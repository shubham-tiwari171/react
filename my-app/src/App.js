import logo from './logo.svg';
import './App.css';
import MediaCard from './Components/atom/MediaCard/MediaCard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavMedia from './Components/atom/FavMedia/FavMedia';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<MediaCard />} />
          <Route exact path="/fav-media" element={<FavMedia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
