import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/VideoCard/videoCard";
import { useHistory } from "../../Context/historyContext";
import "./history.css";

const History = () => {
  const { getHistoryVideos, clearHistory, HistoryData } = useHistory();

  useEffect(() => {
    getHistoryVideos();
  }, []);
  return (
    <>
      <div className="watchLater-flex">
        <Sidebar />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="videos-flex">
            {HistoryData ? (
              HistoryData.map((video) => {
                return <VideoCard video={video} key={video._id} />;
              })
            ) : (
              <h1>No Videos added to Watch Later</h1>
            )}
          </div>
          {HistoryData.length > 0 ? (
            <button
              className="button btn-primary"
              style={{
                width: "12rem",
                marginLeft: "17rem",
                marginTop: "-8rem",
              }}
              onClick={() => clearHistory()}
            >
              Clear All
            </button>
          ) : (
            <h1
              style={{
                color: "white",
                marginLeft: "15rem",
                marginTop: "-11rem",
              }}
            >
              No videos viewed yet!!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
