import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import VideoCard from "../../Components/VideoCard/videoCard";
import { useCategory } from "../../Context/categoryContext";
import { useVideo } from "../../Context/videoContext";

const Home = () => {
  // const [videos, setVideos] = useState([]);

  const { categoryData, getCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { getAllVideos, allVideos, cardLoading, cardError } = useVideo();
  let Navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  let mustWatchVideos = [];

  const getMustWatchVideos = () => allVideos.filter((item) => item.isMustWatch);
  mustWatchVideos = getMustWatchVideos();

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
        <div className="container-hero">
          <img
            className="image-hero"
            src="https://cdn.pixabay.com/photo/2021/06/03/01/38/spices-6305695__480.jpg"
            loading="lazy"
            alt="hero-image"
          />
          <div
            className="text-hero"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <p className="font-bold text-3xl">
              Learn Best Food Receipes with top
            </p>
            <p className="font-bold text-3xl">videos from WOW TUBE</p>
            <Link className="btn-hero font-bold text-base" to="/videos">
              Videos
            </Link>
          </div>
        </div>
        <div className="spacer-3"></div>
        <h2 style={{ color: "white", fontWeight: "500" }} className="spacer-4">
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
                onClick={() => {
                  setSelectedCategory(item.categoryName);
                  Navigate("/videos");
                }}
              >
                {item.categoryName}
              </button>
            );
          })}
        </div>

        <h2
          style={{
            color: "white",
            fontWeight: "500",
            marginTop: "4rem",
            marginBottom: "-2rem",
          }}
        >
          Must Watch Videos
        </h2>
        <div className="video-flex">
          {mustWatchVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
