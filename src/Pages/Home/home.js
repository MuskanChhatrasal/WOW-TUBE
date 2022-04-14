import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./home.css";
import axios from "axios";
import VideoCard from "../../Components/VideoCard/videoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const response = await axios.get("/api/videos");
    console.log(response.data.videos);
    setVideos(response.data.videos);
  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "18rem",
          marginTop: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginLeft: "-1rem",
            marginTop: "-2rem",
          }}
        >
          <button className="btn-label">All</button>
          <button className="btn-label font-bold">Chineese</button>
          <button className="btn-label font-bold">Spanish</button>
          <button className="btn-label font-bold">Italian</button>
        </div>

        <div className="video-flex">
          {videos.map((video) => {
            return <VideoCard video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

// img {
// 	max-width: 100%;
// 	max-height: 100%;
// 	margin: auto;
// 	display: block;
// }

// min-width: 125rem;
