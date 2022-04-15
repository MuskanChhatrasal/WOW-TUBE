import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="header"
      style={{ width: "96rem", backgroundColor: "#383838" }}
    >
      <div className="logos">
        <Link to="/">
          <a style={{ color: "white" }}>
            W <span className="logos-o">O</span>W tube
            <span className="logos-excla">!</span>
          </a>
        </Link>
      </div>
      <ul className="header-nav">
        {/* <li
          style={{
            cursor: "pointer",
            marginRight: "20rem",
            position: "relative",
          }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search here"
          />
          <i
            class="fas fa-search"
            style={{
              color: "white",
              position: "absolute",
              marginLeft: "-2rem",
            }}
          ></i>
        </li> */}

        <li
          style={{
            cursor: "pointer",
            color: "white",
            border: "2px solid white",
          }}
        >
          <a style={{ border: "none" }} href="/login">
            Login
          </a>
        </li>
        <li>
          <button className="menu">
            <i className="bi bi-list"></i>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
