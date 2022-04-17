import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import "./auth.css";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState({ isError: false, text: "" });
  const { signup } = useAuth();

  const submitHandler = () => {
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.confirmPassword ||
      !userDetails.terms
    ) {
      setError({ isError: true, text: "Please enter all the fields" });
    } else if (userDetails.password !== userDetails.confirmPassword) {
      setError({
        isError: true,
        text: "Password and confirm password does not match",
      });
    } else if (!userDetails.email.includes("@")) {
      setError({ isError: true, text: "Invalid email" });
    } else {
      console.log(userDetails);
      signup(userDetails);
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };
  return (
    <div className="wrapper" style={{ marginLeft: "30rem" }}>
      <h2 style={{ fontSize: "2rem", marginTop: "-2.5rem" }}>Sign-Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your first name"
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your last name"
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Create password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm password"
            value={userDetails.confirmPassword}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="policy">
          <input
            type="checkbox"
            value={userDetails.terms}
            onChange={(e) =>
              setUserDetails({ ...userDetails, terms: e.target.value })
            }
          />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box">
          <input type="Submit" value="Register Now" onClick={submitHandler} />
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
