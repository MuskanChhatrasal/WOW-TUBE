import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/VideoCard/videoCard";
import "./singleVideo.css";

const SingleVideo = () => {
  return (
    <div className="main-singleVideo-container">
      <Sidebar />
      <div className="middle-container">
        <div className="header-container">
          <div className="left-header-container">
            <img
              src="https://www.namscorner.com/wp-content/uploads/2018/11/choco_lava_Cake/WhatsApp-Image-2018-11-28-at-10.55.25-PM.jpeg"
              alt="pizza"
              className="img-avatar"
            />
            <span className="singleCard-title">Title</span>
          </div>
          <div className="right-header-container">
            <span>
              <i class="fas fa-clock watch-later-icon"></i>
              <p className="p-watchLater">Watch later</p>
            </span>
            <span>
              <i class="fas fa-share share-icon"></i>
              <p className="p-share">Share</p>
            </span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-footer-title">
            Watch on<i class="fab fa-youtube youtube-icon"></i>YouTube
          </span>
        </div>

        <div className="bottom-container">
          <div className="bottom-upper-container">
            <div className="left-bottomUpper">
              <span className="bottom-title">Title</span>
            </div>
            <div className="right-bottomUpper">
              <span className="bottom-time">Time</span>
              <span className="bottom-views">Views</span>
              <span className="bottom-likes">Likes</span>
            </div>
          </div>
          <div className="bottom-upper-container">
            <div className="left-footer-container">
              <img
                src="https://www.namscorner.com/wp-content/uploads/2018/11/choco_lava_Cake/WhatsApp-Image-2018-11-28-at-10.55.25-PM.jpeg"
                alt="pizza"
                className="img-avatar"
              />
              <span className="singleCard-bottom-title">Title</span>
            </div>
            <div className="right-footer-container">
              <span className="like-btn">
                <i class="fas fa-heart like-icon"></i>
                <span className="like-txt">Like</span>
              </span>
              <span className="watchLater-btn">
                <i class="fas fa-clock watch-icon"></i>
                <span className="watchlater-txt">Watch later</span>
              </span>
            </div>
          </div>

          <div className="desc-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="right-container">Hello People</div>
    </div>
  );
};

export default SingleVideo;
