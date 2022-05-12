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

import Videos from "./Pages/Videos/videos";
import SingleVideo from "./Pages/SingleVideo/singleVideo";
import { RequireAuth } from "./Components/RequireAuth/requireAuth";
import PlaylistDetails from "./Pages/Playlist/playlistDetails";

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
        <Route path="/playlist" element={<Playlist />} />
        <Route
          path="/playlist/:playlistId"
          element={<PlaylistDetails />}
          exact
        />
        {/* <Route
          path="/playlist/:singleplaylistId/:singlevideoId"
          element={<SingleVideoPlaylist />}
          exact
        /> */}
        <Route element={<RequireAuth />}>
          <Route path="/history" element={<History />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Route>
        <Route path="/liked" element={<Liked />} />/
        <Route path="/videos" element={<Videos />} />
        <Route path="/singlevideo/:videoId" element={<SingleVideo />} />
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
