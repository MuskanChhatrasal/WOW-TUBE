import "./cardPlaylist.css";
import { Link } from "react-router-dom";
// import { PlaylistEmptyImage } from "../../Assets/index";
import { useHistory } from "../../Context/historyContext";
import { usePlaylist } from "../../Context/playlistContext";
// import { useHistory, usePlaylist } from "../../context";

export const CardPlaylist = ({ playlist }) => {
  const { addVideoToHistory } = useHistory();
  const { removePlaylist } = usePlaylist();
  //   const { playlistLoading, playlists, playlistError, removeplaylistLoading } =
  //     playlistState;

  if (playlist?.videos?.length !== 0) {
    var src = playlist.videos[0].imgUrl;
    var alt = playlist.videos[0].title;
  }

  return (
    <div className="card-playlist  mb-2">
      <div className="container-img-card-playlist">
        {playlist?.videos?.length === 0 ? (
          <img
            className="img-card-playlist"
            src=""
            loading="lazy"
            alt="image-empty-playlist"
          />
        ) : (
          <img
            className="img-card-playlist"
            src={playlist.videos[0].imgUrl}
            loading="lazy"
            alt={alt}
          />
        )}
        <Link
          className={`${
            playlist?.videos?.length === 0 ? "disable-link" : "cursor-pointer"
          } container-overlay-img-playlist-card flex flex-justify-center flex-align-center`}
          onClick={() => addVideoToHistory(playlist?.videos[0])}
          to={`/playlist/${playlist?._id}/${playlist?.videos[0]?._id}`}
        >
          <div className="flex flex-column">
            <span className="font-semibold">{playlist?.videos?.length}</span>
            <span className="material-icons-outlined text-4xl">
              playlist_play
            </span>
          </div>
        </Link>
        <Link
          className="btn-view-playlist text-base btn-transparent pdt-0-5"
          to={`/playlist/${playlist._id}`}
        >
          View Playlist
        </Link>
        <div className="container-btn-playlist-card flex flex-column">
          <div className="title-playlist">{playlist.title}</div>
          <button
            className="btn-remove-playlist btn-transparent"
            onClick={() => removePlaylist(playlist?._id)}
          >
            <span
              className="material-icons icon btn-transparent pdr-0-5"
              style={{ color: "white", marginTop: "-0.2rem" }}
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
