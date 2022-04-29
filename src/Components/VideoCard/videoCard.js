import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWatchLater } from "../../Context/watchLaterContext";

const VideoCard = ({ video }) => {
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };

  const {
    addItemToWatchLater,
    removeItemFromWatchLater,
    getWatchLaterVideos,
    watchLaterVideos,
  } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);

  // const handleDropDown = () => {
  //   setDropdown(!dropdown);

  //   setTimeout(() => {
  //     setDropdown(!dropdown);
  //   }, 500);
  // };

  return (
    <div
      className={
        location.pathname === "/"
          ? "video-card featured-card"
          : "video-card" && location.pathname === "/videos"
          ? "video-card category-card"
          : "video-card" && location.pathname === "/watchlater"
          ? "video-card watchlater-card"
          : "video-card"
      }
    >
      <Link
        to={`/singlevideo/${video._id}`}
        // onClick={() => addVideoToHistory(item)}
      >
        <img className="card-img" src={video.imgUrl} />
      </Link>
      <div className="flex-row card-details">
        <div>
          <div className="card-title">{trimHeading(video.title, 28)}</div>
          <span onClick={() => setDropdown(!dropdown)}>
            <i class="fas fa-ellipsis-v drop-dotes" size={34}></i>
          </span>
        </div>

        {dropdown && (
          <ul className="card-dropdown">
            {watchLaterVideos.some((it) => it._id === video._id) ? (
              <li onClick={() => removeItemFromWatchLater(video._id)}>
                <i
                  className="fas fa-clock"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Remove from watch later
              </li>
            ) : (
              <li
                onClick={() => {
                  addItemToWatchLater(video);
                  console.log("watch later:", watchLaterVideos);
                }}
              >
                <i
                  className="fas fa-clock"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Add to watch later
              </li>
            )}

            <li>
              <i className="fas fa-play" style={{ marginRight: "0.5rem" }}></i>
              Add to playlist
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
