import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  return (
    <div className="wrapper" style={{ marginLeft: "30rem" }}>
      <h2 style={{ fontSize: "2rem", marginTop: "-2.5rem" }}>Sign-Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-box">
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" />
        </div>
        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box">
          <input type="Submit" value="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account?
            <Link to="/login">
              <a>Login now</a>
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;
