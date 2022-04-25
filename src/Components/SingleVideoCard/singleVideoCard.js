import React from "react";

const SingleVideoCard = ({ singleVideo }) => {
  return (
    <>
      <div className="header-container">
        <iframe
          // width="100%"
          width="780px"
          height="450px"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube.com/embed/${singleVideo.url}`}
          title="Youtube video"
        ></iframe>
        {/* <div className="left-header-container">
          <span className="singleCard-title">{singleVideo.title}</span>
        </div> */}
        {/* <div className="right-header-container">
          <span>
            <i class="fas fa-clock watch-later-icon"></i>
            <p className="p-watchLater">Watch later</p>
          </span>
          <span>
            <i class="fas fa-share share-icon"></i>
            <p className="p-share">Share</p>
          </span>
        </div> */}
      </div>
      {/* <div className="card-footer">
        <span className="card-footer-title">
          Watch on<i class="fab fa-youtube youtube-icon"></i>YouTube
        </span>
      </div> */}
    </>
  );
};

export default SingleVideoCard;
