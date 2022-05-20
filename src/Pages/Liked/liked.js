import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useLikedVideo } from "../../Context/likeVideoContext";
import "./liked.css";
import LikeVideoCard from "./likeVideoCard";

const Liked = ({ item }) => {
  const {
    getLikedVideos,
    LikedVideos,
    isLikedVideosLoading,
    LikedVideosError,
  } = useLikedVideo();

  useEffect(() => {
    getLikedVideos();
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
          {LikedVideos ? (
            LikedVideos.map((video) => {
              return <LikeVideoCard key={video._id} video={video} />;
            })
          ) : (
            <h1>No Videos added to Watch Later</h1>
          )}

          {LikedVideos.length === 0 && (
            <h1
              style={{
                color: "white",
                marginLeft: "15rem",
                marginTop: "4rem",
              }}
            >
              No videos Liked yet!!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Liked;
