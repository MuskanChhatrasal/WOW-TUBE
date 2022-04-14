import React, { useState } from "react";

const VideoCard = ({ video }) => {
  const [dropdown, setDropdown] = useState(false);
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };
  return (
    <div className="video-card">
      <img className="card-img" src={video.imgUrl} />
      <div className="flex-row card-details">
        <div>
          <div className="card-title">{trimHeading(video.title, 30)}</div>
          <span onClick={() => setDropdown(!dropdown)}>
            <i class="fas fa-ellipsis-v drop-dotes" size={34}></i>
          </span>
        </div>

        {dropdown && (
          <ul className="card-dropdown">
            <li>
              <i className="fas fa-clock mr-0p5"></i> Add to watch later
            </li>
            <li>
              <i className="fas fa-play mr-0p5"></i> Add to playlist
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
