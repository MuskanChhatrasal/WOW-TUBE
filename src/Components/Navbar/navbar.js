import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

const Navbar = () => {
  const { authData, logout } = useAuth();
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
        <li style={{ marginTop: "0.75rem", cursor: "pointer", color: "white" }}>
          {!authData.firstName ? (
            <i class="fas fa-user-alt"></i>
          ) : (
            `Hello, ${authData.firstName}`
          )}
        </li>
        <li
          style={{
            cursor: "pointer",
            color: "white",
          }}
        >
          {authData.firstName ? (
            <a onClick={() => logout()} style={{ border: "1px solid white" }}>
              <i
                class="fas fa-sign-out-alt"
                style={{
                  marginRight: "0.5rem",
                  color: "white",
                }}
              ></i>
              Logout
            </a>
          ) : (
            <Link
              to="/login"
              style={{ color: "white", border: "1px solid white" }}
            >
              <i
                class="fas fa-sign-in-alt"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Login
            </Link>
          )}
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
