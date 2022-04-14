import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      className="sidebar video-sidebar"
      style={{
        marginLeft: "-10rem",
        width: "14rem",
      }}
    >
      <div>
        <div
          className="list-topic side-tags"
          style={{ marginTop: "1rem", fontSize: "1.35rem" }}
        >
          <Link to="/">
            <i class="fas fa-home" style={{ marginRight: "0.75rem" }}></i>
            <span>Home</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="list-topic side-tags" style={{ fontSize: "1.35rem" }}>
          <Link to="/playlist">
            <i class="fas fa-play" style={{ marginRight: "0.75rem" }}></i>
            <span>Playlist</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="list-topic side-tags" style={{ fontSize: "1.35rem" }}>
          <Link to="/watchlater">
            <i class="fas fa-clock" style={{ marginRight: "0.75rem" }}></i>
            <span>Watch Later</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="list-topic side-tags" style={{ fontSize: "1.35rem" }}>
          <Link to="/liked">
            <i class="fas fa-heart" style={{ marginRight: "0.75rem" }}></i>
            <span>Liked Videos</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="list-topic side-tags" style={{ fontSize: "1.35rem" }}>
          <Link to="/history">
            <i class="fas fa-history" style={{ marginRight: "0.75rem" }}></i>
            <span>History</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
