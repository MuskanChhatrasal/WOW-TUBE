import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "../../Context/historyContext";
import { usePlaylist } from "../../Context/playlistContext";
import { useWatchLater } from "../../Context/watchLaterContext";
import { CardVideoPlaylist } from "./cardVideoPlaylist";

const VideoCard = ({ video }) => {
  const [dropdown, setDropdown] = useState(false);

  const [isSavetoPlaylistClicked, setIsSavetoPlaylistClicked] = useState(false);
  const [clickedCreateNewPlaylist, setClickedCreateNewPlaylist] =
    useState(false);
  // const [isMoreOptions, setIsMoreOptions] = useState(false);

  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
    image: {
      src: "",
      alt: "",
    },
    isInputError: false,
  });

  const { getAllPlaylists, addNewPlaylist, playlistState } = usePlaylist();

  const ref = useRef(null);

  const {
    addNewplaylistLoading,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
    playlists,
    playlistError,
  } = playlistState;

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

  const { addVideoToHistory, removeVideoFromHistory } = useHistory();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);

  useEffect(() => {
    const clickHandler = (event) => {
      if (
        isSavetoPlaylistClicked &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsSavetoPlaylistClicked(false);
      }
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [isSavetoPlaylistClicked]);

  useEffect(() => {
    getAllPlaylists();
  }, [
    clickedCreateNewPlaylist,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
  ]);

  useEffect(() => {
    console.log(playlists);
  });

  useEffect(() => {
    setTimeout(() => {
      setPlaylistDetails({ ...playlistDetails, isInputError: false });
    }, 2000);
  }, [playlistDetails.isInputError]);

  const createPlaylistClickHandler = () => {
    if (playlistDetails.title === "") {
      setPlaylistDetails({ ...playlistDetails, isInputError: true });
    } else {
      setClickedCreateNewPlaylist(false);
      addNewPlaylist(playlistDetails);
      playlistDetails.title = "";
    }
    setIsSavetoPlaylistClicked(true);
  };

  return (
    <div
      key={video._id}
      className={
        location.pathname === "/"
          ? "video-card featured-card"
          : "video-card" && location.pathname === "/videos"
          ? "video-card category-card"
          : ("video-card" && location.pathname === "/watchlater") ||
            location.pathname === "/history"
          ? "video-card watchlater-card"
          : "video-card"
      }
    >
      <Link
        to={`/singlevideo/${video._id}`}
        onClick={() => addVideoToHistory(video)}
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

            {location.pathname === "/history" ? (
              <li onClick={() => removeVideoFromHistory(video._id)}>
                <i
                  className="fas fa-play"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Remove from History
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsSavetoPlaylistClicked(true);
                  setDropdown(false);
                  // setIsMoreOptions(false);
                }}
              >
                <i
                  className="fas fa-play"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Add to Playlist
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Playlist div */}

      <div
        className={
          isSavetoPlaylistClicked ? "playlist-main-container" : "display-none"
        }
      >
        <div className="playlist-first-div">
          <h3 className="h3 playlist-saveTo-text">Save to...</h3>
          <i
            class="fas fa-times playlist-cross"
            onClick={() => setIsSavetoPlaylistClicked(false)}
          ></i>
        </div>
        <div>
          {playlists.length > 0 &&
            playlists.map((playlist) => {
              return (
                <CardVideoPlaylist
                  playlist={playlist}
                  item={video}
                  key={video._id}
                />
              );
            })}
        </div>

        {/* <div className="playlist-second-div">
          <input type="checkbox" className="playlist-checkbox" />
          <span className="playlist-title">Title</span>
        </div> */}
        <div
          className="playlist-third-div"
          onClick={() => setClickedCreateNewPlaylist(true)}
        >
          <i class="fas fa-plus playlist-plus"></i>
          <h3 className="h3 new-plyalist-head">Create New Playlist</h3>
        </div>

        <div
          className={
            clickedCreateNewPlaylist
              ? "playlist-footer-container"
              : "display-none"
          }
        >
          <input
            type="text"
            placeholder="Playlist Name..."
            className="input-playlist-video-card"
            onChange={(e) => {
              setPlaylistDetails({
                ...playlistDetails,
                title: e.target.value,
              });
              setIsSavetoPlaylistClicked(true);
            }}
          />
          <div className="footer-container">
            <button
              className="btn-primary cancel-btn"
              onClick={() => setClickedCreateNewPlaylist(false)}
            >
              Cancel
            </button>
            <button
              className="btn-primary create-btn"
              onClick={() => createPlaylistClickHandler()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
