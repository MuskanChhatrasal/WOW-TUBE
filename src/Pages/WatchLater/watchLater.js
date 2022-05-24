import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/VideoCard/videoCard";
import { useWatchLater } from "../../Context/watchLaterContext";
import "./watchLater.css";

const WatchLater = () => {
  const { getWatchLaterVideos, watchLaterVideos } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);
  return (
    <div className="watchLater-flex">
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="videos-flex">
          {watchLaterVideos ? (
            watchLaterVideos.map((video) => {
              return <VideoCard video={video} key={video._id} />;
            })
          ) : (
            <h1>No Videos added to Watch Later</h1>
          )}

          {watchLaterVideos.length === 0 && (
            <h1
              style={{
                color: "white",
                marginLeft: "15rem",
                marginTop: "4rem",
              }}
            >
              No videos added to watchLater yet!!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
