import { useEffect, useState } from "react";
import React from "react";
import { usePlaylist } from "../../Context/playlistContext";

export const CardVideoPlaylist = ({ playlist, item }) => {
  const [isplaylistUpdated, setIsPlaylistUpdated] = useState(false);

  const { getAllPlaylists, addVideoToPlaylist, removeVideoFromPlaylist } =
    usePlaylist();

  const inputCheckboxHandler = () => {
    const inPlaylist = playlist.videos.some((video) => video._id === item._id);
    inPlaylist
      ? removeVideoFromPlaylist(playlist._id, item._id)
      : addVideoToPlaylist(playlist._id, item);
    setIsPlaylistUpdated(true);
  };

  useEffect(() => {
    getAllPlaylists();
  }, [isplaylistUpdated]);

  return (
    <div className="playlist-second-div">
      <input
        type="checkbox"
        checked={playlist.videos.some((video) => video._id === item._id)}
        className="playlist-checkbox"
        onChange={() => inputCheckboxHandler()}
      />
      <span className="playlist-title">{playlist.title}</span>
    </div>
  );
};
