import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

export default function Authentication() {

  const navigate = useNavigate();

  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="Authentication">
      <div className="Auth-navbar">
        <div className="logo">Logo</div>
        <i className="ri-home-9-line" onClick={()=>navigate('/')}></i>
      </div>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="otp-section">
        <div className="otp-container">
            <h1>OTP Verification</h1>
            <p>Enter the OTP you received to <span id="email"></span></p>
            <div class="otp-input">
                <input type="number" min="0" max="9" required />
                <input type="number" min="0" max="9" required />
                <input type="number" min="0" max="9" required />
                <input type="number" min="0" max="9" required />
                <input type="number" min="0" max="9" required />
                <input type="number" min="0" max="9" required />
            </div>
            <button  onclick="verifyOTP()">Verify</button>
            <div class="resend-text">
                Didn't receive the code?
                <span className="resend-link" onclick="resendOTP()">Resend Code</span>
                <span id="timer"></span>
            </div>
        </div>
      </div> */}
    </div>
  );
}
