import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useCategory } from "../../Context/categoryContext";
import { useVideo } from "../../Context/videoContext";
import "./videos.css";
import VideoCard from "../../Components/VideoCard/videoCard";

const Videos = () => {
  const { categoryData, getCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { getAllVideos, allVideos } = useVideo();
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  useEffect(() => {
    let tempVideos = [...allVideos];
    if (selectedCategory === "All") {
      setFilteredVideos(tempVideos);
    } else {
      tempVideos = tempVideos.filter(
        (it) => it.categoryName === selectedCategory
      );
      setFilteredVideos(tempVideos);
    }
  }, [selectedCategory]);

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
        <h2 style={{ color: "white", fontWeight: "500" }} className="spacer">
          Categories
        </h2>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginLeft: "0rem",
            marginTop: "-2rem",
          }}
        >
          {categoryData.map((item) => {
            return (
              <button
                className="btn-label font-bold"
                onClick={() => setSelectedCategory(item.categoryName)}
              >
                {item.categoryName}
              </button>
            );
          })}
        </div>

        <div className="video-flex">
          {filteredVideos.length > 0
            ? filteredVideos.map((video) => {
                return <VideoCard video={video} />;
              })
            : allVideos.map((video) => {
                return <VideoCard video={video} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Videos;
