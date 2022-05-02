import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/VideoCard/videoCard";
import { useWatchLater } from "../../Context/watchLaterContext";
import "./watchLater.css";

const WatchLater = () => {
  const {
    addItemToWatchLater,
    removeItemFromWatchLater,
    getWatchLaterVideos,
    watchLaterVideos,
  } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);
  return (
    <div className="watchLater-flex">
      <Sidebar />
      <div className="videos-flex">
        {watchLaterVideos ? (
          watchLaterVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })
        ) : (
          <h1>No Videos added to Watch Later</h1>
        )}
      </div>
    </div>
  );
};

export default WatchLater;
