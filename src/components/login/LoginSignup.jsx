import React, { useState } from "react";
import "./css/LoginSignup.css";
import userIcon from "../assests/user.png";
import emailIcon from "../assests/email.png";
import passwordIcon from "../assests/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action == "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action == "Login" ? (
        <div className="forget-password">
          Lost Password? <span>Click here!</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="submit-container">
        <div
          className={action == "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          sign up
        </div>
        <div
          className={action == "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          login
        </div>
      </div>
    </div>
  );
};
