import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/auth";

import "./styles/signup.scss";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    await signup(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
        localStorage.setItem('authUser', JSON.stringify(result));
        navigate("/dashboard")

      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  };

  return (
    <>
      <div className="signup-background">
        <div className="signup-container">
          <h1 className="title">Sign Up</h1>
          {error && <div className="error">{error}</div>}
          <form className="base" onSubmit={handleSignUp}>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            ></input>
            <input
              placeholder="Email Address"
              autoComplete="off"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></input>
            <button disabled={isInvalid} type="submit">
              Sign Up
            </button>
          </form>
          <p className="text">
            Already a user?{" "}
            <Link className="link" to="/signin">
              Sign in now.
            </Link>
          </p>
          <p className="smalltext">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
