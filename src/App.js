import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/home";
import History from "./Pages/History/history";
import Playlist from "./Pages/Playlist/playlist";
import WatchLater from "./Pages/WatchLater/watchLater";
import Liked from "./Pages/Liked/liked";
import Navbar from "./Components/Navbar/navbar";
import Login from "./Pages/Authentication/login";
import Signup from "./Pages/Authentication/signup";
import Mockman from "mockman-js";
import { RestrictAuth } from "./Components/RequireAuth/restrictedAuth";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route element={<RestrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
