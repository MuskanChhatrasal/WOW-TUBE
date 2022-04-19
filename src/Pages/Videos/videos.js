import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useCategory } from "../../Context/categoryContext";
import { useVideo } from "../../Context/videoContext";
import { Link } from "react-router-dom";
import "./videos.css";
import VideoCard from "../../Components/VideoCard/videoCard";

const Videos = () => {
  const { categoryData, getCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { getAllVideos, allVideos, cardLoading, cardError } = useVideo();
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };

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
                return (
                  <div className="video-cards">
                    <img className="card-img" src={video.imgUrl} />
                    <div className="flex-row card-details">
                      <div>
                        <div className="card-title">
                          {trimHeading(video.title, 30)}
                        </div>
                        <span onClick={() => setDropdown(!dropdown)}>
                          <i class="fas fa-ellipsis-v drop-dotes" size={34}></i>
                        </span>
                      </div>

                      {dropdown && (
                        <ul className="card-dropdown">
                          <li>
                            <i
                              className="fas fa-clock"
                              style={{ marginRight: "0.5rem" }}
                            ></i>
                            Add to watch later
                          </li>
                          <li>
                            <i
                              className="fas fa-play"
                              style={{ marginRight: "0.5rem" }}
                            ></i>
                            Add to playlist
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })
            : allVideos.map((video) => {
                return (
                  <div className="video-cards">
                    <img className="card-img" src={video.imgUrl} />
                    <div className="flex-row card-details">
                      <div>
                        <div className="card-title">
                          {trimHeading(video.title, 30)}
                        </div>
                        <span onClick={() => setDropdown(!dropdown)}>
                          <i class="fas fa-ellipsis-v drop-dotes" size={34}></i>
                        </span>
                      </div>

                      {dropdown && (
                        <ul className="card-dropdown">
                          <li>
                            <i
                              className="fas fa-clock"
                              style={{ marginRight: "0.5rem" }}
                            ></i>{" "}
                            Add to watch later
                          </li>
                          <li>
                            <i
                              className="fas fa-play"
                              style={{ marginRight: "0.5rem" }}
                            ></i>
                            Add to playlist
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Videos;
