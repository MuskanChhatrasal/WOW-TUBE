import "../SingleVideo/singleVideo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleVideo } from "../../Context/singleVideoContext";
import { usePlaylist } from "../../Context/playlistContext";
import SingleVideoCard from "../../Components/SingleVideoCard/singleVideoCard";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useWatchLater } from "../../Context/watchLaterContext";
import VideoCard from "../../Components/VideoCard/videoCard";

export const SingleVideoPlaylist = () => {
  const { singleplaylistId, singlevideoId } = useParams();

  const { getSingleVideo, singleVideo } = useSingleVideo();

  const { getVideosFromPlaylist, playlistState } = usePlaylist();
  const { playlistLoading, playlist } = playlistState;

  const [filteredVideos, setFilteredVideos] = useState([]);
  const { addItemToWatchLater, removeItemFromWatchLater, watchLaterVideos } =
    useWatchLater();

  useEffect(() => {
    getVideosFromPlaylist(singleplaylistId);
  }, []);

  useEffect(() => {
    getSingleVideo(singlevideoId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let tempVideos = [...playlist?.videos].filter(
        (video) => video._id !== singlevideoId
      );
      setFilteredVideos(tempVideos);
    }, 0);
  }, [playlistLoading]);

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
          <h4>{playlist?.title} playlist Videos</h4>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => <VideoCard video={video} />)
          ) : (
            <div>No more videos in {playlist?.title} playlist</div>
          )}
        </section>
      </div>
    </div>
  );
};
