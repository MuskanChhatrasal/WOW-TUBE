import React from "react";

const SingleVideoCard = ({ singleVideo }) => {
  return (
    <>
      <div className="header-container">
        <iframe
          width="780px"
          height="450px"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube.com/embed/${singleVideo.url}`}
          title="Youtube video"
        ></iframe>
      </div>
    </>
  );
};

export default SingleVideoCard;
