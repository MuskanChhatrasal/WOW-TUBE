import React from "react";

const SingleVideoCard = ({ singleVideo }) => {
  return (
    <>
      <div className="header-container">
        <div className="left-header-container">
          <img
            src="https://www.namscorner.com/wp-content/uploads/2018/11/choco_lava_Cake/WhatsApp-Image-2018-11-28-at-10.55.25-PM.jpeg"
            alt="pizza"
            className="img-avatar"
          />
          <span className="singleCard-title">{singleVideo.title}</span>
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
    </>
  );
};

export default SingleVideoCard;
