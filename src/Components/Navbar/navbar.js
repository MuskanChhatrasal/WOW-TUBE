import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="header cont-shadow"
      style={{ width: "96rem", backgroundColor: "white" }}
    >
      <div className="logos">
        <Link to="/">
          <a>
            W <span className="logos-o">O</span>W tube
            <span className="logos-excla">!</span>
          </a>
        </Link>
      </div>
      <ul className="header-nav">
        {/* <li style={{ marginTop: "0.75rem", cursor: "pointer" }}>
          <p>Hello</p>
        </li> */}
        <li style={{ cursor: "pointer", marginRight: "20rem" }}>
          <input type="text" className="search-input" />
        </li>
        <li style={{ cursor: "pointer" }}>
          <a>Login</a>
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
