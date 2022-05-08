import "./playlistDetail.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePlaylist } from "../../Context/playlistContext";
import VideoCard from "../../Components/VideoCard/videoCard";
import Sidebar from "../../Components/Sidebar/sidebar";

export const PlaylistDetails = () => {
  const { getVideosFromPlaylist, removePlaylist, playlistState } =
    usePlaylist();
  const {
    playlistLoading,
    playlist,
    removeplaylistLoading,
    removeVideoFromPlaylistLoading,
  } = playlistState;
  const { playlistId } = useParams();

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeVideoFromPlaylistLoading]);

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeplaylistLoading]);

  return (
    <>
      <Sidebar />
      <main className="main-playlist-details">
        {playlist?.videos?.length > 0 ? (
          <div className="position-relative">
            <button
              className="btn-clear-all font-semibold"
              onClick={() => removePlaylist(playlistId)}
            >
              Clear Playlist
            </button>
            <h4 className="pdl-3 pdt-3 font-semibold">
              {`${playlist.title} Playlist`}{" "}
              <small className="text-base font-normal pdl-0-5">
                {playlist.videos.length === 1
                  ? "1 video"
                  : `${playlist.videos.length} videos`}
              </small>
            </h4>
          </div>
        ) : (
          <h4 className="pdl-3 pdt-3 font-semibold">
            {playlist?.title} Playlist Empty
          </h4>
        )}
        <div className="flex flex-gap-3 flex-wrap pd-3 pdt-1">
          {playlist?.videos?.length > 0 ? (
            playlist.videos.map((item) => (
              <VideoCard key={item._id} item={item} />
            ))
          ) : (
            <div className="conatiner-liked-videos-empty">
              <img
                className="image-watch-later"
                src=""
                alt="Watch-later-empty-img"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
};
