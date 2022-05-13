import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { usePlaylist } from "../../Context/playlistContext";

const Playlist = () => {
  const { getAllPlaylists, playlistState } = usePlaylist();
  const { playlistLoading, playlists, playlistError, removeplaylistLoading } =
    playlistState;

  useEffect(() => {
    getAllPlaylists();
  }, [removeplaylistLoading]);
  return (
    <>
      <Sidebar />
      <main className="main-playlist">
        {playlists.length > 0 ? (
          <h4
            className="pdl-3 pdt-3 font-semibold"
            style={{ marginTop: "-65rem", marginLeft: "-3rem", color: "white" }}
          >
            Playlists{" "}
            <small className="text-base font-normal pdl-0-5">
              {playlists.length === 1
                ? "1 video"
                : `${playlists.length} playlists`}
            </small>
          </h4>
        ) : (
          <h4
            className="pdl-3 pdt-3 font-semibold"
            style={{ marginTop: "-65rem", marginLeft: "-3rem", color: "white" }}
          >
            Playlists Empty
          </h4>
        )}

        <div
          className="flex flex-wrap flex-gap-3 pd-3 pdt-1"
          style={{ marginTop: "2rem" }}
        >
          {playlistLoading ? (
            <h2>Loading....</h2>
          ) : playlists.length > 0 ? (
            playlists.map((playlist) => (
              <CardPlaylist playlist={playlist} key={playlist._id} />
            ))
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
};

export default Playlist;
