import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/VideoCard/videoCard";
import "./singleVideo.css";
import { useParams } from "react-router-dom";
import { useSingleVideo } from "../../Context/singleVideoContext";
import { useVideo } from "../../Context/videoContext";
import SingleVideoCard from "../../Components/SingleVideoCard/singleVideoCard";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../Context/watchLaterContext";

const SingleVideo = () => {
  const { videoId } = useParams();

  const [dropdown, setDropdown] = useState(false);

  const { getSingleVideo, singleVideo, issinglecardLoading, singlecardError } =
    useSingleVideo();
  const { getAllVideos, allVideos, iscardLoading, cardError } = useVideo();

  const { addItemToWatchLater, removeItemFromWatchLater, watchLaterVideos } =
    useWatchLater();

  const [filteredVideos, setFilteredVideos] = useState([]);

  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };
  useEffect(() => {
    getSingleVideo(videoId);
    getAllVideos();
  }, [videoId]);

  useEffect(() => {
    let tempVideos = [...allVideos].filter(
      (video) =>
        video.categoryName === singleVideo.categoryName &&
        video._id !== singleVideo._id
    );
    setFilteredVideos(tempVideos);
  }, [singleVideo]);

  useEffect(() => {
    console.log(videoId);
  });
  return (
    <div className="main-singleVideo-container">
      <Sidebar />
      <div className="middle-container">
        <SingleVideoCard singleVideo={singleVideo} />

        <div className="bottom-container">
          <div className="bottom-upper-container">
            <div className="left-bottomUpper">
              <span className="bottom-title">{singleVideo.title}</span>
            </div>
            <div className="right-bottomUpper">
              <span className="bottom-time">{singleVideo.timeDuration}</span>
              <span className="bottom-views">{singleVideo.views}</span>
              <span className="bottom-likes">{singleVideo.likes}</span>
            </div>
          </div>
          <div className="bottom-upper-container">
            <div className="left-footer-container">
              <img
                src="https://www.namscorner.com/wp-content/uploads/2018/11/choco_lava_Cake/WhatsApp-Image-2018-11-28-at-10.55.25-PM.jpeg"
                alt="pizza"
                className="img-avatar"
              />
              <span className="singleCard-bottom-title">
                {singleVideo.creator}
              </span>
            </div>
            <div className="right-footer-container">
              <span className="like-btn">
                <i class="fas fa-heart like-icon"></i>
                <span className="like-txt">Like</span>
              </span>

              <span className="watchLater-btn">
                {watchLaterVideos.some(
                  (item) => item._id === singleVideo._id
                ) ? (
                  <>
                    <i class="fas fa-clock watch-icon"></i>
                    <span
                      className="watchlater-txt"
                      onClick={() => removeItemFromWatchLater(singleVideo._id)}
                    >
                      Remove Watchlater
                    </span>
                  </>
                ) : (
                  <>
                    <i class="fas fa-clock watch-icon"></i>
                    <span
                      className="watchlater-txt"
                      onClick={() => addItemToWatchLater(singleVideo)}
                    >
                      Add to watch later
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="desc-container">
            <p>{singleVideo.description}</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <section>
          {filteredVideos.length > 0 ? (
            filteredVideos
              .slice(0, 3)
              .map((video) => <VideoCard video={video} />)
          ) : (
            <div>Failed to load recommended videos</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SingleVideo;
