import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import History from "./Pages/History/history";
import Playlist from "./Pages/Playlist/playlist";
import WatchLater from "./Pages/WatchLater/watchLater";
import Liked from "./Pages/Liked/liked";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
